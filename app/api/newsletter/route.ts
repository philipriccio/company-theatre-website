import { NextRequest, NextResponse } from "next/server";

const CRM_URL = process.env.CRM_URL || "https://crm.companytheatre.ca";
const CRM_AUTH = process.env.CRM_AUTH || "Philip:Riccio";

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Check if contact already exists
    const checkRes = await fetch(
      `${CRM_URL}/api/contacts?email=${encodeURIComponent(email)}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(CRM_AUTH).toString("base64")}`,
        },
      }
    );

    if (checkRes.ok) {
      const existing = await checkRes.json();
      if (existing.contacts && existing.contacts.length > 0) {
        // Contact exists - check if they have the website signup tag
        const contact = existing.contacts[0];
        const hasTag = contact.tags?.some(
          (t: { name: string }) => t.name === "Website Signup"
        );
        
        if (hasTag) {
          return NextResponse.json(
            { message: "You're already subscribed!" },
            { status: 200 }
          );
        }
        
        // Add the website signup tag to existing contact
        await fetch(`${CRM_URL}/api/contacts/${contact.id}/tags`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${Buffer.from(CRM_AUTH).toString("base64")}`,
          },
          body: JSON.stringify({ tag: "Website Signup" }),
        });
        
        return NextResponse.json(
          { message: "You're on the list!" },
          { status: 200 }
        );
      }
    }

    // Create new contact with Website Signup tag
    const createRes = await fetch(`${CRM_URL}/api/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(CRM_AUTH).toString("base64")}`,
      },
      body: JSON.stringify({
        email,
        firstName: firstName || undefined,
        lastName: lastName || undefined,
        tags: ["Website Signup"],
        source: "Website Newsletter Signup",
      }),
    });

    if (!createRes.ok) {
      const errorData = await createRes.json().catch(() => ({}));
      console.error("CRM error:", errorData);
      return NextResponse.json(
        { error: "Unable to subscribe. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "You're on the list!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
