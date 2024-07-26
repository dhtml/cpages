import app from 'flarum/forum/app';
import addSideBar from "./addSideBar";
import addInfinityScroller from "./addInfinityScroller";
import PageLoader from "./components/PageLoader";
import { extend } from 'flarum/extend';
import IndexPage from 'flarum/forum/components/IndexPage';

import addTopBar from "./addTopBar";
app.initializers.add('dhtml/cpages', () => {

  extend(IndexPage.prototype, 'sidebarItems', function (items:any) {
    app.request({
      method: 'GET',
      url: app.forum.attribute("apiUrl") + '/cpages-data',
    }).then((response: { data: { attributes: any; }; }) => {
      //console.log();
      addSideBar(response.data.attributes);
    });

  });


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
  //addSideBar();

  addInfinityScroller();
});
