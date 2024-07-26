<?php

namespace Dhtml\Cpages\Api\Controllers;

use Dhtml\Cpages\Api\Serializer\DataSerializer;
use Dhtml\Cpages\Page;
use Flarum\Api\Controller\AbstractShowController;
use Flarum\Foundation\Application;
use Flarum\Http\RequestUtil;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Cache\Repository as Cache;
use Illuminate\Contracts\Config\Repository as ConfigRepository;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class DataApiController extends AbstractShowController
{
    public $serializer = DataSerializer::class;


    protected function data(ServerRequestInterface $request, Document $document)
    {
        return (object) [
            "id" => "1",
        ];
    }
}
