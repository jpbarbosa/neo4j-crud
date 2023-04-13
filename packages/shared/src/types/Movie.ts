import { Node, Integer } from 'neo4j-driver';

export type Movie = {
  id?: number;
  title: string;
  released: number;
  tagline: string;
};

export type MovieNode = Node<Integer, Movie>;

export type MoviesQueryResult = {
  movie: Movie;
};
