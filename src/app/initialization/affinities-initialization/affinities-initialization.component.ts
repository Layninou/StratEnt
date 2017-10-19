import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

//Language
import { Language } from '../../language/language';
import { LanguageService } from '../../language/language.service';

//Object
import { Product } from '../../objects/product';

//Service
import { InitializationService } from '../../service/initialization.service';
import { PieChartService } from '../../service/pie-chart.service';

@Component({
  selector: 'affinities-initialization',
  templateUrl: './affinities-initialization.component.html',
  styleUrls: ['./affinities-initialization.component.css'],
  providers: [PieChartService]
})
export class AffinitiesInitializationComponent implements OnInit, OnChanges {

  @Input() products: Product[];
  lang: Language;

  constructor(private initService: InitializationService, private pieService: PieChartService,
              private langServ: LanguageService) {
    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );
  }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges){
    setTimeout( () => {
      this.products.map( (product, index) => {
        this.createPie(product,index);
      });
    }, 300);
  }

  initAttract(n: number, prod: Product): void{
    this.initService.setProductNumberAttract(n, prod);
    prod.attracts = this.initService.initAttract(n);
  }

  createPie(product: Product, indexProduct: number): void{
    var canvasName = "pieChartAffinity" + indexProduct;
    var canvasSensibility = <HTMLCanvasElement> document.getElementById(canvasName);
    var canvasCtx = canvasSensibility.getContext("2d");
    var datalist = [];
    var datalabel = [];

    Object.keys(product.attracts).map( (key) => {
      datalabel.push(product.attracts[key].name);
      datalist.push(product.attracts[key].sensibility);
    });

    this.pieService.pieChart(canvasCtx, canvasSensibility.width, canvasSensibility.height, datalist, datalabel);
  }

}
