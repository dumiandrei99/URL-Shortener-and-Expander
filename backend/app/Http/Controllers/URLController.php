<?php

namespace App\Http\Controllers;

use App\Models\URL;
use Illuminate\Http\Request;

class URLController extends Controller
{
    /**
     * Converts an expanded URL to a shortened URL.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function shorten(Request $request)
    {
        // validate the request
        $request->validate([
            'expanded_url' => 'required|url',
            'slug' => 'required'
        ]);

        // extract the request parameters
        $expanded_url = $request->expanded_url;
        $slug = $request->slug;

        // check if the slug is already defined and saved in the DB
        if (URL::where('slug', $slug)->exists()) {
            // status code 400 - Bad Request
            return response(["errors" => ["slug" => "This slug is already used!"]], 400);
        };

        // save the expanded url and it's slug to the DB, with the "times_clicked" value set to 0
        $url_object = new URL();
        $url_object->expanded_url = $expanded_url;
        $url_object->slug = $slug;
        $url_object->times_clicked = 0;
        $url_object->save();

        // success response has a success message and the host/slug URL that is sent to the frontend
        $host = url('/');
        $url_response = $host . "/api/" . $slug;
        $response = ["success" => [
            "message" => "Shortened URL has been created with success!",
            "url" => $url_response
        ]];
        return response($response, 200);
    }

    /**
     * Redirects the host + slug to the expanded url saved in the DB
     *
     * @param  String  $slug
     * @return redirect
     */

    public function handle_redirect(Request $request)
    {
        $slug = $request->slug;
        $url_object = URL::where('slug', $slug)->first();

        if (URL::where('slug', $slug)->exists()) {
            // update times clicked
            $url_object->times_clicked += 1;
            $url_object->save();
            // redirect to the expanded url
            return redirect($url_object->expanded_url);
        } else {
            // if the slug does not exist in the DB, return a 404 response
            return abort(404);
        }
    }
}
