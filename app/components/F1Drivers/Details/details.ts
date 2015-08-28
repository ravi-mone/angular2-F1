import {Component, View, Inject} from 'angular2/angular2';
import {Router, RouteParams, RouterLink} from 'angular2/router';
import {Nationality} from '../nationality/nationality'
import {NamesList} from '../../../services/NameList';

@Component({
    selector: 'Details'
})
@View({
    templateUrl: './components/F1Drivers/Details/details.html?v=<%= VERSION %>',
    directives: [RouterLink, Nationality]
})
export class Details {
    driverObj:Array<Object>;
    driver:Object;
    constructor(public list: NamesList,  params:RouteParams){
        this.driverObj=list.get();
        this.driverObj = this.driverObj[0]['DriverStandings'];
        this.name = params.get('name');
       /* console.log(this.name)
        console.log(this.driverObj)*/
        this.fetchNameFromParams(this.driverObj[ parseInt(params.get('name'))-1);
    }
    fetchNameFromParams(driverDetails:<any>) {
        this.driver = driverDetails; 
    }
}

//