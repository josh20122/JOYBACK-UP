<?php


use App\Mail\TestMail;

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

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

//Authentication








Route::get('/', function () {
    return Inertia::render('Views/Home');
});

Route::get('/view', function () {
    return Inertia::render("Views/ViewProduct");
});

Route::get('/cart', function () {
    return  Inertia::render('Views/Cart');
});

Route::get('wishlist', function () {
    return Inertia::render('Views/Wishlist');
});

Route::get('checkout', function () {
    return Inertia::render('Views/Checkout');
});
