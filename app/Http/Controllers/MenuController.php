<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Menu;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Session;
use App\Language;

class MenuController extends Controller
{
    public function main_menu_maker()
    {
        $locale = Session::get('locale');
        $categories = Menu::select('id', "title_$locale", 'path', 'parent_id', 'children', 'template', 'data_menu')
            ->where('parent_id', false)
            ->where('published', true)
            ->get()
            ->toArray();
        foreach ($categories as &$category) {
            if ($category['children']) {
                $left_sidebar_menus = Menu::select('id', "title_$locale", 'path', 'parent_id', 'children', 'template', 'data_menu')
                    ->where('parent_id', $category['id'])
                    ->where('published', true)
                    ->get()
                    ->toArray();
                $category['title'] = $category["title_$locale"];
                $category['left_sidebar_menu'] = $left_sidebar_menus;


                foreach ($category['left_sidebar_menu'] as &$left_sidebar_menu) {
                    if ($left_sidebar_menu['children']) {
                        $left_sidebar_menu['left_sidebar_droopdown'] = Menu::select('id', "title_$locale", 'path', 'parent_id', 'children', 'template', 'data_menu')
                            ->where('parent_id', $left_sidebar_menu['id'])
                            ->where('published', true)
                            ->get()
                            ->toArray();
                        $left_sidebar_menu['title'] = $left_sidebar_menu["title_$locale"];
                        foreach ($left_sidebar_menu['left_sidebar_droopdown'] as &$left_sidebar_menu_droopdown) {
                            $left_sidebar_menu_droopdown['title'] = $left_sidebar_menu_droopdown["title_$locale"];
                        }
                    } else {
                        $left_sidebar_menu['left_sidebar_droopdown'] = false;
                        $left_sidebar_menu['title'] = $left_sidebar_menu["title_$locale"];
                    }
                }


            } else {
                $category['left_sidebar_menu'] = false;
                $category['title'] = $category["title_$locale"];
            }
        }


    }
}
