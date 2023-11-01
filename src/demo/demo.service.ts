import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDemoDto } from './dto/create-demo.dto';
import { UpdateDemoDto } from './dto/update-demo.dto';
import usaStates from '../../data/usa-states.json';
import { Demo } from './entities/demo.entity';

@Injectable()
export class DemoService {
  usaStatesList: Demo[];

  constructor() {
    this.usaStatesList = usaStates;
  }

  create(createDemoDto: CreateDemoDto): CreateDemoDto {
    if (createDemoDto.id) {
      const isIdExist = this.usaStatesList.findIndex(
        (x) => x.id === createDemoDto.id,
      );
      if (isIdExist != -1) {
        console.log(isIdExist);
        throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
      } else {
        this.usaStatesList.push(createDemoDto);
        return createDemoDto;
      }
    } else {
      createDemoDto.id =
        this.usaStatesList[this.usaStatesList.length - 1].id + 1;
      return createDemoDto;
    }
  }

  findAll() {
    return `This action returns all demo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demo`;
  }

  update(id: number, updateDemoDto: UpdateDemoDto) {
    return `This action updates a #${id} demo`;
  }

  remove(id: number) {
    return `This action removes a #${id} demo`;
  }
}
