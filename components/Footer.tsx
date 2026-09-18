import { site } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slateline bg-paper py-8">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-6 text-xs text-slate sm:flex-row md:px-10">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p className="font-mono">{site.role}</p>
      </div>
    </footer>
  );
}
