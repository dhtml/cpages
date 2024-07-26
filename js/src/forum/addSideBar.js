import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import Separator from 'flarum/common/components/Separator';
import LinkButton from 'flarum/common/components/LinkButton';

import app from 'flarum/forum/app';

export default function () {

  // Add a link to the tags page, as well as a list of all the tags,
  // to the index page's sidebar.
  extend(IndexPage.prototype, 'navItems', function (items) {

    const currentLocale = app.data.locale;
    console.log('currentLocale:', currentLocale);

    let cpagedata = app.forum.attribute('dhtml-cpages.locale');

    try {
      cpagedata = JSON.parse(cpagedata);
    } catch (e) {}

    console.log({cpagedata});


    const priority = 0;

    items.add(
      'customLink-1',
      <LinkButton external={false} href={'/tags'} rel="noopener noreferrer" icon='fas fa-th-large'>
        {app.translator.trans('dhtml-cpages.forum.tags-cloud')}
      </LinkButton>,
      priority
    );

    items.add(
      'customLink-3',
      <LinkButton external={false} href={'/leaderboard'} rel="noopener noreferrer" icon='fas fa-trophy'>
        {app.translator.trans('dhtml-cpages.forum.leaderboard')}
      </LinkButton>,
      priority
    );

    items.add(
      'customLink-2',
      <LinkButton external={true} target='_blank' href={'https://d.afr.ng'} rel="noopener noreferrer" icon='fab fa-discord'>
        {app.translator.trans('dhtml-cpages.forum.discord-chat')}
      </LinkButton>,
      priority
    );

    items.add(
      'customSeparator-1',
      <li className="Dropdown-separator"></li>,
      -14
    );


    items.add(
      'dhtml-sidebar-membership-1a',
      <LinkButton external={false} icon="fas fa-graduation-cap" href={'/t/live'}>
        {app.translator.trans('dhtml-cpages.forum.live')}
      </LinkButton>,
      -14
    );

    items.add(
      'dhtml-sidebar-membership-1b',
      <LinkButton external={false} icon="fas fa-briefcase" href={'/t/jobs'}>
        {app.translator.trans('dhtml-cpages.forum.jobs')}
      </LinkButton>,
      -14
    );

    items.add(
      'dhtml-sidebar-membership-1c',
      <LinkButton external={false} icon="fas fa-chalkboard-teacher" href={'/t/events'}>
        {app.translator.trans('dhtml-cpages.forum.events')}
      </LinkButton>,
      -14
    );

    items.add(
      'dhtml-sidebar-membership-2',
      <LinkButton external={false} icon="fas fa-tools" href={'/t/workshops'}>
        {app.translator.trans('dhtml-cpages.forum.workshops')}
      </LinkButton>,
      -14
    );

    items.add(
      'dhtml-sidebar-membership-3',
      <LinkButton external={false} icon="fas fa-flag-checkered" href={'/t/challenges'}>
        {app.translator.trans('dhtml-cpages.forum.challenges')}
      </LinkButton>,
      -14
    );


    items.add(
      'dhtml-sidebar-membership-7',
      <LinkButton external={false} icon="fas fa-tv" href={'/t/showcase'}>
        {app.translator.trans('dhtml-cpages.forum.showcase')}
      </LinkButton>,
      -14
    );

    items.add(
      'dhtml-sidebar-membership-8',
      <LinkButton external={false} icon="fas fa-question-circle" href={'/t/questions-and-answers'}>
        {app.translator.trans('dhtml-cpages.forum.q-a')}
      </LinkButton>,
      -14
    );

    items.add(
      'dhtml-sidebar-membership-90',
      <LinkButton external={false} icon="fas fa-users" href={'/t/community'}>
        {app.translator.trans('dhtml-cpages.forum.community')}
      </LinkButton>,
      -14
    );


    items.add(
      'customSeparator-3',
      <li className="Dropdown-separator"></li>,
      -14
    );

    items.add(
      'dhtml-sidebar-about',
      <LinkButton external={false} icon="fas fa-info-circle" href={'/about-us'}>
        {app.translator.trans('dhtml-cpages.forum.about-us')}
      </LinkButton>,
      -14
    );

    items.add(
      'dhtml-sidebar-guideline',
      <LinkButton external={false} icon="fas fa-book" href={'/guidelines'}>
        {app.translator.trans('dhtml-cpages.forum.guidelines')}
      </LinkButton>,
      -14
    );

    items.add(
      'dhtml-sidebar-privacy',
      <LinkButton external={false} icon="fas fa-user-secret" href={'/privacy-policy'}>
        {app.translator.trans('dhtml-cpages.forum.privacy-policy')}
      </LinkButton>,
      -14
    );


    items.add(
      'dhtml-sidebar-terms',
      <LinkButton external={false} icon="fas fa-file-contract" href={'/terms'}>
        {app.translator.trans('dhtml-cpages.forum.terms-of-use')}
      </LinkButton>,
      -14
    );


    items.add(
      'dhtml-sidebar-contact',
      <LinkButton icon="fas fa-at" href={'/contact-us'}>
        {app.translator.trans('dhtml-cpages.forum.contact-us')}
      </LinkButton>,
      -14
    );


    items.add(
      'dhtml-sidebar-download',
      <LinkButton external={false} icon="fas fa-download" href={'/download'}>
        {app.translator.trans('dhtml-cpages.forum.download-app')}
      </LinkButton>,
      -14
    );

    const CustomFooter = () => {
      const currentYear = new Date().getFullYear();

      return (
        <span className="CustomSidebarFooter">
      © Africoders {currentYear}
    </span>
      );
    }

    items.add('custom-sidebar', CustomFooter(), -14);

  });
}
