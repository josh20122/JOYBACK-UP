<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Staudenmeir\EloquentHasManyDeep\HasRelationships;

class Product extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function image()
    {
        return $this->morphTo(Image::class, 'imageable');
    }

    public function category()
    {
        return $this->belongsTo(Cartegory::class, 'cartegory_id', 'id');
    }
}
