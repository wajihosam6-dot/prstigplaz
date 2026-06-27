import Link from "next/link";

const footerLinks = {
  Collections: [
    "Living Room",
    "Bedroom",
    "Dining",
    "Home Office",
    "Outdoor",
    "Lighting",
  ],
  Services: [
    "Interior Design",
    "Custom Orders",
    "White Glove Delivery",
    "Design Consultation",
    "Trade Programme",
  ],
  Company: [
    "Our Story",
    "Craftsmanship",
    "Sustainability",
    "Careers",
    "Press",
    "Contact",
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: "var(--prestige-black)",
        borderTop: "1px solid rgba(201,169,110,0.1)",
      }}
    >
      <div className="container-luxury pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-serif text-[1.2rem] text-gold tracking-[0.18em] uppercase mb-1">
              Prestige Plaza
            </div>
            <div
              className="label-sm mb-5"
              style={{ color: "rgba(184,176,162,0.4)", letterSpacing: "0.4em" }}
            >
              Furniture
            </div>
            <p
              className="text-[0.75rem] leading-[1.85]"
              style={{ color: "rgba(184,176,162,0.45)" }}
            >
              Luxury furniture crafted for timeless living. Each piece is a
              testament to artisanal mastery and enduring design.
            </p>

            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {["Instagram", "Pinterest", "Houzz"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="label-sm transition-colors duration-300"
                  style={{ color: "rgba(184,176,162,0.35)" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#C9A96E")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "rgba(184,176,162,0.35)")
                  }
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3
                className="label-sm text-prestige-white mb-5 font-medium"
                style={{ letterSpacing: "0.3em" }}
              >
                {title}
              </h3>
              <ul className="space-y-3 list-none">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[0.75rem] transition-colors duration-300"
                      style={{ color: "rgba(184,176,162,0.45)" }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "#C9A96E")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "rgba(184,176,162,0.45)")
                      }
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gold divider */}
        <div
          className="h-px mb-6"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(201,169,110,0.2), transparent)",
          }}
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p
            className="label-sm"
            style={{ color: "rgba(184,176,162,0.25)", letterSpacing: "0.15em" }}
          >
            © 2025 Prestige Plaza Furniture. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
              (link) => (
                <Link
                  key={link}
                  href="#"
                  className="label-sm transition-colors duration-300"
                  style={{ color: "rgba(184,176,162,0.25)" }}
                >
                  {link}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
