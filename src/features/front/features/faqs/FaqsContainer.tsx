import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TeamSection } from "../team/Team";

// Feel free to drop this component into your app.
// Tailwind + shadcn/ui. Production-ready, accessible, and searchable.

const FAQS = [
  {
    q: "How does the pet adoption process work?",
    a: "Browse available pets, submit an application, complete a quick interview + home check (virtual or in-person), then meet & greet. If it’s a match, you’ll sign an adoption agreement and take your new friend home!",
  },
  {
    q: "What are the adoption fees used for?",
    a: "Fees help cover vaccinations, spay/neuter, microchipping, deworming, food, transport, and medical care so we can keep rescuing more animals.",
  },
  {
    q: "Are pets vaccinated, spayed/neutered, and microchipped?",
    a: "Yes—unless noted otherwise for age/medical reasons. Kittens/puppies may go home with a scheduled spay/neuter appointment included.",
  },
  {
    q: "Can I adopt if I rent or live in an apartment?",
    a: "Absolutely! We’ll just verify your pet policy and make sure the pet’s energy level fits your space.",
  },
  {
    q: "What should I bring to the adoption appointment?",
    a: "A government ID, proof of address, landlord approval (if renting), all household decision-makers, and a secure carrier or leash/collar.",
  },
  {
    q: "Do you offer trial adoptions or foster-to-adopt?",
    a: "In many cases, yes. Short trial periods or foster-to-adopt options help ensure a good fit for both you and the pet.",
  },
  {
    q: "What if I already have pets at home?",
    a: "Great! We recommend a slow introduction. Share vet records for current pets and plan a meet-and-greet in a neutral space if possible.",
  },
  {
    q: "Do you have support after adoption?",
    a: "Yes. We offer post-adoption guidance, behavior resources, and alumni groups. If challenges arise, contact us—we’re here to help.",
  },
  {
    q: "Can I return a pet if it’s not a good fit?",
    a: "While we aim for forever placements, we will always accept our animals back. We’ll work with you to troubleshoot first, if you’d like.",
  },
  {
    q: "What supplies do I need for the first week?",
    a: "Food that matches the shelter/rescue diet, bowls, bed/crate, litter/litter box (for cats), collar/harness/leash, ID tag, toys, and a quiet space to decompress.",
  },
];
export function FaqsContainer() {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-50 to-green-50">
        <section className="w-full">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-800">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="w-2/3 mx-auto">
            <div className="space-y-4 w-full bg-white px-6 py-3 rounded-md">
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left text-lg">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="leading-relaxed text-gray-600 text-base">
                        {item.a}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </div>
      <TeamSection />
    </div>
  );
}
