import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import CreateUserDto from '../dtos/create-user.dto';
import UpdateUserDto from '../dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
  async findAll(): Promise<User[]> {
        return await this.userRepository.find();
      }
    
      async save(createdUser: CreateUserDto): Promise<User> {
        return await this.userRepository.save(createdUser);
      }
    
      async findOne(id: string): Promise<User | null> {
        return await this.userRepository.findOne({
          where: {
            id
          }
        })
      }
    
      async deleteOne(id: string) {
        await this.userRepository.delete({
          id
        });
      }
    
      async updateOne(id: string, updatedUser: UpdateUserDto): Promise<User|null> {
        await this.userRepository.update({
          id
        }, updatedUser);
        return await this.userRepository.findOne({ where: {
          id
        } });
      }  
}
