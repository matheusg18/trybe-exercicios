import Repository from './repository';

class Service {
  private repository: Repository;

  constructor(repository: Repository) {
    this.repository = repository;
  }

  public async getAll() {
    return this.repository.getAll();
  }
}

export default Service;
