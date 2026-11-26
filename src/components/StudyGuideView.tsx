import { NoteBlock, TopicNote } from "@/data/types";

interface StudyGuideViewProps {
  note: TopicNote;
  subjectName: string;
}

function renderBlock(block: NoteBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={index}
          className="font-study-serif text-[14.5px] sm:text-[15px] leading-[1.75] sm:leading-[1.78] text-slate-800 break-words"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      );

    case "subheading":
      return (
        <h3
          key={index}
          className="pt-2 text-[14.5px] sm:text-[15px] font-bold text-[#1e6f5c] tracking-tight leading-snug"
        >
          {block.text}
        </h3>
      );

    case "bullets":
      return (
        <ul
          key={index}
          className="space-y-2.5 pl-4 sm:pl-5 list-disc marker:text-slate-700"
        >
          {block.items.map((item, idx) => (
            <li
              key={idx}
              className="font-study-serif text-[14px] sm:text-[14.5px] leading-[1.7] sm:leading-[1.72] text-slate-800 pl-0.5 sm:pl-1 break-words"
            >
              {item.label && (
                <strong className="font-bold text-slate-900">{item.label} </strong>
              )}
              {item.html && (
                <span dangerouslySetInnerHTML={{ __html: item.html }} />
              )}

              {item.subItems && item.subItems.length > 0 && (
                <ul className="mt-2 space-y-1.5 pl-4 sm:pl-5 list-[circle] marker:text-slate-600">
                  {item.subItems.map((sub, subIdx) => (
                    <li
                      key={subIdx}
                      className="font-study-serif text-[13.5px] sm:text-[14px] leading-[1.66] sm:leading-[1.68] text-slate-800 break-words"
                    >
                      {sub.label && (
                        <strong className="font-bold text-slate-900">
                          {sub.label}{" "}
                        </strong>
                      )}
                      <span dangerouslySetInnerHTML={{ __html: sub.html }} />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div key={index} className="my-2">
          <div className="overflow-x-auto -mx-1 px-1">
            <table className="w-full min-w-[480px] border-collapse text-left text-[12.5px] sm:text-[13.5px] border border-slate-300">
              <thead>
                <tr className="bg-[#1b365d] text-white">
                  {block.headers.map((header, hIdx) => (
                    <th
                      key={hIdx}
                      className="py-2 px-2.5 sm:py-2.5 sm:px-3.5 font-semibold border border-[#1b365d]"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className={rIdx % 2 === 1 ? "bg-[#f3f6fa]" : "bg-white"}
                  >
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className="py-2 px-2.5 sm:py-2.5 sm:px-3.5 border border-slate-200 align-top font-study-serif leading-relaxed text-slate-800"
                        dangerouslySetInnerHTML={{ __html: cell }}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="sm:hidden mt-1.5 text-[11px] text-slate-400">
            Swipe table horizontally if needed →
          </p>
        </div>
      );

    case "formula":
      return (
        <div key={index} className="my-2 overflow-x-auto max-w-full">
          <div
            className="inline-block max-w-full bg-[#f8fafc] border border-slate-300 rounded px-3.5 sm:px-4 py-2.5 font-study-serif text-[13.5px] sm:text-[15px] leading-relaxed font-normal text-slate-900 break-words"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        </div>
      );

    case "callout":
      return (
        <div
          key={index}
          className="my-3 bg-[#f2f8f5] border-l-4 border-[#1e6f5c] px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-r"
        >
          <p className="font-study-serif text-[13.5px] sm:text-[14px] leading-[1.68] sm:leading-[1.7] text-slate-800 break-words">
            <strong className="font-bold text-[#145344]">{block.title} </strong>
            <span dangerouslySetInnerHTML={{ __html: block.html }} />
          </p>
        </div>
      );
  }
}

export default function StudyGuideView({ note, subjectName }: StudyGuideViewProps) {
  return (
    <article className="study-sheet max-w-[820px] mx-auto bg-white border border-slate-200 shadow-sm rounded-lg px-4 py-6 sm:px-12 sm:py-12">
      {/* Study Guide Header — matching the attached PDF */}
      <header className="border-b-2 border-[#1b365d] pb-4 sm:pb-5 mb-6 sm:mb-7">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <p className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-[#1e6f5c]">
            {note.eyebrow}
          </p>
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
            {note.classLevel} · {subjectName}
          </span>
        </div>
        <h1 className="font-study-serif text-[22px] sm:text-[30px] font-bold text-[#1b365d] leading-snug">
          {note.title}
        </h1>
      </header>

      {/* Numbered Study Sections */}
      <div className="space-y-6 sm:space-y-7">
        {note.sections.map((section, sectionIdx) => (
          <section key={sectionIdx} className="space-y-3 sm:space-y-3.5">
            <h2 className="text-[16px] sm:text-[17px] font-bold text-[#1b365d] tracking-tight leading-snug">
              {section.heading}
            </h2>
            <div className="space-y-3 sm:space-y-3.5">
              {section.blocks.map((block, blockIdx) =>
                renderBlock(block, blockIdx)
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Subtle Paper Footer */}
      <footer className="mt-8 sm:mt-10 pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs text-slate-500 font-study-serif">
        <span>{note.title}</span>
        <span className="shrink-0">
          {note.classLevel} · {subjectName}
        </span>
      </footer>
    </article>
  );
}
