import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import CreateCategoryDto from "./dtos/create-category.dto";
import UpdateCategoryDto from './dtos/update-category.dto';
import GetParamsCategoryDto from './dtos/get-params-category.dto';

@Controller('categories')
export class CategoriesController {
  @Get()
  getCategories() {
    return "Get categories";
  }

  @Get('{:id}')
  getCategoryById(@Param() params: GetParamsCategoryDto) {
    return "Get category by id";
  }

  @Post()
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return "The category was created!";
  }
  
  @Patch('{:id}')
  updateCategory(@Body() updateCategoryDto: UpdateCategoryDto, @Param() params: GetParamsCategoryDto) {
    return "The category was updated!";
  }

  @Delete('{:id}')
  destroyCategory(@Param() params: GetParamsCategoryDto) {
  }
}
