import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { User } from './entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: 'postgres',
  database: 'NestAPI',
  entities: ['dist/**/*/*.entity.ts'],
  synchronize: true,
};
