'use server'
import { SignJWT, jwtVerify } from 'jose';

import { cookies } from 'next/headers';


const secretKey = 'conunañlacontraseñaeslamasseguradelmundo'
const key = new TextEncoder().encode(secretKey)

export async function encrypt(payload){
  return await new SignJWT(payload)
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

  const session = await encrypt({username})

   cookies().set('session', session, { httpOnly: true, secure: true, path: '/' });


   getUser(session)

  }


export async function getUser(nameCookie){
  const cookie = cookies().get('session')

  if (cookie) {
    const decryptedPayload = await decrypt(cookie.value);
    console.log(decryptedPayload);
    return decryptedPayload
  } else {
    throw new Error("No session cookie found")
  }
}