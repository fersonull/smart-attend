<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class QRCodeController extends Controller
{
    public static function encode($data)
    {
        $qrcode = QrCode::size(250)->generate($data);

        return $qrcode;
    }

    public function verifyCode(Request $request)
    {

        $request->validate([
            'id' => 'required'
        ]);

        $scannedID = $request->id;

        $user = User::findOrFail($scannedID);

        if (!$user) {
            return response()->json(['message' => 'No matches found.']);
        }

        return response()->json($user);
    }

    public function fetchAllScans()
    {
        
    }
}
