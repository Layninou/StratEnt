import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Object
import { Employee } from '../../objects/salary';
import { HireFire } from '../../objects/decision/hire-fire';

// Service
import { DecisionsService } from '../../service/decisions.service';

@Component({
  selector: 'company-management',
  templateUrl: './company-management.component.html',
  styleUrls: ['./company-management.component.css']
})
export class CompanyManagementComponent implements OnInit {

  @Input() employees: Employee[];
  @Input() hireFire: HireFire[];
  @Output('hire-fire') hireFireOutput: EventEmitter<HireFire[]> = new EventEmitter<HireFire[]>();
  numberEmployee: any;

  constructor(private decServ: DecisionsService) {
    this.decServ.getEmployee().subscribe( (employee) =>{
      this.numberEmployee = employee;
    });
  }

  ngOnInit() {
    this.hireFire = [];

    this.employees.map(
      (employee) => this.hireFire.push({
        type: employee.type,
        hire: 0,
        fire: 0
      })
    );



    this.decServ.getHire().subscribe( (obj) => {
      this.hireFire.map( (employee) => {
        if(employee.type === "Productor"){

          if(obj.productor > 0){
            employee.hire = obj.productor;
            employee.fire = 0;
          } else if(obj.productor < 0){
            employee.hire = 0;
            employee.fire = obj.productor;
          } else{
            employee.hire = 0;
            employee.fire = 0;
          }

        }
        if(employee.type === "Sellor"){

          if(obj.sellor > 0){
            employee.hire = obj.sellor;
            employee.fire = 0;
          } else if(obj.sellor < 0){
            employee.hire = 0;
            employee.fire = obj.sellor;
          } else{
            employee.hire = 0;
            employee.fire = 0;
          }
        }
        if(employee.type === "Manager"){

          if(obj.manager > 0){
            employee.hire = obj.manager;
            employee.fire = 0;
          } else if(obj.manager < 0){
            employee.hire = 0;
            employee.fire = obj.manager;
          } else{
            employee.hire = 0;
            employee.fire = 0;
          }

        }
      })
    });
    this.hireFireOutput.emit(this.hireFire);
  }

  changement(): void{
    this.hireFireOutput.emit(this.hireFire);
  }

  isVisible(n: number): boolean{
    if(n > 0){
      return true;
    }
    else{
      return false;
    }
  }

}
