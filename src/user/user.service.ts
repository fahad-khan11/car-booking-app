import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role, User } from './entities/user.entity';
import { In, Repository } from 'typeorm';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

  ) {}
async  create(createUserDto: CreateUserDto) {
    return await this.usersRepository.save(createUserDto);
  }
 async findAll() {
   return await this.usersRepository.find({
    where: { role: Role.HOTEL },
   });
  }



  async findByEmail(email: string) {
    return await this.usersRepository.findOne({where:{email}});

  }

  async findOne(id: number) {
    return await this.usersRepository.findOne({where:{id}});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.usersRepository.delete(id);
  }

    async findByIds(ids: User[]) {
     return this.usersRepository.find({
      where: {
        id: In(ids),
  }
    });
  }
}
