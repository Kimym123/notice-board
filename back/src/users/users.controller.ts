import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterRequestDto } from './dto/register.request.dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async register(@Body() body: RegisterRequestDto) {
    const result = await this.usersService.register(body.email);
  }
}
