<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Controllers\QRCodeController;

class AuthController extends Controller
{
    public function showLogin()
    {
        return Inertia::render('Auth/LoginPage');
    }

    public function login(Request $request)
    {
        // dd($request);

        $cred = $request->validate([
            'email' => 'required|email|exists:users',
            'password' => 'required'
        ], [
            'email.exists' => 'Email not found.',
            'email.required' => 'Email is required.',
            'email.email' => 'Invalid email address.',
            'password.required' => 'Password is required.',
        ]);

        if (Auth::attempt($cred)) {
            $request->session()->regenerate();
            return redirect()->intended('/dashboard');
        }

        return back()->withErrors([
            'password' => 'Invalid'
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login');
    }
}
