import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './entities/cat.entity';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { waitForDebugger } from 'inspector';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat) private readonly catRepository: Repository<Cat>,
  ) { }
  private readonly cats: Cat[] = [];

  async create(cat: CreateCatDto) {
    return await this.catRepository.save(cat);
  }

  async findAll(): Promise<Cat[]> {
    return await this.catRepository.find();
  }

  async findById(id: number): Promise<Cat> {
    return await this.catRepository.findOne({
      where: { id: id }
    })
  }

  async updateById(
    catDto: UpdateCatDto,
    id: number
  ): Promise<Cat> {
    const oldcat = await this.findById(id);
    if (!oldcat) {
      return null;
    }

    oldcat.name = catDto.name;
    oldcat.breed = catDto.breed;
    oldcat.age = catDto.age;

    return await this.catRepository.save(oldcat);
  }

  async removeById(
    id: number
  ): Promise<void> {
    const catToRemove = await this.findById(id);
    if (!catToRemove) {
      return null;
    }
    await this.catRepository.remove(catToRemove);
  }
}
