import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    const errors: Record<string, string> = {};

    if (!name || !name.trim()) {
      errors.name = "Name is required.";
    }
    if (!email || !email.trim()) {
      errors.email = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = "Please provide a valid email address.";
      }
    }
    if (!service || !service.trim()) {
      errors.service = "Please select a service.";
    }
    if (!message || !message.trim()) {
      errors.message = "Message is required.";
    } else if (message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: "Validation failed", errors },
        { status: 400 }
      );
    }

    console.log("Contact form submission:", {
      name,
      email,
      phone,
      company,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your inquiry. We will contact you within 24 hours.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
