import { biologyNotes } from "./biology";
import { chemistryNotes } from "./chemistry";
import { mathematicsNotes } from "./mathematics";
import { physicsNotes } from "./physics";
import { SUBJECTS, SubjectId, SubjectInfo, TopicNote } from "./types";

export const ALL_NOTES: TopicNote[] = [
  ...chemistryNotes,
  ...physicsNotes,
  ...biologyNotes,
  ...mathematicsNotes,
];

export function getNotesBySubject(subject: SubjectId): TopicNote[] {
  return ALL_NOTES.filter((note) => note.subject === subject);
}

export function getNoteBySlug(subject: string, slug: string): TopicNote | undefined {
  return ALL_NOTES.find((note) => note.subject === subject && note.slug === slug);
}

export function getSubjectInfo(subject: string): SubjectInfo | undefined {
  return SUBJECTS.find((s) => s.id === subject);
}

export { SUBJECTS };
export type { SubjectId, SubjectInfo, TopicNote };
