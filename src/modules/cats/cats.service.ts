import { Injectable } from '@nestjs/common';
import { async } from 'rxjs';
import { ICatService } from './interfaces/ICatService.interface';
import { ICat } from './interfaces/ICat.interface';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CatsService implements ICatService {
  constructor(readonly prisma: PrismaService) {}

  async getCats(): Promise<ICat[]> {
    const cats = await this.prisma.cats.findMany();
    return cats;
  }

  createCat(): Promise<ICat> {
    throw new Error('Method not implemented.');
  }

  updateCat(id: number): Promise<ICat> {
    throw new Error('Method not implemented.');
  }

  deleteCat(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
