<?php

use Illuminate\Http\Request;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('nama', function () {
//   return 'Namaku, Larashop API';
// });
//
// Route::post('umur', function () {
//   return 17;
// });
//
// Route::get('category/{id?}', function ($id=null) {
//   $categories = [
//     1 => 'Programming',
//     2 => 'Desain Grafis',
//     3 => 'Jaringan Komputer'
//   ];
//   $id = (int) $id;
//   if($id==0) return 'silahkan pilih kategori';
//   else return 'and memilih kategori <b>'.$categories[$id].'</b>';
// });
//
// Route::get('buku/{id}', function (){
//   return 'buku angka';
// })->where('id','[0-9]+');
//
// Route::get('book/{title}', function ($title) {
// return 'buku abjad';
// })->where('title', '[A-Za-z]+')->name('book');

Route::get('buku/{judul}', 'BookController@cetak');

Route::middleware(['cors'])->group(function () {
  Route::get('buku/{judul}','BookController@cetak');
});

Route::prefix('v1')->group(function () {
  // Route::get('books','BookController@index');
  // Route::get('book/{id}','BookController@view')->where('id','[0-9]+');
  // Route::post('books','BookController@viewEloquent');

  Route::post('login', 'AuthController@login');
  Route::post('register', 'AuthController@register');

  Route::get('categories/random/{count}', 'CategoryController@random');
  Route::get('categories', 'CategoryController@index');
  Route::get('categories/slug/{slug}', 'CategoryController@slug'); // <=ini

  Route::get('books/top/{count}', 'BookController@top');
  Route::get('books', 'BookController@index');
  Route::get('books/slug/{slug}', 'BookController@slug');
  Route::get('books/search/{keyword}', 'BookController@search'); // <= ini

  Route::get('provinces', 'ShopController@provinces'); // <= ini
  Route::get('cities', 'ShopController@cities'); // <= ini

  Route::get('couriers', 'ShopController@couriers');

// Route::post('services', 'ShopController@services');

  // private
  Route::middleware('auth:api')->group(function () {
    Route::post('logout', 'AuthController@logout');
    Route::post('shipping', 'ShopController@shipping');
    Route::post('services', 'ShopController@services'); // <= ini
  });

});

Route::resource('categories', 'CategoryController');
// atau
// Route::resources([
// 'categories' => 'CategoryController',
// 'books' => 'BookController',
// ]);


Route::apiResources([
'categories' => 'CategoryController',
'books' => 'BookController',
]);
