import app from 'flarum/forum/app';
import addSideBar from "./addSideBar";
import addInfinityScroller from "./addInfinityScroller";
import PageLoader from "./components/PageLoader";
import { extend } from 'flarum/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import {ObjectStore} from "../common/ObjectStore";

import addTopBar from "./addTopBar";

app.initializers.add('dhtml/cpages', () => {

  /*
  const store = new ObjectStore();

  extend(IndexPage.prototype, 'sidebarItems', function (items:any) {

    store.setItems(items);
    var data = store.getData();

    if(data) {
      console.log('get sidebar from cache');
      addSideBar(store.getItems(),data);
    } else {
      app.request({
        method: 'GET',
        url: app.forum.attribute("apiUrl") + '/cpages-data',
      }).then((response: { data: { attributes: any; }; }) => {
        console.log('get sidebar from api');
        data = response.data.attributes;
        store.setData(data);
        addSideBar(store.getItems(),data);
      });
    }

  });
  */


    const slugs = [
    'contact-us',
    'about-us',
    'privacy-policy',
    'terms',
    'guidelines',
    'download'
  ];

  slugs.forEach(slug => {
    app.routes[slug] = { path: `/${slug}`, component: PageLoader, resolveComponent: () => PageLoader.extend({ slug }) };
  });


  //addTopBar();
  addSideBar();

  addInfinityScroller();
});
