import { Injectable } from '@angular/core';

@Injectable()
export class PieChartService {

  //Color Chart
  colorChart: any[];

  constructor() {
    this.colorChart = ["#0066cc","#3333cc","#9933ff","#cc0099", "#ff3300","#cc6600",
    "#ffff00","#99ff33","#33cc33","#00ff99","#33cccc"];
  }

  cacahuete(): void{
    console.log("hey");
  }

  pieChart(ctx, w, h, datalist, datalabel): void{

    var radius = h / 2 - 5;
    var centerx = w / 2;
    var centery = h / 2;
    var lastend = 0;
    var offset = Math.PI / 2;
    var labelxy = new Array();

    //font for the label
    var fontSize = Math.floor(h/ 15);
    ctx.textAlign = 'center';
    ctx.font = fontSize + "px Arial";
    var total = 0;
    for(var x = 0; x < datalist.length; x++) { total += datalist[x]; }

    //creation of the part of each pie
    for (var i = 0; i < datalist.length; i++) {
      var thispart = datalist[i];
      ctx.beginPath();
      ctx.fillStyle = this.colorChart[i];
      ctx.moveTo(centerx,centery);
      var arcsector = Math.PI * (2 * thispart / total);
      ctx.arc(centerx,centery,radius, lastend - offset, lastend + arcsector - offset, false);
      ctx.lineTo(centerx,centery);
      ctx.fill();
      ctx.closePath();

      if (thispart > (total / 20)) {
        labelxy.push(lastend + arcsector / 2 + Math.PI + offset);
      }

      lastend += arcsector;
    }

    var lradius = radius * 3 / 4;
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#000000";
    for (var i = 0; i < labelxy.length; i++) {
      var langle = labelxy[i];
      var dx = centerx + lradius * Math.cos(langle);
      var dy = centery + lradius * Math.sin(langle);
      ctx.fillText(datalabel[i], dx, dy);
    }

  }

}
