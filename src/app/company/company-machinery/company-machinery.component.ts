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

  constructor(private decision: DecisionsService) { }

  ngOnInit() {
  }

  changement(): void{
    this.machineryOutput.emit(this.machinery);
  }

}
