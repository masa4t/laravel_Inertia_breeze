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
        return Inertia::render('Books/index', ['books' => $books, 'message' => session('message')]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // リクエストのバリデーション
        $validated = $request->validate([
            'title' => 'required|max:20',
            'content' => 'required|max:100',
            'category' => 'required|max:10',
        ]);

        // バリデーション後のデータを使用して新しい本を作成
        $book = new Books($validated);
        $book->save();

        // リダイレクトしてフラッシュメッセージを表示
        return redirect()->route('books.index')->with('message', '登録しました');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // 更新する本をIDで取得
        $books = Books::find($id);

        if (!$books) {
            return redirect()->route('books.index')->with('error', '本が見つかりませんでした');
        }

        // リクエストのバリデーション
        $validated = $request->validate([
            'title' => 'required|max:20',
            'content' => 'required|max:100',
            'category' => 'required|max:10',
        ]);

        // 本のデータを更新
        $books->fill($validated);

        try {
            $books->saveOrFail();
            return redirect()->route('books.index')->with('message', '更新しました');
        } catch (\Exception $e) {
            return redirect()->route('books.index')->with('error', '更新に失敗しました: ' . $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // 削除する本をIDで取得
        $book = Books::find($id);

        if (!$book) {
            return redirect()->route('books.index')->with('error', '本が見つかりませんでした');
        }

        // 本を削除
        $book->delete();

        // リダイレクトしてフラッシュメッセージを表示
        return redirect()->route('books.index')->with('message', '削除しました。');
    }
}
