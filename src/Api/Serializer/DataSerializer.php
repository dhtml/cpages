<?php

/*
 * This file is part of fof/pages.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Dhtml\Cpages\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;

class DataSerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'cdata';

    /**
     * @param Locale $locale
     *
     * @return array
     */
    protected function getDefaultAttributes($page=null)
    {
        setupDetectedLocale();

        $translator = resolve('translator');

        $keys1 = ['tags-cloud','leaderboard','discord-chat'];
        $keys2 = ['live','jobs','events','workshops','challenges','showcase','q-a','community'];
        $keys3 = ['about-us','guidelines','privacy-policy','terms-of-use','contact-us','download-app'];

        $data = [];

        foreach (array_merge($keys1, $keys2, $keys3) as $title) {
            $data[$title] = $translator->trans('dhtml-cpages.forum.'.$title);
        }

        return $data;
    }
}
