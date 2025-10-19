import { Separator } from "@/components/ui/separator";
import { FooterTop } from "./FooterTop";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 ">
      <div className="container mx-auto">
        <div>
          <FooterTop />
          <Separator className="my-4 bg-gray-400" />
          <div className="flex justify-between">
            <div className="flex items-center gap-6 justify-center">
              <span>📞 Call Support: +8801963636430</span>
              <span>✉️ Email us: mmislam027@gmail.com</span>
            </div>

            <div className="flex items-center gap-6 justify-center">
              © 2025 NotunBari. All Right Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
