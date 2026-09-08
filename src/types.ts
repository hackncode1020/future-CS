export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isToday: boolean;
  isPast: boolean;
}

export type NavSection = 'home' | 'letter' | 'mentor' | 'journey' | 'wishes' | 'final';
