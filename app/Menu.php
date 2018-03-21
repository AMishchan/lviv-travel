<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $fillable = [
        'id', 'title_ua','title_en','title_pl','title_de','title_cz','title_ru','title_fr','title_it', 'path','parent_id','published','children',
    ];
}
