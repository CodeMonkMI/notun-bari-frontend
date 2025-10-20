import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { HelpCircle, Mail, Phone, Search } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// ---------------------------------------------
// Help Center Page (shadcn/ui)
// ---------------------------------------------
export function HelpCenterContainer() {
  const [q, setQ] = useState("");

  const faqs = [
    {
      t: "Getting Started",
      items: [
        {
          q: "How do I create an account?",
          a: "Click ‘Sign Up’, verify your email, and complete your profile with your location and pet preferences.",
        },
        {
          q: "How does adoption work?",
          a: "Submit an application, schedule a meet & greet, complete a home check, and sign the adoption agreement.",
        },
        {
          q: "What documents do I need?",
          a: "A government ID, proof of address, and landlord approval if you rent.",
        },
      ],
    },
    {
      t: "Fees & Medical",
      items: [
        {
          q: "What’s included in the adoption fee?",
          a: "Vaccinations, microchipping, spay/neuter (if age-appropriate), deworming, and a health check.",
        },
        {
          q: "Are pets vaccinated?",
          a: "Yes—unless medically exempt. Puppies/kittens may receive follow-up appointments.",
        },
        {
          q: "Do you offer post-adoption support?",
          a: "Yes, we provide behavior guidance, vet referrals, and community resources.",
        },
      ],
    },
    {
      t: "Policies",
      items: [
        {
          q: "Can I return a pet if it’s not a fit?",
          a: "We’ll always take our animals back. We can also help troubleshoot first.",
        },
        {
          q: "Do you allow foster-to-adopt?",
          a: "In many cases, yes. Availability depends on the pet and foster capacity.",
        },
      ],
    },
  ];

  const filtered = faqs.map((g) => ({
    t: g.t,
    items: g.items.filter((i) =>
      `${i.q} ${i.a}`.toLowerCase().includes(q.toLowerCase().trim())
    ),
  }));

  return (
    <section className="mx-auto max-w-5xl p-6 md:p-10 space-y-8">
      <div className="space-y-2 text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <HelpCircle className="h-5 w-5" />
          <span className="text-sm">Help Center</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">How can we help?</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find quick answers, policies, and ways to contact our team.
        </p>
      </div>

      <Card className="border-muted">
        <CardContent className="p-4 md:p-6">
          <div className="relative">
            <Input
              placeholder="Search help topics (e.g., fees, meet & greet, foster)..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="pl-9"
              aria-label="Search help"
            />
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          {filtered.map((group, gi) => (
            <Card key={gi} className="border-muted">
              <CardHeader className="py-4">
                <CardTitle className="text-xl">{group.t}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <Accordion type="single" collapsible className="w-full">
                  {group.items.length === 0 ? (
                    <div className="text-sm text-muted-foreground p-4">
                      No results in this section.
                    </div>
                  ) : (
                    group.items.map((item, ii) => (
                      <AccordionItem key={ii} value={`${gi}-${ii}`}>
                        <AccordionTrigger className="text-left">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.a}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))
                  )}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <Card className="border-muted">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> mmislam027@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +880 1963636430
              </p>
              <Separator />
              <p>Hours: Sat-Thu, 10am - 6pm (BST)</p>
              <p>Location: Dhaka, Bangladesh</p>
            </CardContent>
          </Card>

          <Card className="border-muted">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="Your email" />
              <Textarea
                placeholder="Describe your issue or question..."
                rows={4}
              />
              <Button
                className="w-full"
                onClick={(e) => {
                  e.preventDefault();
                  toast(
                    "We have received you message. We will get back to you soon!"
                  );
                }}
              >
                Submit
              </Button>
              <p className="text-xs text-muted-foreground">
                We usually respond within 1 business day.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
