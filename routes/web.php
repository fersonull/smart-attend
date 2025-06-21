<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home');

Route::inertia('/login', 'Auth/LoginPage');
