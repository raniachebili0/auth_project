import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MedicalRecordsModule } from './medical-records/medical-records.module';
import { AppointmentModule } from './appointment/appointment.module';
import { MedicalServiceModule } from './medical-service/medical-service.module';
import { MedicalRecordsController } from './medical-records/medical-records.controller';
import { MedicalRecordsModule } from './medical-records/medical-records.module';


@Module({
 
  imports: [
    MongooseModule.forRoot('mongodb://localhost/authDB'),
   AuthModule, UsersModule, MedicalRecordsModule, MedicalServiceModule, AppointmentModule],
  controllers: [AppController, MedicalRecordsController],
  providers: [AppService],
})
export class AppModule {}
