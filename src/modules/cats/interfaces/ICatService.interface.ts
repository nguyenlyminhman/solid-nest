import { ICat } from './ICat.interface';

export interface ICatService {
  getCats(): Promise<ICat[]>;
  createCat(): Promise<ICat>;
  updateCat(id: number): Promise<ICat>;
  deleteCat(id: number): Promise<void>;
}
