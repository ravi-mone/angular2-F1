/**
 * Created by ravi on 30/8/15.
 */
import {Component, View, Query} from 'angular2/angular2';
@Component({
    selector: 'tabs'
})
@View({
    template: `
      <ul>
        <li *ng-for="#pane of panes">{{pane.title}}</li>
      </ul>
      <content></content>
    `
})
class Tabs {
    panes: QueryList<Pane>

    constructor(@Query(Pane) panes:QueryList<Pane>) {
        this.panes = panes;
    }
}

@Component({
    selector: 'pane',
    properties: ['title']
})
@View({
    template: `
      <div>This is a Panel content </div>
    `
})
class Pane {
    title:string;
}