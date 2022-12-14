<?php

use App\Http\Controllers\URLController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/shorten-url', [URLController::class, 'shorten']);
Route::post('/expand-url', [URLController::class, 'expand']);
Route::post('/customize-slug', [URLController::class, 'customize']);
Route::get('/analytics', [URLController::class, 'analytics']);
Route::get('/{slug}', [URLController::class, 'handle_redirect']);
