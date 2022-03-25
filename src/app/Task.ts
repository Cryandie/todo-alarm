export interface Task {
  id?: number | string;
  text: string;
  day: string | Date;
  reminder: boolean;
  done: boolean;
  edited?: boolean;
}
