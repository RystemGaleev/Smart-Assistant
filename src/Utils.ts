import { IPost } from './Interfaces';

export const filterItems = (searchItem: IPost[], value: string) => {
  return searchItem.filter(
    (post: any) =>
      post.title.toLowerCase().includes(value.toLowerCase()) || post.description.toLowerCase().includes(value.toLowerCase()),
  );
};

export const optionsSelect = [
  { value: 'Completed', label: 'Completed' },
  { value: 'Waiting', label: 'Waiting' },
  { value: 'Other', label: 'Other' },
  { value: 'Not urgent', label: 'Not urgent' },
  { value: 'Simple', label: 'Simple' },
  { value: 'Critical', label: ' Critical' },
];

export const optionsFilter = [
  { value: 'All', label: 'All' },
  { value: 'Completed', label: 'Completed' },
  { value: 'Waiting', label: 'Waiting' },
  { value: 'Other', label: 'Other' },
  { value: 'Not urgent', label: 'Not urgent' },
  { value: 'Simple', label: 'Simple' },
  { value: 'Critical', label: ' Critical' },
];
