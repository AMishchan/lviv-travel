@extends('layouts.front')
@section('content')
    <div class="main-menu">
        <div class="container">
            <div class="main-menu-close"></div>
            <div class="menu" id="now">
                <a href="#" class="btn-menu-back visible-xs visible-sm">Назад</a>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                        <div class="b-r">
                            <ul class="menu__nav menu__nav--inline">
                                <li><a href="#">Свіжі новини</a></li>
                                <li><a href="#">Актуальні події</a></li>
                                <li><a href="#">Рекомендовані Події</a></li>
                            </ul>
                            <div class="menu__cards hidden-xs mt-3 mt-0-md">
                                <div class="row">
                                    <div class="col-sm-6 col-md-6 col-lg-4">
                                        <a href="#" class="card ">
                                            <div class="card__img">
                                                <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg" data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg" alt="" class="blurryload">
                                            </div>




                                            <div class="card__overlay">
                                                <div class="card__description ">
                                                    <div class="card__type label label--red">Новини</div>

                                                    <div class="card__title">Метеорологи прогнозують у Львові найсніжнішу зиму за останні 12 років</div>
                                                </div>
                                            </div>

                                        </a>
                                    </div>
                                    <div class="col-sm-6 col-md-6 col-lg-4">
                                        <a href="#" class="card ">
                                            <div class="card__img">
                                                <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg" data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg" alt="" class="blurryload">
                                            </div>




                                            <div class="card__overlay">
                                                <div class="card__description ">
                                                    <div class="card__type label label--red">Новини</div>

                                                    <div class="card__title">Метеорологи прогнозують у Львові найсніжнішу зиму за останні 12 років</div>
                                                </div>
                                            </div>

                                        </a>
                                    </div>
                                    <div class="col-lg-4 visible-lg">
                                        <a href="#" class="card ">
                                            <div class="card__img">
                                                <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg" data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg" alt="" class="blurryload">
                                            </div>




                                            <div class="card__overlay">
                                                <div class="card__description ">
                                                    <div class="card__type label label--red">Новини</div>

                                                    <div class="card__title">Метеорологи прогнозують у Львові найсніжнішу зиму за останні 12 років</div>
                                                </div>
                                            </div>

                                        </a>
                                    </div>
                                </div>
                                <a href="#" class="btn btn--green">Більше новин</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3 hidden-xs hidden-sm">
                        <div class="h3 fw-black mb-1">Lviv City Card</div>
                        <p class="text-secondary text-small">Не втрачайте час - подорожуйте з нами економно і комфортно! <br><br>
                            Чекайте новий мобільний додаток City Card Travel і нашу цифрову дисконтну картку.</p>
                        <a href="#" class="btn btn--green">Дізнатися більше</a>
                    </div>
                </div>
            </div>
            <div class="menu" id="lviv">
                <a href="#" class="btn-menu-back visible-xs visible-sm">Назад</a>
                <div class="row">
                    <div class="col-sm-5 col-md-3 col-lg-3">
                        <ul class="menu__nav mb-4">
                            <li><a href="#">Їжа та напої</a></li>
                            <li><a href="#">Пам’ятки</a></li>
                            <li><a href="#">Музеї та Галереї</a></li>
                            <li><a href="#">Атракції</a></li>
                            <li><a href="#">Парки</a></li>
                            <li><a href="#">Театри/Філармонії</a></li>
                            <li><a href="#">Громадські місця</a></li>
                        </ul>
                        <ul class="menu__nav">
                            <li><a href="#">Їжа та напої</a>
                                <ul class="menu__subnav">
                                    <li><a href="#">Озера</a></li>
                                    <li><a href="#">Замки</a></li>
                                    <li><a href="#">Бази відпочинку</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-7 col-md-9 col-lg-9 hidden-xs">
                        <div class="b-l">
                            <div class="menu__cards">
                                <div class="h3 fw-black mb-2">Lviv Travel Рекомендує</div>
                                <div class="row">
                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <a href="#" class="card card--place ">
                                            <div class="card__img">
                                                <img src="images/card-place-image-1.jpg" alt="">
                                            </div>
                                            <span class="center-absolute">Міська Ратуша</span>
                                        </a>                </div>
                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <a href="#" class="card card--place ">
                                            <div class="card__img">
                                                <img src="images/card-place-image-2.jpg" alt="">
                                            </div>
                                            <span class="center-absolute">Парк Костюшки</span>
                                        </a>                </div>
                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <a href="#" class="card card--place ">
                                            <div class="card__img">
                                                <img src="images/card-place-image-3.jpg" alt="">
                                            </div>
                                            <span class="center-absolute">Природничий музей</span>
                                        </a>                </div>
                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <a href="#" class="card card--place ">
                                            <div class="card__img">
                                                <img src="images/card-place-image-4.jpg" alt="">
                                            </div>
                                            <span class="center-absolute">Домініканський собор</span>
                                        </a>                </div>
                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <a href="#" class="card card--place ">
                                            <div class="card__img">
                                                <img src="images/card-place-image-1.jpg" alt="">
                                            </div>
                                            <span class="center-absolute">Міська Ратуша</span>
                                        </a>                </div>
                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <a href="#" class="card card--place ">
                                            <div class="card__img">
                                                <img src="images/card-place-image-2.jpg" alt="">
                                            </div>
                                            <span class="center-absolute">Парк Костюшки</span>
                                        </a>                </div>
                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <a href="#" class="card card--place ">
                                            <div class="card__img">
                                                <img src="images/card-place-image-3.jpg" alt="">
                                            </div>
                                            <span class="center-absolute">Природничий музей</span>
                                        </a>                </div>
                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <a href="#" class="card card--place ">
                                            <div class="card__img">
                                                <img src="images/card-place-image-4.jpg" alt="">
                                            </div>
                                            <span class="center-absolute">Домініканський собор</span>
                                        </a>                </div>
                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <a href="#" class="card card--place ">
                                            <div class="card__img">
                                                <img src="images/card-place-image-1.jpg" alt="">
                                            </div>
                                            <span class="center-absolute">Міська Ратуша</span>
                                        </a>                </div>
                                    <div class="col-sm-6 col-md-4 col-lg-3 hidden-sm">
                                        <a href="#" class="card card--place ">
                                            <div class="card__img">
                                                <img src="images/card-place-image-2.jpg" alt="">
                                            </div>
                                            <span class="center-absolute">Парк Костюшки</span>
                                        </a>                </div>
                                    <div class="col-sm-6 col-md-4 col-lg-3 hidden-sm">
                                        <a href="#" class="card card--place ">
                                            <div class="card__img">
                                                <img src="images/card-place-image-3.jpg" alt="">
                                            </div>
                                            <span class="center-absolute">Природничий музей</span>
                                        </a>                </div>
                                    <div class="col-sm-6 col-md-4 col-lg-3 hidden-sm">
                                        <a href="#" class="card card--place ">
                                            <div class="card__img">
                                                <img src="images/card-place-image-4.jpg" alt="">
                                            </div>
                                            <span class="center-absolute">Домініканський собор</span>
                                        </a>                </div>
                                    <div class="col-sm-6 col-md-4 col-lg-3 hidden-sm">
                                        <a href="#" class="card card--place ">
                                            <div class="card__img">
                                                <img src="images/card-place-image-1.jpg" alt="">
                                            </div>
                                            <span class="center-absolute">Міська Ратуша</span>
                                        </a>                </div>
                                    <div class="col-sm-6 col-md-4 col-lg-3 hidden-sm">
                                        <a href="#" class="card card--place ">
                                            <div class="card__img">
                                                <img src="images/card-place-image-2.jpg" alt="">
                                            </div>
                                            <span class="center-absolute">Парк Костюшки</span>
                                        </a>                </div>
                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <a href="#" class="card card--place card__colored card__colored--green">
                                            <div class="card__img">
                                                <img src="images/card-place-image-3.jpg" alt="">
                                            </div>
                                            <span class="center-absolute">Більше пам&#x27;яток</span>
                                        </a>                </div>
                                </div>
                            </div>
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
                        <div class="h3 fw-black mb-2">Шукати</div>
                        <form action="" class="form-search form-search--violet">
                            <input type="text" placeholder="Шукати: aртисти, події">
                            <button class="btn"><i class="icon-search"></i></button>
                        </form>
                    </div>
                    <div class="col-md-9 col-lg-9 hidden-xs">
                        <div class="b-l">
                            <div class="menu__cards mt-3 mt-0-md">
                                <div class="h3 fw-black mb-2">Lviv Travel Рекомендує</div>
                                <div class="row">
                                    <div class="col-sm-6 col-md-6 col-lg-4">
                                        <a href="#" class="card ">
                                            <div class="card__img">
                                                <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg" data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg" alt="" class="blurryload">
                                            </div>




                                            <div class="card__overlay">
                                                <div class="card__description ">
                                                    <div class="card__type label label--red">Новини</div>

                                                    <div class="card__title">Метеорологи прогнозують у Львові найсніжнішу зиму за останні 12 років</div>
                                                </div>
                                            </div>

                                        </a>
                                    </div>
                                    <div class="col-sm-6 col-md-6 col-lg-4">
                                        <a href="#" class="card ">
                                            <div class="card__img">
                                                <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg" data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg" alt="" class="blurryload">
                                            </div>




                                            <div class="card__overlay">
                                                <div class="card__description ">
                                                    <div class="card__type label label--red">Новини</div>

                                                    <div class="card__title">Метеорологи прогнозують у Львові найсніжнішу зиму за останні 12 років</div>
                                                </div>
                                            </div>

                                        </a>
                                    </div>
                                    <div class="col-lg-4 visible-lg">
                                        <a href="#" class="card ">
                                            <div class="card__img">
                                                <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg" data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg" alt="" class="blurryload">
                                            </div>




                                            <div class="card__overlay">
                                                <div class="card__description ">
                                                    <div class="card__type label label--red">Новини</div>

                                                    <div class="card__title">Метеорологи прогнозують у Львові найсніжнішу зиму за останні 12 років</div>
                                                </div>
                                            </div>

                                        </a>
                                    </div>
                                </div>
                                <a href="#" class="btn btn--green">Більше подій</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu" id="planning">
                <a href="#" class="btn-menu-back visible-xs visible-sm">Назад</a>
                <div class="row">
                    <div class="col-md-3">
                        <div class="h3 fw-black mb-2">як Добратись?</div>
                        <ul class="menu__subnav pt-0">
                            <li><a href="#">Літаком</a></li>
                            <li><a href="#">Поїздом</a></li>
                            <li><a href="#">Автобусом</a></li>
                            <li><a href="#">на Авто</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <div class="h3 fw-black mb-2">як Пересуватись містом?</div>
                        <ul class="menu__subnav pt-0">
                            <li><a href="#">Автобуси</a></li>
                            <li><a href="#">Тролейбуси</a></li>
                            <li class="mb-2"><a href="#">Трамваї</a>
                                <span class="d-block mt-1">
                <a href="#" class="link link--blue text-small h4">eway.ua</a>
                <a href="#" class="link link--blue">lad.lviv.ua</a>
                <a href="#" class="link link--blue">Lviv transport Online tracker</a>
              </span>
                            </li>
                            <li><a href="#">Велопрокати</a>
                                <span class="d-block">
                  <a href="#"><img src="images/nextbike-logo.jpg" alt=""></a>
                </span>
                            </li>
                            <li><a href="#">Таксі</a>
                                <span class="d-block">
                  <a href="#"><img src="images/uber-logo.jpg" alt=""></a>
                  <a href="#"><img src="images/uklon-logo.jpg" alt=""></a>
                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <div class="h3 fw-black mb-2">де Зупинитись?</div>
                        <ul class="menu__subnav pt-0">
                            <li><a href="#">Готелі</a></li>
                            <li><a href="#">Хостели</a></li>
                            <li><a href="#">Апартаменти</a>
                                <span class="d-block">
                  <a href="#"><img src="images/booking-logo.jpg" alt=""></a>
                  <a href="#"><img src="images/airbnb-logo.jpg" alt=""></a>
                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <div class="h3 fw-black mb-2">Путівники та карти</div>
                        <ul class="menu__subnav pt-0 mb-4">
                            <li><a href="#">Путівник міста</a></li>
                            <li><a href="#">Вуличні електронні довідники</a></li>
                        </ul>
                        <div class="h3 fw-black mb-2">Все що треба знати</div>
                        <ul class="menu__subnav pt-0">
                            <li><a href="#">Центр туристичної інформації</a></li>
                            <li><a href="#">Туристу на замітку</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="menu" id="business">
                <a href="#" class="btn-menu-back visible-xs visible-sm">Назад</a>
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
    <div class="main-slider">
        <div class="main-slider__slide" style="background-image: url(images/main-slider-img-1.jpg);">
            <div class="container text-center">
                <div class="slide-content d-i-block text-left">
                    <div>
                        <div class="text-hero text-white mb-2">Різдво у Львові</div>
                    </div>
                    <div>
                        <p class="text-secondary mb-3">
                            Вікові традиції, смачні й ароматні розваги, свято "Пампуха", <br>різдвяні ярмарки на вуличках Львова!
                        </p>
                    </div>
                    <a href="#" class="btn btn--green">Програма святкувань</a>
                </div>
            </div>
        </div>
        <div class="main-slider__slide" style="background-image: url(images/main-slider-img-2.jpg);">
            <div class="container text-center">
                <div class="slide-content d-i-block text-left">
                    <div>
                        <div class="text-hero text-white mb-2">Дослідження туристів</div>
                    </div>
                    <div>
                        <p class="text-secondary mb-3">
                            Поділіться своїм досвідом перебування у Львові заповнивши цю <br>он-лайн форму! Ваш відгук важливий для нас!
                        </p>
                    </div>
                    <a href="#" class="btn btn--green">Заповнити</a>
                </div>
            </div>
        </div>
        <div class="main-slider__slide" style="background-image: url(images/main-slider-img-3.jpg);">
            <div class="container text-center">
                <div class="row">
                    <div class="col-md-2 text-right hidden-sm hidden-xs">
                        <img class="d-i-block v-top" src="images/slide-3-icon.svg" alt="">
                    </div>
                    <div class="col-md-10 text-left">
                        <div class="slide-content d-i-block text-left pt-3-lg">
                            <div>
                                <div class="text-hero text-white mb-2">Львів у списку найкращих</div>
                            </div>
                            <div>
                                <p class="text-secondary mb-4">
                                    Львів у списку найкращих напрямків для бюджетного відпочинку у 2017 році.
                                    <br>Вартість місячної оренди однокімнатної квартири в центрі міста в порівнянні
                                    <br>з іншими містами Європи становить:
                                </p>
                            </div>
                            <div class="row-flex row-flex--wrap">
                                <div class="col">
                                    <div class="text-white py-1 pr-2-sm">
                                        <div class="h3">Львів</div>
                                        <div class="h2">7,580 <span class="fw-regular">&#8372;</span></div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="text-white py-1 px-2-sm">
                                        <div class="h3">Катовіце</div>
                                        <div class="h2">10,850 <span class="fw-regular">&#8372;</span></div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="text-white py-1 px-2-sm">
                                        <div class="h3">Софія</div>
                                        <div class="h2">11,300 <span class="fw-regular">&#8372;</span></div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="text-white py-1 pl-2-sm">
                                        <div class="h3">Барселона</div>
                                        <div class="h2">30,490 <span class="fw-regular">&#8372;</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
    <div class="container">
        <section class="section pb-3">
            <h2 class="section__title">Вже і зараз</h2>
            <div class="row">
                <div class="col-sm-6 col-md-4">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg" data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg" alt="" class="blurryload">
                        </div>

                        <div class="card__date label label--date label--violet">
                            <div class="label__date">23</div>
                            <div class="label__month">жов</div>
                        </div>



                        <div class="card__overlay">
                            <div class="card__description card__description--short">
                                <div class="card__type label label--violet">концерт</div>

                                <div class="card__title">ОЛЕКСАНДР БОЖИК</div>
                                <ul class="card__info">
                                    <li><i class="icon-location"></i>FESTrepublic, Старознесенська, 24-26</li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-4">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-2.jpg" data-lg="images/card-image-2.jpg" data-md="images/card-image-2.jpg" data-sm="images/card-image-2.jpg" alt="" class="blurryload">
                        </div>


                        <div class="card__logo">
                            <img src="images/card-logo-2.png" alt="">
                        </div>


                        <div class="card__overlay">
                            <div class="card__description card__description--short">
                                <div class="card__type label label--blue">РЕСТОРАН</div>

                                <div class="card__title">Кумпель</div>
                                <ul class="card__info">
                                    <li><i class="icon-location"></i>Львів, Площа Ринок, 1</li>

                                </ul>
                            </div>
                        </div>

                    </a>

                </div>
                <div class="col-sm-6 col-md-4">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-3.jpg" data-lg="images/card-image-3.jpg" data-md="images/card-image-3.jpg" data-sm="images/card-image-3.jpg" alt="" class="blurryload">
                        </div>


                        <div class="card__logo">
                            <img src="images/card-logo-3.png" alt="">
                        </div>


                        <div class="card__overlay">
                            <div class="card__description card__description--short">
                                <div class="card__type label label--blue">РЕСТОРАН</div>

                                <div class="card__title">Хмільний дім Роберта Домса</div>
                                <ul class="card__info">
                                    <li><i class="icon-location"></i>Львів, Площа Ринок, 1</li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-3">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-4.jpg" data-lg="images/card-image-4.jpg" data-md="images/card-image-4.jpg" data-sm="images/card-image-4.jpg" alt="" class="blurryload">
                        </div>


                        <div class="card__logo">
                            <img src="images/card-logo-1.png" alt="">
                        </div>


                        <div class="card__overlay">
                            <div class="card__description ">
                                <div class="card__type label label--blue">кав’ярня</div>

                                <div class="card__title">Віденська кав’ярня</div>
                                <ul class="card__info">
                                    <li><i class="icon-location"></i>Львів, Площа Ринок, 1</li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-3 hidden-xs hidden-sm">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-5.jpg" data-lg="images/card-image-5.jpg" data-md="images/card-image-5.jpg" data-sm="images/card-image-5.jpg" alt="" class="blurryload">
                        </div>

                        <div class="card__date label label--date label--orange">
                            <div class="label__date">3</div>
                            <div class="label__month">год</div>
                        </div>



                        <div class="card__overlay">
                            <div class="card__description ">
                                <div class="card__type label label--orange">Екскурсії</div>

                                <div class="card__title">Екскурсія &quot;Львів - місто кави і шоколаду&quot;</div>
                                <ul class="card__info">
                                    <li><i class="icon-location"></i>Львів, Площа Ринок, 1</li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-md-6 hidden-xs hidden-sm hidden-md">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-6.jpg" data-lg="images/card-image-6.jpg" data-md="images/card-image-6.jpg" data-sm="images/card-image-6.jpg" alt="" class="blurryload">
                        </div>




                        <div class="card__overlay">
                            <div class="card__description card__description--short">
                                <div class="card__type label label--red">путівник</div>

                                <div class="card__title">Львів готується до міжнародного дня кави та складає пам&#x27;ятку кавомана</div>
                            </div>
                        </div>

                    </a>
                </div>
            </div>
            <div class="text-center visible-xs">
                <a href="#" class="btn btn--green btn--arrows">Показати більше</a>
            </div>
        </section>
    </div>
    <div class="container">
        <section class="section">
            <h2 class="section__title mb-0">Про Львів</h2>
            <div class="content-slider-nav"></div>
            <div class="content-slider">
                <div class="content-slider__slide" data-title="Краса" style="background-image: url(images/content-slider-image.jpg);">
                    <div class="slide-content">
                        <div class="h1 text-white mb-2">Культура</div>
                        <p class="text-secondary text-white mb-2">Вікові традиції, смачні й ароматні розваги, свято "Пампуха", різдвяні ярмарки на вуличках Львова !</p>
                        <a href="#" class="btn btn--green">Читати</a>
                    </div>
                </div>

                <div class="content-slider__slide" data-title="Культура" style="background-image: url(images/content-slider-image.jpg);">
                    <div class="slide-content">
                        <div class="h1 text-white mb-2">Культура</div>
                        <p class="text-secondary text-white mb-2">Вікові традиції, смачні й ароматні розваги, свято "Пампуха", різдвяні ярмарки на вуличках Львова !</p>
                        <a href="#" class="btn btn--green">Читати</a>
                    </div>
                </div>

                <div class="content-slider__slide" data-title="Мистецтво" style="background-image: url(images/content-slider-image.jpg);">
                    <div class="slide-content">
                        <div class="h1 text-white mb-2">Культура</div>
                        <p class="text-secondary text-white mb-2">Вікові традиції, смачні й ароматні розваги, свято "Пампуха", різдвяні ярмарки на вуличках Львова !</p>
                        <a href="#" class="btn btn--green">Читати</a>
                    </div>
                </div>

                <div class="content-slider__slide" data-title="Душа" style="background-image: url(images/content-slider-image.jpg);">
                    <div class="slide-content">
                        <div class="h1 text-white mb-2">Культура</div>
                        <p class="text-secondary text-white mb-2">Вікові традиції, смачні й ароматні розваги, свято "Пампуха", різдвяні ярмарки на вуличках Львова !</p>
                        <a href="#" class="btn btn--green">Читати</a>
                    </div>
                </div>
            </div>  </section>
    </div>
    <div class="container">
        <section class="section">
            <div class="row">
                <div class="col-sm-6">
                    <h2 class="section__title">Як дістатись?</h2>
                    <ul class="row-flex row-flex--wrap links-list">
                        <li class="text-center col mr-1-md mb-2 mb-0-md">
                            <a href="#">
                                <span><img src="images/icons/icon-plane.svg" alt=""></span>
                                <h3>Літаком</h3>
                            </a>
                        </li>
                        <li class="text-center col mr-1-md mb-2 mb-0-md">
                            <a href="#">
                                <span><img src="images/icons/icon-train.svg" alt=""></span>
                                <h3>Поїздом</h3>
                            </a>
                        </li>
                        <li class="text-center col mb-2 mb-0-md">
                            <a href="#">
                                <span><img src="images/icons/icon-bus.svg" alt=""></span>
                                <h3>Автобусом</h3>
                            </a>
                        </li>
                    </ul>      </div>
                <div class="col-sm-6">
                    <h2 class="section__title">Де зупинитись?</h2>
                    <ul class="row-flex row-flex--wrap links-list">
                        <li class="text-center col mr-1-md mb-2 mb-0-md">
                            <a href="#">
                                <span><img src="images/icons/icon-home.svg" alt=""></span>
                                <h3>Готелі</h3>
                            </a>
                        </li>
                        <li class="text-center col mr-1-md mb-2 mb-0-md">
                            <a href="#">
                                <span><img src="images/icons/icon-home.svg" alt=""></span>
                                <h3>Хостели</h3>
                            </a>
                        </li>
                        <li class="text-center col mb-2 mb-0-md">
                            <a href="#">
                                <span><img src="images/icons/icon-home.svg" alt=""></span>
                                <h3>Апартаменти</h3>
                            </a>
                        </li>
                    </ul>      </div>
            </div>
        </section>


        <section class="section pb-3">
            <div class="row">
                <div class="col-sm-6">
                    <div class="card card--info">
                        <div class="text-center card--info__content">
                            <img src="images/icons/c-icon-star.svg" alt="">
                            <div class="card__title">На каву до Львова</div>
                            <p class="text-secondary">Філіжанка львівської кави – це не лише горнятко чорного запашною напою, а й дух самого старого Львова, його душа і гордість, історія та віковічні традиції, які знову і знову оживають з кожним ковтком.</p>
                            <a href="#" class="btn btn--green">Дізнатися більше</a>
                        </div>
                    </div>      </div>
                <div class="col-sm-6">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-6.jpg" data-lg="images/card-image-6.jpg" data-md="images/card-image-6.jpg" data-sm="images/card-image-6.jpg" alt="" class="blurryload">
                        </div>




                        <div class="card__overlay">
                            <div class="card__description card__description--short">
                                <div class="card__type label label--red">путівник</div>

                                <div class="card__title">Львів готується до міжнародного дня кави та складає пам&#x27;ятку кавомана</div>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg" data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg" alt="" class="blurryload">
                        </div>

                        <div class="card__date label label--date label--violet">
                            <div class="label__date">23</div>
                            <div class="label__month">жов</div>
                        </div>



                        <div class="card__overlay">
                            <div class="card__description ">
                                <div class="card__type label label--violet">концерт</div>

                                <div class="card__title">ОЛЕКСАНДР БОЖИК</div>
                                <ul class="card__info">
                                    <li><i class="icon-location"></i>FESTrepublic, Старознесенська, 24-26</li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-5.jpg" data-lg="images/card-image-5.jpg" data-md="images/card-image-5.jpg" data-sm="images/card-image-5.jpg" alt="" class="blurryload">
                        </div>

                        <div class="card__date label label--date label--orange">
                            <div class="label__date">3</div>
                            <div class="label__month">год</div>
                        </div>



                        <div class="card__overlay">
                            <div class="card__description ">
                                <div class="card__type label label--orange">Екскурсії</div>

                                <div class="card__title">Екскурсія &quot;Львів - місто кави і шоколаду&quot;</div>
                                <ul class="card__info">
                                    <li><i class="icon-location"></i>Львів, Площа Ринок, 1</li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-2.jpg" data-lg="images/card-image-2.jpg" data-md="images/card-image-2.jpg" data-sm="images/card-image-2.jpg" alt="" class="blurryload">
                        </div>


                        <div class="card__logo">
                            <img src="images/card-logo-2.png" alt="">
                        </div>


                        <div class="card__overlay">
                            <div class="card__description ">
                                <div class="card__type label label--blue">РЕСТОРАН</div>

                                <div class="card__title">Кумпель</div>
                                <ul class="card__info">
                                    <li><i class="icon-location"></i>Львів, Площа Ринок, 1</li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 hidden-md">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-3.jpg" data-lg="images/card-image-3.jpg" data-md="images/card-image-3.jpg" data-sm="images/card-image-3.jpg" alt="" class="blurryload">
                        </div>


                        <div class="card__logo">
                            <img src="images/card-logo-3.png" alt="">
                        </div>


                        <div class="card__overlay">
                            <div class="card__description ">
                                <div class="card__type label label--blue">РЕСТОРАН</div>

                                <div class="card__title">Хмільний дім Роберта Домса</div>
                                <ul class="card__info">
                                    <li><i class="icon-location"></i>Львів, Площа Ринок, 1</li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
            </div>
        </section>
        <section class="section">
            <a href="#" class="img-link">
                <img src="images/content-baner-image.jpg" alt="">
            </a>
        </section>

        <section class="section pb-3">
            <div class="row">
                <div class="col-sm-6">
                    <div class="card card--info">
                        <div class="text-center card--info__content">
                            <img src="images/icons/c-icon-star.svg" alt="">
                            <div class="card__title">Львів австрійський</div>
                            <p class="text-secondary">За час панування Австрійської імперії у Львові потужно вирувало культурне життя. Було збудовано два театри європейського значення…</p>
                            <a href="#" class="btn btn--green">Дізнатися більше</a>
                        </div>
                    </div>      </div>
                <div class="col-sm-6">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-6.jpg" data-lg="images/card-image-6.jpg" data-md="images/card-image-6.jpg" data-sm="images/card-image-6.jpg" alt="" class="blurryload">
                        </div>




                        <div class="card__overlay">
                            <div class="card__description card__description--short">
                                <div class="card__type label label--red">путівник</div>

                                <div class="card__title">Львів готується до міжнародного дня кави та складає пам&#x27;ятку кавомана</div>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg" data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg" alt="" class="blurryload">
                        </div>

                        <div class="card__date label label--date label--violet">
                            <div class="label__date">23</div>
                            <div class="label__month">жов</div>
                        </div>



                        <div class="card__overlay">
                            <div class="card__description ">
                                <div class="card__type label label--violet">концерт</div>

                                <div class="card__title">ОЛЕКСАНДР БОЖИК</div>
                                <ul class="card__info">
                                    <li><i class="icon-location"></i>FESTrepublic, Старознесенська, 24-26</li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-5.jpg" data-lg="images/card-image-5.jpg" data-md="images/card-image-5.jpg" data-sm="images/card-image-5.jpg" alt="" class="blurryload">
                        </div>

                        <div class="card__date label label--date label--orange">
                            <div class="label__date">3</div>
                            <div class="label__month">год</div>
                        </div>



                        <div class="card__overlay">
                            <div class="card__description ">
                                <div class="card__type label label--orange">Екскурсії</div>

                                <div class="card__title">Екскурсія &quot;Львів - місто кави і шоколаду&quot;</div>
                                <ul class="card__info">
                                    <li><i class="icon-location"></i>Львів, Площа Ринок, 1</li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-2.jpg" data-lg="images/card-image-2.jpg" data-md="images/card-image-2.jpg" data-sm="images/card-image-2.jpg" alt="" class="blurryload">
                        </div>


                        <div class="card__logo">
                            <img src="images/card-logo-2.png" alt="">
                        </div>


                        <div class="card__overlay">
                            <div class="card__description ">
                                <div class="card__type label label--blue">РЕСТОРАН</div>

                                <div class="card__title">Кумпель</div>
                                <ul class="card__info">
                                    <li><i class="icon-location"></i>Львів, Площа Ринок, 1</li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 hidden-md">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-3.jpg" data-lg="images/card-image-3.jpg" data-md="images/card-image-3.jpg" data-sm="images/card-image-3.jpg" alt="" class="blurryload">
                        </div>


                        <div class="card__logo">
                            <img src="images/card-logo-3.png" alt="">
                        </div>


                        <div class="card__overlay">
                            <div class="card__description ">
                                <div class="card__type label label--blue">РЕСТОРАН</div>

                                <div class="card__title">Хмільний дім Роберта Домса</div>
                                <ul class="card__info">
                                    <li><i class="icon-location"></i>Львів, Площа Ринок, 1</li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
            </div>
        </section>

        <section class="section">
            <h2 class="section__title">Вас може зацікавити</h2>
            <div class="row">
                <div class="col-xs-6 col-sm-3">
                    <a href="#" class="card card--sq">
                        <div class="card__img">
                            <img src="images/card-coloured-image-1.jpg" data-lg="images/card-coloured-image-1.jpg" data-md="images/card-coloured-image-1.jpg" data-sm="images/card-coloured-image-1.jpg" alt="" class="blurryload">
                        </div>
                        <div class="card__colored card__colored--green">
                            <div class="h3 center-absolute text-white text-center p-1">City Card</div>
                        </div>
                    </a>      </div>
                <div class="col-xs-6 col-sm-3">
                    <a href="#" class="card card--sq">
                        <div class="card__img">
                            <img src="images/card-coloured-image-2.jpg" data-lg="images/card-coloured-image-2.jpg" data-md="images/card-coloured-image-2.jpg" data-sm="images/card-coloured-image-2.jpg" alt="" class="blurryload">
                        </div>
                        <div class="card__colored card__colored--red">
                            <div class="h3 center-absolute text-white text-center p-1">ТІЦ</div>
                        </div>
                    </a>      </div>
                <div class="col-xs-6 col-sm-3">
                    <a href="#" class="card card--sq">
                        <div class="card__img">
                            <img src="images/card-coloured-image-3.jpg" data-lg="images/card-coloured-image-3.jpg" data-md="images/card-coloured-image-3.jpg" data-sm="images/card-coloured-image-3.jpg" alt="" class="blurryload">
                        </div>
                        <div class="card__colored card__colored--orange">
                            <div class="h3 center-absolute text-white text-center p-1">Транспорт</div>
                        </div>
                    </a>      </div>
                <div class="col-xs-6 col-sm-3">
                    <a href="#" class="card card--sq">
                        <div class="card__img">
                            <img src="images/card-coloured-image-4.jpg" data-lg="images/card-coloured-image-4.jpg" data-md="images/card-coloured-image-4.jpg" data-sm="images/card-coloured-image-4.jpg" alt="" class="blurryload">
                        </div>
                        <div class="card__colored card__colored--green">
                            <div class="h3 center-absolute text-white text-center p-1">Путівники та карти</div>
                        </div>
                    </a>      </div>
            </div>
        </section>

    </div>
@endsection