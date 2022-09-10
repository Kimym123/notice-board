import {
  Body,
  Controller,
  ForbiddenException,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterRequestDto } from './dto/register.request.dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async register(@Body() body: RegisterRequestDto) {
    const result = this.userService.register(
      body.email,
      body.username,
      body.password,
    );
    if (result) {
      return result;
    } else {
      throw new ForbiddenException();
    }
  }
}
