<body class="home-page">
@include('layouts.header')
@include('layouts.main-menu')
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
