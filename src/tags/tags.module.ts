import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagService } from "./providers/tag.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tag])],
  controllers: [TagsController],
  providers: [TagService]
})
export class TagsModule { }
