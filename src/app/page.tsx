import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ALL_NOTES, SUBJECTS, getNotesBySubject } from "@/data";

export default function HomePage() {
  return (
    <>
      <Navbar active="home" />

      <main className="flex-1">
        {/* Simple Hero */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-18">
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-[#1e6f5c] mb-2.5 sm:mb-3">
              Class 11 &amp; Class 12 Study Guides
            </p>
            <h1 className="font-study-serif text-2xl sm:text-4xl font-bold text-[#1b365d] leading-snug sm:leading-tight max-w-2xl">
              Clean, Structured Notes for Physics, Chemistry, Biology &amp; Maths
            </h1>
            <p className="mt-3.5 sm:mt-4 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Pick a subject, select any chapter topic, and open a clean, distraction-free
              study guide in a new page—complete with rules, formulas, worked examples, and
              summary tables.
            </p>

            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
              <Link
                href="/topics"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-md bg-[#1b365d] text-white text-sm font-semibold hover:bg-[#142847] transition-colors"
              >
                Browse All Topics
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/topics?subject=chemistry"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded-md border border-slate-300 bg-white text-slate-700 text-sm font-medium hover:border-[#1b365d] hover:text-[#1b365d] transition-colors"
              >
                Sample Guide (Chemistry + PDF)
              </Link>
            </div>

            <div className="mt-7 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100 grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-6 text-xs text-slate-500">
              <span>
                <strong className="text-slate-800">{SUBJECTS.length}</strong> Core Subjects
              </span>
              <span>
                <strong className="text-slate-800">{ALL_NOTES.length}</strong> Topic Guides
              </span>
              <span>
                <strong className="text-slate-800">Class 11 &amp; 12</strong> Coverage
              </span>
              <span>
                <strong className="text-slate-800">Print-ready</strong> &amp; PDF Included
              </span>
            </div>
          </div>
        </section>

        {/* Subjects Overview */}
        <section className="max-w-5xl mx-auto px-4 sm:px-8 py-9 sm:py-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 mb-5 sm:mb-6">
            <div>
              <h2 className="font-study-serif text-lg sm:text-xl font-bold text-[#1b365d]">
                Subjects Covered
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Choose a subject to jump straight to its Class 11 &amp; 12 topics.
              </p>
            </div>
            <Link
              href="/topics"
              className="text-sm font-medium text-[#1e6f5c] hover:underline shrink-0"
            >
              See all topics →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {SUBJECTS.map((subject) => {
              const topics = getNotesBySubject(subject.id);
              return (
                <Link
                  key={subject.id}
                  href={`/topics?subject=${subject.id}`}
                  className="group bg-white rounded-lg border border-slate-200 p-4 sm:p-5 hover:border-[#1b365d] hover:shadow-sm active:bg-slate-50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span
                        className={`inline-block text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${subject.accentBg} ${subject.accentText} ${subject.accentBorder}`}
                      >
                        {subject.shortLabel}
                      </span>
                      <span className="text-xs text-slate-500">
                        {topics.length} topics
                      </span>
                    </div>
                    <h3 className="font-study-serif text-base sm:text-lg font-bold text-[#1b365d] group-hover:text-[#1e6f5c] transition-colors">
                      {subject.name}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                      {subject.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-[#1b365d]">
                    <span>Class 11 &amp; Class 12 Notes</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      Open topics →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-200 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-xs text-slate-500">
          <span>StudyNotes 11 &amp; 12 — Simple, exam-focused study guides.</span>
          <span>Physics · Chemistry · Biology · Mathematics</span>
        </div>
      </footer>
    </>
  );
}
