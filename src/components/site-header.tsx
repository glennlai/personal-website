import Link from "next/link";
import { site } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        <Link className="brand" href="#top">
          {site.name}
        </Link>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
