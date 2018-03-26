@extends('layouts.front')
@section('content')
    <section>
        <div class="events-banner div-fill-img"
             style="background-image: url('/images/landing-banners/banerbfest.png');">
            <div class="container landing-banner-info">
                <div class="landing-banner-title">
                    <div class="text-hero text-white ">Події</div>
                </div>
                <div class="breadcrumbs banner-breadcrumbs">Головна/Події</div>
            </div>
        </div>
    </section>

    <div class="container events-container">
        <section>
            <div class="row text-center">
                <div class="landing-main-desc col-lg-6 col-lg-offset-3">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                    Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum."
                </div>
            </div>
            <h2>Рекомендовані події</h2>
            <div class="row events-heap">
                <div class="col-lg-8">
                    <div class="landing-event-main div-fill-img"
                         style="background-image: url('/images/landing-banners/banerbfest.png');">
                        <div class="card-img-marker">
                            <p class="card-marker-date-text">Дата проведення</p>
                            <p class="card-marker-date">07-06</p>
                            <p class="card-marker-month">Вересня</p>
                            <p class="card-marker-time-text">Час проведення</p>
                            <p class="card-marker-time">15.30-16.00</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="add-event-main div-fill-img"
                         style="background-image: url('/images/events/perfomance.jpg');">
                        <div class="card-img-marker">
                            <p class="card-marker-date">07-06</p>
                            <p class="card-marker-month">Вересня</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="add-event-main div-fill-img"
                         style="background-image: url('/images/events/perfomance.jpg');">
                        <div class="card-img-marker">
                            <p class="card-marker-date">07-06</p>
                            <p class="card-marker-month">Вересня</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="add-event-main div-fill-img"
                         style="background-image: url('/images/events/perfomance.jpg');">
                        <div class="card-img-marker">
                            <p class="card-marker-date">07-06</p>
                            <p class="card-marker-month">Вересня</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="add-event-main div-fill-img"
                         style="background-image: url('/images/events/perfomance.jpg');">
                        <div class="card-img-marker">
                            <p class="card-marker-date">07-06</p>
                            <p class="card-marker-month">Вересня</p>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <a href="#">Дивитись більше</a>
                </div>
            </div>

        </section>
        <section>
            <h2>Інші події</h2>
            <div class="col-lg-12">
                <div class="row row-filter text-center">
                    <div class="">
                        <ul class="landing-tab-menu">
                            <li class="active">Всі</li>
                            <li>Сьогодні</li>
                            <li>3 дні</li>
                            <li>Тиждень</li>
                        </ul>
                    </div>
                </div>
                <div class="row looking-for-event">
                    <div class="col-lg-3 calendar">
                        <input type="date" data-date="" data-date-format="DD MMMM YYYY" value="2015-08-09">
                    </div>
                    <div class="col-lg-6">
                        <div class="search col-lg-6">
                            <form action="" class="form-search">
                                <input type="text" placeholder="Пошук">
                                <button class="btn"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                        <form action="" v-bind:name="">
                            <div class="col-lg-3 location">

                                <select name="location" id="">
                                    <option value="">1qwerwqer</option>
                                    <option value="">qwerqwer</option>
                                    <option value="">werqwer</option>
                                    <option value="">werwqer</option>
                                    <option value="">qwerqwer</option>
                                </select>
                            </div>

                            <div class="col-lg-3 category">

                                <select name="location" id="">
                                    <option value="">1qwerwqer</option>
                                    <option value="">qwerqwer</option>
                                    <option value="">werqwer</option>
                                    <option value="">werwqer</option>
                                    <option value="">qwerqwer</option>
                                </select>
                            </div>
                        </form>
                    </div>

                    <div class="col-lg-3">
                        <button class="button">Застосувати фильтр</button>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="col-lg-6 map-events">
                <div class="row">
                    <p class="text-right map-events-amount">35 Подій</p>
                </div>
                <div class="row">
                    <div class="event-list-item">
                        <div class="col-lg-4">
                            <div class="col-lg-12 card-marker">
                                <p class="card-marker-date">07-06</p>
                                <p class="card-marker-month">Вересня</p>
                            </div>
                            <p class="text-center">
                                <button class="btn btn--green event-buy-ticket">Купити квиток</button>
                            </p>
                        </div>
                        <div class="col-lg-8 map-event-title">
                            <p class="map-event-desc">
                                Перший фестиваль української бандури
                            </p>
                            <p class="map-event-address">
                                Парк знесення, 14
                            </p>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="event-list-item">
                        <div class="col-lg-4">
                            <div class="col-lg-12 card-marker">
                                <p class="card-marker-date">07-06</p>
                                <p class="card-marker-month">Вересня</p>
                            </div>
                            <p class="text-center">
                                <button class="btn btn--green event-buy-ticket">Купити квиток</button>
                            </p>
                        </div>
                        <div class="col-lg-8 map-event-title" >
                            <p class="map-event-desc">
                                Перший фестиваль української бандури
                            </p>
                            <p class="map-event-address">
                                Парк знесення, 14
                            </p>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="event-list-item">
                        <div class="col-lg-4">
                            <div class="col-lg-12 card-marker">
                                <p class="card-marker-date">07-06</p>
                                <p class="card-marker-month">Вересня</p>
                            </div>
                            <p class="text-center">
                                <button class="btn btn--green event-buy-ticket">Купити квиток</button>
                            </p>
                        </div>
                        <div class="col-lg-8 map-event-title">
                            <p class="map-event-desc">
                                Перший фестиваль української бандури
                            </p>
                            <p class="map-event-address">
                                Парк знесення, 14
                            </p>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="event-list-item">
                        <div class="col-lg-4">
                            <div class="col-lg-12 card-marker">
                                <p class="card-marker-date">07-06</p>
                                <p class="card-marker-month">Вересня</p>
                            </div>
                            <p class="text-center">
                                <button class="btn btn--green event-buy-ticket">Купити квиток</button>
                            </p>
                        </div>
                        <div class="col-lg-8 map-event-title">
                            <p class="map-event-desc">
                                Перший фестиваль української бандури
                            </p>
                            <p class="map-event-address">
                                Парк знесення, 14
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 events-map">
                <style>
                    /* Always set the map height explicitly to define the size of the div
                     * element that contains the map. */
                    #map {
                        height: 100%;
                    }
                    /* Optional: Makes the sample page fill the window. */
                    html, body {
                        height: 100%;
                        margin: 0;
                        padding: 0;
                    }
                </style>
                <div id="map"></div>
                <script>
                    var map;
                    function initMap() {
                        map = new google.maps.Map(document.getElementById('map'), {
                            center: {lat: 49.854797, lng: 24.054187},
                            zoom: 11
                        });
                    }
                </script>
                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJEwrPu30ogha996frkeVkFBkcB2hXZ64&callback=initMap"
                        async defer></script>
            </div>
        </section>
    </div>


@endsection