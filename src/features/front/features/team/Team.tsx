import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Md. Arif Hossain",
    role: "Founder & Executive Director",
    image: " https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg",
    desc: "Visionary leader driving animal welfare initiatives nationwide.",
  },
  {
    name: "Tahmina Akter",
    role: "Co-Founder & Animal Welfare Lead",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    desc: "Dedicated to rescuing animals and promoting ethical adoptions.",
  },
  {
    name: "Sabbir Rahman",
    role: "Operations Manager",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    desc: "Ensures smooth daily operations and efficient adoption workflows.",
  },
  {
    name: "Farzana Yasmin",
    role: "Veterinary Coordinator",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    desc: "Oversees health, treatment, and vaccination programs for pets.",
  },
  {
    name: "Rakibul Islam",
    role: "Head of Communications",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    desc: "Connects hearts and homes through awareness and storytelling.",
  },
  {
    name: "Nusrat Jahan",
    role: "Community Outreach Officer",
    image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg",
    desc: "Builds partnerships and organizes adoption drives across cities.",
  },
  {
    name: "Ruhul Amin",
    role: "Finance & Accounts Manager",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    desc: "Manages budgets and ensures transparency in every transaction.",
  },
  {
    name: "Fatema Begum",
    role: "Adoption Counselor",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    desc: "Guides families to find their perfect companion through empathy.",
  },
  {
    name: "Ahsan Habib",
    role: "Pet Behavior Specialist",
    image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg",
    desc: "Helps pets adapt smoothly to their new loving environments.",
  },
  {
    name: "Sadia Islam",
    role: "Marketing & Branding Officer",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
    desc: "Spreads joy and compassion through creative storytelling.",
  },
  {
    name: "Tareq Mahmud",
    role: "Field Rescue Coordinator",
    image: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg",
    desc: "Leads rescue missions ensuring no animal is left behind.",
  },
  {
    name: "Shamima Akter",
    role: "Shelter Manager",
    image: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg",
    desc: "Maintains a safe, clean, and loving environment for all pets.",
  },
  {
    name: "Mahfuzur Rahman",
    role: "IT & Website Administrator",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    desc: "Keeps our digital presence strong and user-friendly.",
  },
  {
    name: "Nadia Chowdhury",
    role: "Volunteer Program Coordinator",
    image: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg",
    desc: "Empowers volunteers to create a lasting impact on animal lives.",
  },
  {
    name: "Imran Hossain",
    role: "Transport & Logistics Officer",
    image: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg",
    desc: "Ensures safe and timely transport for rescues and adoptions.",
  },
  {
    name: "Rafia Sultana",
    role: "Animal Care Supervisor",
    image: "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg",
    desc: "Monitors pet well-being and ensures proper daily care routines.",
  },
  {
    name: "Shakil Ahmed",
    role: "Content Creator & Photographer",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
    desc: "Captures stories that inspire people to adopt and care.",
  },
  {
    name: "Mitu Rahman",
    role: "Public Relations Executive",
    image: "https://images.pexels.com/photos/1034859/pexels-photo-1034859.jpeg",
    desc: "Strengthens our bond with the community and media partners.",
  },
  {
    name: "Jannatul Ferdous",
    role: "Donor Relations & Fundraising Lead",
    image: "https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg",
    desc: "Drives initiatives that sustain and expand our mission.",
  },
  {
    name: "Kamal Uddin",
    role: "Maintenance & Support Staff",
    image: "https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg",
    desc: "Keeps our facilities running smoothly with dedication and care.",
  },
];

export function TeamSection() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Meet Our Dedicated Team
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Our team is passionate about animal welfare and adoption, working
          tirelessly to ensure every pet finds a loving home across Bangladesh.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="text-center shadow-sm hover:shadow-md transition-all duration-300"
          >
            <CardHeader className="flex flex-col items-center">
              <div className="w-24 h-24 mb-3 rounded-full overflow-hidden ">
                <img
                  src={member.image}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-800">
                {member.name}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-500">{member.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
