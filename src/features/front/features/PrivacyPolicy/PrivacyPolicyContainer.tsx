import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

const articles = [
  {
    title: "The Right to Privacy",
    content: [
      "Every user of NotunBari has the inherent right to privacy. No personal data shall be collected, used, or disclosed without the individual’s informed consent, except as required by law.",
    ],
  },
  {
    title: "Collection of Information",
    list: [
      "Personal details: name, contact number, address, and adoption preferences.",
      "Application data: household information, experience with pets, and suitability assessments.",
      "Technical data: browser, device type, IP address, and cookies to improve user experience.",
    ],
  },
  {
    title: "Use of Information",
    content: [
      "Collected information shall be used solely for legitimate and transparent purposes, including but not limited to:",
    ],
    list: [
      "Processing and evaluating adoption or foster applications.",
      "Maintaining communication and providing user support.",
      "Improving website performance, accessibility, and service design.",
    ],
  },
  {
    title: "Non-Disclosure and Data Sharing",
    content: [
      "We pledge not to sell, lease, or misuse user data. Sharing may occur only with trusted entities for lawful and ethical operations, such as veterinary partners, adoption centers, and governmental authorities when required.",
    ],
  },
  {
    title: "Data Security and Protection",
    content: [
      "We implement administrative, technical, and physical measures to ensure data protection. Access to sensitive data is restricted to authorized personnel who have pledged confidentiality.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "Personal information shall be retained only as long as necessary to achieve the intended purpose. Upon completion, data shall be securely deleted or anonymized.",
    ],
  },
  {
    title: "Rights of the User",
    list: [
      "The right to access personal information held by NotunBari.",
      "The right to correct inaccuracies in their data.",
      "The right to request data deletion or restriction of use.",
      "The right to withdraw consent at any time.",
    ],
  },
  {
    title: "Accountability",
    content: [
      "All personnel and partners associated with NotunBari are bound by this policy. Any violation may lead to disciplinary or legal action as deemed necessary.",
    ],
  },
  {
    title: "Amendment Process",
    content: [
      "Amendments to this policy shall occur with public notice and transparency, maintaining the integrity of user trust and adherence to evolving digital standards.",
    ],
  },
  {
    title: "Contact & Appeals",
    content: [
      "For complaints, queries, or appeals related to privacy matters, users may contact:",
      "Email: mmislam027@gmail.com",
      "Phone: +880 1963636430",
      "Office: Dhaka, Bangladesh.",
    ],
  },
];

export function PrivacyPolicyContainer() {
  return (
    <section className="mx-auto max-w-5xl p-6 md:p-10 space-y-8">
      <div className="space-y-2 text-center">
        <div className="flex justify-center items-center gap-2 text-muted-foreground">
          <Shield className="h-6 w-6" />
          <span className="text-sm uppercase tracking-wider">
            Privacy Policy Charter
          </span>
        </div>
        <h1 className="text-4xl font-bold">Data Protection & Privacy Policy</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          This document outlines our foundational principles and regulations
          governing data collection, use, storage, and protection—ensuring
          fairness, security, and respect for every individual.
        </p>
        <p className="text-xs text-muted-foreground">
          Last revised: October 20, 2025
        </p>
      </div>

      <Card className="border-muted shadow-none">
        <CardHeader>
          <CardTitle className="text-xl">Preamble</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none dark:prose-invert">
          <p>
            We, the caretakers of NotunBari Pet Adoption Platform, establish
            this Privacy Policy to safeguard the personal information of our
            users and to ensure transparency, security, and ethical
            responsibility in all digital interactions.
          </p>
        </CardContent>
      </Card>

      <div className="border rounded-md p-4 bg-background">
        <div className="max-w-none space-y-8">
          {articles.map((article, index) => (
            <section key={index}>
              <h2 className="text-2xl mb-2">
                {index + 1}. {article.title}
              </h2>
              {article.content &&
                article.content.map((text, i) => (
                  <p className="text-base" key={i}>
                    {text}
                  </p>
                ))}
              {article.list && (
                <ul className="list-disc pl-5">
                  {article.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
