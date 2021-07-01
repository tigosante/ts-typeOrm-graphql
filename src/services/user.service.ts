import { Injectable, Inject } from '@nestjs/common'
import { CreateUserArgs } from 'src/types/user.types'
import { Repository } from 'typeorm'
import { User } from '../entitys/user.entity'

@Injectable()
export class UserService {

  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) { }

  async findById(id: number): Promise<User> {
    return this.userRepository.findOne({ id })
  }

  async createUser(args: CreateUserArgs): Promise<User> {
    return this.userRepository.save({ ...args } as User)
  }
}
