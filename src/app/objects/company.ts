import { Machine }  from './machine';
import { Product }  from './product';
import { Employee } from './salary';
import { Decision } from './decision';
import { Result }   from './result';

export class Company {
  name: string;
  socialCapital: number;
  nbMachine: number;
  companyMachinery: Machine[];
  companyProduct: Product[];
  employeesList: Employee[];
  decision?: Decision;
  result?: Result[];
}
