<?php

namespace Dhtml\Cpages\Api\Controllers;

use Dhtml\Cpages\Page;

use Flarum\Api\Controller\AbstractShowController;

use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

use Psr\Http\Message\ResponseInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Flarum\Http\RequestUtil;
use Illuminate\Contracts\Config\Repository as ConfigRepository;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Foundation\Application;
use Illuminate\Contracts\Cache\Repository as Cache;

use Dhtml\Cpages\Api\Serializer\PageSerializer;

class PagesApiController extends AbstractShowController
{
    public $serializer = PageSerializer::class;


    protected function data(ServerRequestInterface $request, Document $document)
    {

        $code = Arr::get($request->getQueryParams(), 'code');

        $slug = $request->getQueryParams()['slug'] ?? "about-us";

        $page = Page::query()->where("slug",$slug)
            ->firstOrFail();


        return (object) [
            "id" => $page->id,
            "title" => $page->title,
            "content" => $page->content,
        ];
    }
}
