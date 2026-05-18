import Link from "next/link";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container contact">
        <div>
          <p className="eyebrow">Connect</p>
          <h2>Let’s work together</h2>
          <p>{site.contact.intro}</p>
        </div>
        <ul className="contact-list">
          {site.contact.links.map((link) => (
            <li key={link.label}>
              {link.label}:{" "}
              <Link href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                {link.value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
