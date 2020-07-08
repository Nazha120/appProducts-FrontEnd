export interface IProduct{
  id?: number;
  libelle?: string;
  reference?: number;
  prix?: number;
}
export class Product implements IProduct{
  constructor(public id?: number, public libelle?: string , public reference?: number, public prix?: number) {
  }
}
