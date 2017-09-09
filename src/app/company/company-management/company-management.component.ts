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

  constructor(private decServ: DecisionsService) {
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
          employee.hire = obj.productor;
        }
        if(employee.type === "Sellor"){
          employee.hire = obj.sellor;
        }
      })
    });
    this.hireFireOutput.emit(this.hireFire);
  }

  changement(): void{
    this.hireFireOutput.emit(this.hireFire);
  }

}
