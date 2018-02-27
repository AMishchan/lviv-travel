<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <!-- Fonts -->
    <link rel="stylesheet" href="{{asset('font-awesome-4.7.0/css/font-awesome.min.css')}}">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta name="description" content="">
    {{--<link rel="stylesheet" href="{{ asset('css/main.css') }}"/>--}}
    <link rel="stylesheet" href="/css/main.css?t=<?php echo(microtime(true)); ?>" type="text/css"/>

</head>

<body class="home-page">
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
                                <li><a href="#" class="nav-link" data-menu="business">Про бізнес</a></li>
                                <li><a href="#" class="nav-link visible-xs visible-sm"
                                       data-menu="languages">Languages</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="col">
                <a href="#" class="nav-link" data-menu="search"><i class="fa header-search fa-search"
                                                                   aria-hidden="true"></i><span
                            class="hidden-sm hidden-xs"></span></a>

                <div class="dropdown header__lang hidden-xs hidden-sm">
                    <button class="dropdown-toggle nav-link" type="button" data-toggle="dropdown">Eng</button>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <li><a href="#">Українська</a></li>
                        <li><a href="#">English</a></li>
                        <li><a href="#">Polski</a></li>
                        <li><a href="#">Deutsch</a></li>
                        <li><a href="#">Русский</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


</header>
<div class="main-menu">
    <div class="container">
        <div class="main-menu-close"></div>
        <div class="menu" id="now">
            <a href="#" class="btn-menu-back visible-xs visible-sm">Назад</a>
            <div class="row">
                <div class="col-md-3 col-lg-3">
                    <ul class="menu__subnav menu-trig menu__nav">
                        <li><a href="#">Свіжі новини</a></li>
                        <li><a href="#">Актуальні події</a></li>
                        <li><a href="#">Рекомендовані Події</a></li>
                        <li><a href="#">Топові місця</a></li>
                        <li><a href="#" style="opacity: 0.5">City Card</a></li>
                    </ul>
                    <br>
                    <br>
                    <br>
                    <div>
                        <form action="" class="form-search form-search--violet">
                            <input type="text" placeholder="Шукати: aртисти, події">
                            <button class="btn"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <div class="popup-socials">
                            <span class="mr-2 fw-bold visible-md-inline-block">Слідкуй за нами</span>
                            <ul class="social">
                                <li>
                                    <a href="#" class="btn-social"><i class="fa fa-facebook-official"
                                                                      aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-social"><i class="fa fa-instagram"
                                                                      aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-social"><i class="fa fa-twitter-square"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-social"><i class="fa fa-google-plus-square"
                                                                      aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-9 col-lg-9 hidden-xs">
                    <div class="b-l">
                        <div class="menu__cards mt-3 mt-0-md">
                            <div class="row">
                                <div class="col-sm-6 col-md-6 col-lg-6">
                                    <a href="#" class="card ">
                                        <div class="card-img-marker">
                                            <p class="card-marker-date-text">Дата проведення</p>
                                            <p class="card-marker-date">07-06</p>
                                            <p class="card-marker-month">Вересня</p>
                                            <p class="card-marker-time-text">Час проведення</p>
                                            <p class="card-marker-time">15.30-16.00</p>
                                        </div>
                                        <div class="card__img card-img-now">
                                            <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg"
                                                 data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg"
                                                 alt="" class="blurryload">
                                        </div>
                                        <div class="card__overlay">
                                            <div class="card__description ">
                                                <div class="card__title">Метеорологи прогнозують у Львові
                                                    найсніжнішу зиму за останні 12 років
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-sm-6 col-md-6 col-lg-6">
                                    <a href="#" class="card ">
                                        <div class="card-img-marker">
                                            <p class="card-marker-date-text">Дата проведення</p>
                                            <p class="card-marker-date">07-06</p>
                                            <p class="card-marker-month">Вересня</p>
                                            <p class="card-marker-time-text">Час проведення</p>
                                            <p class="card-marker-time">15.30-16.00</p>
                                        </div>
                                        <div class="card__img card-img-now">
                                            <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg"
                                                 data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg"
                                                 alt="" class="blurryload">
                                        </div>
                                        <div class="card__overlay">
                                            <div class="card__description ">
                                                <div class="card__title">Метеорологи прогнозують у Львові
                                                    найсніжнішу зиму за останні 12 років
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 col-lg-3">
                                    <a href="#" class="card card-small">
                                        <div class="card-img-marker-small">
                                            <p class="card-marker-date-small">07-06</p>
                                            <p class="card-marker-month-small">Вересня</p>
                                        </div>
                                        <div class="card__img card-img-now">
                                            <img src="images/card-image-1.jpg"
                                                 data-lg="images/card-image-1.jpg"
                                                 data-md="images/card-image-1.jpg"
                                                 data-sm="images/card-image-1.jpg"
                                                 alt="" class="blurryload">
                                        </div>
                                        <div class="card__overlay card-overlay-small">
                                            <div class="card__description ">

                                                <div class="card-block-class">Подія</div>
                                                <div class="card__title-small">Дні мистецтва перформанс у
                                                    Львові 2017
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-md-3 col-lg-3">
                                    <a href="#" class="card card-small">
                                        <div class="card-img-marker-small">
                                            <p class="card-marker-date-small">07-06</p>
                                            <p class="card-marker-month-small">Вересня</p>
                                        </div>
                                        <div class="card__img card-img-now">
                                            <img src="images/card-image-1.jpg"
                                                 data-lg="images/card-image-1.jpg"
                                                 data-md="images/card-image-1.jpg"
                                                 data-sm="images/card-image-1.jpg"
                                                 alt="" class="blurryload">
                                        </div>
                                        <div class="card__overlay card-overlay-small">
                                            <div class="card__description ">

                                                <div class="card-block-class">Подія</div>
                                                <div class="card__title-small">Дні мистецтва перформанс у
                                                    Львові 2017
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-md-3 col-lg-3">
                                    <a href="#" class="card card-small">
                                        <div class="card-img-marker-small">
                                            <p class="card-marker-date-small">07-06</p>
                                            <p class="card-marker-month-small">Вересня</p>
                                        </div>
                                        <div class="card__img card-img-now">
                                            <img src="images/card-image-1.jpg"
                                                 data-lg="images/card-image-1.jpg"
                                                 data-md="images/card-image-1.jpg"
                                                 data-sm="images/card-image-1.jpg"
                                                 alt="" class="blurryload">
                                        </div>
                                        <div class="card__overlay card-overlay-small">
                                            <div class="card__description ">

                                                <div class="card-block-class">Подія</div>
                                                <div class="card__title-small">Дні мистецтва перформанс у
                                                    Львові 2017
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-md-3 col-lg-3">
                                    <a href="#" class="card card-small">
                                        <div class="card-img-marker-small">
                                            <p class="card-marker-date-small">07-06</p>
                                            <p class="card-marker-month-small">Вересня</p>
                                        </div>
                                        <div class="card__img card-img-now">
                                            <img src="images/card-image-1.jpg"
                                                 data-lg="images/card-image-1.jpg"
                                                 data-md="images/card-image-1.jpg"
                                                 data-sm="images/card-image-1.jpg"
                                                 alt="" class="blurryload">
                                        </div>
                                        <div class="card__overlay card-overlay-small">
                                            <div class="card__description ">

                                                <div class="card-block-class">Подія</div>
                                                <div class="card__title-small">Дні мистецтва перформанс у
                                                    Львові 2017
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <a href="{{route('now')}}" class="btn btn--green">Більше подій</a>
                    </div>
                </div>
            </div>

        </div>
        <div class="menu" id="lviv">
            <a href="#" class="btn-menu-back visible-xs visible-sm">Назад</a>
            <div class="row">
                <div class="col-sm-5 col-md-3 col-lg-3">
                    <ul class="menu__nav mb-4 menu-trig">
                        <li><a href="#">Їжа та напої</a></li>
                        <li><a href="#">Пам’ятки</a></li>
                        <li><a href="#">Музеї та Галереї</a></li>
                        <li><a href="#">Атракції</a></li>
                        <li><a href="#">Парки</a></li>
                        <li><a href="#">Театри/Філармонії</a></li>
                        <li><a href="#">Громадські місця</a></li>
                        <li><a href="#">Тури</a></li>
                        <li><a href="#">Навколо Львова</a></li>
                    </ul>
                    <div class="col-xs-12 col-md-6">
                        <div class="popup-socials">
                            <span class="mr-2 fw-bold visible-md-inline-block">Слідкуй за нами</span>
                            <ul class="social">
                                <li>
                                    <a href="#" class="btn-social"><i class="fa fa-facebook-official"
                                                                      aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-social"><i class="fa fa-instagram"
                                                                      aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-social"><i class="fa fa-twitter-square"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-social"><i class="fa fa-google-plus-square"
                                                                      aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-7 col-md-9 col-lg-9 hidden-xs">
                    <div class="row">
                        <h3>Популярні заклади</h3>
                        <div class="col-md-3 col-lg-3">
                            <a href="#" class="card card-small">
                                <div class="card-img-marker-small">
                                    <img src="" alt="">
                                </div>
                                <div class="place-mark">
                                    <span>5.2</span>
                                </div>
                                <div class="card__img card-img-pl">
                                    <img src="images/card-image-1.jpg"
                                         data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg"
                                         data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay card-overlay-small">
                                    <div class="card__description ">
                                        <div class="card-lviv-type">Ресторан</div>
                                        <div class="card-lviv-name">Кумпель</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 col-lg-3">
                            <a href="#" class="card card-small">
                                <div class="card-img-marker-small">
                                    <img src="" alt="">
                                </div>
                                <div class="place-mark">
                                    <span>5.2</span>
                                </div>
                                <div class="card__img card-img-pl">
                                    <img src="images/card-image-1.jpg"
                                         data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg"
                                         data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay card-overlay-small">
                                    <div class="card__description ">
                                        <div class="card-lviv-type">Ресторан</div>
                                        <div class="card-lviv-name">Кумпель</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 col-lg-3">
                            <a href="#" class="card card-small">
                                <div class="card-img-marker-small">
                                    <img src="" alt="">
                                </div>
                                <div class="place-mark">
                                    <span>5.2</span>
                                </div>
                                <div class="card__img card-img-pl">
                                    <img src="images/card-image-1.jpg"
                                         data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg"
                                         data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay card-overlay-small">
                                    <div class="card__description ">
                                        <div class="card-lviv-type">Ресторан</div>
                                        <div class="card-lviv-name">Кумпель</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 col-lg-3">
                            <a href="#" class="card card-small">
                                <div class="card-img-marker-small">
                                    <img src="" alt="">
                                </div>
                                <div class="place-mark">
                                    <span>5.2</span>
                                </div>
                                <div class="card__img card-img-pl">
                                    <img src="images/card-image-1.jpg"
                                         data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg"
                                         data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay card-overlay-small">
                                    <div class="card__description ">
                                        <div class="card-lviv-type">Ресторан</div>
                                        <div class="card-lviv-name">Кумпель</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <h3>Рекомендовані місця</h3>
                        <div class="col-md-3 col-lg-3">
                            <a href="#" class="card card-small">
                                <div class="place-mark">
                                    <span>5.2</span>
                                </div>
                                <div class="card__img card-img-pl">
                                    <img src="images/card-image-1.jpg"
                                         data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg"
                                         data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay card-overlay-small">
                                    <div class="card__description">
                                        <div class="card-lviv-name">Личаківський цвинтар Личаківський цвинтар</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 col-lg-3">
                            <a href="#" class="card card-small">
                                <div class="place-mark">
                                    <span>5.2</span>
                                </div>
                                <div class="card__img card-img-pl">
                                    <img src="images/card-image-1.jpg"
                                         data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg"
                                         data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay card-overlay-small">
                                    <div class="card__description">
                                        <div class="card-lviv-name">Личаківський цвинтар Личаківський цвинтар</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 col-lg-3">
                            <a href="#" class="card card-small">
                                <div class="place-mark">
                                    <span>5.2</span>
                                </div>
                                <div class="card__img card-img-pl">
                                    <img src="images/card-image-1.jpg"
                                         data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg"
                                         data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay card-overlay-small">
                                    <div class="card__description">
                                        <div class="card-lviv-name">Личаківський цвинтар Личаківський цвинтар</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 col-lg-3">
                            <a href="#" class="card card-small">
                                <div class="place-mark">
                                    <span>5.2</span>
                                </div>
                                <div class="card__img card-img-pl">
                                    <img src="images/card-image-1.jpg"
                                         data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg"
                                         data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay card-overlay-small">
                                    <div class="card__description">
                                        <div class="card-lviv-name">Личаківський цвинтар Личаківський цвинтар</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <a href="{{route('events')}}" class="btn btn--green">Більше подій</a>
                    </div>

                </div>
            </div>
        </div>
        <div class="menu" id="events">
            <a href="#" class="btn-menu-back visible-xs visible-sm">Назад</a>
            <div class="row">
                <div class="col-md-3 col-lg-3">
                    <ul class="menu__nav mb-4">
                        <li><a href="#">Події у Львові</a>
                            <ul class="menu__subnav">
                                <li><a href="#">Мистецтво та Культура <span class="fw-regular">(12)</span></a></li>
                                <li><a href="#">Фестивалі <span class="fw-regular">(4)</span></a></li>
                                <li><a href="#">для Дітей <span class="fw-regular">(15)</span></a></li>
                                <li><a href="#">Спорт <span class="fw-regular">(4)</span></a></li>
                                <li><a href="#">Бізнес конференції <span class="fw-regular">(1)</span></a></li>
                                <li><a href="#">Театр <span class="fw-regular">(6)</span></a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="col-xs-12 col-md-6">
                        <div class="popup-socials">
                            <span class="mr-2 fw-bold visible-md-inline-block">Слідкуй за нами</span>
                            <ul class="social">
                                <li>
                                    <a href="#" class="btn-social"><i class="fa fa-facebook-official"
                                                                      aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-social"><i class="fa fa-instagram"
                                                                      aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-social"><i class="fa fa-twitter-square"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-social"><i class="fa fa-google-plus-square"
                                                                      aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-9 col-lg-9 ">
                    <div class="b-l hidden-xs">
                        <div class="menu__cards mt-3 mt-0-md">
                            <div class="h3 fw-black mb-2">Рекомендовані події</div>
                            <div class="row">
                                <div class="col-lg-3 visible-lg">
                                    <a href="#" class="card ">
                                        <div class="events-card-time">
                                            <span class="date">07-08</span>
                                            <span class="month">Жовтня</span>

                                        </div>
                                        <div class="card__img">
                                            <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg"
                                                 data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg"
                                                 alt="" class="blurryload">
                                        </div>
                                        <div class="card__overlay">
                                            <div class="card__description ">
                                                <div class="card__title">Метеорологи прогнозують у Львові
                                                    найсніжнішу зиму за останні 12 років
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-3 visible-lg">
                                    <a href="#" class="card ">
                                        <div class="events-card-time">
                                            <span class="date">07-08</span>
                                            <span class="month">Жовтня</span>

                                        </div>
                                        <div class="card__img">
                                            <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg"
                                                 data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg"
                                                 alt="" class="blurryload">
                                        </div>
                                        <div class="card__overlay">
                                            <div class="card__description ">
                                                <div class="card__title">Метеорологи прогнозують у Львові
                                                    найсніжнішу зиму за останні 12 років
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-3 visible-lg">
                                    <a href="#" class="card ">
                                        <div class="events-card-time">
                                            <span class="date">07-08</span>
                                            <span class="month">Жовтня</span>

                                        </div>
                                        <div class="card__img">
                                            <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg"
                                                 data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg"
                                                 alt="" class="blurryload">
                                        </div>
                                        <div class="card__overlay">
                                            <div class="card__description ">
                                                <div class="card__title">Метеорологи прогнозують у Львові
                                                    найсніжнішу зиму за останні 12 років
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-3 visible-lg">
                                    <a href="#" class="card ">
                                        <div class="events-card-time">
                                            <span class="date">07-08</span>
                                            <span class="month">Жовтня</span>

                                        </div>
                                        <div class="card__img">
                                            <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg"
                                                 data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg"
                                                 alt="" class="blurryload">
                                        </div>
                                        <div class="card__overlay">
                                            <div class="card__description ">
                                                <div class="card__title">Метеорологи прогнозують у Львові
                                                    найсніжнішу зиму за останні 12 років
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form action="" class="form-search form-search--violet">
                        <input type="text" placeholder="Шукати: aртисти, події">
                        <button class="btn"><i class="fa fa-search"></i></button>
                    </form>
                    <a href="{{route('now')}}" class="btn btn--green">Більше подій</a>
                </div>
            </div>
        </div>


        <div class="menu" id="planning">
            <a href="#" class="btn-menu-back visible-xs visible-sm">Назад</a>
            <div class="row">
                <div class="col-sm-5 col-md-3 col-lg-3">
                    <ul class="menu__nav mb-4 menu-trig">
                        <li><a href="#">До Львова</a></li>
                        <li><a href="#">Громадський транспорт</a></li>
                        <li><a href="#">Де зупинитись</a></li>
                        <li><a href="#">Путівники та карти</a></li>
                        <li><a href="#">Все що траба знати</a></li>
                    </ul>
                    <div class="col-xs-12 col-md-6">
                        <div class="popup-socials">
                            <span class="mr-2 fw-bold visible-md-inline-block">Слідкуй за нами</span>
                            <ul class="social">
                                <li>
                                    <a href="#" class="btn-social"><i class="fa fa-facebook-official"
                                                                      aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-social"><i class="fa fa-instagram"
                                                                      aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-social"><i class="fa fa-twitter-square"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-social"><i class="fa fa-google-plus-square"
                                                                      aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-7 col-md-9 col-lg-9 hidden-xs">
                    <div class="row">
                        <h3>До Львова</h3>
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <a href="#" class="card ">
                                <div class="card__img card-img-now">
                                    <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay">
                                    <div class="card__description ">
                                        <div class="card__title">Літак</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <a href="#" class="card ">
                                <div class="card__img card-img-now">
                                    <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay">
                                    <div class="card__description ">
                                        <div class="card__title">Поїзд</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <a href="#" class="card ">
                                <div class="card__img card-img-now">
                                    <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay">
                                    <div class="card__description ">
                                        <div class="card__title">Автобус</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <h3>Популярні готелі</h3>
                        <div class="col-md-3 col-lg-3">
                            <a href="#" class="card card-small">
                                <div class="card-img-marker-small">
                                    <img src="" alt="">
                                </div>
                                <div class="place-mark">
                                    <span>5.2</span>
                                </div>
                                <div class="card__img card-img-pl">
                                    <img src="images/card-image-1.jpg"
                                         data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg"
                                         data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay card-overlay-small">
                                    <div class="card__description ">
                                        <div class="card-hotel-type">Готель</div>
                                        <div class="card-hotel-name">Тиць</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 col-lg-3">
                            <a href="#" class="card card-small">
                                <div class="card-img-marker-small">
                                    <img src="" alt="">
                                </div>
                                <div class="place-mark">
                                    <span>5.2</span>
                                </div>
                                <div class="card__img card-img-pl">
                                    <img src="images/card-image-1.jpg"
                                         data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg"
                                         data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay card-overlay-small">
                                    <div class="card__description ">
                                        <div class="card-hotel-type">Готель</div>
                                        <div class="card-hotel-name">Тиць</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 col-lg-3">
                            <a href="#" class="card card-small">
                                <div class="card-img-marker-small">
                                    <img src="" alt="">
                                </div>
                                <div class="place-mark">
                                    <span>5.2</span>
                                </div>
                                <div class="card__img card-img-pl">
                                    <img src="images/card-image-1.jpg"
                                         data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg"
                                         data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay card-overlay-small">
                                    <div class="card__description ">
                                        <div class="card-hotel-type">Готель</div>
                                        <div class="card-hotel-name">Тиць</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 col-lg-3">
                            <a href="#" class="card card-small">
                                <div class="card-img-marker-small">
                                    <img src="" alt="">
                                </div>
                                <div class="place-mark">
                                    <span>5.2</span>
                                </div>
                                <div class="card__img card-img-pl">
                                    <img src="images/card-image-1.jpg"
                                         data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg"
                                         data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay card-overlay-small">
                                    <div class="card__description ">
                                        <div class="card-hotel-type">Готель</div>
                                        <div class="card-hotel-name">Тиць</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <a href="{{route('now')}}" class="btn btn--green">Більше подій</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="menu" id="business">
            <a href="#" class="btn-menu-back visible-xs visible-sm">Назад</a>
            <div class="row">
                <div class="col-sm-5 col-md-3 col-lg-3">
                    <ul class="menu__nav mb-4 menu-trig">
                        <li><a href="#">Новини</a></li>
                        <li><a href="#">Про бізнес (бізнес у Львові)</a></li>
                        <li><a href="#">Бізнес події</a></li>
                        <li><a href="#">Заплануй подію</a></li>
                        <li><a href="#">Lviv Convention Bureau</a></li>
                        <li><a href="#">Invest in Lviv</a></li>
                        <li><a href="#">Загальна інформація</a></li>
                        <li><a href="#">Про нас</a></li>
                    </ul>
                    <div class="col-xs-12 col-md-6">
                        <div class="popup-socials">
                            <span class="mr-2 fw-bold visible-md-inline-block">Слідкуй за нами</span>
                            <ul class="social">
                                <li>
                                    <a href="#" class="btn-social"><i class="fa fa-facebook-official"
                                                                      aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-social"><i class="fa fa-instagram"
                                                                      aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-social"><i class="fa fa-twitter-square"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="btn-social"><i class="fa fa-google-plus-square"
                                                                      aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-7 col-md-9 col-lg-9 hidden-xs">
                    <div class="row">
                        <h3>Бізнес новини</h3>
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <a href="#" class="card ">
                                <div class="card__img card-img-now">
                                    <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay">
                                    <div class="card__description ">
                                        <div class="card__title">У Львові відбулась Літня конференція міжнародної
                                            асоціації
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <a href="#" class="card ">
                                <div class="card__img card-img-now">
                                    <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay">
                                    <div class="card__description ">
                                        <div class="card__title">У Львові відбулась Літня конференція міжнародної
                                            асоціації
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <a href="#" class="card ">
                                <div class="card__img card-img-now">
                                    <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay">
                                    <div class="card__description ">
                                        <div class="card__title">У Львові відбулась Літня конференція міжнародної
                                            асоціації
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <h3>Рекомендовані бізнес події</h3>
                        <div class="col-lg-3 visible-lg">
                            <a href="#" class="card ">
                                <div class="events-card-time">
                                    <span class="date">07-08</span>
                                    <span class="month">Жовтня</span>

                                </div>
                                <div class="card__img">
                                    <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay">
                                    <div class="card__description ">
                                        <div class="card__title">Метеорологи прогнозують у Львові
                                            найсніжнішу зиму за останні 12 років
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 visible-lg">
                            <a href="#" class="card ">
                                <div class="events-card-time">
                                    <span class="date">07-08</span>
                                    <span class="month">Жовтня</span>

                                </div>
                                <div class="card__img">
                                    <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay">
                                    <div class="card__description ">
                                        <div class="card__title">Метеорологи прогнозують у Львові
                                            найсніжнішу зиму за останні 12 років
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 visible-lg">
                            <a href="#" class="card ">
                                <div class="events-card-time">
                                    <span class="date">07-08</span>
                                    <span class="month">Жовтня</span>

                                </div>
                                <div class="card__img">
                                    <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay">
                                    <div class="card__description ">
                                        <div class="card__title">Метеорологи прогнозують у Львові
                                            найсніжнішу зиму за останні 12 років
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-3 visible-lg">
                            <a href="#" class="card ">
                                <div class="events-card-time">
                                    <span class="date">07-08</span>
                                    <span class="month">Жовтня</span>

                                </div>
                                <div class="card__img">
                                    <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg"
                                         data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg"
                                         alt="" class="blurryload">
                                </div>
                                <div class="card__overlay">
                                    <div class="card__description ">
                                        <div class="card__title">Метеорологи прогнозують у Львові
                                            найсніжнішу зиму за останні 12 років
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <a href="{{route('now')}}" class="btn btn--green">Більше подій</a>
                </div>
            </div>
        </div>
        <div class="menu" id="languages">
            <a href="#" class="btn-menu-back visible-xs visible-sm">Назад</a>
            <ul class="menu__nav menu__nav--inline">
                <li><a href="#">Українська</a></li>
                <li><a href="#">Русский</a></li>
                <li><a href="#">English</a></li>
            </ul>
        </div>
        <div class="menu" id="search">
            <a href="#" class="btn-menu-back visible-xs visible-sm">Назад</a>
            <div class="row">
                <div class="col-sm-10 col-sm-offset-1">
                    <form action="" class="form-search form-search--green mb-4">
                        <input type="text" placeholder="Шукати ві Львові...">
                        <button class="btn">Шукати</button>
                    </form>
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="h3 fw-black mb-2">За категоріями</div>
                            <a href="#" class="label label--big">Усі</a>
                            <a href="#" class="label label--big">Культура</a>
                            <a href="#" class="label label--big">Мистецтво</a>
                            <a href="#" class="label label--big">Ресторація</a>
                            <a href="#" class="label label--big">Культура</a>
                            <a href="#" class="label label--big">Мистецтво</a>
                            <a href="#" class="label label--big">Ресторація</a>
                        </div>
                        <div class="col-sm-4">
                            <div class="h3 fw-black mb-2">Популярні запити</div>
                            <ul class="menu__subnav pt-0">
                                <li><a class="link link--blue" href="#">Нічні екскурсії</a></li>
                                <li><a class="link link--blue" href="#">Львів туристичний</a></li>
                                <li><a class="link link--blue" href="#">Криївка</a></li>
                                <li><a class="link link--blue" href="#">Свято кави</a></li>
                                <li><a class="link link--blue" href="#">Різдво</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@yield('content')
</body>

<footer class="footer">
    <div class="container">
        <div class="visible-lg visible-md">
            <div class="sitemap row-flex">
                <ul class="col">
                    <li><a href="#"><h3>Вже і зараз</h3></a></li>
                    <li><a href="#">Свіжі новини</a></li>
                    <li><a href="#">Актальні події</a></li>
                    <li><a href="#">Рекомендовані Події</a></li>
                    <li><a href="#">City Card</a></li>
                    <li><a href="#">Топові місця</a></li>
                </ul>
                <ul class="col">
                    <li><a href="#"><h3>Твій Львів</h3></a></li>
                    <li><a href="#">Їжа та напої</a></li>
                    <li><a href="#">Пам'ятки</a></li>
                    <li><a href="#">Музеї / Галереї</a></li>
                    <li><a href="#">Атракції</a></li>
                    <li><a href="#">Парки</a></li>
                    <li><a href="#">Тури</a></li>
                    <li><a href="#">Театри / Філармонії</a></li>
                    <li><a href="#">Навколо Льовова</a></li>
                </ul>
                <ul class="col">
                    <li><a href="#"><h3>Події</h3></a></li>
                    <li><a href="#">Мистецтво / Культура</a></li>
                    <li><a href="#">Фестивалі</a></li>
                    <li><a href="#">Для дітей</a></li>
                    <li><a href="#">Спорт</a></li>
                    <li><a href="#">Бізнес Конференції</a></li>
                </ul>
                <ul class="col">
                    <li><a href="#"><h3>Сплануй</h3></a></li>
                    <li><a href="#">До Львова</a></li>
                    <li><a href="#">Громадський транспорт</a></li>
                    <li><a href="#">Де зупинитись</a></li>
                    <li><a href="#">Путівники та карти</a></li>
                    <li><a href="#">Все що треба знати</a></li>
                </ul>
                <ul class="col">
                    <li><a href="#"><h3>Бізнес</h3></a></li>
                    <li><a href="#">Новини</a></li>
                    <li><a href="#">Бізнес у Львові</a></li>
                    <li><a href="#">Бізнес події</a></li>
                    <li><a href="#">Заплануй подію</a></li>
                    <li><a href="#">Lviv Convention Bureau</a></li>
                    <li><a href="#">Invest in Lviv</a></li>
                    <li><a href="#">Загальна інформація</a></li>
                    <li><a href="#">Про нас</a></li>
                </ul>
            </div>
        </div>

        <div class="footer__bottom">
            <div class="row-flex row-flex--between row-flex--wrap row-flex--middle">
                <div class="col-xs-12 col-md-6">
                    <div class="row-flex row-flex--wrap m-0">
                        <div class="footer__logo">
                            <img src="images/logo.jpg" alt="">
                            <img src="images/logo-2.jpg" alt="">
                        </div>
                        <div class="footer__contacts">
                            <p class="text-small"><strong>Львівська міська рада</strong><br>
                                пл. Ринок, 1, м. Львів, Україна, 79006</p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6">
                    <div class="footer__socials">
                        <span class="mr-2 fw-bold visible-md-inline-block">Слідкуй за нами</span>
                        <ul class="social">
                            <li>
                                <a href="#" class="btn-social"><i class="fa fa-facebook-official"
                                                                  aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#" class="btn-social"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#" class="btn-social"><i class="fa fa-twitter-square"></i></a>
                            </li>
                            <li>
                                <a href="#" class="btn-social"><i class="fa fa-google-plus-square"
                                                                  aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <ul class="py-1">
            <li class="d-i-block mr-2"><a href="#" class="text-small fw-black">Загальна інформація</a></li>
            <li class="d-i-block mr-2"><a href="#" class="text-small fw-black">Умови використання матеріалів сайту</a>
            </li>
            <li class="d-i-block"><a href="#" class="text-small fw-black">Контактна інформація</a></li>
        </ul>
    </div>
    <div class="footer__license">
        <p class="text-secondary text-small text-center m-0">2017 Lviv Travel</p>
    </div>
</footer>

<script defer src="/js/scripts.js?t=<?php echo(microtime(true)); ?>"></script>

</html>
