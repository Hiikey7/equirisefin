import { useState } from "react";
import { X } from "lucide-react";
import { serviceAreas } from "@/lib/content";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ConsultationFormProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ConsultationForm({ open, onOpenChange }: ConsultationFormProps) {
  const [fullName, setFullName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleServiceToggle = (serviceTitle: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceTitle)
        ? prev.filter((s) => s !== serviceTitle)
        : [...prev, serviceTitle]
    );
  };

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
    if (selectedServices.length === 0) {
      setError("Please select at least one service");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/send-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          orgName,
          email,
          phone,
          services: selectedServices,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send request");
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onOpenChange(false);
        // Reset form
        setFullName("");
        setOrgName("");
        setEmail("");
        setPhone("");
        setSelectedServices([]);
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
          <DialogTitle className="text-lg">Request a Consultation</DialogTitle>
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
              ✓ Thank you! Your request has been sent.
            </p>
            <p className="text-xs text-muted-foreground">
              We'll get back to you soon.
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
              <Label htmlFor="orgName" className="text-xs">Organization Name</Label>
              <Input
                id="orgName"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder="Your organization"
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
              <Label className="text-xs">Select Service(s) *</Label>
              <div className="space-y-1 mt-1 max-h-32 overflow-y-auto border rounded-md p-2 bg-muted/30">
                {serviceAreas.map((service) => (
                  <label
                    key={service.slug}
                    className="flex items-center gap-2 cursor-pointer hover:bg-muted/50 p-1 rounded text-xs"
                  >
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service.title)}
                      onChange={() => handleServiceToggle(service.title)}
                      className="rounded border-gray-300 h-3 w-3"
                    />
                    <span className="text-xs">{service.title}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="text-xs">Message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your needs..."
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
              {loading ? "Sending..." : "Send Request"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
