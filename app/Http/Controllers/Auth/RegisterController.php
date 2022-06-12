<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Register');
    }

    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string|',
            'email' => 'required|email|string|max:50|unique:users,email,',
            'password' => 'required|string|min:8|max:50|alpha_num|confirmed',
            'password_confirmation' => 'required'
        ]);

        User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => Hash::make($fields['password']),
        ]);
        dd('success');
    }
}
