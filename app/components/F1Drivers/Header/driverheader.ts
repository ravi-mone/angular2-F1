/**
 * Created by ravi on 28/8/15.
 */
import {Component, View} from 'angular2/angular2';

import {NamesList} from '../../../services/NameList';

@Component({
    selector: 'driverHeader',
})
@View({
    templateUrl: './components/F1Drivers/Header/driverheader.html?v=<%= VERSION %>'
})
export class driverHeader {

    driverObj:Array<Object>;
    isreverse:boolean = false;

    constructor(public list: NamesList){
        this.driverObj=list.get();
        this.driverObj = this.driverObj[0]['DriverStandings'];
    }

    sortBy(name) {
        if (this.isreverse == false) {
            this.driverObj = this.driverObj.sort(function (a, b) {
                return a[name] - b[name];
            });
            this.isreverse = true;
        } else {
            this.driverObj = this.driverObj.sort(function (a, b) {
                return b[name] - a[name];
            });
            this.isreverse = false;
        }

    }
}