@extends('layouts.front')
@section('content')
    <body class='home-page'>



    <div class="main-slider">
        <div class="main-slider__slide" style="background-image: url(images/main-slider-img-1.jpg);">
            <div class="container text-center">
                <div class="slide-content d-i-block text-left">
                    <div>
                        <div class="text-hero text-white mb-2">Різдво у Львові</div>
                    </div>
                    <div>
                        <p class="text-secondary mb-3">
                            Вікові традиції, смачні й ароматні розваги, свято "Пампуха", <br>різдвяні ярмарки на
                            вуличках Львова!
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
                            Поділіться своїм досвідом перебування у Львові заповнивши цю <br>он-лайн форму! Ваш відгук
                            важливий для нас!
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
                            <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg"
                                 data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg" alt=""
                                 class="blurryload">
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
                                    <li><i class="fa fa-map-marker" aria-hidden="true"></i>FESTrepublic,
                                        Старознесенська, 24-26
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-4">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-2.jpg" data-lg="images/card-image-2.jpg"
                                 data-md="images/card-image-2.jpg" data-sm="images/card-image-2.jpg" alt=""
                                 class="blurryload">
                        </div>


                        <div class="card__logo">
                            <img src="images/card-logo-2.png" alt="">
                        </div>


                        <div class="card__overlay">
                            <div class="card__description card__description--short">
                                <div class="card__type label label--blue">РЕСТОРАН</div>

                                <div class="card__title">Кумпель</div>
                                <ul class="card__info">
                                    <li><i class="fa fa-map-marker" aria-hidden="true"></i>Львів, Площа Ринок, 1</li>

                                </ul>
                            </div>
                        </div>

                    </a>

                </div>
                <div class="col-sm-6 col-md-4">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-3.jpg" data-lg="images/card-image-3.jpg"
                                 data-md="images/card-image-3.jpg" data-sm="images/card-image-3.jpg" alt=""
                                 class="blurryload">
                        </div>


                        <div class="card__logo">
                            <img src="images/card-logo-3.png" alt="">
                        </div>


                        <div class="card__overlay">
                            <div class="card__description card__description--short">
                                <div class="card__type label label--blue">РЕСТОРАН</div>

                                <div class="card__title">Хмільний дім Роберта Домса</div>
                                <ul class="card__info">
                                    <li><i class="fa fa-map-marker" aria-hidden="true"></i>Львів, Площа Ринок, 1</li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-3">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-4.jpg" data-lg="images/card-image-4.jpg"
                                 data-md="images/card-image-4.jpg" data-sm="images/card-image-4.jpg" alt=""
                                 class="blurryload">
                        </div>


                        <div class="card__logo">
                            <img src="images/card-logo-1.png" alt="">
                        </div>


                        <div class="card__overlay">
                            <div class="card__description ">
                                <div class="card__type label label--blue">кав’ярня</div>

                                <div class="card__title">Віденська кав’ярня</div>
                                <ul class="card__info">
                                    <li><i class="fa fa-map-marker" aria-hidden="true"></i>Львів, Площа Ринок, 1</li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-3 hidden-xs hidden-sm">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-5.jpg" data-lg="images/card-image-5.jpg"
                                 data-md="images/card-image-5.jpg" data-sm="images/card-image-5.jpg" alt=""
                                 class="blurryload">
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
                                    <li><i class="fa fa-map-marker" aria-hidden="true"></i>Львів, Площа Ринок, 1</li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-md-6 hidden-xs hidden-sm hidden-md">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-6.jpg" data-lg="images/card-image-6.jpg"
                                 data-md="images/card-image-6.jpg" data-sm="images/card-image-6.jpg" alt=""
                                 class="blurryload">
                        </div>


                        <div class="card__overlay">
                            <div class="card__description card__description--short">
                                <div class="card__type label label--red">путівник</div>

                                <div class="card__title">Львів готується до міжнародного дня кави та складає пам&#x27;ятку
                                    кавомана
                                </div>
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
                <div class="content-slider__slide" data-title="Краса"
                     style="background-image: url(images/content-slider-image.jpg);">
                    <div class="slide-content">
                        <div class="h1 text-white mb-2">Культура</div>
                        <p class="text-secondary text-white mb-2">Вікові традиції, смачні й ароматні розваги, свято
                            "Пампуха", різдвяні ярмарки на вуличках Львова !</p>
                        <a href="#" class="btn btn--green">Читати</a>
                    </div>
                </div>

                <div class="content-slider__slide" data-title="Культура"
                     style="background-image: url(images/content-slider-image.jpg);">
                    <div class="slide-content">
                        <div class="h1 text-white mb-2">Культура</div>
                        <p class="text-secondary text-white mb-2">Вікові традиції, смачні й ароматні розваги, свято
                            "Пампуха", різдвяні ярмарки на вуличках Львова !</p>
                        <a href="#" class="btn btn--green">Читати</a>
                    </div>
                </div>

                <div class="content-slider__slide" data-title="Мистецтво"
                     style="background-image: url(images/content-slider-image.jpg);">
                    <div class="slide-content">
                        <div class="h1 text-white mb-2">Культура</div>
                        <p class="text-secondary text-white mb-2">Вікові традиції, смачні й ароматні розваги, свято
                            "Пампуха", різдвяні ярмарки на вуличках Львова !</p>
                        <a href="#" class="btn btn--green">Читати</a>
                    </div>
                </div>

                <div class="content-slider__slide" data-title="Душа"
                     style="background-image: url(images/content-slider-image.jpg);">
                    <div class="slide-content">
                        <div class="h1 text-white mb-2">Культура</div>
                        <p class="text-secondary text-white mb-2">Вікові традиції, смачні й ароматні розваги, свято
                            "Пампуха", різдвяні ярмарки на вуличках Львова !</p>
                        <a href="#" class="btn btn--green">Читати</a>
                    </div>
                </div>
            </div>
        </section>
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
                    </ul>
                </div>
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
                    </ul>
                </div>
            </div>
        </section>


        <section class="section pb-3">
            <div class="row">
                <div class="col-sm-6">
                    <div class="card card--info">
                        <div class="text-center card--info__content">
                            <img src="images/icons/c-icon-star.svg" alt="">
                            <div class="card__title">На каву до Львова</div>
                            <p class="text-secondary">Філіжанка львівської кави – це не лише горнятко чорного запашною
                                напою, а й дух самого старого Львова, його душа і гордість, історія та віковічні
                                традиції, які знову і знову оживають з кожним ковтком.</p>
                            <a href="#" class="btn btn--green">Дізнатися більше</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-6.jpg" data-lg="images/card-image-6.jpg"
                                 data-md="images/card-image-6.jpg" data-sm="images/card-image-6.jpg" alt=""
                                 class="blurryload">
                        </div>


                        <div class="card__overlay">
                            <div class="card__description card__description--short">
                                <div class="card__type label label--red">путівник</div>

                                <div class="card__title">Львів готується до міжнародного дня кави та складає пам&#x27;ятку
                                    кавомана
                                </div>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg"
                                 data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg" alt=""
                                 class="blurryload">
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
                                    <li><i class="fa fa-map-marker" aria-hidden="true"></i>FESTrepublic,
                                        Старознесенська, 24-26
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-5.jpg" data-lg="images/card-image-5.jpg"
                                 data-md="images/card-image-5.jpg" data-sm="images/card-image-5.jpg" alt=""
                                 class="blurryload">
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
                                    <li><i class="fa fa-map-marker" aria-hidden="true"></i>Львів, Площа Ринок, 1</li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-2.jpg" data-lg="images/card-image-2.jpg"
                                 data-md="images/card-image-2.jpg" data-sm="images/card-image-2.jpg" alt=""
                                 class="blurryload">
                        </div>


                        <div class="card__logo">
                            <img src="images/card-logo-2.png" alt="">
                        </div>


                        <div class="card__overlay">
                            <div class="card__description ">
                                <div class="card__type label label--blue">РЕСТОРАН</div>

                                <div class="card__title">Кумпель</div>
                                <ul class="card__info">
                                    <li><i class="fa fa-map-marker" aria-hidden="true"></i>Львів, Площа Ринок, 1</li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 hidden-md">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-3.jpg" data-lg="images/card-image-3.jpg"
                                 data-md="images/card-image-3.jpg" data-sm="images/card-image-3.jpg" alt=""
                                 class="blurryload">
                        </div>


                        <div class="card__logo">
                            <img src="images/card-logo-3.png" alt="">
                        </div>


                        <div class="card__overlay">
                            <div class="card__description ">
                                <div class="card__type label label--blue">РЕСТОРАН</div>

                                <div class="card__title">Хмільний дім Роберта Домса</div>
                                <ul class="card__info">
                                    <li><i class="fa fa-map-marker" aria-hidden="true"></i>Львів, Площа Ринок, 1</li>

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
                            <p class="text-secondary">За час панування Австрійської імперії у Львові потужно вирувало
                                культурне життя. Було збудовано два театри європейського значення…</p>
                            <a href="#" class="btn btn--green">Дізнатися більше</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-6.jpg" data-lg="images/card-image-6.jpg"
                                 data-md="images/card-image-6.jpg" data-sm="images/card-image-6.jpg" alt=""
                                 class="blurryload">
                        </div>


                        <div class="card__overlay">
                            <div class="card__description card__description--short">
                                <div class="card__type label label--red">путівник</div>

                                <div class="card__title">Львів готується до міжнародного дня кави та складає пам&#x27;ятку
                                    кавомана
                                </div>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-1.jpg" data-lg="images/card-image-1.jpg"
                                 data-md="images/card-image-1.jpg" data-sm="images/card-image-1.jpg" alt=""
                                 class="blurryload">
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
                                    <li><i class="fa fa-map-marker" aria-hidden="true"></i>FESTrepublic,
                                        Старознесенська, 24-26
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-5.jpg" data-lg="images/card-image-5.jpg"
                                 data-md="images/card-image-5.jpg" data-sm="images/card-image-5.jpg" alt=""
                                 class="blurryload">
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
                                    <li><i class="fa fa-map-marker" aria-hidden="true"></i>Львів, Площа Ринок, 1</li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-2.jpg" data-lg="images/card-image-2.jpg"
                                 data-md="images/card-image-2.jpg" data-sm="images/card-image-2.jpg" alt=""
                                 class="blurryload">
                        </div>


                        <div class="card__logo">
                            <img src="images/card-logo-2.png" alt="">
                        </div>


                        <div class="card__overlay">
                            <div class="card__description ">
                                <div class="card__type label label--blue">РЕСТОРАН</div>

                                <div class="card__title">Кумпель</div>
                                <ul class="card__info">
                                    <li><i class="fa fa-map-marker" aria-hidden="true"></i>Львів, Площа Ринок, 1</li>

                                </ul>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3 hidden-md">
                    <a href="#" class="card ">
                        <div class="card__img">
                            <img src="images/card-image-3.jpg" data-lg="images/card-image-3.jpg"
                                 data-md="images/card-image-3.jpg" data-sm="images/card-image-3.jpg" alt=""
                                 class="blurryload">
                        </div>


                        <div class="card__logo">
                            <img src="images/card-logo-3.png" alt="">
                        </div>


                        <div class="card__overlay">
                            <div class="card__description ">
                                <div class="card__type label label--blue">РЕСТОРАН</div>

                                <div class="card__title">Хмільний дім Роберта Домса</div>
                                <ul class="card__info">
                                    <li><i class="fa fa-map-marker" aria-hidden="true"></i>Львів, Площа Ринок, 1</li>

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
                            <img src="images/card-coloured-image-1.jpg" data-lg="images/card-coloured-image-1.jpg"
                                 data-md="images/card-coloured-image-1.jpg" data-sm="images/card-coloured-image-1.jpg"
                                 alt="" class="blurryload">
                        </div>
                        <div class="card__colored card__colored--green">
                            <div class="h3 center-absolute text-white text-center p-1">City Card</div>
                        </div>
                    </a></div>
                <div class="col-xs-6 col-sm-3">
                    <a href="#" class="card card--sq">
                        <div class="card__img">
                            <img src="images/card-coloured-image-2.jpg" data-lg="images/card-coloured-image-2.jpg"
                                 data-md="images/card-coloured-image-2.jpg" data-sm="images/card-coloured-image-2.jpg"
                                 alt="" class="blurryload">
                        </div>
                        <div class="card__colored card__colored--red">
                            <div class="h3 center-absolute text-white text-center p-1">ТІЦ</div>
                        </div>
                    </a></div>
                <div class="col-xs-6 col-sm-3">
                    <a href="#" class="card card--sq">
                        <div class="card__img">
                            <img src="images/card-coloured-image-3.jpg" data-lg="images/card-coloured-image-3.jpg"
                                 data-md="images/card-coloured-image-3.jpg" data-sm="images/card-coloured-image-3.jpg"
                                 alt="" class="blurryload">
                        </div>
                        <div class="card__colored card__colored--orange">
                            <div class="h3 center-absolute text-white text-center p-1">Транспорт</div>
                        </div>
                    </a></div>
                <div class="col-xs-6 col-sm-3">
                    <a href="#" class="card card--sq">
                        <div class="card__img">
                            <img src="images/card-coloured-image-4.jpg" data-lg="images/card-coloured-image-4.jpg"
                                 data-md="images/card-coloured-image-4.jpg" data-sm="images/card-coloured-image-4.jpg"
                                 alt="" class="blurryload">
                        </div>
                        <div class="card__colored card__colored--green">
                            <div class="h3 center-absolute text-white text-center p-1">Путівники та карти</div>
                        </div>
                    </a></div>
            </div>
        </section>
    </div>
    </body>>
@endsection