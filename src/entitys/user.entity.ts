import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Field, Int, ObjectType } from '@nestjs/graphql'

@Entity()
@ObjectType()
export class User
{
  @PrimaryGeneratedColumn()
  @Field( type => Int )
  id: number

  @Column( { length: 100 } )
  @Field( type => String )
  name: string

  @Field( type => String )
  @Column( 'text' )
  email: string

  @Field( type => String )
  @Column( 'text' )
  password: string
}
