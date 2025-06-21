<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

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
            return redirect()->intended('/');
        }

        return back()->withErrors([
            'password' => 'Invalid'
        ]);
    }
}
