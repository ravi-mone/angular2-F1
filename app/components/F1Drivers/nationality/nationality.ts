/**
 * Created by ravi on 28/8/15.
 */
import {Component, View, NgClass} from 'angular2/angular2';
@Component({
    selector: 'Nationality',
    properties: ['text: cty'],
})
@View({
    templateUrl: './components/F1Drivers/nationality/nationality.html?v=<%= VERSION %>',
    directives :[NgClass]
})
export class Nationality {
    nationality:string;
    constructor(){}
    // This will get called every time with the new value when the 'tooltip' property changes
    set text(value: string) {
        this.nationality = value;
   }
}
