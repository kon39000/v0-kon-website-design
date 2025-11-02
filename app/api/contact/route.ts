import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, company, email, category, message, "cf-turnstile-response": turnstileToken } = body

    // Verify Turnstile token
    const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: process.env.CF_SECRET_KEY,
        response: turnstileToken,
      }),
    })

    const verifyData = await verifyResponse.json()

    if (!verifyData.success) {
      return NextResponse.json({ error: "Verification failed" }, { status: 400 })
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

    const webhookResponse = await fetch(process.env.WEBHOOK_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordPayload),
    })

    if (!webhookResponse.ok) {
      throw new Error("Failed to send to Discord")
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
