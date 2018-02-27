<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/now',function () {return view('now');})->name('now');
Route::get('/your-lviv',function () {return view('tour-lviv');})->name('your-lviv');
Route::get('/events',function () {return view('events');})->name('events');
Route::get('/planning',function () {return view('planning');})->name('planning');
Route::get('/business',function () {return view('business');})->name('business');
