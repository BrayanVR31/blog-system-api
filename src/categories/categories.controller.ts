import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import CreateCategoryDto from "./dtos/create-category.dto";
import UpdateCategoryDto from './dtos/update-category.dto';
import GetParamsCategoryDto from './dtos/get-params-category.dto';
import { CategoriesService } from './providers/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }
  @Get()
  getCategories() {
    return this.categoriesService.findAll();
  }

  @Get('{:id}')
  getCategoryById(@Param() params: GetParamsCategoryDto) {
    return this.categoriesService.findOne(params.id);
  }

  @Post()
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.save(createCategoryDto);
  }

  @Patch('{:id}')
  updateCategory(@Body() updateCategoryDto: UpdateCategoryDto, @Param() params: GetParamsCategoryDto) {
    return this.categoriesService.updateOne(params.id, updateCategoryDto);
  }

  @Delete('{:id}')
  destroyCategory(@Param() params: GetParamsCategoryDto) {
    this.categoriesService.deleteOne(params.id);
  }
}
