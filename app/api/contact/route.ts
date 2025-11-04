import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, company, email, category, message, "cf-turnstile-response": turnstileToken } = body

    // Basic guards for required env vars and token
    const secret = process.env.CF_SECRET_KEY
    const webhookUrl = process.env.WEBHOOK_URL
    if (!secret) {
      console.error("Contact API misconfiguration: CF_SECRET_KEY is missing")
      return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 })
    }
    if (!webhookUrl) {
      console.error("Contact API misconfiguration: WEBHOOK_URL is missing")
      return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 })
    }
    if (!turnstileToken) {
      return NextResponse.json({ error: "Missing Turnstile token" }, { status: 400 })
    }

    // Verify Turnstile token (application/x-www-form-urlencoded)
    const bodyEncoded = new URLSearchParams()
    bodyEncoded.set("secret", secret)
    bodyEncoded.set("response", turnstileToken)

    const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: bodyEncoded,
    })

    if (!verifyResponse.ok) {
      const text = await verifyResponse.text().catch(() => "")
      console.error("Turnstile verify HTTP error", verifyResponse.status, text)
      return NextResponse.json({ error: "Verification failed" }, { status: 400 })
    }

    const verifyData = await verifyResponse.json()
    if (!verifyData.success) {
      console.warn("Turnstile verification error-codes:", verifyData["error-codes"]) // no secrets
      return NextResponse.json(
        { error: "Verification failed", codes: verifyData["error-codes"] },
        { status: 400 }
      )
    }

    // Send to Discord webhook
    const discordPayload = {
      embeds: [
        {
          title: "📧 新しいお問い合わせ",
          color: 0xa8e6cf, // Mint green color
          fields: [
            {
              name: "お名前",
              value: name,
              inline: true,
            },
            {
              name: "会社名・組織名",
              value: company || "未記入",
              inline: true,
            },
            {
              name: "メールアドレス",
              value: email,
              inline: false,
            },
            {
              name: "お問い合わせ種別",
              value: category,
              inline: false,
            },
            {
              name: "お問い合わせ内容",
              value: message,
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    }

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordPayload),
    })

    if (!webhookResponse.ok) {
      const text = await webhookResponse.text().catch(() => "")
      console.error("Failed to send to Discord", webhookResponse.status, text)
      return NextResponse.json({ error: "Webhook failed" }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
