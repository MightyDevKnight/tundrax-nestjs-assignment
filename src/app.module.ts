import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
import { Cat } from './cats/entities/cat.entity';
import { UserModule } from './users/users.module';
import { User } from './users/users.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [Cat, User],
        synchronize: true, // Set to true for development (auto-create tables)
      })
    }),
    CoreModule,
    CatsModule,
    UserModule,
  ],
})
export class AppModule { }