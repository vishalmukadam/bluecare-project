import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, capacity, message } = body;

    const errors: Record<string, string> = {};

    if (!name || !name.trim()) {
      errors.name = "Full name is required.";
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

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: "Validation failed", errors },
        { status: 400 }
      );
    }

    console.log("Quote request submission:", {
      name,
      email,
      phone,
      company,
      service,
      capacity,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your quote request. We will respond within 24 hours.",
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
