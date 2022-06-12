<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cartegory;
use App\Models\Country;
use App\Models\Image as ModelsImage;
use App\Models\Product;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $countries = Country::all();
        $search = $request->input('search');
        $countrysearch = $request->input('country');
        $products = Product::query()->when($countrysearch, function ($query, $countrysearch) {
            $query->whereHas('category.country', function ($country) use ($countrysearch) {
                $country->where('id', $countrysearch);
            });
        })->when($search, function ($query, $search) {
            $query->where('title', 'like', "%{$search}%");
        })->with('category', 'category.country')->orderBy('id', 'desc')->paginate(15)->withQueryString();


        return Inertia::render('Admin/AllProducts', [
            'products' => $products,
            'filters' => $search,
            'countries' => $countries,
        ]);
    }


    public function create()
    {
        $countries = Country::with('cartegory')->get();


        return Inertia::render('Admin/CreateProduct', [
            'countries' => $countries
        ]);
    }
    public function store(Request $request)
    {
        if ($request->file('image1') && $request->file('image1')->getSize() === false) {
            return redirect()->back()->withErrors(['image1' => 'Image size must be less than 2048Kib']);
        }
        if ($request->file('image2') && $request->file('image2')->getSize() === false) {
            return redirect()->back()->withErrors(['image2' => 'Image size must be less than 2048Kib']);
        }
        if ($request->file('image3') && $request->file('image3')->getSize() === false) {
            return redirect()->back()->withErrors(['image3' => 'Image size must be less than 2048Kib']);
        }
        if ($request->file('image4') && $request->file('image4')->getSize() === false) {
            return redirect()->back()->withErrors(['image4' => 'Image size must be less than 2048Kib']);
        }
        if ($request->file('image5') && $request->file('image5')->getSize() === false) {
            return redirect()->back()->withErrors(['image5' => 'Image size must be less than 2048Kib']);
        }

        $validate = $request->validate([
            'image1' => 'required|image|mimes:png,jpg,jpeg',
            'image2' => 'required|mimes:png,jpg,jpeg',
            'image3' => 'required|mimes:png,jpg,jpeg',
            'image4' => 'required|mimes:png,jpg,jpeg',
            'image5' => 'required|mimes:png,jpg,jpeg',
            'title' => 'required|string',
            'initial_price' => 'required|integer',
            'price' => 'required|integer',
            'short_description' => 'required',
            'category' => 'required',
            'country' => 'required',
            'long_description' => 'max:4294967289'
        ]);

        $country = Country::find($request->input('country'));
        $category = $country->cartegory()->find($request->input('category'));
        $category->product()->create([
            'title' => $request->input('title'),
            'short_description' => $validate['short_description'],
            'long_description' => $request->input('long_description'),
            'price' => $validate['price'],
            'initial_price' => $validate['initial_price'],
            'rating' => 5,
        ]);

        $image1 = 'image1' . time() . $request->file('image1')->getClientOriginalName();
        $image2 = 'image2' . time() . $request->file('image2')->getClientOriginalName();
        $image3 = 'image3' . time() . $request->file('image3')->getClientOriginalName();
        $image4 = 'image4' . time() . $request->file('image4')->getClientOriginalName();
        $image5 = 'image5' . time() . $request->file('image5')->getClientOriginalName();


        Image::make($request->file('image1'))->resize(250, 300)->save(public_path("thumbnails/{$image1}"));
        Image::make($request->file('image1'))->save(public_path("thumbnails/{$image1}"));
        Image::make($request->file('image2'))->save(public_path("products/{$image2}"));
        Image::make($request->file('image3'))->save(public_path("products/{$image3}"));
        Image::make($request->file('image4'))->save(public_path("products/{$image4}"));
        Image::make($request->file('image5'))->save(public_path("products/{$image5}"));

        $productid = Product::latest()->first()->id;

        ModelsImage::insert(
            [
                ['imageable_type' => 'App\Models\Product', 'imageable_id' => $productid, 'path' => "/thumbnails/{$image1}", 'created_at' => now(), 'updated_at' => now()],
                ['imageable_type' => 'App\Models\Product', 'imageable_id' => $productid, 'path' => "/products/{$image1}", 'created_at' => now(), 'updated_at' => now()],
                ['imageable_type' => 'App\Models\Product', 'imageable_id' => $productid, 'path' => "/products/{$image2}", 'created_at' => now(), 'updated_at' => now()],
                ['imageable_type' => 'App\Models\Product', 'imageable_id' => $productid, 'path' => "/products/{$image3}", 'created_at' => now(), 'updated_at' => now()],
                ['imageable_type' => 'App\Models\Product', 'imageable_id' => $productid, 'path' => "/products/{$image4}", 'created_at' => now(), 'updated_at' => now()],
                ['imageable_type' => 'App\Models\Product', 'imageable_id' => $productid, 'path' => "/products/{$image5}", 'created_at' => now(), 'updated_at' => now()],
            ],
        );

        return redirect()->back();

        // $request->validate([]);
    }

    public function edit(Request $request, $id)
    {
        $product = Product::find($id);
        $images = ModelsImage::where('imageable_type', 'App\Models\Product')->where('imageable_id', $id)->latest()->take(5)->get()->toJson();
        return Inertia::render('Admin/EditProduct', [
            'product' => $product,
            'country' => $product->category()->first()->country()->first(),
            'category' => $product->category()->first()->title,
            'images' => $images
        ]);
    }
}
