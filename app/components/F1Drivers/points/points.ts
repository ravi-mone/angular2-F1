/**
 * Created by ravi on 28/8/15.
 */
import {Component, View} from 'angular2/angular2';
@Component({
    selector: 'Points',
    properties: ['text: alt'],
})
@View({
    templateUrl: './components/F1Drivers/points/points.html?v=<%= VERSION %>'
})
export class Points {
    points:string;
    constructor(){}
    // This will get called every time with the new value when the 'tooltip' property changes
    set text(value: string) {
        this.points = value;

   }
}