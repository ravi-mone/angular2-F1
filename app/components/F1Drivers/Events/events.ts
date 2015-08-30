import { Component, View, NgFor, NgIf, formDirectives} from "angular2/angular2";
import {NamesList} from '../../../services/NameList';

@Component({
    selector: 'events-demo',
})
@View({
    templateUrl: './components/F1Drivers/Events/events.html',
    directives: [NgFor, NgIf, formDirectives]

})

export class EventsDemo {
    articles:Array<Object>;
    listObj :Object
    constructor(list: NamesList){
        this.listObj = list;
        this.articles=list.articleList;
        console.log(this.articles)
    }
    addArticle(title, link) {
       console.log("Adding article with title", title.value, "and link", link.value);
       this.listObj.postArticle({title : title.value, link:link.value});
        title.value=''; link.value='';
    }
    deleteArticle(index){
        console.log(index)
        this.listObj.deleteArticle(index);
    }
}
