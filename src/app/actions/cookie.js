'use server'
import { cookies } from 'next/headers';

export async function setUsernameCookie(username) {
  cookies().set('user', username, { httpOnly: true, secure: true, path: '/' });
}