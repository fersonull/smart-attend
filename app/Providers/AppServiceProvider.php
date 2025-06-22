<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\QRCodeController;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Inertia::share([
            'auth' => [
                'user' => fn () => Auth::user(),
                'qrCode' => fn () => (string) QRCodeController::encode(Auth::user()->id ?? "sdOdm0w!dmm13")
            ]
        ]);
    }
}
