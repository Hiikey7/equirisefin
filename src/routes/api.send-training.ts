import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { sendEmail } from "@/lib/email.server";

export const Route = createFileRoute("/api/send-training")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { fullName, email, phone, company, dateTime, message } = body;

          // Validate required fields
          if (!fullName || !email || !dateTime) {
            return new Response(
              JSON.stringify({ error: "Missing required fields" }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
          }

          // Format the date for display
          const date = new Date(dateTime);
          const formattedDate = date.toLocaleString();

          // Prepare email content
          const emailHtml = `
            <h2>New Training Booking</h2>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "N/A"}</p>
            <p><strong>Company:</strong> ${company || "N/A"}</p>
            <p><strong>Preferred Date & Time:</strong> ${formattedDate}</p>
            <p><strong>Message:</strong></p>
            <p>${message || "N/A"}</p>
          `;

          const emailText = `
New Training Booking

Full Name: ${fullName}
Email: ${email}
Phone: ${phone || "N/A"}
Company: ${company || "N/A"}
Preferred Date & Time: ${formattedDate}
Message: ${message || "N/A"}
          `;

          // Send email to admin
          await sendEmail({
            to: process.env.ADMIN_EMAIL || "info@equirise.com",
            subject: `New Training Booking from ${fullName}`,
            html: emailHtml,
            text: emailText,
          });

          // Send confirmation email to user
          await sendEmail({
            to: email,
            subject: "Your training booking request has been received",
            html: `
              <p>Hello ${fullName},</p>
              <p>Thank you for booking a training session with EquiRise. We have received your booking request for ${formattedDate}.</p>
              <p>Our team will confirm the booking and send you further details within 2-3 business days.</p>
              <p>Best regards,<br/>The EquiRise Team</p>
            `,
            text: `Hello ${fullName},\n\nThank you for booking a training session with EquiRise. We have received your booking request for ${formattedDate}.\n\nOur team will confirm the booking and send you further details within 2-3 business days.\n\nBest regards,\nThe EquiRise Team`,
          });

          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (error) {
          console.error("API error:", error);
          return new Response(
            JSON.stringify({ error: "Failed to process booking" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});
