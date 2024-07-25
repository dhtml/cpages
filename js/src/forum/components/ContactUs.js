import Component from 'flarum/common/Component';
import Page from 'flarum/common/components/Page';
import ItemList from 'flarum/common/utils/ItemList';
import IndexPage from 'flarum/forum/components/IndexPage';
import listItems from 'flarum/common/helpers/listItems';


export default class ContactUs extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    app.setTitle("Contact Us");
  }


  view() {
    return m(".IndexPage", [
      IndexPage.prototype.hero(),
      m(
        ".container",
        m(".sideNavContainer", [
          m(
            "nav.IndexPage-nav.sideNav",
            m("ul", listItems(IndexPage.prototype.sidebarItems().toArray()))
          ),
          m(
            ".IndexPage-results.sideNavOffset",
            m("div.ContentPages", this.pageContent()),
          ),
        ])
      ),
    ]);
  }


  pageContent() {
    return (
      <div class="Pages-page">
        <header class="Hero PageHero">
          <div class="iconcontainer">
            <div class="fontico"><i class="fas fa-info-circle"></i></div>
            <div class="icocont">
              <div class="titolo1">Contact Us</div>
            </div>
          </div>
        </header>
        <div class="Pages-container">
          <div class="Post-body">
            <p>At Africoders, We would love to hear from you.</p>
            <p>You can reach out to us for:</p>
            <ul>
              <li><p>If you have any questions, comments, or suggestions regarding our community</p></li>
              <li><p>If you have security issues, problems accessing our platform</p></li>
              <li><p>In case you wish to sponsor Africoders or place Adverts</p></li>
              <li>Any other reason that is not listed above</li>
            </ul>
            <p>We are expecting your feedback and we will respond as soon as possible.</p>
            <p>You can contact us through the following channels:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:support@africoders.com" target="_blank">support@africoders.com</a></li>
              <li><strong>Facebook:</strong> <a href="https://facebook.com/africoders" target="_blank">facebook.com/africoders</a></li>
              <li><strong>Twitter:</strong> <a href="https://x.com/africoders" target="_blank">x.com/africoders</a></li>
              <li><strong>LinkedIn:</strong> <a
                href="https://linkedin.com/company/africodersng" target="_blank">linkedin.com/company/africodersng</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
      ;
  }
}
