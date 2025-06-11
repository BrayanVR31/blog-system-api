import { Controller, Get, Param, Post, Body, Delete, Patch } from '@nestjs/common';
import CreatePostDto from './dtos/create-post.dto';
import UpdatePostDto from './dtos/update-post.dto';
import GetParamsPostDto from './dtos/get-params-post.dto';


@Controller('posts')
export class PostsController {
  @Get()
  getPosts() {
    return "List of posts";
  }

  @Get('{:id}')
  getPostById(@Param() params: GetParamsPostDto) {
    return "Get post with id: " + params.id;
  }

  @Post()
  createPost(@Body() createPostDto: CreatePostDto ) {
    return createPostDto;
  }

  @Delete('{:id}')
  deletePost(@Param('id') params: GetParamsPostDto) {
  }

  @Patch('{:id}')
  updatePost(@Param('id') params: GetParamsPostDto, @Body() updatePostDto: UpdatePostDto) {
    return updatePostDto;
  }
}
