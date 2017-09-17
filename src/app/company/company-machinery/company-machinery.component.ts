import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//Language
import { Language } from '../../language/language';
import { LanguageService } from '../../language/language.service';

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

  lang: Language;

  constructor(private decision: DecisionsService, private langServ: LanguageService) {
    decision.getNumberMachine().subscribe( (machinery) => {
      this.machineNumber = machinery;
    });
    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );
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
