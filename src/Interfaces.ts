export interface ICard {
  id: string;
  title: string;
  description: string;
  subTasks: ITask[];
  status: 'Not urgent' | 'Simple' | 'Critical' | 'Waiting' | 'Completed' | 'Other' | 'All';
  color: '#2773e5' | '#b97521' | '#b92121' | '#727272' | '#21b95d' | '#8327d7';
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
