<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <!-- Fonts -->
    <link rel="stylesheet" href="{{asset('font-awesome-4.7.0/css/font-awesome.min.css')}}">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta name="description" content="">
    {{--<link rel="stylesheet" href="{{ asset('css/main.css') }}"/>--}}
    <link rel="stylesheet" href="/css/main.css?t=<?php echo(microtime(true)); ?>" type="text/css"/>
    <link rel="stylesheet" href="/css/landing.css?t=<?php echo(microtime(true)); ?>" type="text/css"/>
    <link href="{{ asset('libs/bootstrap/css/bootstrap-grid.min.css') }}" rel="stylesheet">
    {{--<link href="{{ asset('libs/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">--}}
    {{--<link href="{{ asset('libs/bootstrap/css/bootstrap.css') }}" rel="stylesheet">--}}
    <link href="{{ asset('libs/bootstrap/js/bootstrap.js') }}" rel="stylesheet">
    <link href="{{ asset('/css/header-menu.css') }}" rel="stylesheet">
</head>


{{--<div class="flex-center position-ref full-height">--}}
{{--@if (Route::has('login'))--}}
{{--<div class="top-right links">--}}
{{--@if (Auth::check())--}}
{{--<a href="{{ url('/home') }}">Home</a>--}}
{{--@else--}}
{{--<a href="{{ url('/login') }}">Login</a>--}}
{{--<a href="{{ url('/register') }}">Register</a>--}}
{{--@endif--}}
{{--</div>--}}
{{--@endif--}}

{{--<div class="content">--}}
{{--<div class="title m-b-md">--}}
{{--Laravel--}}
{{--</div>--}}

{{--<div class="links">--}}
{{--<a href="https://laravel.com/docs">Documentation</a>--}}
{{--<a href="https://laracasts.com">Laracasts</a>--}}
{{--<a href="https://laravel-news.com">News</a>--}}
{{--<a href="https://forge.laravel.com">Forge</a>--}}
{{--<a href="https://github.com/laravel/laravel">GitHub</a>--}}
{{--</div>--}}
{{--</div>--}}
{{--</div>--}}
<header class="header header--main">
    <div class="container">
        <div class="row-flex row-flex--between row-flex--middle">
            <div class="col visible-sm visible-xs">
                <button class="btn-menu visible-xs-inline-block visible-sm-inline-block"><span></span></button>
            </div>
            <div class="col">
                <div class="row-flex row-flex--middle">
                    <div class="col-md-5">
                        <div class="header__logo">
                            <a href="/"><img src="images/lviv-logo-sprite.png" alt=""></a>
                        </div>
                    </div>
                    <div class="col p-0 px-onehalf-md">
                        <nav class="header__nav">
                            <ul class="row-flex">
                                <li><a href="#" class="nav-link" data-menu="now">Вже і зараз</a></li>
                                <li><a href="#" class="nav-link" data-menu="lviv">Твій Львів</a></li>
                                <li><a href="#" class="nav-link" data-menu="events">Події</a></li>
                                <li><a href="#" class="nav-link" data-menu="planning">Сплануй</a></li>
                                <li><a href="#" class="nav-link" data-menu="business">Для бізнесу</a></li>
                                <li><a href="#" class="nav-link visible-xs visible-sm"
                                       data-menu="languages">Languages</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="col">
                <a href="#" class="nav-link" data-menu="search">
                    <i class="fa header-search fa-search" aria-hidden="true"></i>
                    <span class="hidden-sm hidden-xs"></span></a>
                <div class="dropdown header__lang hidden-xs hidden-sm">
                    <button class="dropdown-toggle" type="button" data-toggle="dropdown">Eng</button>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <li><a onclick="location.href='setlang/en'">English</a></li>
                        <li><a onclick="location.href='setlang/ua'">Українська</a></li>
                        <li><a onclick="location.href='setlang/pl'">Polski</a></li>
                        <li><a onclick="location.href='setlang/ru'">Русский</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>