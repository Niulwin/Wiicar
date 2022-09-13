export interface TPagination<T> {
  limit: number;
  skip: number;
  total: number;
  data: T[];
}
