import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class CreateUserArgs {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
