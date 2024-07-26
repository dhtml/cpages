<?php

namespace Dhtml\Cpages\Providers;


use Flarum\Foundation\AbstractServiceProvider;
use Flarum\Settings\SettingsRepositoryInterface;

class LocaleServiceProvider extends AbstractServiceProvider
{
    protected $settings;
    private $extensionName = 'dhtml-cpages.locale';

    public function __construct()
    {
        $this->settings = resolve(SettingsRepositoryInterface::class);
    }

    /**
     * {@inheritdoc}
     */
    public function register()
    {
        $lang = getDetectedLocale();

        $translator = resolve('translator');
        $translator->setLocale($lang);


        $keys1 = ['tags-cloud','leaderboard','discord-chat'];
        $keys2 = ['live','jobs','events','workshops','challenges','showcase','q-a','community'];
        $keys3 = ['about-us','guidelines','privacy-policy','terms-of-use','contact-us','download-app'];

        $data = [];

        foreach (array_merge($keys1, $keys2, $keys3) as $title) {
            $data[$title] = $translator->trans('dhtml-cpages.forum.'.$title);
        }

        $this->set($lang,$data);
    }


    public function getSystemSettings() {
        return @json_decode($this->settings->get($this->extensionName),true);
    }

    public function saveSystemSettings($settings) {
        $this->settings->set($this->extensionName, json_encode($settings));
    }


    public function get($name) {
        $settings = $this->getSystemSettings();
        return $settings[$name] ?? null;
    }

    public function set($name,$value) {
        $settings = $this->getSystemSettings();
        $settings[$name] = $value;
        $this->saveSystemSettings($settings);
    }


    public function remove($name) {
        $settings = $this->getSystemSettings();
        unset($settings[$name]);
        $this->saveSystemSettings($settings);
    }
}
