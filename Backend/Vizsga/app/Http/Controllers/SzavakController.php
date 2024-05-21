<?php

namespace App\Http\Controllers;

use App\Models\szavak;
use App\Http\Requests\StoreszavakRequest;
use App\Http\Requests\UpdateszavakRequest;
use Illuminate\Support\Facades\DB;

class SzavakController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $szavaks = DB::table('szavaks')
        ->select('szavaks.angol', 'szavaks.magyar')
        ->get();

        return $szavaks;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function szavakTemai()
    {
        $szavaks = DB::table('szavaks')
        ->join('temas','temas.id','=','szavaks.temaId')
        ->select('szavaks.temaId','temas.id')
        ->get();
    }
    
}
   
