import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async register(email: string) {
    return console.log('email', email);
  }
}
