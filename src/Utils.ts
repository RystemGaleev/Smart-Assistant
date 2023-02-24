import { IPost } from './Interfaces';

export const filterItems = (searchItem: IPost[], value: string) => {
  return searchItem.filter(
    (post: any) =>
      post.title.toLowerCase().includes(value.toLowerCase()) || post.description.toLowerCase().includes(value.toLowerCase()),
  );
};
