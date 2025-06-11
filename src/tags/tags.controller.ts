import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import CreateTagDto from './dtos/create-tag.dto';
import UpdateTagDto from './dtos/update-tag.dto';
import GetParamsTagDto from './dtos/get-params-tag.dto';

@Controller('tags')
export class TagsController {
  @Get()
  getTags() {
    return "List of tags";
  }

  @Get("{:id}")
  getTagById(@Param() params : GetParamsTagDto) {
    return "tag " + params.id;
  }

  @Post()
  createTag(@Body() createTagDto: CreateTagDto){
    return createTagDto;
  }

  @Patch("{:id}")
  updateTag(@Body() updateTagDto: UpdateTagDto, @Param() params: GetParamsTagDto) {
    return updateTagDto;
  }

  @Delete("{:id}")
  destroyTag(@Param() params: GetParamsTagDto) {}
}

