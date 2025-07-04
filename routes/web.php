<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\QRCodeController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home');

Route::get('/login', [AuthController::class, 'showLogin']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['auth', 'role:user'])->group(function () {
    Route::inertia('/dashboard', 'User/Dashboard');
    
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::inertia('/admin-dashboard', 'Admin/Dashboard');
    Route::inertia('/students', 'Admin/Students');

    Route::post('/verify-scan', [QRCodeController::class, 'verifyCode']);
});