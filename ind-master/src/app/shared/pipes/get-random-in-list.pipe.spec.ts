import { getRandomInList } from './get-random-in-list.pipe';

describe('GetRandomInListPipe', () => {
  it('create an instance', () => {
    const pipe = new getRandomInList();
    expect(pipe).toBeTruthy();
  });
});
