import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
   expect(new Satellite('fine','fine','fffine','ok',false)).toBeTruthy();
  });
});
