import Component from 'flarum/common/Component';
import Page from 'flarum/common/components/Page';
import ItemList from 'flarum/common/utils/ItemList';
import IndexPage from 'flarum/forum/components/IndexPage';
import listItems from 'flarum/common/helpers/listItems';


export default class PrivacyPolicy extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    app.setTitle("Privacy Policy");
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
            <div class="fontico"><i class="fas fa-user-secret"></i></div>
            <div class="icocont">
              <div class="titolo1">Privacy Policy</div>
            </div>
          </div>
        </header>
        <div class="Pages-container">
          <div class="Post-body">
            <div data-custom-class="body">
              <div><span style="color: rgb(127, 127, 127);"><strong><span style="font-size: 15px;"><span
                data-custom-class="subtitle">Last updated <bdt
                className="question">January 31, 2023</bdt></span></span></strong></span>
              </div>
              <div></div>
              <div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span
                style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">This privacy notice for <bdt
                className="question">Africoders Network Limited</bdt><span style="color: rgb(89, 89, 89);"><span
                data-custom-class="body_text"><bdt className="block-component"></bdt></span></span> (<bdt
                className="block-component"></bdt>'<bdt className="block-component"></bdt><strong>Company</strong><bdt
                className="statement-end-if-in-editor"></bdt>', '<strong>we</strong>', '<strong>us</strong>', or '<strong>our</strong>',<bdt
                className="else-block"></bdt></span><span data-custom-class="body_text">), describes how and why we might collect, store, use, and/or share (<bdt
                className="block-component"></bdt>'<strong>process</strong>'<bdt className="else-block"></bdt>) your information when you use our services (<bdt
                className="block-component"></bdt>'<strong>Services</strong>'<bdt className="else-block"></bdt>), such as when you:</span></span></span><span
                style="font-size: 15px;"><span style="color: rgb(127, 127, 127);"><span
                data-custom-class="body_text"><span
                style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt
                className="block-component"></bdt></span></span></span></span></span>
              </div>
              <ul>
                <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Visit our website<bdt
                  className="block-component"></bdt> at <bdt className="question">africoders.com</bdt><span
                  style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span
                  data-custom-class="body_text"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><bdt
                  className="statement-end-if-in-editor">, or any website of ours that links to this privacy notice</bdt></span></span></span></span></span></span></span></span>
                </li>
              </ul>
              <div><span style="font-size: 15px;"><span style="font-size: 15px;"><span
                style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><span
                style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt
                className="block-component"></bdt></span></span></span></span></span></span>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><span
                  style="color: rgb(127, 127, 127);"><span data-custom-class="body_text"><span
                  style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt
                  className="block-component"></bdt></span></span></span></span></span>
                </div>
                <ul>
                  <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                    style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Engage with us in other related ways, including any sales, marketing, or events<span
                    style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span
                    data-custom-class="body_text"><span style="font-size: 15px;"><span
                    style="color: rgb(89, 89, 89);"><bdt
                    className="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></span>
                  </li>
                </ul>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><span
                  style="color: rgb(127, 127, 127);"><span
                  data-custom-class="body_text"><strong>Questions or concerns?&nbsp;</strong>Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <bdt
                  className="question">facebook.com/africoders</bdt>.</span></span></span>
                </div>
                <div style="line-height: 1.5;"></div>
                <div style="line-height: 1.5;"></div>
                <div style="line-height: 1.5;"><strong><span style="font-size: 15px;"><span
                  data-custom-class="heading_1">SUMMARY OF KEY POINTS</span></span></strong>
                </div>
                <div style="line-height: 1.5;"></div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><span
                  data-custom-class="body_text"><strong><em>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click&nbsp;</em></strong></span></span><a
                  data-custom-class="link" href="#toc"><span style="font-size: 15px;"><span
                  data-custom-class="body_text"><strong><em>here</em></strong></span></span></a><span
                  style="font-size: 15px;"><span data-custom-class="body_text"><strong><em>&nbsp;to go directly to our table of contents.</em></strong></span></span>
                </div>
                <div style="line-height: 1.5;"></div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><span
                  data-custom-class="body_text"><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with <bdt
                  className="block-component"></bdt><bdt className="question">Africoders Network Limited</bdt><bdt
                  className="statement-end-if-in-editor"></bdt> and the Services, the choices you make, and the products and features you use. Click&nbsp;</span></span><a
                  data-custom-class="link" href="#personalinfo"><span style="font-size: 15px;"><span
                  data-custom-class="body_text">here</span></span></a><span style="font-size: 15px;"><span
                  data-custom-class="body_text">&nbsp;to learn more.</span></span>
                </div>
                <div style="line-height: 1.5;"></div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><span
                  data-custom-class="body_text"><strong>Do we process any sensitive personal information?</strong> <bdt
                  className="block-component"></bdt>We do not process sensitive personal information.<bdt
                  className="else-block"></bdt></span></span></div>
                <div style="line-height: 1.5;"></div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><span
                  data-custom-class="body_text"><strong>Do we receive any information from third parties?</strong> <bdt
                  className="block-component"></bdt>We do not receive any information from third parties.<bdt
                  className="else-block"></bdt></span></span></div>
                <div style="line-height: 1.5;"></div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><span
                  data-custom-class="body_text"><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Click&nbsp;</span></span><a
                  data-custom-class="link" href="#infouse"><span style="font-size: 15px;"><span
                  data-custom-class="body_text">here</span></span></a><span style="font-size: 15px;"><span
                  data-custom-class="body_text">&nbsp;to learn more.</span></span>
                </div>
                <div style="line-height: 1.5;"></div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><span
                  data-custom-class="body_text"><strong>In what situations and with which <bdt
                  className="block-component"></bdt>parties do we share personal information?</strong> We may share information in specific situations and with specific <bdt
                  className="block-component"></bdt>third parties. Click&nbsp;</span></span><a
                  data-custom-class="link" href="#whoshare"><span style="font-size: 15px;"><span
                  data-custom-class="body_text">here</span></span></a><span style="font-size: 15px;"><span
                  data-custom-class="body_text">&nbsp;to learn more.<bdt
                  className="block-component"></bdt></span></span></div>
                <div style="line-height: 1.5;"></div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><span
                  data-custom-class="body_text"><strong>How do we keep your information safe?</strong> We have <bdt
                  className="block-component"></bdt>organisational<bdt className="else-block"></bdt> and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other <bdt
                  className="block-component"></bdt>unauthorised<bdt className="else-block"></bdt> third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Click&nbsp;</span></span><a
                  data-custom-class="link" href="#infosafe"><span style="font-size: 15px;"><span
                  data-custom-class="body_text">here</span></span></a><span style="font-size: 15px;"><span
                  data-custom-class="body_text">&nbsp;to learn more.<bdt
                  className="statement-end-if-in-editor"></bdt></span></span>
                </div>
                <div style="line-height: 1.5;"></div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><span
                  data-custom-class="body_text"><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click&nbsp;</span></span><a
                  data-custom-class="link" href="#privacyrights"><span style="font-size: 15px;"><span
                  data-custom-class="body_text">here</span></span></a><span style="font-size: 15px;"><span
                  data-custom-class="body_text">&nbsp;to learn more.</span></span>
                </div>
                <div style="line-height: 1.5;"></div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><span
                  data-custom-class="body_text"><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by filling out our data subject request form available <bdt
                  className="block-component"></bdt></span></span><a data-custom-class="link"
                                                                     href="https://web.archive.org/web/20220925043650/https://app.termly.io/notify/220a8824-c029-46ec-a9ac-d535060fcbfd"
                                                                     rel="noopener noreferrer" target="_blank"><span
                  style="font-size: 15px;"><span data-custom-class="body_text">here</span></span></a><span
                  style="font-size: 15px;"><span data-custom-class="body_text"><bdt className="block-component"></bdt>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</span></span>
                </div>
                <div style="line-height: 1.5;"></div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Want to learn more about what <bdt
                  className="block-component"></bdt><bdt className="question">Africoders Network Limited</bdt><bdt
                  className="statement-end-if-in-editor"></bdt> does with any information we collect? Click&nbsp;</span></span><a
                  data-custom-class="link" href="#toc"><span style="font-size: 15px;"><span
                  data-custom-class="body_text">here</span></span></a><span style="font-size: 15px;"><span
                  data-custom-class="body_text">&nbsp;to review the notice in full.</span></span>
                </div>
                <div style="line-height: 1.5;"></div>
                <div style="line-height: 1.5;"></div>
                <div id="toc" style="line-height: 1.5;"><span style="font-size: 15px;"><span
                  style="color: rgb(127, 127, 127);"><span style="color: rgb(0, 0, 0);"><strong><span
                  data-custom-class="heading_1">TABLE OF CONTENTS</span></strong></span></span></span>
                </div>
                <div style="line-height: 1.5;"></div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link"
                                                                                 href="#infocollect"><span
                  style="color: rgb(89, 89, 89);">1. WHAT INFORMATION DO WE COLLECT?</span></a></span>
                </div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link"
                                                                                 href="#infouse"><span
                  style="color: rgb(89, 89, 89);">2. HOW DO WE PROCESS YOUR INFORMATION?<bdt
                  className="block-component"></bdt></span></a></span></div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><a
                  data-custom-class="link"
                  href="#whoshare">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></span><span
                  data-custom-class="body_text"><bdt className="block-component"></bdt></span></span></div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><a href="#3pwebsites"><span
                  data-custom-class="link">4. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?<bdt
                  className="statement-end-if-in-editor"></bdt></span></a><span
                  style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span
                  data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><bdt
                  className="block-component"></bdt></span></span></span></span></span>
                </div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link"
                                                                                 href="#cookies"><span
                  style="color: rgb(89, 89, 89);">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</span></a><span
                  style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span
                  data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><bdt
                  className="statement-end-if-in-editor"></bdt></span></span><span data-custom-class="body_text"><span
                  style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span
                  style="color: rgb(89, 89, 89);"><bdt
                  className="block-component"></bdt></span></span></span></span></span></span></span>
                </div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link"
                                                                                 href="#sociallogins"><span
                  style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span
                  style="color: rgb(89, 89, 89);">6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</span></span></span></a><span
                  style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span
                  data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span
                  style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><bdt
                  className="statement-end-if-in-editor"></bdt></span></span><bdt
                  className="block-component"></bdt></span></span></span></span></span>
                </div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link"
                                                                                 href="#inforetain"><span
                  style="color: rgb(89, 89, 89);">7. HOW LONG DO WE KEEP YOUR INFORMATION?</span></a><span
                  style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span
                  data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span
                  style="color: rgb(89, 89, 89);"><bdt
                  className="block-component"></bdt></span></span></span></span></span></span>
                </div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link"
                                                                                 href="#infosafe"><span
                  style="color: rgb(89, 89, 89);">8. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></a><span
                  style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89);"><span
                  data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><bdt
                  className="statement-end-if-in-editor"></bdt><bdt
                  className="block-component"></bdt></span></span></span></span></span>
                </div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><a
                  data-custom-class="link" href="#privacyrights">9. WHAT ARE YOUR PRIVACY RIGHTS?</a></span></span>
                </div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link"
                                                                                 href="#DNT"><span
                  style="color: rgb(89, 89, 89);">10. CONTROLS FOR DO-NOT-TRACK FEATURES</span></a></span>
                </div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link"
                                                                                 href="#caresidents"><span
                  style="color: rgb(89, 89, 89);">11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></a></span>
                </div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link"
                                                                                 href="#policyupdates"><span
                  style="color: rgb(89, 89, 89);">12. DO WE MAKE UPDATES TO THIS NOTICE?</span></a></span>
                </div>
                <div style="line-height: 1.5;"><a data-custom-class="link" href="#contact"><span
                  style="color: rgb(89, 89, 89); font-size: 15px;">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a>
                </div>
                <div style="line-height: 1.5;"><a data-custom-class="link" href="#request"><span
                  style="color: rgb(89, 89, 89);">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></a>
                </div>
                <div style="line-height: 1.5;"></div>
                <div id="infocollect" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span
                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control"
                                                                         style="color: rgb(0, 0, 0);"><strong><span
                  data-custom-class="heading_1">1. WHAT INFORMATION DO WE COLLECT?</span></strong></span></span></span></span></span>
                </div>
                <div style="line-height: 1.5;"></div>
                <div id="personalinfo" style="line-height: 1.5;"><span data-custom-class="heading_2"
                                                                       style="color: rgb(0, 0, 0);"><span
                  style="font-size: 15px;"><strong>Personal information you disclose to us</strong></span></span>
                </div>
                <div>
                  <div></div>
                  <div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span
                    style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span
                    style="font-size: 15px; color: rgb(89, 89, 89);"><span
                    style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong></span></span></span></span><span
                    data-custom-class="body_text"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                    style="font-size: 15px; color: rgb(89, 89, 89);"><span
                    data-custom-class="body_text"><strong><em>&nbsp;</em></strong><em>We collect personal information that you provide to us.</em></span></span></span></span></span></span>
                  </div>
                </div>
                <div style="line-height: 1.5;"></div>
                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We collect personal information that you voluntarily provide to us when you <span
                  style="font-size: 15px;"><bdt
                  className="block-component"></bdt></span>register on the Services,&nbsp;</span><span
                  style="font-size: 15px;"><span data-custom-class="body_text"><span style="font-size: 15px;"><bdt
                  className="statement-end-if-in-editor"></bdt></span></span><span data-custom-class="body_text">express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</span></span></span></span>
                </div>
                <div style="line-height: 1.5;"></div>
                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span
                  style="font-size: 15px;"><bdt className="block-component"></bdt></span></span></span></span>
                </div>
                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:<span
                  style="font-size: 15px;"><span data-custom-class="body_text"><bdt
                  className="forloop-component"></bdt></span></span></span></span></span>
                </div>
                <ul>
                  <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                    style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span
                    style="font-size: 15px;"><span data-custom-class="body_text"><bdt
                    className="question">names</bdt></span></span></span></span></span>
                  </li>
                </ul>
                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span
                  style="font-size: 15px;"><span data-custom-class="body_text"><bdt
                  className="forloop-component"></bdt></span></span></span></span></span>
                </div>
                <ul>
                  <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                    style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span
                    style="font-size: 15px;"><span data-custom-class="body_text"><bdt className="question">email addresses</bdt></span></span></span></span></span>
                  </li>
                </ul>
                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span
                  style="font-size: 15px;"><span data-custom-class="body_text"><bdt
                  className="forloop-component"></bdt></span></span></span></span></span>
                </div>
                <ul>
                  <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                    style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span
                    style="font-size: 15px;"><span data-custom-class="body_text"><bdt
                    className="question">usernames</bdt></span></span></span></span></span>
                  </li>
                </ul>
                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span
                  style="font-size: 15px;"><span data-custom-class="body_text"><bdt
                  className="forloop-component"></bdt></span></span></span></span></span>
                </div>
                <ul>
                  <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                    style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span
                    style="font-size: 15px;"><span data-custom-class="body_text"><bdt
                    className="question">passwords</bdt></span></span></span></span></span>
                  </li>
                </ul>
                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span
                  style="font-size: 15px;"><span data-custom-class="body_text"><bdt
                  className="forloop-component"></bdt></span><span data-custom-class="body_text"><bdt
                  className="statement-end-if-in-editor"></bdt></span></span></span></span></span>
                </div>
                <div id="sensitiveinfo" style="line-height: 1.5;"><span style="font-size: 15px;"><span
                  data-custom-class="body_text"><strong>Sensitive Information.</strong> <bdt
                  className="block-component"></bdt>We do not process sensitive information.</span></span>
                </div>
                <div style="line-height: 1.5;"></div>
                <div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><bdt
                  className="else-block"></bdt></span></span><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span
                  style="font-size: 15px;"><span data-custom-class="body_text"><bdt className="block-component"><bdt
                  className="block-component"></bdt></bdt></span></span></span></span></span>
                </div>
                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Social Media Login Data.&nbsp;</strong>We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the information described in the section called <bdt
                  className="block-component"></bdt>'<bdt className="else-block"></bdt><span
                  style="font-size: 15px;"><span
                  data-custom-class="body_text"><span style="font-size: 15px;"><span
                  style="color: rgb(89, 89, 89);"><a data-custom-class="link" href="#sociallogins">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a></span></span></span></span><bdt
                  className="block-component"></bdt>'<bdt className="else-block"></bdt> below.</span></span></span>
                </div>
                <div style="line-height: 1.5;"></div>
                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span
                  style="font-size: 15px;"><bdt className="statement-end-if-in-editor"><bdt
                  className="statement-end-if-in-editor"></bdt></bdt></span></span></span></span>
                  <bdt className="block-component"></bdt>
                </div>
                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</span></span></span>
                </div>
                <div style="line-height: 1.5;"></div>
                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt
                  className="block-component"></bdt></span><span data-custom-class="body_text"><span
                  style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span
                  style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><bdt
                  className="statement-end-if-in-editor"><bdt
                  className="block-component"></bdt></bdt></span></span></span></span></span></span></span>
                  <span style="font-size: 15px;"><span data-custom-class="body_text"><bdt
                    className="block-component"></bdt></span></span></div>
                <div id="infouse" style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span
                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span id="control"
                                                                         style="color: rgb(0, 0, 0);"><strong><span
                  data-custom-class="heading_1">2. HOW DO WE PROCESS YOUR INFORMATION?</span></strong></span></span></span></span></span>
                </div>
                <div>
                  <div style="line-height: 1.5;"></div>
                  <div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span
                    style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><span
                    style="font-size: 15px; color: rgb(89, 89, 89);"><span
                    style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:&nbsp;</em></strong><em>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</em></span></span></span></span></span></span>
                  </div>
                </div>
                <div style="line-height: 1.5;"></div>
                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong><bdt
                  className="block-component"></bdt></span></span></span></div>
                <ul>
                  <li style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                    style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>To facilitate account creation and authentication and otherwise manage user accounts.&nbsp;</strong>We may process your information so you can create and log in to your account, as well as keep your account in working order.<span
                    style="font-size: 15px; color: rgb(89, 89, 89);"><span
                    style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><span
                    style="font-size: 15px;"><span style="color: rgb(89, 89, 89);"><span
                    data-custom-class="body_text"><span style="font-size: 15px;"><span
                    style="color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt
                    className="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></span></span></span></span></span>
                  </li>
                </ul>
                <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                  style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt
                  className="block-component"></bdt></span></span></span>
                  <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                    style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt
                    className="block-component"></bdt></span></span></span>
                    <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                      style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt
                      className="block-component"></bdt></span></span></span>
                      <div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                        style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><bdt
                        className="block-component"></bdt></span></span></span>
                        <div style="line-height: 1.5;"><span style="font-size: 15px;"></span>
                          <div style="line-height: 1.5;"><span style="font-size: 15px;"></span>
                            <div style="line-height: 1.5;"><span style="font-size: 15px;"></span>
                              <div style="line-height: 1.5;"><span style="font-size: 15px;"><span
                                data-custom-class="body_text"></span></span>
                                <p style="font-size: 15px; line-height: 1.5;">
                                  <span style="font-size: 15px;"></span></p>
                                <ul>
                                  <li style="line-height: 1.5;"><span style="font-size: 15px;"><span
                                    style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span
                                    data-custom-class="body_text"><strong>To enable user-to-user communications.&nbsp;</strong>We may process your information if you choose to use any of our offerings that allow for communication with another user.<span
                                    style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span
                                    data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span
                                    data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span
                                    data-custom-class="body_text"><bdt
                                    className="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></span></span></span></span>
                                  </li>
                                </ul>
                                <p style="font-size: 15px; line-height: 1.5;">
                                  <span style="font-size: 15px;"></span></p>
                                <p style="font-size: 15px; line-height: 1.5;">
                                  <bdt className="block-component"></bdt>
                                </p>
                                <ul>
                                  <li style="line-height: 1.5;"><span style="font-size: 15px;"><span
                                    style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span
                                    data-custom-class="body_text"><strong>To request feedback.&nbsp;</strong>We may process your information when necessary to request feedback and to contact you about your use of our Services.<span
                                    style="color: rgb(89, 89, 89);"><span style="color: rgb(89, 89, 89);"><span
                                    data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span
                                    data-custom-class="body_text"><span style="color: rgb(89, 89, 89);"><span
                                    data-custom-class="body_text"><bdt
                                    className="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></span></span></span></span>
                                  </li>
                                </ul>
                                <p style="font-size: 15px; line-height: 1.5;">
                                  <bdt className="block-component"></bdt>
                                </p>
                                <div style="line-height: 1.5;"><span style="font-size: 15px;"></span>
                                  <div style="line-height: 1.5;"><span style="font-size: 15px;"></span>
                                    <div style="line-height: 1.5;"><span style="font-size: 15px;"></span>
                                      <bdt className="block-component"></bdt>
                                    </div>
                                    <ul>
                                      <li style="line-height: 1.5;"><span
                                        style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                        style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                        data-custom-class="body_text"><strong>To deliver targeted advertising to you.&nbsp;</strong>We may process your information to develop and display <bdt
                                        className="block-component"></bdt>personalised<bdt
                                        className="else-block"></bdt> content and advertising tailored to your interests, location, and more.<bdt
                                        className="block-component"></bdt> For more information see our Cookie Notice: <bdt
                                        className="block-component"></bdt><a data-custom-class="link"
                                                                             href="https://web.archive.org/web/20220925043650/https://africoders.com/cookies-policy"
                                                                             target="_blank"
                                                                             rel="noopener">https://africoders.com/cookies-policy</a><bdt
                                        className="block-component"></bdt>.<bdt
                                        className="statement-end-if-in-editor"></bdt></span><span
                                        data-custom-class="body_text"><bdt
                                        className="statement-end-if-in-editor"></bdt></span></span></span>
                                      </li>
                                    </ul>
                                    <div style="line-height: 1.5;"><span style="font-size: 15px;"><span
                                      data-custom-class="body_text"></span></span>
                                      <div style="line-height: 1.5;"><span style="font-size: 15px;"><span
                                        data-custom-class="body_text"></span></span>
                                        <div style="line-height: 1.5;">
                                            <span style="font-size: 15px;"><span
                                              data-custom-class="body_text"></span></span>
                                          <div style="line-height: 1.5;">
                                            <span style="font-size: 15px;"><span
                                              data-custom-class="body_text"></span></span>
                                            <bdt className="block-component"></bdt>
                                            <div style="line-height: 1.5;">
                                                <span style="font-size: 15px;"><span
                                                  data-custom-class="body_text"></span></span>
                                              <bdt className="block-component"></bdt>
                                            </div>
                                            <ul>
                                              <li style="line-height: 1.5;">
                                                  <span data-custom-class="body_text"><span
                                                    style="font-size: 15px;"><strong>To administer prize draws and competitions.</strong> We may process your information to administer prize draws and competitions.</span></span>
                                                <span style="font-size: 15px;"><span
                                                  data-custom-class="body_text"></span></span>
                                                <bdt className="statement-end-if-in-editor"></bdt>
                                              </li>
                                            </ul>
                                            <div style="line-height: 1.5;">
                                                <span style="font-size: 15px;"><span
                                                  data-custom-class="body_text"></span></span>
                                              <bdt className="block-component"></bdt>
                                              <div style="line-height: 1.5;">
                                                  <span style="font-size: 15px;"><span
                                                    data-custom-class="body_text"></span></span>
                                                <bdt className="block-component"></bdt>
                                              </div>
                                              <ul>
                                                <li style="line-height: 1.5;">
                                                    <span data-custom-class="body_text"><span
                                                      style="font-size: 15px;"><strong>To identify usage trends.</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.</span></span>
                                                  <bdt className="statement-end-if-in-editor"></bdt>
                                                  <span style="font-size: 15px;"><span
                                                    data-custom-class="body_text"></span></span>
                                                  <bdt className="statement-end-if-in-editor"></bdt>
                                                </li>
                                              </ul>
                                              <div style="line-height: 1.5;">
                                                  <span style="font-size: 15px;"><span
                                                    data-custom-class="body_text"></span></span>
                                                <bdt className="block-component"></bdt>
                                                <div style="line-height: 1.5;">
                                                    <span style="font-size: 15px;"><span
                                                      data-custom-class="body_text"></span></span>
                                                  <div style="line-height: 1.5;">
                                                      <span style="font-size: 15px;"><span
                                                        data-custom-class="body_text"></span></span>
                                                    <div style="line-height: 1.5;">
                                                        <span style="font-size: 15px;"><span
                                                          data-custom-class="body_text"></span></span>
                                                      <bdt className="block-component"></bdt>
                                                    </div>
                                                    <ul>
                                                      <li style="line-height: 1.5;">
                                                          <span style="font-size: 15px;"><span
                                                            data-custom-class="body_text"><strong>To comply with our legal obligations.</strong> We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.<bdt
                                                            className="statement-end-if-in-editor"></bdt></span></span>
                                                      </li>
                                                    </ul>
                                                    <div style="line-height: 1.5;">
                                                        <span style="font-size: 15px;"><span
                                                          data-custom-class="body_text"></span></span>
                                                      <bdt className="block-component"></bdt>
                                                      <div style="line-height: 1.5;">
                                                        <bdt className="block-component"></bdt>
                                                        <span style="font-size: 15px;"><span
                                                          data-custom-class="body_text"></span></span>
                                                        <bdt className="block-component"></bdt>
                                                        <bdt className="block-component"></bdt>
                                                        <span style="font-size: 15px;"><span
                                                          data-custom-class="body_text"></span></span>
                                                        <bdt className="block-component"></bdt>
                                                        <span style="font-size: 15px;"><span
                                                          data-custom-class="body_text"></span></span>
                                                        <bdt className="block-component"></bdt>
                                                        <bdt className="block-component"></bdt>
                                                        <span style="font-size: 15px;"><span
                                                          data-custom-class="body_text"></span></span>
                                                        <bdt className="block-component"></bdt>
                                                      </div>
                                                      <div style="line-height: 1.5;"></div>
                                                      <div id="whoshare" style="line-height: 1.5;">
                                                          <span style="color: rgb(127, 127, 127);"><span
                                                            style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                            style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                            style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                            id="control" style="color: rgb(0, 0, 0);"><strong><span
                                                            data-custom-class="heading_1">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</span></strong></span></span></span></span></span>
                                                      </div>
                                                      <div style="line-height: 1.5;"></div>
                                                      <div style="line-height: 1.5;">
                                                          <span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                            style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                            data-custom-class="body_text"><strong><em>In Short:</em></strong><em>&nbsp;We may share information in specific situations described in this section and/or with the following <bdt
                                                            className="block-component"></bdt>third parties.</em></span></span></span>
                                                      </div>
                                                      <div style="line-height: 1.5;">
                                                          <span style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                            style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                            data-custom-class="body_text"><bdt
                                                            className="block-component"></bdt></span></span></span>
                                                      </div>
                                                      <div style="line-height: 1.5;"></div>
                                                      <div style="line-height: 1.5;">
                                                          <span style="font-size: 15px;"><span
                                                            data-custom-class="body_text"><strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents (<bdt
                                                            className="block-component"></bdt>'<strong>third parties</strong>'<bdt
                                                            className="else-block"></bdt>) who perform services for us or on our behalf and require access to such information to do that work. <bdt
                                                            className="block-component"></bdt>The <bdt
                                                            className="block-component"></bdt>third parties we may share personal information with are as follows:</span></span><span
                                                        style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                        style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                        data-custom-class="body_text"><bdt
                                                        className="block-component"></bdt></span></span></span>
                                                        <span data-custom-class="body_text"><bdt
                                                          className="block-component"></bdt></span>
                                                        <bdt className="block-component"></bdt>
                                                        <bdt className="block-component"></bdt>
                                                        <bdt className="block-component"></bdt>
                                                        <bdt className="block-component"></bdt>
                                                        <bdt className="block-component"></bdt>
                                                        <bdt className="block-component"></bdt>
                                                        <bdt className="block-component"></bdt>
                                                        <bdt className="block-component"></bdt>
                                                        <bdt className="block-component"></bdt>
                                                        <bdt className="block-component"></bdt>
                                                        <bdt className="block-component"></bdt>
                                                        <bdt className="block-component"></bdt>
                                                        <bdt className="block-component"></bdt>
                                                        <bdt className="block-component"></bdt>
                                                        <bdt className="block-component"></bdt>
                                                        <bdt className="block-component"></bdt>
                                                        <span data-custom-class="body_text"></span><span
                                                        data-custom-class="body_text"></span><span
                                                        data-custom-class="body_text"></span><span
                                                        data-custom-class="body_text"></span><span
                                                        data-custom-class="body_text"></span><span
                                                        data-custom-class="body_text"></span>
                                                      </div>
                                                      <div style="line-height: 1.5;"></div>
                                                      <div style="line-height: 1.5;">
                                                          <span style="font-size: 15px;"><span
                                                            data-custom-class="body_text">We <bdt
                                                            className="block-component"></bdt>also <bdt
                                                            className="statement-end-if-in-editor"></bdt>may need to share your personal information in the following situations:</span></span>
                                                      </div>
                                                      <ul>
                                                        <li style="line-height: 1.5;">
                                                            <span style="font-size: 15px;"><span
                                                              data-custom-class="body_text"><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</span></span>
                                                        </li>
                                                      </ul>
                                                      <div style="line-height: 1.5;">
                                                          <span style="font-size: 15px;"><span
                                                            data-custom-class="body_text"><bdt
                                                            className="block-component"></bdt></span></span>
                                                        <div style="line-height: 1.5;">
                                                            <span style="font-size: 15px;"><span
                                                              data-custom-class="body_text"></span></span>
                                                          <div style="line-height: 1.5;">
                                                            <bdt className="block-component"></bdt>
                                                            <span style="font-size: 15px;"><span
                                                              data-custom-class="body_text"></span></span>
                                                            <bdt className="block-component"></bdt>
                                                          </div>
                                                          <ul>
                                                            <li style="line-height: 1.5;">
                                                                <span data-custom-class="body_text"><span
                                                                  style="font-size: 15px;"><strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</span></span>
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                              <span style="font-size: 15px;"><span
                                                                data-custom-class="body_text"></span></span>
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                            </li>
                                                          </ul>
                                                          <div style="line-height: 1.5;">
                                                            <bdt className="block-component"></bdt>
                                                            <span style="font-size: 15px;"><span
                                                              data-custom-class="body_text"></span></span>
                                                            <bdt className="block-component"></bdt>
                                                          </div>
                                                          <ul>
                                                            <li style="line-height: 1.5;">
                                                                <span style="font-size: 15px;"><span
                                                                  data-custom-class="body_text"><strong>Other Users.</strong> When you share personal information<bdt
                                                                  className="block-component"></bdt> (for example, by posting comments, contributions, or other content to the Services)<bdt
                                                                  className="statement-end-if-in-editor"></bdt> or otherwise interact with public areas of the Services, such personal information may be viewed by all users and may be publicly made available outside the Services in perpetuity.<bdt
                                                                  className="block-component"></bdt> If you interact with other users of our Services and register for our Services through a social network (such as Facebook), your contacts on the social network will see your name, profile photo, and descriptions of your activity.<bdt
                                                                  className="statement-end-if-in-editor"></bdt> Similarly, other users will be able to view descriptions of your activity, communicate with you within our Services, and view your profile.<bdt
                                                                  className="statement-end-if-in-editor"></bdt></span></span>
                                                            </li>
                                                          </ul>
                                                          <div style="line-height: 1.5;">
                                                            <bdt className="block-component"></bdt>
                                                            <span style="font-size: 15px;"><span
                                                              data-custom-class="body_text"></span></span>
                                                            <bdt className="block-component"></bdt>
                                                            <div style="line-height: 1.5;">
                                                              <bdt className="block-component"></bdt>
                                                              <span style="font-size: 15px;"><span
                                                                data-custom-class="body_text"></span></span>
                                                              <bdt className="block-component"></bdt>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                              <strong><span id="3pwebsites"
                                                                            style="font-size: 15px;"><span
                                                                data-custom-class="heading_1">4. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</span></span></strong>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span style="font-size: 15px;"><span
                                                                  data-custom-class="body_text"><strong><em>In Short:</em></strong><em>&nbsp;We are not responsible for the safety of any information that you share with third parties that we may link to or who advertise on our Services, but are not affiliated with, our Services.</em></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span style="font-size: 15px;"><span
                                                                  data-custom-class="body_text">The Services<bdt
                                                                  className="block-component"></bdt> may link to third-party websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. Accordingly, we do not make any guarantee regarding any such third parties, and we will not be liable for any loss or damage caused by the use of such third-party websites, services, or applications. The inclusion of a link towards a third-party website, service, or application does not imply an endorsement by us. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the Services. You should review the policies of such third parties and contact them directly to respond to your questions.</span></span>
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                              <span style="font-size: 15px;"><span
                                                                data-custom-class="body_text"></span></span>
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                              <span
                                                                style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                style="font-size: 15px;"><span
                                                                style="color: rgb(89, 89, 89);"><span
                                                                style="font-size: 15px;"><span
                                                                style="color: rgb(89, 89, 89);"><span
                                                                data-custom-class="heading_1"></span></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div id="cookies" style="line-height: 1.5;">
                                                                <span style="color: rgb(127, 127, 127);"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  id="control"
                                                                  style="color: rgb(0, 0, 0);"><strong><span
                                                                  data-custom-class="heading_1">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</span></strong></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text"><strong><em>In Short:</em></strong><em>&nbsp;We may use cookies and other tracking technologies to collect and store your information.</em></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text">We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice<span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  data-custom-class="body_text"><bdt
                                                                  className="block-component"></bdt></span></span>: <span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  data-custom-class="body_text"><a
                                                                  data-custom-class="link"
                                                                  href="https://web.archive.org/web/20220925043650/https://africoders.com/cookies-policy"
                                                                  target="_blank"
                                                                  rel="noopener">https://africoders.com/cookies-policy</a></span></span><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><bdt
                                                                  className="block-component"></bdt>.</span><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  style="font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text"><bdt
                                                                  className="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></span><span
                                                                  data-custom-class="body_text"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  style="font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text"><bdt
                                                                  className="block-component"></bdt></span></span></span></span></span></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div id="sociallogins" style="line-height: 1.5;">
                                                                <span style="color: rgb(127, 127, 127);"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  id="control"
                                                                  style="color: rgb(0, 0, 0);"><strong><span
                                                                  data-custom-class="heading_1">6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</span></strong></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text"><strong><em>In Short:&nbsp;</em></strong><em>If you choose to register or log in to our services using a social media account, we may have access to certain information about you.</em></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text">Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform. <span
                                                                  style="font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text"><bdt
                                                                  className="block-component"></bdt></span></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text">We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.<span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  style="font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text"><bdt
                                                                  className="statement-end-if-in-editor"></bdt></span><span
                                                                  data-custom-class="body_text"><bdt
                                                                  className="block-component"></bdt></span></span></span></span></span></span></span></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div id="inforetain" style="line-height: 1.5;">
                                                                <span style="color: rgb(127, 127, 127);"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  id="control"
                                                                  style="color: rgb(0, 0, 0);"><strong><span
                                                                  data-custom-class="heading_1">7. HOW LONG DO WE KEEP YOUR INFORMATION?</span></strong></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text"><strong><em>In Short:&nbsp;</em></strong><em>We keep your information for as long as necessary to <bdt
                                                                  className="block-component"></bdt>fulfil<bdt
                                                                  className="else-block"></bdt> the purposes outlined in this privacy notice unless otherwise required by law.</em></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text">We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than <span
                                                                  style="font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text"><bdt
                                                                  className="block-component"></bdt></span></span></span><bdt
                                                                  className="block-component"></bdt>the period of time in which users have an account with us<bdt
                                                                  className="block-component"></bdt><span
                                                                  style="font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text"><bdt
                                                                  className="else-block"></bdt></span></span></span>.</span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text">When we have no ongoing legitimate business need to process your personal information, we will either delete or <bdt
                                                                  className="block-component"></bdt>anonymise<bdt
                                                                  className="else-block"></bdt> such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.<span
                                                                  style="color: rgb(89, 89, 89);"><bdt
                                                                  className="block-component"></bdt></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div id="infosafe" style="line-height: 1.5;">
                                                                <span style="color: rgb(127, 127, 127);"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  id="control"
                                                                  style="color: rgb(0, 0, 0);"><strong><span
                                                                  data-custom-class="heading_1">8. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></strong></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text"><strong><em>In Short:&nbsp;</em></strong><em>We aim to protect your personal information through a system of <bdt
                                                                  className="block-component"></bdt>organisational<bdt
                                                                  className="else-block"></bdt> and technical security measures.</em></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text">We have implemented appropriate and reasonable technical and <bdt
                                                                  className="block-component"></bdt>organisational<bdt
                                                                  className="else-block"></bdt> security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other <bdt
                                                                  className="block-component"></bdt>unauthorised<bdt
                                                                  className="else-block"></bdt> third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.<span
                                                                  style="color: rgb(89, 89, 89);"><bdt
                                                                  className="statement-end-if-in-editor"></bdt></span><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  data-custom-class="body_text"><bdt
                                                                  className="block-component"></bdt></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div id="privacyrights" style="line-height: 1.5;">
                                                                <span style="color: rgb(127, 127, 127);"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  id="control"
                                                                  style="color: rgb(0, 0, 0);"><strong><span
                                                                  data-custom-class="heading_1">9. WHAT ARE YOUR PRIVACY RIGHTS?</span></strong></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text"><strong><em>In Short:</em></strong><em>&nbsp;
                                                                  <span style="color: rgb(89, 89, 89);"><span
                                                                    style="font-size: 15px;"><span
                                                                    data-custom-class="body_text"><em><bdt
                                                                    className="block-component"></bdt></em></span></span>&nbsp;</span>You may review, change, or terminate your account at any time.</em><span
                                                                  style="color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px;"><bdt
                                                                  className="block-component"></bdt></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);">&nbsp;</span>
                                                            </div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text">If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <span
                                                                  style="font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text"><span
                                                                  style="color: rgb(48, 48, 241);"><span
                                                                  data-custom-class="body_text"><a
                                                                  data-custom-class="link"
                                                                  href="https://web.archive.org/web/20220925043650/https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                                                                  rel="noopener noreferrer" target="_blank"><span
                                                                  style="font-size: 15px;">https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</span></a></span></span></span></span></span>.</span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text">If you are located in Switzerland, the contact details for the data protection authorities are available here: <span
                                                                  style="font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text"><span
                                                                  style="color: rgb(48, 48, 241);"><span
                                                                  data-custom-class="body_text"><span
                                                                  style="font-size: 15px;"><a data-custom-class="link"
                                                                                              href="https://web.archive.org/web/20220925043650/https://www.edoeb.admin.ch/edoeb/en/home.html"
                                                                                              rel="noopener noreferrer"
                                                                                              target="_blank">https://www.edoeb.admin.ch/edoeb/en/home.html</a></span></span></span></span></span></span>.</span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div id="withdrawconsent" style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text"><strong><u>Withdrawing your consent:</u></strong> If we are relying on your consent to process your personal information,<bdt
                                                                  className="block-component"></bdt> which may be express and/or implied consent depending on the applicable law,<bdt
                                                                  className="statement-end-if-in-editor"></bdt> you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section <bdt
                                                                  className="block-component"></bdt>'<bdt
                                                                  className="else-block"></bdt></span></span></span><a
                                                              data-custom-class="link" href="#contact"><span
                                                              style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                              style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                              data-custom-class="body_text">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></span></span></a><span
                                                              style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                              style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                              data-custom-class="body_text"><bdt
                                                              className="block-component"></bdt>'<bdt
                                                              className="else-block"></bdt> below<bdt
                                                              className="block-component"></bdt>.</span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span style="font-size: 15px;"><span
                                                                  data-custom-class="body_text">However, please note that this will not affect the lawfulness of the processing before its withdrawal nor,<bdt
                                                                  className="block-component"></bdt> when applicable law allows,<bdt
                                                                  className="statement-end-if-in-editor"></bdt> will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.<bdt
                                                                  className="block-component"></bdt></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span style="font-size: 15px;"><span
                                                                  data-custom-class="body_text"><strong><u>Opting out of marketing and promotional communications:</u></strong><strong><u>&nbsp;</u></strong>You can unsubscribe from our marketing and promotional communications at any time by<bdt
                                                                  className="block-component"></bdt> clicking on the unsubscribe link in the emails that we send,<bdt
                                                                  className="statement-end-if-in-editor"></bdt><bdt
                                                                  className="block-component"></bdt> replying <bdt
                                                                  className="block-component"></bdt>'STOP' or 'UNSUBSCRIBE'<bdt
                                                                  className="else-block"></bdt> to the SMS messages that we send,<bdt
                                                                  className="statement-end-if-in-editor"></bdt><bdt
                                                                  className="block-component"></bdt> or by contacting us using the details provided in the section <bdt
                                                                  className="block-component"></bdt>'<bdt
                                                                  className="else-block"></bdt></span></span><a
                                                              data-custom-class="link" href="#contact"><span
                                                              style="font-size: 15px;"><span
                                                              data-custom-class="body_text">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></span></a><span
                                                              style="font-size: 15px;"><span
                                                              data-custom-class="body_text"><bdt
                                                              className="block-component"></bdt>'<bdt
                                                              className="else-block"></bdt> below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</span><span
                                                              data-custom-class="body_text"><bdt
                                                              className="statement-end-if-in-editor"></bdt></span></span>
                                                              <bdt className="block-component"></bdt>
                                                              <span style="font-size: 15px;"><span
                                                                data-custom-class="body_text"></span></span>
                                                              <bdt className="block-component"></bdt>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span style="font-size: 15px;"><span
                                                                  data-custom-class="heading_2"><strong>Account Information</strong></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span data-custom-class="body_text"><span
                                                                  style="font-size: 15px;">If you would at any time like to review or change the information in your account or terminate your account, you can:<bdt
                                                                  className="forloop-component"></bdt></span></span>
                                                            </div>
                                                            <ul>
                                                              <li style="line-height: 1.5;">
                                                                  <span data-custom-class="body_text"><span
                                                                    style="font-size: 15px;"><bdt className="question">Contact us using the contact information provided.</bdt></span></span>
                                                              </li>
                                                            </ul>
                                                            <div style="line-height: 1.5;">
                                                                <span data-custom-class="body_text"><span
                                                                  style="font-size: 15px;"><bdt
                                                                  className="forloop-component"></bdt></span></span>
                                                            </div>
                                                            <ul>
                                                              <li style="line-height: 1.5;">
                                                                  <span data-custom-class="body_text"><span
                                                                    style="font-size: 15px;"><bdt className="question">Log in to your account settings and update your user account.</bdt></span></span>
                                                              </li>
                                                            </ul>
                                                            <div style="line-height: 1.5;">
                                                                <span data-custom-class="body_text"><span
                                                                  style="font-size: 15px;"><bdt
                                                                  className="forloop-component"></bdt></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;">
                                                                <span style="font-size: 15px;"><span
                                                                  data-custom-class="body_text">Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</span></span>
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                              <span style="font-size: 15px;"><span
                                                                data-custom-class="body_text"></span></span>
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                              <span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                data-custom-class="body_text"><span
                                                                style="font-size: 15px;"><span
                                                                style="color: rgb(89, 89, 89);"><span
                                                                style="font-size: 15px;"><span
                                                                style="color: rgb(89, 89, 89);"><span
                                                                data-custom-class="body_text"><span
                                                                style="font-size: 15px;"><span
                                                                style="color: rgb(89, 89, 89);"><bdt
                                                                className="block-component"></bdt></span></span></span></span></span></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text"><strong><u>Cookies and similar technologies:</u></strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit <span
                                                                  style="color: rgb(48, 48, 241);"><span
                                                                  data-custom-class="body_text"><a
                                                                  data-custom-class="link"
                                                                  href="https://web.archive.org/web/20220925043650/http://www.aboutads.info/choices/"
                                                                  rel="noopener noreferrer" target="_blank"><span
                                                                  style="font-size: 15px;">http://www.aboutads.info/choices/</span></a></span></span>. <span
                                                                  style="font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text"><bdt
                                                                  className="block-component"></bdt></span></span></span>For further information, please see our Cookie Notice: <span
                                                                  style="font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text"><a
                                                                  data-custom-class="link"
                                                                  href="https://web.archive.org/web/20220925043650/https://africoders.com/cookies-policy"
                                                                  target="_blank"
                                                                  rel="noopener">https://africoders.com/cookies-policy</a>.<bdt
                                                                  className="block-component"></bdt><span
                                                                  style="font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px;"><span
                                                                  style="color: rgb(89, 89, 89);"><bdt
                                                                  className="statement-end-if-in-editor"></bdt></span></span></span></span></span></span></span></span></span></span></span></span>
                                                              <bdt className="block-component"></bdt>
                                                              <span style="font-size: 15px;"><span
                                                                data-custom-class="body_text"></span></span>
                                                              <bdt className="block-component"></bdt>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span data-custom-class="body_text"><span
                                                                  style="font-size: 15px;">If you have questions or comments about your privacy rights, you may email us at <bdt
                                                                  className="question">privacy@africoders.com</bdt>.</span></span>
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                              <span style="font-size: 15px;"><span
                                                                data-custom-class="body_text"></span></span>
                                                              <bdt className="statement-end-if-in-editor"></bdt>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div id="DNT" style="line-height: 1.5;">
                                                                <span style="color: rgb(127, 127, 127);"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  id="control"
                                                                  style="color: rgb(0, 0, 0);"><strong><span
                                                                  data-custom-class="heading_1">10. CONTROLS FOR DO-NOT-TRACK FEATURES</span></strong></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (<bdt
                                                                  className="block-component"></bdt>'DNT'<bdt
                                                                  className="else-block"></bdt>) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for <bdt
                                                                  className="block-component"></bdt>recognising<bdt
                                                                  className="else-block"></bdt> and implementing DNT signals has been <bdt
                                                                  className="block-component"></bdt>finalised<bdt
                                                                  className="else-block"></bdt>. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div id="caresidents" style="line-height: 1.5;">
                                                                <span style="color: rgb(127, 127, 127);"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  id="control"
                                                                  style="color: rgb(0, 0, 0);"><strong><span
                                                                  data-custom-class="heading_1">11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></strong></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text"><strong><em>In Short:&nbsp;</em></strong><em>Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</em></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text">California Civil Code Section 1798.83, also known as the <bdt
                                                                  className="block-component"></bdt>'Shine The Light'<bdt
                                                                  className="else-block"></bdt> law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text">If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g.<bdt
                                                                  className="block-component"></bdt> backups, etc.).<span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  data-custom-class="body_text"><bdt
                                                                  className="block-component"></bdt></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div id="policyupdates" style="line-height: 1.5;">
                                                                <span style="color: rgb(127, 127, 127);"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  id="control"
                                                                  style="color: rgb(0, 0, 0);"><strong><span
                                                                  data-custom-class="heading_1">12. DO WE MAKE UPDATES TO THIS NOTICE?</span></strong></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text"><em><strong>In Short:&nbsp;</strong>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text">We may update this privacy notice from time to time. The updated version will be indicated by an updated <bdt
                                                                  className="block-component"></bdt>'Revised'<bdt
                                                                  className="else-block"></bdt> date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div id="contact" style="line-height: 1.5;">
                                                                <span style="color: rgb(127, 127, 127);"><span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  id="control"
                                                                  style="color: rgb(0, 0, 0);"><strong><span
                                                                  data-custom-class="heading_1">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></strong></span></span></span></span></span>
                                                            </div>
                                                            <div style="line-height: 1.5;"></div>
                                                            <div style="line-height: 1.5;">
                                                                <span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  style="font-size: 15px; color: rgb(89, 89, 89);"><span
                                                                  data-custom-class="body_text">If you have questions or comments about this notice, you may <span
                                                                  style="color: rgb(89, 89, 89); font-size: 15px;"><span
                                                                  data-custom-class="body_text"><bdt
                                                                  className="block-component"></bdt>contact us at <bdt
                                                                  className="question">facebook.com/africoders</bdt></span></span></span></span></span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
    ;
  }
}
