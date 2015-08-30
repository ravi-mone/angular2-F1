import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {F1Drivers} from './components/F1Drivers/F1Drivers';
import {Details} from './components/F1Drivers/Details/details';
import {EventsDemo} from './components/F1Drivers/Events/events';

import {NamesList} from './services/NameList';


@Component({
  selector: 'app',
  viewBindings: [NamesList]
})
@RouteConfig([
  { path: '/', component: Home, as: 'home' },
  { path: '/about', component: About, as: 'about' },
  { path: '/drivers', component: F1Drivers, as: 'drivers' },
  { path: '/details/:name', component: Details, as: 'details' },
  { path: '/events', component: EventsDemo, as: 'events' }
])
@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  directives: [RouterOutlet, RouterLink]
})
class App {}


bootstrap(App, [routerInjectables]);
