import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { DbService } from '../db/db.service';

@Injectable()
export class AuthService {
  constructor(private db: DbService, private jwtService: JwtService) {}

  async validateUser(name: string, password: string): Promise<any> {
    let user = await this.db.user.findFirst({ where: { name }});

    if (user && user.password === password) {
      return user;
    }

    return null;
  }

  async login(user: User) {
    let payload = {
      name: user.name,
      sub: user.id,
    };
    
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
