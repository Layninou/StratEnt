import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//Services
import { DecisionsService } from '../../service/decisions.service';

//Objects
import { MachineFlux } from '../../objects/decision/machine-flux';

@Component({
  selector: 'company-machinery',
  templateUrl: './company-machinery.component.html',
  styleUrls: ['./company-machinery.component.css']
})
export class CompanyMachineryComponent implements OnInit {

  @Input() machinery: MachineFlux;
  @Output('machinery') machineryOutput: EventEmitter<MachineFlux> = new EventEmitter<MachineFlux>();
  machineNumber: any;

  constructor(private decision: DecisionsService) {
    decision.getNumberMachine().subscribe( (machinery) => {
      this.machineNumber = machinery;
    });
  }

  ngOnInit() {
  }

  changement(): void{
    this.machineryOutput.emit(this.machinery);
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
