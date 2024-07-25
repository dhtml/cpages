import app from 'flarum/forum/app';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import IndexPage from 'flarum/forum/components/IndexPage';
import listItems from 'flarum/common/helpers/listItems';
import Page from 'flarum/common/components/Page';

export default class PageLoader extends Page {
  oninit(vnode) {
    super.oninit(vnode);
    this.slug = vnode.attrs.routeName;
    this.page = null;

    this.loading = true;

    this.pageContent = null;

    this.loadPage();
  }

  /**
   * Initialize page.
   *
   * @param {fof/pages/models/Page} page
   * @protected
   */
  show(page) {
    this.page = page;

    //app.history.push('page', page.title);
    app.setTitle(page.title);

    //set the content
    this.pageContent = page.content;

    m.redraw();
  }

  loadPage() {
    app.request({
      method: 'GET',
      url: app.forum.attribute("apiUrl") + '/cpage/' + this.slug,
    }).then(response => {
      this.show(response.data.attributes);
    });
  }

  renderPage() {
    if(!this.loading) {
      return LoadingIndicator.component({ className: 'LoadingIndicator--block' })
    } else {
     return (m("div.ContentPages",  m.trust(this.pageContent)));
    }
    /*
    return m(".IndexPage", [
      IndexPage.prototype.hero(),
      m(
        ".container",
        m(
          ".IndexPage-results.sideNavOffset",
          m("div.ContentPages",  m.trust(this.pageContent)),
        ),
      ),
    ]);
     */
  }

  view() {

    return (
      <div className="IndexPage">
        {IndexPage.prototype.hero()}
        <div className="container">
          <div className="sideNavContainer">
            <nav className="IndexPage-nav sideNav">
              <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
            </nav>
            <div className="IndexPage-results sideNavOffset">

              {this.renderPage()}

            </div>
          </div>
        </div>
      </div>
    );
  }
}
