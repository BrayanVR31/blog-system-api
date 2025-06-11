import { Controller, Post, Patch, Get, Delete, Body, Param } from '@nestjs/common';
import CreateCommentDto from './dtos/create-comment.dto';
import UpdateCommentDto from './dtos/update-comment.dto';
import GetParamsCommentDto from './dtos/get-params-comment.dto';

@Controller('comments')
export class CommentsController {
  @Get()
  getComments() {
    return "list of comments";
  }

  @Get("{:id}")
  getCommentById(@Param() params: GetParamsCommentDto) {
    return "Comment " + params.id;
  }

  @Post()
  createComment(@Body() createCommentDto: CreateCommentDto) {
    return createCommentDto;
  }

  @Patch("{:id}")
  updateComment(@Body() updateCommentDto: UpdateCommentDto, @Param() params: GetParamsCommentDto) {
    return updateCommentDto;
  }

  @Delete("{:id}")
  destroyComment(@Param() params: GetParamsCommentDto) {}
}
