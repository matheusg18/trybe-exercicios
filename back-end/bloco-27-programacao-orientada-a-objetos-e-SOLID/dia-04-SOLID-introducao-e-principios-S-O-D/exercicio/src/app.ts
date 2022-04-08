import { PrismaClient } from '@prisma/client';
import express from 'express';
import Controller from './plant/controller';
import Repository from './plant/repository';
import Service from './plant/service';

const app = express();
const controller = new Controller(new Service(new Repository(new PrismaClient())));

app.get('/plant', controller.getAll);

app.listen(3000, () => console.log('Online'));
