import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import CreateTagDto from './dtos/create-tag.dto';
import UpdateTagDto from './dtos/update-tag.dto';
import GetParamsTagDto from './dtos/get-params-tag.dto';
import { TagService } from "./providers/tag.service";

@Controller('tags')
export class TagsController {
  constructor(private readonly tagService: TagService) { }
  @Get()
  getTags() {
    return this.tagService.findAll();
  }

  @Get("{:id}")
  getTagById(@Param() params: GetParamsTagDto) {
    return this.tagService.findOne(params.id);
  }

  @Post()
  createTag(@Body() createTagDto: CreateTagDto) {
    return this.tagService.save(createTagDto);
  }

  @Patch("{:id}")
  updateTag(@Body() updateTagDto: UpdateTagDto, @Param() params: GetParamsTagDto) {
    return this.tagService.updateOne(params.id, updateTagDto);
  }

  @Delete("{:id}")
  destroyTag(@Param() params: GetParamsTagDto) {
    this.tagService.deleteOne(params.id);
  }
}

