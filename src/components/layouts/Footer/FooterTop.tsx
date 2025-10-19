import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Facebook, Github, Link, Linkedin, Youtube } from "lucide-react";

const productLinks = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "FAQs", href: "/faqs" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Pets", href: "/pets" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Help", href: "/help" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

// Social icons array
const socialIcons = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/codemonkmi/",
    icon: Facebook,
  },
  { label: "Github", href: "https://github.com/CodeMonkMI", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/codemonkmi/",
    icon: Linkedin,
  },
  {
    label: "Portfolio",
    href: "https://codemonkmi.vercel.app/",
    icon: Link,
  },
  {
    label: "Youtube",
    href: "https://leetcode.com/codemonkmi/",
    icon: Youtube,
  },
];

export function FooterTop() {
  return (
    <div className="mx-auto px-6 pt-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
        {/* Brand & blurb */}
        <div className="space-y-4">
          <div className="">
            <span className="text-xl font-semibold">NotunBari</span>
          </div>
          <p className="text-sm text-gray-400 max-w-sm">
            Connecting loving homes with pets in need. Adopt, don’t shop —
            because every tail deserves a happy ending.
          </p>
          <div className="flex items-center gap-2">
            {socialIcons.map(({ label, href, icon: Icon }) => (
              <IconLink key={label} label={label} href={href}>
                <Icon className="h-5 w-5" />
              </IconLink>
            ))}
          </div>
        </div>

        {/* Product */}
        <FooterColumn title="Navigation" items={companyLinks} />

        {/* Company */}
        <FooterColumn title="" items={productLinks} />

        {/* Resources */}
        <FooterColumn title="Resources" items={resourceLinks} />
      </div>
    </div>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="">
      <h3
        className={cn("text-lg font-bold tracking-tight mb-3", {
          "mb-11": !title,
        })}
      >
        {title}
      </h3>
      <ul className="space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="hover:text-white transition-colors text-gray-400"
              title={item.label}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className="rounded-full"
      aria-label={label}
    >
      <a href={href} target="_blank">
        {children}
      </a>
    </Button>
  );
}
