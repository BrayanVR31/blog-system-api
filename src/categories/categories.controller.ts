import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import CreateCategoryDto from "./dtos/create-category.dto";
import UpdateCategoryDto from './dtos/update-category.dto';
import GetParamsCategoryDto from './dtos/get-params-category.dto';
import { CategoriesService } from './providers/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }
  @Get()
  async getCategories() {
    return await this.categoriesService.findAll();
  }

  @Get('{:id}')
  getCategoryById(@Param() params: GetParamsCategoryDto) {
    return "Get category by id";
  }

  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoriesService.save(createCategoryDto);
  }

  @Patch('{:id}')
  updateCategory(@Body() updateCategoryDto: UpdateCategoryDto, @Param() params: GetParamsCategoryDto) {
    return "The category was updated!";
  }

  @Delete('{:id}')
  destroyCategory(@Param() params: GetParamsCategoryDto) {
  }
}
