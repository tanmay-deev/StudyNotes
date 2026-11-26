export type SubjectId = "physics" | "chemistry" | "biology" | "mathematics";

export type ClassLevel = "Class 11" | "Class 12";

export interface BulletSubItem {
  label?: string;
  html: string;
}

export interface BulletItem {
  label?: string;
  html: string;
  subItems?: BulletSubItem[];
}

export type NoteBlock =
  | { type: "paragraph"; html: string }
  | { type: "subheading"; text: string }
  | { type: "bullets"; items: BulletItem[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "formula"; html: string }
  | { type: "callout"; title: string; html: string };

export interface NoteSection {
  heading: string;
  blocks: NoteBlock[];
}

export interface TopicNote {
  slug: string;
  subject: SubjectId;
  classLevel: ClassLevel;
  eyebrow: string;
  title: string;
  summary: string;
  pdfPath?: string;
  pdfTitle?: string;
  sections: NoteSection[];
}

export interface SubjectInfo {
  id: SubjectId;
  name: string;
  shortLabel: string;
  description: string;
  accentText: string;
  accentBg: string;
  accentBorder: string;
}

export const SUBJECTS: SubjectInfo[] = [
  {
    id: "physics",
    name: "Physics",
    shortLabel: "PHY",
    description: "Mechanics, thermodynamics, electrostatics, and wave optics with key laws and derivations.",
    accentText: "text-blue-900",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-200",
  },
  {
    id: "chemistry",
    name: "Chemistry",
    shortLabel: "CHEM",
    description: "Inorganic, physical, and coordination chemistry guides with worked examples and rules.",
    accentText: "text-emerald-900",
    accentBg: "bg-emerald-50",
    accentBorder: "border-emerald-200",
  },
  {
    id: "biology",
    name: "Biology",
    shortLabel: "BIO",
    description: "Cell biology, plant physiology, molecular genetics, and human immunology study guides.",
    accentText: "text-teal-900",
    accentBg: "bg-teal-50",
    accentBorder: "border-teal-200",
  },
  {
    id: "mathematics",
    name: "Mathematics",
    shortLabel: "MATH",
    description: "Calculus, combinatorics, matrices, and integration techniques with structured formulas.",
    accentText: "text-indigo-900",
    accentBg: "bg-indigo-50",
    accentBorder: "border-indigo-200",
  },
];
