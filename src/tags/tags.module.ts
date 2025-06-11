import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagService } from "./providers/tag.service";

@Module({
  controllers: [TagsController],
  providers: [TagService]
})
export class TagsModule { }
