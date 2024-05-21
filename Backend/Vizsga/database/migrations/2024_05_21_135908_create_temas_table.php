<?php

use App\Models\tema;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('temas', function (Blueprint $table) {
            $table->id('id');
            $table->string('temanev');
            $table->timestamps();
        });

        tema::create([
            'temanev'=> "Ismerkedes",
        ]) ;

        tema::create([
            'temanev'=> "piramis",
        ]) ;

        tema::create([
            'temanev'=> "magyar szavak",
        ]) ;
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('temas');
    }
};
