import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/users.schema';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  imports:[
    RolesModule,
    MongooseModule.forFeature([{
    name: User.name,
    schema: UserSchema
  }])],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService,MongooseModule],
})
export class UsersModule {}
