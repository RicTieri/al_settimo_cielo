<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('public/Home');
})->name('home');

Route::get('/wedding-events-gallery', function () {
    return Inertia::render('public/WeddingEvents');
})->name('wedding-events');

Route::get('/food-gallery', function () {
    return Inertia::render('public/FoodGallery');
})->name('food-gallery');

Route::get('/residence-gallery', function () {
    return Inertia::render('public/ResidenceGallery');
})->name('residence-gallery');

Route::get('/al-settimo-cielo', function () {
    return Inertia::render('public/ResidenceSettimoCielo');
})->name('residence-al-settimo-cielo');

Route::get('/piccolo-marte', function () {
    return Inertia::render('public/PiccoloMarte');
})->name('piccolo-marte');

Route::get('/location', function () {
    return Inertia::render('public/Location');
})->name('location');

Route::get('/sede-e-recapiti', function () {
    return Inertia::render('public/Contact');
})->name('contact');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';
