import { PrismaClient } from '@prisma/client';

class Repository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async getAll() {
    return this.prisma.plant.findMany();
  }
}

export default Repository;
