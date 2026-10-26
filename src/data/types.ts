export interface Media {
  /** Path inside src/assets/projects/, e.g. 'diplomacy/board.png' or 'crf/demo.mp4'. */
  src: string;
  alt: string;
  caption?: string;
  /** Videos only: thumbnail shape, e.g. '9 / 16' for a phone recording. Defaults to 16 / 9. */
  aspect?: string;
}

export interface Entry {
  name: string;
  /** Shown dimmed next to the name. */
  role?: string;
  /** Right-hand column, dimmed: dates or other context. */
  meta?: string;
  /** Right-hand column, bright: an outcome worth noticing. Takes precedence over `meta`. */
  result?: string;
  /** Replaces the right-hand column with a pulsing "ongoing" marker. */
  ongoing?: boolean;
  /** Short technical notes, revealed when the row is opened. */
  points?: string[];
  /** Photos and videos, shown under the points. */
  media?: Media[];
  stack?: string[];
  links?: { label: string; href: string }[];
}
