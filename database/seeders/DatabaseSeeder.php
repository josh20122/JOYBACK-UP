<?php

namespace Database\Seeders;

use App\Models\Cartegory;
use App\Models\Country;
use App\Models\Image;
use App\Models\Product;
use App\Models\SubCategory;
use App\Models\User;
use Database\Factories\CartegoryFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(4)->hasimage(1)->create();

        // Cartegory::factory(10)->hasimage(1)->create();

        Country::factory(3)
            ->has(Cartegory::factory()
                ->has(Image::factory()->count(1))
                ->has(Product::factory()
                    ->has(Image::factory()->count(6))
                    ->count(20))
                ->count(4))
            ->create();
    }
}
