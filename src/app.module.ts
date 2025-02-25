import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
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
import { ErrorHandlerMiddleware } from './middleware/error-handler.middleware';
import { CacheModule } from '@nestjs/cache-manager';


@Module({
 
  imports: [
    CacheModule.register(/*{
      host: `${process.env.REDIS_HOST}`,
      store: redisStore,
      port: `${process.env.REDIS_PORT}`,
      isGlobal: true,
    }*/),
    ConfigModule.forRoot({
      isGlobal: true, // Makes env variables available globally
    }),
    MongooseModule.forRoot('mongodb://localhost/authDB'),
   AuthModule, UsersModule, MedicalRecordsModule, MedicalServiceModule, AppointmentModule],
  controllers: [AppController, MedicalRecordsController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ErrorHandlerMiddleware).forRoutes('*');
  }
}
