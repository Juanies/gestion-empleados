'use server'
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextResponse, NextRequest } from 'next/server';

const secretKey = 'comun';
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload){
  return new SignJWT(payload)
    .setProtectedHeader({alg: 'HS256'})
    .setIssuedAt()
    .sign(key);
}

export async function decrypt(input) {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });
  return payload;
}

export async function login(username){
  const user = username;
  const session = await encrypt({ user });
  console.log(session);
  cookies().set('session', session, { httpOnly: true, secure: true, path: '/' });
}
export async function getSession(){
  const session = cookies().get('session')?.value;
  if(!session) return null;
  return await decrypt(session);
}

export async function getUser(nameCookie){
  const cookie = cookies().get('session');
  if (cookie) {
    const decryptedPayload = await decrypt(cookie.value);
    console.log(decryptedPayload);
    return decryptedPayload;
  } else {
    throw new Error("No session cookie found");
  }
}

export async function updateSession(request){
  const session = request.cookies.get('session')?.value;
  if(!session) return;

  const parsed = await decrypt(session);
  const res = NextResponse.next();

  res.cookies.set({
    name: 'session',
    value: await encrypt(parsed),
    httpOnly: true,
  });
  return res;
}

export async function logout(){
  cookies().set('session', '', { httpOnly: true, secure: true, path: '/' });
}
