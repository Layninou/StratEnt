import { Component, OnInit, OnChanges, Input } from '@angular/core';

//Language
import { Language } from '../../language/language';
import { LanguageService } from '../../language/language.service';

//Object
import { Company } from '../../objects/company';

//Service
import { InitializationService } from '../../service/initialization.service';

@Component({
  selector: 'company-initialization',
  templateUrl: './company-initialization.component.html',
  styleUrls: ['./company-initialization.component.css']
})
export class CompanyInitializationComponent implements OnInit {

  @Input() allCompanies: Company;
  @Input() companies: Company[];
  @Input() changeNb: number; //This seems useless but manage the change of nbmachine and capital
  lang: Language;

  constructor(private initService: InitializationService, private langServ: LanguageService) {
    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );
  }

  ngOnInit() {
    this.initService.setAllCompanyNumberMachine(this.allCompanies.nbMachine, this.companies);
    this.initService.setAllCompanySocialCapital(this.allCompanies.socialCapital, this.companies);
    this.initService.initCompaniesName(this.companies);
  }

  ngOnChanges() {
    this.initService.setAllCompanyNumberMachine(this.allCompanies.nbMachine, this.companies);
    this.initService.setAllCompanySocialCapital(this.allCompanies.socialCapital, this.companies);
    this.initService.initCompaniesName(this.companies);
  }

  initAllSocialCapital(): void{
    this.initService.setAllCompanySocialCapital(this.allCompanies.socialCapital, this.companies);
  }

  initAllNumberMachine(): void{
    this.initService.setAllCompanyNumberMachine(this.allCompanies.nbMachine, this.companies);
  }

}
