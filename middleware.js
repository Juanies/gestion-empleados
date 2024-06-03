import { NextRequest } from "next/server";
import { updateSession } from "@/app/actions";

export async function middleware(request){
    return await updateSession(request)
}