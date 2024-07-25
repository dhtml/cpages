<?php

/*
 * This file is part of fof/pages.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('cpages')) {
            return;
        }

        $schema->create('cpages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('slug', 200);
            $table->string('title', 200);
            $table->longtext('content')->nullable();
            $table->dateTime('time');
        });
    },
    'down' => function (Builder $schema) {
        //$schema->dropIfExists('cpages');
    },
];
