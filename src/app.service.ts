import { Injectable } from '@nestjs/common';
import { Person } from './model/person';

@Injectable()
export class AppService {
  getMe(): Person {
    const me = new Person();
    me.name = 'Arif Ikhsanudin';

    return me;
  }
}
