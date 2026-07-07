import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { sendEmail } from "@/lib/email.server";

export const Route = createFileRoute("/api/send-consultation")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { fullName, orgName, email, phone, services, message } = body;

          // Validate required fields
          if (!fullName || !email || !services || services.length === 0) {
            return new Response(
              JSON.stringify({ error: "Missing required fields" }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
          }

          // Prepare email content
          const emailHtml = `
            <h2>New Consultation Request</h2>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Organization:</strong> ${orgName || "N/A"}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "N/A"}</p>
            <p><strong>Services Interested In:</strong></p>
            <ul>
              ${services.map((s: string) => `<li>${s}</li>`).join("")}
            </ul>
            <p><strong>Message:</strong></p>
            <p>${message || "N/A"}</p>
          `;

          const emailText = `
New Consultation Request

Full Name: ${fullName}
Organization: ${orgName || "N/A"}
Email: ${email}
Phone: ${phone || "N/A"}
Services: ${services.join(", ")}
Message: ${message || "N/A"}
          `;

          // Send email to admin
          await sendEmail({
            to: process.env.ADMIN_EMAIL || "info@equirise.com",
            subject: `New Consultation Request from ${fullName}`,
            html: emailHtml,
            text: emailText,
          });

          // Send confirmation email to user
          await sendEmail({
            to: email,
            subject: "We received your consultation request",
            html: `
              <p>Hello ${fullName},</p>
              <p>Thank you for reaching out to EquiRise. We have received your consultation request and will review it shortly.</p>
              <p>Our team will get back to you within 2-3 business days.</p>
              <p>Best regards,<br/>The EquiRise Team</p>
            `,
            text: `Hello ${fullName},\n\nThank you for reaching out to EquiRise. We have received your consultation request and will review it shortly.\n\nOur team will get back to you within 2-3 business days.\n\nBest regards,\nThe EquiRise Team`,
          });

          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (error) {
          console.error("API error:", error);
          return new Response(
            JSON.stringify({ error: "Failed to process request" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});
