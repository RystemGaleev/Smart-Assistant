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

export interface WeatherApiResponse {
  [weather: string]: any;
  name: string;
  main: MainData;
  snow: SnowData;
  sys: SystemData;
  timezone: number;
  visibility: number;
  weather: WeatherData[];
}

interface MainData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface SnowData {
  [key: string]: number;
}

interface SystemData {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface WeatherData {
  id: number;
  main: string;
  description: string;
  icon: string;
}
