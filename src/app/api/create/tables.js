import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS usuario (
        id SERIAL PRIMARY KEY,
        usuario VARCHAR(100) NOT NULL,
        contraseña VARCHAR(100) NOT NULL,
        correo VARCHAR(100) NOT NULL
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS empresa (
        id SERIAL PRIMARY KEY,
        idusuario INT NOT NULL,
        usuario VARCHAR(100) NOT NULL,
        contraseña VARCHAR(100) NOT NULL,
        correo VARCHAR(100) NOT NULL,
        FOREIGN KEY (idusuario) REFERENCES usuario(id)
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS empleado (
        id SERIAL PRIMARY KEY,
        idempresa INT NOT NULL,
        usuario VARCHAR(100) NOT NULL,
        codigo VARCHAR(100) NOT NULL,
        FOREIGN KEY (idempresa) REFERENCES empresa(id)
      )
    `;

    console.log("uwu");

    return NextResponse.json({ message: 'Tables created' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
