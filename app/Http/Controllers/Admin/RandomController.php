<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cartegory;
use Illuminate\Http\Request;

class RandomController extends Controller
{
    public function categoryStatus($id)
    {
        $status = Cartegory::find($id)->status;

        Cartegory::where('id', $id)->update([
            'status' =>  $status === 1 ? false : true,
        ]);

        return redirect()->route('admin.cartegories');
    }
}
