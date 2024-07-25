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

class PageSerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'page';

    /**
     * @param Locale $locale
     *
     * @return array
     */
    protected function getDefaultAttributes($page)
    {
        $attributes = [
            'title' => $page->title,
            'content' => $page->content,
        ];
        return $attributes;
    }
}
