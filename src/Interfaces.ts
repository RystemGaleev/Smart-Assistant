export interface ICard {
  id: string;
  title: string;
  description: string;
  subTasks: ITask[];
}

export interface ITask {
  id: string;
  description: string;
  completed: boolean;
}
