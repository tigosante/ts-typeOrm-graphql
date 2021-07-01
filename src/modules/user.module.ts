import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/database.module';
import { UserProviders } from 'src/providers/user.providers';
import { UserService } from 'src/services/user.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...UserProviders,
    UserService,
  ],
})
export class UserModule {}
