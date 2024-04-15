import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { UpdateCatDto } from './dto/update-cat.dto';

@UseGuards(RolesGuard)
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Post()
  @Roles('admin')
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', new ParseIntPipe())
    id: number,
  ): Promise<Cat | null> {
    const cat = await this.catsService.findById(id);
    if (!cat) {
      return null;
    }
    return cat;
  }

  @Put(':id')
  @Roles('admin')
  async updateOne(
    @Body() catDto: UpdateCatDto,
    @Param('id', new ParseIntPipe())
    id: number
  ): Promise<Cat> {
    return await this.catsService.updateById(catDto, id);
  }

  @Delete(':id')
  @Roles('admin')
  async removeOne(
    @Param('id', new ParseIntPipe())
    id: number,
  ): Promise<void> {
    return await this.catsService.removeById(id);
  }
}
