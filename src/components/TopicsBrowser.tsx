"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ALL_NOTES, SUBJECTS, SubjectId, TopicNote } from "@/data";
import { ClassLevel } from "@/data/types";

type SubjectFilter = "all" | SubjectId;
type ClassFilter = "all" | ClassLevel;

export default function TopicsBrowser() {
  const searchParams = useSearchParams();
  const initialSubjectParam = searchParams.get("subject");
  const validInitialSubject: SubjectFilter =
    initialSubjectParam && SUBJECTS.some((s) => s.id === initialSubjectParam)
      ? (initialSubjectParam as SubjectId)
      : "all";

  const [selectedSubject, setSelectedSubject] = useState<SubjectFilter>(validInitialSubject);
  const [selectedClass, setSelectedClass] = useState<ClassFilter>("all");
  const [query, setQuery] = useState("");

  const filteredNotes = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_NOTES.filter((note) => {
      if (selectedSubject !== "all" && note.subject !== selectedSubject) return false;
      if (selectedClass !== "all" && note.classLevel !== selectedClass) return false;
      if (!q) return true;
      return (
        note.title.toLowerCase().includes(q) ||
        note.summary.toLowerCase().includes(q) ||
        note.eyebrow.toLowerCase().includes(q) ||
        note.subject.toLowerCase().includes(q)
      );
    });
  }, [selectedSubject, selectedClass, query]);

  const groupedBySubject = useMemo(() => {
    const subjectsToShow =
      selectedSubject === "all"
        ? SUBJECTS
        : SUBJECTS.filter((s) => s.id === selectedSubject);

    return subjectsToShow
      .map((subject) => ({
        subject,
        notes: filteredNotes.filter((n) => n.subject === subject.id),
      }))
      .filter((group) => group.notes.length > 0);
  }, [filteredNotes, selectedSubject]);

  return (
    <div>
      {/* Filter Controls */}
      <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-5 mb-8 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Subject Pills */}
          <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Filter by subject">
            <button
              type="button"
              onClick={() => setSelectedSubject("all")}
              className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                selectedSubject === "all"
                  ? "bg-[#1b365d] text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Subjects
            </button>
            {SUBJECTS.map((subject) => (
              <button
                key={subject.id}
                type="button"
                onClick={() => setSelectedSubject(subject.id)}
                className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  selectedSubject === subject.id
                    ? "bg-[#1b365d] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {subject.name}
              </button>
            ))}
          </div>

          {/* Class Filter */}
          <div className="flex items-center gap-1.5 shrink-0">
            {(["all", "Class 11", "Class 12"] as ClassFilter[]).map((cls) => (
              <button
                key={cls}
                type="button"
                onClick={() => setSelectedClass(cls)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold border transition-colors cursor-pointer ${
                  selectedClass === cls
                    ? "border-[#1e6f5c] bg-[#eef7f4] text-[#1e6f5c]"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                }`}
              >
                {cls === "all" ? "All Classes" : cls}
              </button>
            ))}
          </div>
        </div>

        {/* Search Input */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-100">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search topics (e.g., Magnetic Nature, Gauss, Mitosis, Integration)..."
            className="w-full sm:max-w-md px-3.5 py-2 text-sm rounded-md border border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1b365d]"
          />
          <p className="text-xs text-slate-500">
            Showing <strong className="text-slate-800">{filteredNotes.length}</strong>{" "}
            {filteredNotes.length === 1 ? "topic" : "topics"} · Click any topic to open notes in a new page
          </p>
        </div>
      </div>

      {/* Topic List Grouped by Subject */}
      {groupedBySubject.length === 0 ? (
        <div className="bg-white rounded-lg border border-slate-200 p-10 text-center">
          <p className="text-slate-700 font-medium">No matching topics found.</p>
          <p className="text-sm text-slate-500 mt-1">
            Try clearing your search or switching the subject/class filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedSubject("all");
              setSelectedClass("all");
              setQuery("");
            }}
            className="mt-4 px-4 py-2 text-xs font-semibold rounded-md bg-[#1b365d] text-white hover:bg-[#142847] cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-10">
          {groupedBySubject.map(({ subject, notes }) => (
            <section key={subject.id} aria-labelledby={`subject-${subject.id}`}>
              <div className="flex items-baseline justify-between border-b-2 border-[#1b365d] pb-2 mb-4">
                <div>
                  <h2
                    id={`subject-${subject.id}`}
                    className="font-study-serif text-xl font-bold text-[#1b365d]"
                  >
                    {subject.name}
                  </h2>
                </div>
                <span className="text-xs font-medium text-slate-500">
                  {notes.length} {notes.length === 1 ? "topic" : "topics"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {notes.map((note: TopicNote) => (
                  <a
                    key={note.slug}
                    href={`/notes/${note.subject}/${note.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white rounded-lg border border-slate-200 p-5 hover:border-[#1b365d] hover:shadow-sm transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2.5">
                        <span className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                          {note.classLevel}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-[#1e6f5c]">
                          {note.eyebrow.replace(" STUDY GUIDE", "")}
                        </span>
                        {note.pdfPath && (
                          <span className="ml-auto inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded bg-[#eef7f4] text-[#1e6f5c] border border-[#cde6dd]">
                            PDF Included
                          </span>
                        )}
                      </div>

                      <h3 className="font-study-serif text-base font-bold text-[#1b365d] group-hover:text-[#1e6f5c] transition-colors leading-snug">
                        {note.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                        {note.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#1b365d]">
                      <span>{note.sections.length} structured sections</span>
                      <span className="inline-flex items-center gap-1 text-[#1e6f5c] group-hover:underline">
                        Open notes
                        <span aria-hidden="true">↗</span>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
