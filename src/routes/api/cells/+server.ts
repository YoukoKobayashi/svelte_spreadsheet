//エンドポイント：サーバプロセスにHTTP APIを実装する。そのAPI1つ1つを「エンドポイント」と呼ぶ
//cellコンポーネントのデータを受け取りそれを永続化するエンドポイントと、
//永続化されているcellContentsのデータを探し、あれば返すエンドポイントの2つを作成し、
//フロントエンドから呼び出すことによって、サーバサイドでの永続化を実装できる
import type { RequestHandler } from "./$types";
import {json} from "@sveltejs/kit"

const storage = {cells: undefined};

export const GET: RequestHandler = async()=>{
    return json(storage);
}

export const POST: RequestHandler=async({request})=>{
    const {cells} = await request.json();
    storage.cells=cells;
    return json({});
}