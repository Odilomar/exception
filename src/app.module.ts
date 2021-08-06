import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { getConnectionOptions } from 'typeorm';
import { UserModule } from './modules/user/user.module';

config();
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), { autoLoadEntities: true }),
    }),
    UserModule,
  ],
})
export class AppModule {}
