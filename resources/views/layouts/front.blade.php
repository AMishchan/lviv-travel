<body class="home-page">
@include('layouts.header')
<div class="main-menu">
    <div class="container">
        <div class="main-menu-close"></div>
        @include('layouts.main-menu-items.now')
        @include('layouts.main-menu-items.lviv')
        @include('layouts.main-menu-items.events')
        @include('layouts.main-menu-items.planning')
        @include('layouts.main-menu-items.businnes')
        <div class="menu" id="languages">
            <a href="#" class="btn-menu-back visible-xs visible-sm">Назад</a>
            <ul class="menu__nav menu__nav--inline">
                <li><a onclick="location.href='setlang/en'">English</a></li>
                <li><a onclick="location.href='setlang/ua'">Українська</a></li>
                <li><a onclick="location.href='setlang/pl'">Polski</a></li>
                <li><a onclick="location.href='setlang/ru'">Русский</a></li>
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
<script defer src="/libs/jquery/jquery-3.3.1.min.js?t=<?php echo(microtime(true)); ?>"></script>
</html>
