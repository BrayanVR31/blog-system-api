import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import CreateReactionDto from './dtos/create-reaction.dto';
import UpdateReactionDto from './dtos/update-reaction.dto';
import GetParamsReactionDto from './dtos/get-params-reaction.dto';

@Controller('reactions')
export class ReactionsController {
  @Get()
  getReactions() {
    return "reaction list";
  }

  @Get("{:id}")
  getReactionById(@Param() params: GetParamsReactionDto) {
    return "reaction: " + params.id;
  }

  @Post()
  createReaction(@Body() createReactionDto: CreateReactionDto) {
    return createReactionDto;
  }

  @Patch("{:id}")
  updateReaction(@Body() updateReactionDto: UpdateReactionDto, @Param() params: GetParamsReactionDto){
    return updateReactionDto;
  }

  @Delete("{:id}")
  destroyReaction(@Param() params: GetParamsReactionDto){}
}
