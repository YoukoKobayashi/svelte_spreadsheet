//エンドポイント：サーバプロセスにHTTP APIを実装する。そのAPI1つ1つを「エンドポイント」と呼ぶ
//cellコンポーネントのデータを受け取りそれを永続化するエンドポイントと、
//永続化されているcellContentsのデータを探し、あれば返すエンドポイントの2つを作成し、
//フロントエンドから呼び出すことによって、サーバサイドでの永続化を実装できる
import type { RequestHandler } from "./$types";
import {json} from "@sveltejs/kit"
import fs from 'fs';

const PATH = 'db.json';

export const GET: RequestHandler = async() =>{
    if (fs.existsSync(PATH)){
        const content = fs.readFileSync(PATH, 'utf-8');
        const data = JSON.parse(content);
        return json(data);
    }
    return json({})
}

export const POST: RequestHandler = async({request}) =>{
    const {cells} = await request.json();
    const data = JSON.stringify({cells});
    fs.writeFileSync(PATH, data, 'utf-8');
    return json({});
}

// const storage = {cells: undefined};

// export const GET: RequestHandler = async()=>{
//     return json(storage);
// }

// export const POST: RequestHandler=async({request})=>{
//     const {cells} = await request.json();
//     storage.cells = cells;
//     return json({});
// }