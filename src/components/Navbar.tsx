import Link from "next/link";

interface NavbarProps {
  active?: "home" | "topics" | "notes";
}

export default function Navbar({ active }: NavbarProps) {
  return (
    <header className="no-print bg-white border-b border-slate-200 sticky top-0 z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 h-14 sm:h-16 flex items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5 min-w-0">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#1b365d] text-white text-xs sm:text-sm font-bold tracking-tight">
            SN
          </span>
          <div className="leading-tight min-w-0">
            <span className="block text-[13px] sm:text-sm font-bold text-[#1b365d] tracking-tight whitespace-nowrap">
              StudyNotes 11 &amp; 12
            </span>
            <span className="hidden sm:block text-[11px] text-slate-500 truncate">
              Science &amp; Mathematics
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2 shrink-0">
          <Link
            href="/"
            className={`px-2.5 sm:px-3 py-2 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
              active === "home"
                ? "bg-slate-100 text-[#1b365d]"
                : "text-slate-600 hover:text-[#1b365d] hover:bg-slate-50"
            }`}
          >
            Home
          </Link>
          <Link
            href="/topics"
            className={`px-2.5 sm:px-3 py-2 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
              active === "topics"
                ? "bg-[#1b365d] text-white"
                : "text-slate-600 hover:text-[#1b365d] hover:bg-slate-50"
            }`}
          >
            All Topics
          </Link>
        </nav>
      </div>
    </header>
  );
}
