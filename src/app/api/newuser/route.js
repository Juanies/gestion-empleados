import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { username, password, mail } = await req.json();
    await sql`INSERT INTO usuario (usuario, contraseña, correo) VALUES (${username}, ${password}, ${mail})`;

    return NextResponse.json({ message: 'User created' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}