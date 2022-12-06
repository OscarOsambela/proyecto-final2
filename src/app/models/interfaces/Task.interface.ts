export enum Levels{
  "Info",
  "Urgent",
  "Blocking"
}

export interface ITask{
  title: string;
  description?: string;//?opcional
  completed: boolean;
  level: Levels
}
