@extends('layouts.front')
@section('content')

    <div class="events-banner div-fill-img" style="background-image: url('images/main-slider-img-1.jpg');">
        <div class="container landing-banner-info">

            <div class="landing-banner-title">
                <div class="text-hero text-white ">Твій Львів</div>
            </div>
            <div class="breadcrumbs banner-breadcrumbs">Головна/Твій Львів</div>

        </div>
    </div>
    <div class="your-lviv-container">
        <div class="container">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <div class="tag-menu">
                    <ul class="landing-tab-menu">
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
                </div>
                <p class="landing-desc-title">
                    Якщо ви завітали до Львова на довший час, то майте на увазі, що існують різноманітні
                    комбінації проїзних карток терміном на місяць чи більше.
                </p>
                <p class="landing-desc-text">
                    Увага! Львів став першим містом в Україні, де запроваджено безготівкову систему розрахунку в
                    електротранспорті міста.
                    З 16 лютого 2017 р. у всіх львівських трамваях та тролейбусах, пасажири матимуть змогу оплатити
                    проїзд через спеціальний QR код -
                    електронну програму для
                    купівлі та компостирування квитка, яку ініціювали та розробили ЛКП «Львівeлектротранс» у
                    співпраці
                    із «Приватбанк».
                </p>
                <p class="read-more"><a>Детальніше</a></p>
            </div>
            <div class="col-lg-3">
                <div class="whishes-list">
                    <p class="whishes-title"><span>Мій список бажаннь <span></span>3</span></p>
                    <div class="whishes-item">
                        <p class="event-class">Громадське місце</p>
                        <p class="event-name">Піднятися на міську ратушу</p>
                    </div>
                    <div class="whishes-item">
                        <p class="event-class">Їжа та напої</p>
                        <p class="event-name">Майстерня шоколаду</p>
                    </div>
                    <div class="whishes-item">
                        <p class="event-class">Подія</p>
                        <p class="event-name">Новорічний ярмарок</p>
                    </div>
                    <div class="watches-on-map">
                        <span>Дивитися на карті</span>
                    </div>
                </div>
            </div>
            <div class="row categories-container">
                <div class="col-lg-4">
                    <div class="list-background-image div-fill-img"
                         style="background-image: url('/images/lviv1.jpeg'); ">
                        <div class="title-info-holder">
                            <p>Їжа та напої</p>
                            <a href="#"><p>Детальніше <i class="fa fa-chevron-right" aria-hidden="true"></i></p></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="list-background-image div-fill-img"
                         style="background-image: url('/images/lviv1.jpeg'); ">
                        <div class="title-info-holder">
                            <p>Пам’ятки</p>
                            <a href="#"><p>Детальніше <i class="fa fa-chevron-right" aria-hidden="true"></i></p></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="list-background-image div-fill-img"
                         style="background-image: url('/images/lviv1.jpeg'); ">
                        <div class="title-info-holder">
                            <p>Музеї та Галереї</p>
                            <a href="#"><p>Детальніше <i class="fa fa-chevron-right" aria-hidden="true"></i></p></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="list-background-image div-fill-img"
                         style="background-image: url('/images/lviv1.jpeg'); ">
                        <div class="title-info-holder">
                            <p>Атракції</p>
                            <a href="#"><p>Детальніше <i class="fa fa-chevron-right" aria-hidden="true"></i></p></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="list-background-image div-fill-img"
                         style="background-image: url('/images/lviv1.jpeg'); ">
                        <div class="title-info-holder">
                            <p>Парки</p>
                            <a href="#"><p>Детальніше <i class="fa fa-chevron-right" aria-hidden="true"></i></p></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="list-background-image div-fill-img"
                         style="background-image: url('/images/lviv1.jpeg'); ">
                        <div class="title-info-holder">
                            <p>Театри/Філармонії</p>
                            <a href="#"><p>Детальніше <i class="fa fa-chevron-right" aria-hidden="true"></i></p></a>
                        </div>
                    </div>
                </div>
            </div>

            <section class="section interested">
                <h2 class="section__title">Вас може зацікавити</h2>
                <div class="row">
                    <nav class="navbar navbar-default">
                        <div class="container-fluid">
                            <ul class="nav navbar-nav">
                                <li><a href="#">Що робити</a></li>
                                <li><a href="#">Музеї</a></li>
                                <li><a href="#">Місця</a></li>
                                <li><a href="#">Путівники</a></li>
                                <li><a href="#">Готелі</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div class="row interested-row">
                    <div class="col-lg-3">
                        <div class="interested-block">
                            <div class="interested-info-holder">
                                <a href="#"><p>Путівники</p></a>
                                <p>Фестиваль</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="interested-block">
                            <div class="interested-info-holder">
                                <a href="#"><p>Громадські місця</p></a>
                                <p>Високий замок</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="interested-block">
                            <div class="interested-info-holder">
                                <a href="#"><p>Громадські місця</p></a>
                                <p>Високий замок</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="interested-block">
                            <div class="interested-info-holder">
                                <a href="#"><p>Транспорт</p></a>
                                <p>Парковки</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-6 col-sm-3">
                        <a href="#" class="card card--sq">
                            <div class="card__img">
                                <img src="images/card-coloured-image-1.jpg" data-lg="images/card-coloured-image-1.jpg"
                                     data-md="images/card-coloured-image-1.jpg"
                                     data-sm="images/card-coloured-image-1.jpg" alt="" class="blurryload">
                            </div>
                            <div class="card__colored card__colored--green">
                                <div class="h3 center-absolute text-white text-center p-1">City Card</div>
                            </div>
                        </a></div>
                    <div class="col-xs-6 col-sm-3">
                        <a href="#" class="card card--sq">
                            <div class="card__img">
                                <img src="images/card-coloured-image-2.jpg" data-lg="images/card-coloured-image-2.jpg"
                                     data-md="images/card-coloured-image-2.jpg"
                                     data-sm="images/card-coloured-image-2.jpg" alt="" class="blurryload">
                            </div>
                            <div class="card__colored card__colored--red">
                                <div class="h3 center-absolute text-white text-center p-1">ТІЦ</div>
                            </div>
                        </a></div>
                    <div class="col-xs-6 col-sm-3">
                        <a href="#" class="card card--sq">
                            <div class="card__img">
                                <img src="images/card-coloured-image-3.jpg" data-lg="images/card-coloured-image-3.jpg"
                                     data-md="images/card-coloured-image-3.jpg"
                                     data-sm="images/card-coloured-image-3.jpg" alt="" class="blurryload">
                            </div>
                            <div class="card__colored card__colored--orange">
                                <div class="h3 center-absolute text-white text-center p-1">Транспорт</div>
                            </div>
                        </a></div>
                    <div class="col-xs-6 col-sm-3">
                        <a href="#" class="card card--sq">
                            <div class="card__img">
                                <img src="images/card-coloured-image-4.jpg" data-lg="images/card-coloured-image-4.jpg"
                                     data-md="images/card-coloured-image-4.jpg"
                                     data-sm="images/card-coloured-image-4.jpg" alt="" class="blurryload">
                            </div>
                            <div class="card__colored card__colored--green">
                                <div class="h3 center-absolute text-white text-center p-1">Путівники та карти</div>
                            </div>
                        </a></div>
                </div>
            </section>
        </div>

@endsection