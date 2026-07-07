import { useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type BookTrainingFormProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function BookTrainingForm({ open, onOpenChange }: BookTrainingFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!fullName.trim()) {
      setError("Full name is required");
      return;
    }
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!dateTime) {
      setError("Date & time is required");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/send-training", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          company,
          dateTime,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send booking");
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onOpenChange(false);
        // Reset form
        setFullName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setDateTime("");
        setMessage("");
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] flex flex-col overflow-hidden">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-lg">Book a Training</DialogTitle>
          <DialogClose asChild>
            <button className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </DialogClose>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 text-center flex-1 flex flex-col justify-center">
            <p className="text-sm font-medium text-green mb-2">
              ✓ Thank you! Your booking has been confirmed.
            </p>
            <p className="text-xs text-muted-foreground">
              We'll get back to you soon with more details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2 overflow-y-auto flex-1 pr-3">
            <div>
              <Label htmlFor="fullName" className="text-xs">Full Name *</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your name"
                className="h-8 text-xs"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-xs">Email *</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="h-8 text-xs"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-xs">Phone Number</Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+254..."
                className="h-8 text-xs"
              />
            </div>

            <div>
              <Label htmlFor="company" className="text-xs">Company Name</Label>
              <Input
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Your company"
                className="h-8 text-xs"
              />
            </div>

            <div>
              <Label htmlFor="dateTime" className="text-xs">Preferred Date & Time *</Label>
              <Input
                id="dateTime"
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                className="h-8 text-xs"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-xs">Message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us more about your training needs..."
                rows={2}
                className="text-xs"
              />
            </div>

            {error && (
              <div className="text-xs text-destructive bg-destructive/10 p-2 rounded">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-green hover:bg-green-dark text-xs h-8"
            >
              {loading ? "Booking..." : "Book Training"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
