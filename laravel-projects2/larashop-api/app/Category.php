<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Http\Resources\Category as CategoryResource;


class Category extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];

    protected $fillable = [
      'name', 'slug', 'image', 'status'
    ];

    public function books(){
      // return $this->belongsToMany("App\Book");
      return $this->belongsToMany('App\Book', 'book_category', 'category_id','book_id');

    }

}
