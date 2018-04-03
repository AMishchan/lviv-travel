<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Language;

class MainpageController extends Controller
{
    function index(){

        return view('welcome');

    }
}
