import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { VERSION_NUMBER, EPath } from 'src/constant/api';
import { CatsService } from './cats.service';
import { ApiTags } from '@nestjs/swagger';

@Controller({
  path: EPath.CATS,
  version: VERSION_NUMBER,
})
@ApiTags(EPath.CATS)
export class CatsController {
  constructor(readonly catService: CatsService) {}

  @Get()
  async getCats() {
    return this.catService.getCats();
  }

  @Post()
  async createCat() {
    return this.catService.createCat();
  }

  @Put(':id')
  async updateCat(@Param('id', ParseIntPipe) id: number) {
    return this.catService.updateCat(id);
  }

  @Delete(':id')
  async deleteCat(@Param('id', ParseIntPipe) id: number) {
    return this.catService.deleteCat(id);
  }
}
