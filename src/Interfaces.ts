export interface ICard {
  id: string;
  title: string;
  description: string;
  subTasks: ITask[];
  status: 'Not urgent' | 'Simple' | 'Critical' | 'Waiting' | 'Completed';
  color: '#2773e5' | '#f5222d' | '#fdd835' | '#fdae6b' | '#fd8d3c';
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
