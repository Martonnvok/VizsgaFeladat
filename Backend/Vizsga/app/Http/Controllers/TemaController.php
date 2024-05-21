<?php

namespace App\Http\Controllers;

use App\Models\tema;
use App\Http\Requests\StoretemaRequest;
use App\Http\Requests\UpdatetemaRequest;
use Illuminate\Support\Facades\DB;

class TemaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $temas = DB::table('temas')
        ->select('temas.temanev')
        ->get();

        return $temas;
    }

    
}
