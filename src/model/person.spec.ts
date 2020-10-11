import { Person } from './person';

describe('Person', () => {
  it('should be defined', () => {
    const person = new Person();
    expect(person).toBeDefined();
  });

  it('has name', () => {
    const arif = new Person();
    arif.name = 'arif';

    expect(arif.name).toBeDefined();
    expect(arif.name).toStrictEqual('arif');
  });
});
