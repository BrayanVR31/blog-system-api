import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { Category } from '../category.entity';
import CreateCategoryDto from '../dtos/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) { }
  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  save(category: CreateCategoryDto): Promise<Category> {
    return this.categoryRepository.save(category);
  }
}
