/**
 * Created by ravi on 28/8/15.
 */
import {Component, View} from 'angular2/angular2';
@Component({
    selector: 'driverHeader',
})
@View({
    templateUrl: './components/F1Drivers/Header/driverheader.html?v=<%= VERSION %>'
})
export class driverHeader {
    constructor(){}
}