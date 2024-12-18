import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto container px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About</h3>
            <p className="text-sm text-muted-foreground">
              Premium hotel booking platform for marathon runners seeking
              post-race relaxation and recovery.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                <Link href={"/#hotels"}>Hotels</Link>
              </li>
              <li>
                <Link href={"/contact-us"}>Contact Us</Link>
              </li>
              <li>
                <Link href={"/privacy-policy"}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={"/cookie-policy"}>Contact Policy</Link>
              </li>
              <li>
                <Link href={"/cancellation-policy"}>Cancellation Policy</Link>
              </li>
              <li>
                <Link href={"/terms-condition"}>Terms & Condition</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@daybreakpass.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  support@daybreakpass.com
                </a>
              </li>
              <li>
                {" "}
                Phone:{" "}
                <a
                  href="tel:+918356070349"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +918356070349
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <h3 className="mb-2 text-lg font-semibold">Recognized by</h3>
              <div className="flex gap-4 justify-around">
                <img
                  src={"/logos/DPIIT-logo-trans.png"}
                  alt="DPIIT-logo"
                  className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-md"
                />
                <img
                  src={"/logos/razorpayrize.png"}
                  alt="Raazorpay rize logo"
                  className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-md"
                />
                <img
                  src={"/logos/startupindia.png"}
                  alt="Startup India-logo"
                  className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-md"
                />
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Follow Us</h3>
              <div className="flex gap-2 text-sm justify-around">
                <a
                  href="https://www.facebook.com/profile.php?id=61561046045525"
                  target="_blank"
                >
                  <FaFacebook className="w-8 h-8 sm:w-10 sm:h-10" />
                </a>
                <a
                  href="https://www.instagram.com/daybreakpass/"
                  target="_blank"
                >
                  <FaInstagram className="w-8 h-8 sm:w-10 sm:h-10" />
                </a>
                <a
                  href="https://www.linkedin.com/company/daybreakpass/"
                  target="_blank"
                >
                  <FaLinkedinIn className="w-8 h-8 sm:w-10 sm:h-10" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          © 2024 DayBreakPass. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
