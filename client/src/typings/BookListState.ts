import { BookInfo } from './BookInfo';

export interface BookListState {
  books: BookInfo[];
  isLoading: boolean;
  error: Error | null;
}
