import { Body, Controller, Get, Param, ParseIntPipe, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Collection, User } from '@prisma/client';
import { AuthService } from './auth/auth.service';
import { DbService } from './db/db.service';

@Controller()
export class AppController {
  constructor(
    private readonly db: DbService,
    private authService: AuthService,
  ) {}

  @Get('user/:id')
  getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.db.user.findUnique({ where: { id } });
  }

  @Post('user')
  async createUser(@Body() userData: { name: string, email: string }): Promise<User> {
    let { name, email } = userData;
    return await this.db.user.create({
      data: { name, email },
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('collection')
  async createCollection(@Body('title') title: string): Promise<Collection> {
    return await this.db.collection.create({
      data: { title },
    });
  }

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
