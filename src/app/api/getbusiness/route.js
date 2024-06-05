import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { getUser } from '@/app/actions/cookie';
import { getid } from '../newbusiness/route';
export async function GET() {
  try {
    const username = await getUser(); 
    const userId = await getid(username);

    if (!userId) throw new Error("Login required");
    console.log(userId)
    const business = await sql`SELECT nombre FROM empresa WHERE idusuario = ${userId}`;
    return NextResponse.json(business);
  } catch (error) { 
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}
