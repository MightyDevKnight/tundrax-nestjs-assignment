import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  // async findOne(username: string): Promise<User | undefined> {
  //   return this.users.find((user) => user.username === username);
}