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
          <div className="max-w-5xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1e6f5c] mb-3">
              Class 11 &amp; Class 12 Study Guides
            </p>
            <h1 className="font-study-serif text-3xl sm:text-4xl font-bold text-[#1b365d] leading-tight max-w-2xl">
              Clean, Structured Notes for Physics, Chemistry, Biology &amp; Maths
            </h1>
            <p className="mt-4 text-base text-slate-600 max-w-2xl leading-relaxed">
              Pick a subject, select any chapter topic, and open a clean, distraction-free
              study guide in a new page—complete with rules, formulas, worked examples, and
              summary tables.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/topics"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#1b365d] text-white text-sm font-semibold hover:bg-[#142847] transition-colors"
              >
                Browse All Topics
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/topics?subject=chemistry"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-slate-300 bg-white text-slate-700 text-sm font-medium hover:border-[#1b365d] hover:text-[#1b365d] transition-colors"
              >
                View Sample Guide (Chemistry + PDF)
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-6 text-xs text-slate-500">
              <span>
                <strong className="text-slate-800">{SUBJECTS.length}</strong> Core Subjects
              </span>
              <span>
                <strong className="text-slate-800">{ALL_NOTES.length}</strong> Complete Topic Guides
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
        <section className="max-w-5xl mx-auto px-5 sm:px-8 py-12">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="font-study-serif text-xl font-bold text-[#1b365d]">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SUBJECTS.map((subject) => {
              const topics = getNotesBySubject(subject.id);
              return (
                <Link
                  key={subject.id}
                  href={`/topics?subject=${subject.id}`}
                  className="group bg-white rounded-lg border border-slate-200 p-5 hover:border-[#1b365d] hover:shadow-sm transition-all flex flex-col justify-between"
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
                    <h3 className="font-study-serif text-lg font-bold text-[#1b365d] group-hover:text-[#1e6f5c] transition-colors">
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
        <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>StudyNotes 11 &amp; 12 — Simple, exam-focused study guides.</span>
          <span>Physics · Chemistry · Biology · Mathematics</span>
        </div>
      </footer>
    </>
  );
}
