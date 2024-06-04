import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { login } from '@/app/actions/cookie';

export async function POST(request) {
  const { username, password } = await request.json();

  try {
    if (!username || !password) throw new Error('Username and password required');

    const result = await sql`SELECT * FROM usuario WHERE username = ${username} AND contraseña = ${password};`;

    if (result.rowCount >= 1) {
      await login(username);
      return NextResponse.json({ username }, { status: 200 });
    } else {
      throw new Error("Username or password failed");
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}   