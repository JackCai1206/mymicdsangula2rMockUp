import {Component} from '@angular/core'
import {DomData} from '../mockdata.service'

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

    var d:string = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, arcSweep, 0, end.x, end.y
    ].join(" ");
    return d;       
}

    @Component ({
        selector: 'my-progress',
        templateUrl: '../templates/mainContent/progress2.html',
        styleUrls: ['../css/mainContent/progress2.css'],
        providers: [DomData]
    })

    export class MyProgress {
        public percentage: number;
        public current_class: string;
        public current_percentage: number;
        public constructor(private _DomService: DomData) {
            this.percentage = _DomService.getProgress().overall_percentage;
            this.current_class = _DomService.getProgress().current_class;
            this.current_percentage = _DomService.getProgress().current_percentage;
        };
        public polarToCartesian=polarToCartesian;
        public describeArc=describeArc;
        public click: boolean=false;
        //TODO: use [attr] to set stroke-width
        public thinner() {
            this.click ? document.getElementById("outer").setAttribute("stroke-width", "25px") : document.getElementById("outer").setAttribute("stroke-width", "50px");
            this.click ? document.getElementById("inner").setAttribute("stroke-width", "15px") : document.getElementById("inner").setAttribute("stroke-width", "30px");
        }
    }
