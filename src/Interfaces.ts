export interface ICard {
  id: string;
  title: string;
  description: string;
  subTasks: ITask[];
  status: IStatus[];
}

export interface ITask {
  id: string;
  description: string;
  completed: boolean;
}

export interface IStatus {
  label?: string;
  color: string;
}
