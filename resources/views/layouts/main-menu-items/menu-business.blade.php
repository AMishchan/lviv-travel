<div class="menu" id="business">
    <a href="#" class="btn-menu-back visible-xs visible-sm">Назад</a>
    <div class="row">
        <div class="col-sm-5 col-md-3 col-lg-3">
            <ul class="menu__nav mb-4 menu-trig">
                @foreach($data['categories'] as $category)
                    @if($category['data_menu'] == 'business' & $category['left_sidebar_menu'] != 0)
                        @foreach($category['left_sidebar_menu'] as $left_sidebar_menu)
                            <li><a href="#">{{$left_sidebar_menu['title']}}</a></li>
                            @if($left_sidebar_menu['children'] & $left_sidebar_menu['left_sidebar_droopdown'])
                                @foreach($left_sidebar_menu['left_sidebar_droopdown'] as $left_sidebar_droopdown)
                                    <ul class="menu__subnav">
                                        <li>
                                            <a class="" href="#">{{$left_sidebar_droopdown['title']}}</a>
                                        </li>
                                    </ul>
                                @endforeach
                            @endif
                        @endforeach
                    @endif
                @endforeach
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
            <a href="{{route('business')}}" class="btn btn--green">Більше подій</a>
        </div>
    </div>
</div>