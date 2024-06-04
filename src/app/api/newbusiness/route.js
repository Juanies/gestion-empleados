import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { getUser, getid } from '@/app/actions/cookie';

export async function POST(request) {
    const { name } = await request.json(); 
    const userId = await getid(getUser('session')); 

    try {
        if (!name) throw new Error('Nombre de empresa requerido');

        await sql`INSERT INTO usuario (idusuario, nombre) VALUES (${userId}, ${name})`;

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 401 });
    }
}
