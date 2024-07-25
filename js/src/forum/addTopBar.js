import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import HeaderPrimary from 'flarum/common/components/HeaderPrimary';

import LinkButton from 'flarum/common/components/LinkButton';

export default function () {
  //add links to the topbar
  extend(HeaderPrimary.prototype, 'items', (items) => {

    const priority = 10;

    items.add(
      'topLink-1',
      <LinkButton className="LinksButton Button Button--link" external={false} href={'/'} rel="noopener noreferrer" icon='fas fa-home'>
        {app.translator.trans('flarum-content-pages.forum.home')}
      </LinkButton>,
      priority
    );

    items.add(
      'topLink-2',
      <LinkButton  className="LinksButton Button Button--link" external={false} href={'/about-us'} rel="noopener noreferrer" icon='fas fa-info-circle'>
        {app.translator.trans('flarum-content-pages.forum.about-us')}
      </LinkButton>,
      priority
    );

  });

}
