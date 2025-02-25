import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dtos/role.dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  async createRole(@Body() role: CreateRoleDto) {
    return this.rolesService.createRole(role);
  }

  
  @Get()
  async findRole(@Query('name') role: string) {
    return this.rolesService.findOneByname(role);
  }
  @Get('all')
  async findRoles() {
    return this.rolesService.getRoles();
  }



}
