import { site } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>
          &copy; {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
