<?php

/*
 * This file is part of dhtml/cpages.
 *
 * Copyright (c) 2024 Anthony Ogundipe.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Dhtml\Cpages;

use Dhtml\Cpages\Api\Controllers\DataApiController;
use Dhtml\Cpages\Api\Controllers\PagesApiController;
use Dhtml\Cpages\Api\Controllers\TranslateApiController;
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less')
        ->route('/about-us', 'about-us')
        ->route('/contact-us', 'contact-us')
        ->route('/terms', 'our-terms')
        ->route('/guidelines', 'guidelines')
        ->route('/privacy-policy', 'privacy-policy')
        ->route('/download', 'our-download'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Routes('api'))
        ->get('/cpage/{slug}', 'cpages.load', PagesApiController::class),

    (new Extend\Routes('api'))
        ->get('/cpages-data', 'cpages.data', DataApiController::class),


];
