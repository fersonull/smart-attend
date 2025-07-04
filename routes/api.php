<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QRCodeController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


Route::post('/verify-scan', [QRCodeController::class, 'verifyCode']);

Route::get('/scans', [QRCodeController::class, 'fetchAllScans']);