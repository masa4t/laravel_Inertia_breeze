<?php

namespace App\Http\Controllers;

use App\Models\Books;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BooksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Books::all();
        return Inertia::render('Books/index',['books'=>$books, 'message' => session('message')]);
    }

    

 
    public function store(Request $request)
    {
        $request->validated([
            'title' => 'required|max:20',
            'content' => 'required|max:100',
            'category' => 'required|max:10',
        ]);
        $book = new Books($request->input());
        $book->save();
        return redirect('books')->with([
            'message' => '登録しました',
        ]);

    }



    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        
        $books = Books::find($id);
        $books->fill($request->input()->saveOrFail());
        return redirect('books')->with([
            'message' => '更新しました',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $book = Books::find($id);
        $book->delete();
        return redirect('books')->with([
            'message' => '削除しました。',
        ]);
    }
}
