import { Injectable, UnauthorizedException } from '@nestjs/common';
import User from '../entity/User';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async register(email: string, username: string, password: string) {
    // 이메일, 유저이름이 이미 저장되고 사용되고 있는지 확인.
    const emailUser = await User.findOneBy({ email });
    const usernameUser = await User.findOneBy({ username });

    if (emailUser) {
      throw new UnauthorizedException(
        '이미 해당 이메일 주소가 사용되었습니다..',
      );
    }
    if (usernameUser) {
      throw new UnauthorizedException(
        '이미 해당 사용자 이름이 사용되었습니다..',
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User();
    user.email = email;
    user.username = username;
    user.password = hashedPassword;

    await user.save();
    console.log('BackService', user);

    return user;
  }
}
