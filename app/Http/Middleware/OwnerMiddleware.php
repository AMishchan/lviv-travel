<?php

namespace App\Http\Middleware;

use Closure;

class OwnerMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $role){
//dump($role);
//      dd($request->user());

        if (!$request->user()->hasRole($role)) {
            return redirect('/'); // редирект куда угодно
        }
        return $next($request);
    }
}
