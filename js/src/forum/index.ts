import app from 'flarum/forum/app';
import addSideBar from "./addSideBar";
import addInfinityScroller from "./addInfinityScroller";
import PageLoader from "./components/PageLoader";
import addTopBar from "./addTopBar";
app.initializers.add('dhtml/cpages', () => {

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
