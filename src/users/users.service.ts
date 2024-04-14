import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginResponseType } from 'src/common/types';
import { LoginUserDto } from './dto/login-user.dto';
import { EXPIRATION_TIME } from 'src/common/const';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  async createUser(createUserDto: CreateUserDto): Promise<void> {
    const saltOrRounds = 10;
    const user: User = new User();
    user.name = createUserDto.name;
    user.password = await bcrypt.hash(createUserDto.password, saltOrRounds);
    user.role = createUserDto.role;

    this.userRepository.save(user);
  }

  async loginUser(loginUserDto: LoginUserDto): Promise<LoginResponseType | string> {
    const user: User = await this.userRepository.findOne({
      where: { name: loginUserDto.name }
    })

    if (user) {
      const isValid = await bcrypt.compare(loginUserDto.password, user.password);
      if (isValid) {
        const token = jwt.sign({ name: loginUserDto.name }, process.env.JWT_SECRET_KEY, {
          expiresIn: EXPIRATION_TIME
        });
        return {
          tokenExpires: 3600,
          token: token,
          statusCode: '200',
        }
      }
    }

    return {
      statusCode: '401'
    };
  }

}