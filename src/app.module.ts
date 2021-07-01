import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module( {
  imports: [
    GraphQLModule.forRoot( {
      autoSchemaFile: join( process.cwd(), 'src/schema.gql' ),
      sortSchema: true,
      debug: false,
      playground: false,
      typePaths: [ './**/*.graphql' ],
      definitions: {
        path: join( process.cwd(), 'src/graphql.ts' ),
        outputAs: 'class',
      },

    } ),
  ],
  controllers: [ AppController ],
  providers: [ AppService, ],
} )
export class AppModule { }
