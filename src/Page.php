<?php

namespace Dhtml\Cpages;

use Carbon\Carbon;
use Dhtml\Cpages\Formatter;
use Flarum\Database\AbstractModel;
use Flarum\Database\ScopeVisibilityTrait;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property string $hash
 * @property string $source
 * @property string $locale
 * @property string $translation
 */
class Page extends AbstractModel
{
    use ScopeVisibilityTrait;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'cpages';

    protected $dates = ['time'];

}
