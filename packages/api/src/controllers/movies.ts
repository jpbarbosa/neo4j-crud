import { NextFunction } from 'express';
import { AppResponse, Movie } from '@neo4j-crud/shared';
import * as graph from '@neo4j-crud/graph';

export const moviesController = {
  getAll: async (req, res: AppResponse<Movie[]>, next: NextFunction) => {
    try {
      const movies = await graph.movies(req.neo4jSession).getAll();
      res.send(movies);
    } catch (err) {
      next(err);
    }
  },

  getById: async (req, res: AppResponse<string>, next: NextFunction) => {
    res.send('To be implemented');
  },

  create: async (req, res: AppResponse<string>, next: NextFunction) => {
    res.send('To be implemented');
  },

  update: async (req, res: AppResponse<string>, next: NextFunction) => {
    res.send('To be implemented');
  },

  remove: async (req, res: AppResponse<string>, next: NextFunction) => {
    res.send('To be implemented');
  },
};
