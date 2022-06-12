<?php

use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\Admin\CartegoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\RandomController;
use App\Http\Controllers\Admin\SubCategoryController;
use App\Models\Cartegory;
use App\Models\Country;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Image as ModelsImage;
use App\Models\Product;

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
});



Route::controller(AdminUserController::class)->group(function () {
    Route::get('/users', 'index');
    Route::get('/users/{id}',  'show')->name('admin.viewuser');
    Route::post('/update-user-profile/{id}', 'updateprofile');
    Route::post('/update-user-info/{id}', 'updateinfo');
});

Route::controller(CartegoryController::class)->group((function () {
    Route::get('/cartegory', 'index')->name('admin.cartegories');
    Route::get('/cartegory/edit/{id}', 'edit');
    Route::post('/cartegory/edit-avatar/{id}', 'editAvatar');
    Route::post('/cartegory/edit-info/{id}', 'updateInfo');
    Route::get('/cartegory/create', 'create');
    Route::post('/cartegory/create', 'store');
}));

Route::controller(RandomController::class)->group(function () {
    Route::post('/cartegory/status/{id}', 'categoryStatus');
});

Route::get('test', function () {
    return ModelsImage::latest()->get();
});

Route::controller(ProductController::class)->group(function () {
    Route::get('/product/create', 'create');
    Route::post('/product/store', 'store');
    Route::get('/products', 'index');
    Route::get('/products/edit/{id}', 'edit');
});
