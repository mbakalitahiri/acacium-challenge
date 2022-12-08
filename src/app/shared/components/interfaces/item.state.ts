import { MovieInterface } from '@app/shared/components/interfaces/movie.interface';

export interface ItemState {
  loading: boolean;
  items: ReadonlyArray<MovieInterface[]>;
}
