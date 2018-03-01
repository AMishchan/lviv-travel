<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Session;

class LocaleController extends Controller
{
    function index($locale)
    {
        if (in_array($locale, Config::get('app.locales'))) {   # Проверяем, что у пользователя выбран доступный язык
            Session::put('locale', $locale);                    # И устанавливаем его в сессии под именем locale
        }
        return redirect()->back();
    }

}