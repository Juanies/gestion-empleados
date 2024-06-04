import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { getUser } from '@/app/actions/cookie';

export async function POST(request) {
    const { name } = await request.json();
    const username = await getUser(); 
        console.log(username + "auita")

    try {
        if (!name) throw new Error("Name required");

        const userId = await getid(username);
        console.log(userId + "uwwww");

        await sql`INSERT INTO empresa (idusuario, nombre) VALUES (${userId}, ${name})`;

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 401 });
    }
}

export async function getid(username) {
    try {
        const result = await sql`SELECT id FROM usuario WHERE username = ${username}`;
        if (result.rows.length > 0) {
            return result.rows[0].id;
        } else {
            throw new Error("User ID not found");
        }
    } catch (error) {
        console.error("Error while getting user ID:", error);
        throw new Error("Failed to get user ID");
    }
}
