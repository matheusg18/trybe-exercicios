import { RequestHandler } from 'express';
import Service from './service';

class Controller {
  private service: Service;

  constructor(service: Service) {
    this.service = service;
  }

  public getAll: RequestHandler = async (_req, res) => {
    const plants = await this.service.getAll();

    res.status(200).json(plants);
  };
}

export default Controller;
