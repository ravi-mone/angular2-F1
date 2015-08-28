import {Component, View, NgFor, NgIf} from 'angular2/angular2';
//import {httpInjectables, Http} from 'angular2/http';
import {RouterLink, routerInjectables} from 'angular2/router';
import {Points} from './points/points'
import {Nationality} from './nationality/nationality'
import {driverHeader} from './Header/driverheader'

import {NamesList} from '../../services/NameList';

@Component({
    selector: 'f1Drivers'
    viewInjector: [routerInjectables]
})
@View({
    templateUrl: './components/F1Drivers/f1Drivers.html?v=<%= VERSION %>',
    directives:[NgFor, NgIf, Points, Nationality, driverHeader, RouterLink]
    //viewBindings: [httpInjectables]
})
export class F1Drivers {
    driverObj:Array<Object>;
    constructor(public list: NamesList){ //http:Http
      //  http.request('data.txt').subscribe(res => this.data = res.text());
        this.driverObj=list.get();
        this.driverObj = this.driverObj[0]['DriverStandings'];
    }
}
