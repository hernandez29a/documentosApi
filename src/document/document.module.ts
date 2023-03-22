import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from '../common/common.module';
import { AuthModule } from '../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Document } from './entities/document.entity';

@Module({
  controllers: [DocumentController],
  providers: [DocumentService],
  imports: [
    ConfigModule,
    CommonModule,
    AuthModule,
    TypeOrmModule.forFeature([Document]),
  ],
  exports: [],
})
export class DocumentModule {}
