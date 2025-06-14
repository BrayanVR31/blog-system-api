import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tag } from "../tag.entity";
import { Repository } from "typeorm";
import CreateTagDto from "../dtos/create-tag.dto";
import UpdateTagDto from "../dtos/update-tag.dto";

@Injectable()
export class TagService {
  constructor(@InjectRepository(Tag) private tagRepository: Repository<Tag>){}
  async findAll(): Promise<Tag[]> {
      return await this.tagRepository.find();
    }
  
    async save(createdTag: CreateTagDto): Promise<Tag> {
      return await this.tagRepository.save(createdTag);
    }
  
    async findOne(id: string): Promise<Tag | null> {
      return await this.tagRepository.findOne({
        where: {
          id
        }
      })
    }
  
    async deleteOne(id: string) {
      await this.tagRepository.delete({
        id
      });
    }
  
    async updateOne(id: string, updatedTag: UpdateTagDto): Promise<Tag|null> {
      await this.tagRepository.update({
        id
      }, updatedTag);
      return await this.tagRepository.findOne({ where: {
        id
      } });
    }
}