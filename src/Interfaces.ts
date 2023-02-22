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

export interface IPost {
  id?: string;
  title: string;
  description: string;
  img?: string;
  index?: number | string;
}

export interface IModalProps {
  toggleModal: () => void;
}
