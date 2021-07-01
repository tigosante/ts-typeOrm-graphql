import { Args, Int, Mutation, Parent, Query, Resolver } from "@nestjs/graphql"
import { User } from "src/entitys/user.entity"
import { UserService } from "src/services/user.service"
import { CreateUserArgs } from "src/types/user.types"

@Resolver(of => User)
export class UserController {
  constructor(
    private userService: UserService,
  ) { }

  @Query(returns => User)
  async getUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.userService.findById(id)
  }

  @Mutation()
  async createUser(@Parent() args: CreateUserArgs) {
    return this.userService.createUser(args)
  }
}
