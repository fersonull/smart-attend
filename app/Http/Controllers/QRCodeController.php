<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class QRCodeController extends Controller
{
    public static function encode($data)
    {
        $qrcode = QrCode::size(250)->generate($data);

        return $qrcode;
    }
}
