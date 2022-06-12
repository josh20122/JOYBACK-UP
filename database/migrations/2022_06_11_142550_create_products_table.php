<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cartegory_id');
            $table->text('short_description');
            $table->longText('long_description')->nullable();
            $table->float('price');
            $table->float('rating');
            $table->float('initial_price');
            $table->string('title');
            $table->foreign('cartegory_id')->references('id')->on('cartegories')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
