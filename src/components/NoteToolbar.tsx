"use client";

import Link from "next/link";

interface NoteToolbarProps {
  subjectName: string;
  subjectId: string;
  pdfPath?: string;
}

export default function NoteToolbar({
  subjectName,
  subjectId,
  pdfPath,
}: NoteToolbarProps) {
  return (
    <div className="no-print max-w-[820px] mx-auto mb-5 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-sm">
        <Link
          href="/topics"
          className="text-slate-600 hover:text-[#1b365d] font-medium transition-colors"
        >
          ← All Topics
        </Link>
        <span className="text-slate-300">/</span>
        <Link
          href={`/topics?subject=${subjectId}`}
          className="text-[#1e6f5c] hover:underline font-medium"
        >
          {subjectName}
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {pdfPath && (
          <>
            <a
              href="#embedded-pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-[#eef7f4] text-[#1e6f5c] border border-[#cde6dd] hover:bg-[#e1f1eb] transition-colors"
            >
              Jump to Original PDF ↓
            </a>
            <a
              href={pdfPath}
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-white text-slate-700 border border-slate-300 hover:border-[#1b365d] hover:text-[#1b365d] transition-colors"
            >
              Download PDF
            </a>
          </>
        )}
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-[#1b365d] text-white hover:bg-[#142847] transition-colors cursor-pointer"
        >
          Print Notes
        </button>
      </div>
    </div>
  );
}
