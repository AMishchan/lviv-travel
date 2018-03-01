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

Route::get('/home', 'HomeController@index')->name('home')->middleware('locale');
Route::get('/now',function () {return view('now');})->name('now')->middleware('locale');
Route::get('/your-lviv',function () {return view('your-lviv');})->name('your-lviv')->middleware('locale');
Route::get('/events',function () {return view('events');})->name('events')->middleware('locale');

//Route::group(['middleware' => 'role:moderator'], function() {
    Route::get('/planning',function () {return view('planning');})->name('planning')->middleware('locale');
//});
    Route::get('/business',function () {return view('business');})->name('business')->middleware('locale');
    Route::get('setlang/{lang}', 'Controller@setLang')->name('setlang')->middleware('locale');

