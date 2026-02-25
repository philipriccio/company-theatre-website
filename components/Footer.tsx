import Link from "next/link";
import { Instagram, Twitter, Facebook, Youtube, Mail } from "lucide-react";
import { theatreInfo } from "@/lib/data";
import NewsletterSignup from "./NewsletterSignup";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-16 border-t border-white/10">
      <div className="container-main px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="heading-lg mb-4 text-white">THE COMPANY THEATRE</h2>
            <p className="body-md text-white/70 max-w-md mb-6">
              {theatreInfo.tagline}. {theatreInfo.description}
            </p>
            <div className="flex gap-4">
              <a 
                href={theatreInfo.contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={theatreInfo.contact.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href={theatreInfo.contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={theatreInfo.contact.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a 
                href={`mailto:${theatreInfo.contact.email}`}
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="heading-md text-base mb-6 text-white">Explore</h3>
            <ul className="space-y-3">
              <li><Link href="/#current" className="footer-link text-white/70 hover:text-white">Current Production</Link></li>
              <li><Link href="/#productions" className="footer-link text-white/70 hover:text-white">Past Productions</Link></li>
              <li><Link href="/#about" className="footer-link text-white/70 hover:text-white">About Us</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="heading-md text-base mb-6 text-white">Contact</h3>
            <address className="not-italic body-md text-white/70 space-y-2">
              <p>Artistic Director:</p>
              <p className="text-white font-semibold">{theatreInfo.contact.artisticDirector}</p>
              <p className="pt-2">
                <a href={`mailto:${theatreInfo.contact.email}`} className="text-accent hover:underline">
                  {theatreInfo.contact.email}
                </a>
              </p>
              <p className="pt-2 text-sm">{theatreInfo.location}</p>
            </address>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="py-12 border-t border-white/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-3 text-white">
              Keep in Touch
            </h3>
            <p className="text-white/60 mb-8">
              Join our mailing list for news, updates, and exclusive invitations.
            </p>
            <NewsletterSignup compact />
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="body-sm text-white/50">
            © {new Date().getFullYear()} {theatreInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
