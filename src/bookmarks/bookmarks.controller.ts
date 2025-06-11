import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import CreateBookmarkDto from './dtos/create-bookmark.dto';
import UpdateBookmarkDto from './dtos/update-bookmark.dto';
import GetParamsBookmarkDto from './dtos/get-params-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
  @Get()
    getBookmarks() {
      return "bookmark list";
    }
  
    @Get("{:id}")
    getReactionById(@Param() params: GetParamsBookmarkDto) {
      return "bookmark: " + params.id;
    }
  
    @Post()
    createReaction(@Body() createBookmarkDto: CreateBookmarkDto) {
      return createBookmarkDto;
    }
  
    @Patch("{:id}")
    updateReaction(@Body() updateBookmarkDto: UpdateBookmarkDto, @Param() params: GetParamsBookmarkDto){
      return updateBookmarkDto;
    }
  
    @Delete("{:id}")
    destroyReaction(@Param() params: GetParamsBookmarkDto){}
}
