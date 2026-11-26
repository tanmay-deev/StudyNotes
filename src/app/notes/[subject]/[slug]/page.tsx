import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import NoteToolbar from "@/components/NoteToolbar";
import StudyGuideView from "@/components/StudyGuideView";
import {
  ALL_NOTES,
  getNoteBySlug,
  getNotesBySubject,
  getSubjectInfo,
} from "@/data";

interface NotePageProps {
  params: Promise<{
    subject: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ALL_NOTES.map((note) => ({
    subject: note.subject,
    slug: note.slug,
  }));
}

export async function generateMetadata({ params }: NotePageProps) {
  const { subject, slug } = await params;
  const note = getNoteBySlug(subject, slug);
  if (!note) return { title: "Topic Not Found" };
  return {
    title: `${note.title} — StudyNotes 11 & 12`,
    description: note.summary,
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { subject, slug } = await params;
  const note = getNoteBySlug(subject, slug);
  const subjectInfo = getSubjectInfo(subject);

  if (!note || !subjectInfo) {
    notFound();
  }

  const subjectNotes = getNotesBySubject(subjectInfo.id);
  const currentIndex = subjectNotes.findIndex((n) => n.slug === note.slug);
  const prevNote = currentIndex > 0 ? subjectNotes[currentIndex - 1] : null;
  const nextNote =
    currentIndex >= 0 && currentIndex < subjectNotes.length - 1
      ? subjectNotes[currentIndex + 1]
      : null;

  return (
    <>
      <Navbar active="notes" />

      <main className="flex-1 px-3 sm:px-6 py-5 sm:py-8">
        <NoteToolbar
          subjectName={subjectInfo.name}
          subjectId={subjectInfo.id}
          pdfPath={note.pdfPath}
        />

        {/* Structured Study Guide Sheet */}
        <StudyGuideView note={note} subjectName={subjectInfo.name} />

        {/* Embedded Original PDF Section (shown when a topic has an attached PDF) */}
        {note.pdfPath && (
          <section
            id="embedded-pdf"
            className="no-print max-w-[820px] mx-auto mt-6 sm:mt-8 bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden"
          >
            <div className="px-4 py-3.5 sm:px-5 sm:py-4 bg-[#f4f7fa] border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#1e6f5c]">
                  Attached Document
                </p>
                <h2 className="font-study-serif text-sm sm:text-base font-bold text-[#1b365d] mt-0.5 leading-snug">
                  {note.pdfTitle ?? "Original Study Guide PDF"}
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:flex items-center gap-2 shrink-0">
                <a
                  href={note.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-2 sm:py-1.5 rounded-md text-xs font-semibold bg-white text-[#1b365d] border border-slate-300 hover:border-[#1b365d] transition-colors"
                >
                  Open PDF ↗
                </a>
                <a
                  href={note.pdfPath}
                  download
                  className="inline-flex items-center justify-center px-3 py-2 sm:py-1.5 rounded-md text-xs font-semibold bg-[#1e6f5c] text-white hover:bg-[#175748] transition-colors"
                >
                  Download PDF
                </a>
              </div>
            </div>

            <div className="sm:hidden px-4 py-3 bg-slate-50 border-b border-slate-200 text-xs leading-relaxed text-slate-600">
              On mobile browsers, tap <strong>Open PDF ↗</strong> or{" "}
              <strong>Download PDF</strong> above for the best reading view.
            </div>

            <div className="relative bg-slate-100 overflow-hidden">
              <iframe
                src={`${note.pdfPath}#navpanes=0`}
                title={note.pdfTitle ?? note.title}
                className="block w-full h-[460px] sm:h-[640px] md:h-[760px] border-0"
              />
            </div>
          </section>
        )}

        {/* Previous / Next Topic Navigation within same Subject */}
        <nav
          aria-label="More topics in this subject"
          className="no-print max-w-[820px] mx-auto mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {prevNote ? (
            <Link
              href={`/notes/${prevNote.subject}/${prevNote.slug}`}
              className="bg-white border border-slate-200 rounded-lg p-4 hover:border-[#1b365d] active:bg-slate-50 transition-colors"
            >
              <span className="block text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                ← Previous {subjectInfo.name} Topic
              </span>
              <span className="block font-study-serif text-sm font-bold text-[#1b365d] mt-1 leading-snug">
                {prevNote.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextNote ? (
            <Link
              href={`/notes/${nextNote.subject}/${nextNote.slug}`}
              className="bg-white border border-slate-200 rounded-lg p-4 hover:border-[#1b365d] active:bg-slate-50 transition-colors sm:text-right"
            >
              <span className="block text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Next {subjectInfo.name} Topic →
              </span>
              <span className="block font-study-serif text-sm font-bold text-[#1b365d] mt-1 leading-snug">
                {nextNote.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </nav>
      </main>
    </>
  );
}
