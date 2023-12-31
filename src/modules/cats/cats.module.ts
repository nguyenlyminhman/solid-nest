import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService, PrismaService],
})
export class CatsModule {}
