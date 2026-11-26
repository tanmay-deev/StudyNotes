import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import TopicsBrowser from "@/components/TopicsBrowser";

export const metadata = {
  title: "Select a Topic — StudyNotes 11 & 12",
  description:
    "Choose from Class 11 and Class 12 topics across Physics, Chemistry, Biology, and Mathematics.",
};

export default function TopicsPage() {
  return (
    <>
      <Navbar active="topics" />

      <main className="flex-1 max-w-5xl w-full mx-auto px-5 sm:px-8 py-10">
        <div className="mb-7">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1e6f5c] mb-1.5">
            Class 11 &amp; 12 Syllabus
          </p>
          <h1 className="font-study-serif text-2xl sm:text-3xl font-bold text-[#1b365d]">
            Select a Topic to Study
          </h1>
          <p className="text-sm text-slate-600 mt-1.5">
            Filter by subject or class below. Clicking any topic opens its complete study guide in a new webpage.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="bg-white rounded-lg border border-slate-200 p-8 text-sm text-slate-500">
              Loading topics...
            </div>
          }
        >
          <TopicsBrowser />
        </Suspense>
      </main>

      <footer className="bg-white border-t border-slate-200 py-6 mt-10">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>StudyNotes 11 &amp; 12 — Simple, exam-focused study guides.</span>
          <span>Physics · Chemistry · Biology · Mathematics</span>
        </div>
      </footer>
    </>
  );
}
