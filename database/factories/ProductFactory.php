<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'price' => $this->faker->numberBetween([1000, 10000]),
            'initial_price' => $this->faker->numberBetween([10000, 15000]),
            'title' => $this->faker->name(),
            'rating' => rand(1, 5),
            'short_description' => $this->faker->paragraph(),
            'long_description' => $this->faker->randomHtml(),

        ];
    }
}
