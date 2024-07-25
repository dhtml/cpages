import Component from 'flarum/common/Component';
import Page from 'flarum/common/components/Page';
import ItemList from 'flarum/common/utils/ItemList';
import IndexPage from 'flarum/forum/components/IndexPage';
import listItems from 'flarum/common/helpers/listItems';

export default class Guidelines extends Page {
  oninit(vnode) {
    super.oninit(vnode);

    app.setTitle("Africoders Community Guidelines");
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
              <div class="fontico"><i class="fas fa-book"></i></div>
              <div class="icocont">
                <div class="titolo1">Africoders Community Guidelines</div>
              </div>
            </div>
          </header>
          <div class="Pages-container">
            <div class="Post-body"><h1><strong><em>Welcome to the Africoders Community!</em></strong></h1>

              <p>… And thanks for joining us! We’re excited about Africoders, and are always happy to meet people who
                feel the same way. We want <em>everyone</em> to get the most out of Africoders and the Africoders
                community, so we ask that you please read and follow these guidelines. And enjoy your visit here!</p>

              <h3><strong>Looking for Technies?</strong></h3>

              <p>You’ve come to the right place! We’re always busy working hard to make Africoders better, so there are
                limits to the help we can provide. Specifically:</p>

              <ul>
                <li><p>Most technies visit the board and drop discussions from time to time</p></li>

                <li><p>If you have questions, you can always drop them and you will get your replies quickly</p></li>
              </ul>

              <p>If you qualify, then please feel free to post about your issue. Be sure to provide any information
                that’s requested. And remember: the techies here always have lots of stuff to do, so <em>please be
                  patient!</em></p>

              <h3><strong>Make Yourself Heard</strong></h3>

              <p>Want to start a new discussion? Then spend some time browsing the forum, familiarize yourself
                with <strong><a href="https://africoders.com/tags" rel="ugc noopener nofollow" target="_blank">the tag
                  system</a></strong>, and do a few searches for keywords related to your topic: <em>it could be someone
                  has already started a discussion about it!</em></p>

              <p>When you’re sure you’re ready to start a discussion, please keep the following points in mind:</p>

              <ul>
                <li><p>Give it a good title! You’ll get the best results if your title makes it clear what you want to
                  talk about.</p></li>

                <li><p>Choose the right tag(s). This will increase the likelihood your post will be read and answered
                  promptly.</p></li>

                <li><p><em>Don’t</em> post repeatedly about the same topic, as doing so will tend to have the opposite
                  effect.</p></li>

                <li><p>If not using a tag set aside for multilingual use, <em>post in English only.</em> We can’t help
                  if we can’t read you!</p></li>

                <li><p>Remember, you don’t need to sign your posts. We’ve got your profile to let us know who you
                  are.</p></li>
              </ul>

              <p>Please make the effort to help us keep things organized. Time spent tidying up is time that we can’t
                spend getting to know you, discussing your issues, and talking about Africoders. And that, after all, is
                what we’re all here to do!</p>

              <h3><strong>Make Your Reply Count</strong></h3>

              <p>You’re taking the time to participate in a discussion, in the hope that others will read your ideas and
                take them into consideration. So why not make the effort to make your reply worth reading?</p>

              <ul>
                <li><p>Don’t reply to a title. Take some time to <em>read</em> the OP, and at least <em>scan</em> the
                  rest of the conversation first.</p></li>

                <li><p>Ask yourself if your reply adds to the discussion. If it doesn’t, give it some more thought
                  before posting.</p></li>

                <li><p>Avoid making one-word posts just to agree with someone; you can use the “Like” link for that.</p>
                </li>

                <li><p>Avoid making multiple posts in a row when one would suffice. This is a forum, not a chat
                  room.</p></li>

                <li><p>If your reply is likely to divert the course of the discussion, consider starting a new
                  discussion instead.</p></li>

                <li><p>If you just want to post a bit of nonsense as a test, please do it in the <a
                  href="https://africoders.com/t/sandbox" rel="ugc noopener nofollow" target="_blank">Test Posting</a>
                  <strong>tag instead.</strong></p></li>

                <li><p>Make sure your replies provide constructive feedback and support to allow for an inclusive
                  community.</p></li>
              </ul>

              <p>No one’s going to complain about the occasional joke or smart remark. We like to keep the mood light!
                But to keep things productive, as well, we ask that you try to avoid derailing a discussion
                altogether.</p>

              <h3><strong>Above All, Be Cool!</strong></h3>

              <p>We’re all here to talk about Africoders, and to work together toward making it an even better
                application. Criticizing ideas (by means of reasoned arguments, of course) is an important part of that.
                But let’s not get carried away and devolve into personal attacks, because negativity only gets in the
                way. We also ask that you avoid the following:</p>

              <ul>
                <li><p>Offensive or abusive language, as well as any kind of hate speech</p></li>

                <li><p>Posts intended to harass, impersonate, or defame others</p></li>

                <li><p>Unnecessary deletion of posted content</p></li>

                <li><p>Attempts to abuse or expose the private information of others</p></li>

                <li><p>Obscene or sexually explicit content</p></li>

                <li><p>Spam, phishing posts, and any actions intended to deface this site</p></li>

                <li><p>Obfuscating a link’s true destination, for example with the use of link shorteners</p></li>

                <li><p>Discussion of software piracy and similar topics</p></li>
              </ul>

              <p><em>All the above are grounds for moderator action.</em> If you have an issue with another member, we
                ask that you please don’t confront them yourself. Please just use the <em>Report</em> command on the
                post in question, then leave it up to the staff to deal with the situation.</p>

              <p>Our moderators may edit or delete any content that is offensive or disruptive to the flow of
                communication. Serious or repeated offenses may lead to suspension of the offending user’s account. So,
                you know, <em>be cool</em>. <img
                  src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14/assets/72x72/1f60e.png" title="" alt="😎"/></p>
            </div>
          </div>
        </div>
    );
  }


}
