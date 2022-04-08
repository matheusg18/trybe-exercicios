import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.plant.createMany({
    data: [
      {
        breed: 'Bromelia',
        size: 102,
        needsSun: false,
        origin: 'Argentina',
        waterFrequency: 3,
      },
      {
        breed: 'Orquidea',
        size: 99,
        needsSun: true,
        origin: 'Brazil',
        waterFrequency: null,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
