import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { Category } from '../category.entity';
import CreateCategoryDto from '../dtos/create-category.dto';
import UpdateCategoryDto from '../dtos/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) { }
  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async save(category: CreateCategoryDto): Promise<Category> {
    return await this.categoryRepository.save(category);
  }

  async findOne(id: string): Promise<Category | null> {
    return await this.categoryRepository.findOne({
      where: {
        id
      }
    })
  }

  async deleteOne(id: string) {
    await this.categoryRepository.delete({
      id
    });
  }

  async updateOne(id: string, updatedCategory: UpdateCategoryDto): Promise<Category|null> {
    await this.categoryRepository.update({
      id
    }, updatedCategory);
    return await this.categoryRepository.findOne({ where: {
      id
    } });
  }
}
