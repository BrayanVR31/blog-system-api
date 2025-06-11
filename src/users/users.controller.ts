import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import CreateUserDto from './dtos/create-user.dto';
import UpdateUserDto from './dtos/update-user.dto';
import GetParamsUserDto from './dtos/get-params-user.dto';

@Controller('users')
export class UsersController {
  @Get()
    getUsers() {
      return "List of users";
    }
  
    @Get("{:id}")
    getUserById(@Param() params : GetParamsUserDto) {
      return "user " + params.id;
    }
  
    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
      return createUserDto;
    }
  
    @Patch("{:id}")
    updateUser(@Body() updateUserDto: UpdateUserDto, @Param() params: GetParamsUserDto) {
      return updateUserDto;
    }
  
    @Delete("{:id}")
    destroyUser(@Param() params: GetParamsUserDto) {}
}
