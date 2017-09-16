import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

//Routes
import { AppRoutingModule }     from './routes/app-routing.module';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Environment } from './firebase/environment';

//Component
import { AppComponent } from './app.component';

import { AuthentificationComponent }  from './authentification/authentification.component';
import { CreateResultComponent }      from './create-result/create-result.component';

import { InitializationComponent } from './initialization/initialization.component';
  import { GameInitializationComponent }       from './initialization/game-initialization/game-initialization.component';
  import { ScenarioInitializationComponent }   from './initialization/scenario-initialization/scenario-initialization.component';
  import { PoliticsInitializationComponent }   from './initialization/politics-initialization/politics-initialization.component';
  import { CompanyInitializationComponent }    from './initialization/company-initialization/company-initialization.component';
  import { ProductInitializationComponent }    from './initialization/product-initialization/product-initialization.component';
  import { AffinitiesInitializationComponent } from './initialization/affinities-initialization/affinities-initialization.component';
  import { StudiesInitializationComponent }    from './initialization/studies-initialization/studies-initialization.component';

import { CompanyComponent }          from './company/company.component';
  import { CompanyFinancesComponent }     from './company/company-finances/company-finances.component';
  import { CompanyMachineryComponent }    from './company/company-machinery/company-machinery.component';
  import { CompanyFabricationComponent }  from './company/company-fabrication/company-fabrication.component';
  import { CompanyMarketingComponent }    from './company/company-marketing/company-marketing.component';
  import { CompanyRemunerationComponent } from './company/company-remuneration/company-remuneration.component';
  import { CompanyManagementComponent }   from './company/company-management/company-management.component';
  import { CompanyStudiesComponent }      from './company/company-studies/company-studies.component';
  import { CompanyClearingComponent }     from './company/company-clearing/company-clearing.component';
  import { CompanySubmissionComponent }   from './company/company-submission/company-submission.component';


import { ComptabilityComponent }     from './comptability/comptability.component';
import { SituationComponent }        from './situation/situation.component';
import { ResultsComponent }          from './results/results.component';
  import { ResultsStructureComponent }    from './results/results-structure/results-structure.component';
  import { ResultsExploitationComponent } from './results/results-exploitation/results-exploitation.component';
  import { ResultsSellingComponent }      from './results/results-selling/results-selling.component';
  import { ResultsProductionsComponent }  from './results/results-productions/results-productions.component';
  import { ResultsChargeComponent }       from './results/results-charge/results-charge.component';
  import { ResultsFinancialComponent }    from './results/results-financial/results-financial.component';
  import { ResultsFinalComponent }        from './results/results-final/results-final.component';

import { StudiesComponent } from './studies/studies.component';
  import { StudiesProductComponent }      from './studies/studies-product/studies-product.component';
  import { StudiesMarketComponent }       from './studies/studies-market/studies-market.component';
  import { StudiesConcurrenceComponent }  from './studies/studies-concurrence/studies-concurrence.component';
  import { StudiesStructureComponent }    from './studies/studies-structure/studies-structure.component';
  import { StudiesSellingComponent }      from './studies/studies-selling/studies-selling.component';
  import { StudiesPerformanceComponent }  from './studies/studies-performance/studies-performance.component';

import { FluxComponent } from './flux/flux.component';
  import { AssetComponent }     from './flux/asset/asset.component';
  import { LiabilityComponent } from './flux/liability/liability.component';

//Services
import { DecisionsService }     from './service/decisions.service';
import { ResultService }        from './service/result.service';
import { ModelizationService }  from './service/modelization.service';
import { CalculusService }      from './service/calculus.service';
import { AuthService }          from './service/auth.service';
import { LanguageService }      from './language/language.service'

//Firebase Service
import { AuthFirebaseService } from './firebase/auth-firebase.service';
import { DbFirebaseService }   from './firebase/db-firebase.service';

//Pipe
import { RoundAt2Pipe } from './pipe/round-at-2.pipe';
import { RoundAt0Pipe } from './pipe/round-at-0.pipe';

@NgModule({
  declarations: [
    AppComponent,

    InitializationComponent,
      GameInitializationComponent,
      ScenarioInitializationComponent,
      PoliticsInitializationComponent,
      CompanyInitializationComponent,
      ProductInitializationComponent,
      AffinitiesInitializationComponent,
      StudiesInitializationComponent,

    CompanyComponent,
      CompanyFinancesComponent,
      CompanyMachineryComponent,
      CompanyFabricationComponent,
      CompanyMarketingComponent,
      CompanyRemunerationComponent,
      CompanyManagementComponent,
      CompanyStudiesComponent,
      CompanyClearingComponent,
      CompanySubmissionComponent,

    ResultsComponent,
      ResultsStructureComponent,
      ResultsExploitationComponent,
      ResultsSellingComponent,
      ResultsProductionsComponent,
      ResultsChargeComponent,
      ResultsFinancialComponent,
      ResultsFinalComponent,

    FluxComponent,
      AssetComponent,
      LiabilityComponent,

    StudiesComponent,
      StudiesProductComponent,
      StudiesMarketComponent,
      StudiesConcurrenceComponent,
      StudiesStructureComponent,
      StudiesSellingComponent,
      StudiesPerformanceComponent,
      ComptabilityComponent,
      SituationComponent,

    AuthentificationComponent,
    CreateResultComponent,

    //Pipe
    RoundAt2Pipe,
    RoundAt0Pipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(Environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [
    DecisionsService,
    ResultService,
    ModelizationService,
    CalculusService,
    AuthService,

    LanguageService,

    AuthFirebaseService,
    DbFirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
