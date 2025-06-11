import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import CreateFollowerDto from './dtos/create-follower.dto';
import GetParamsFollowerDto from './dtos/get-params-follower.dto';

@Controller('followers')
export class FollowersController {
  @Post()
  followUser(@Body() createFollowerDto :CreateFollowerDto) {
    return createFollowerDto;
  }

  @Delete("{:id}")
  unFollowUser(@Param() params: GetParamsFollowerDto) {
    return params.id;
  }
}
