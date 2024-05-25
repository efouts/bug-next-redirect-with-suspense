"use server";

import { redirect } from "next/navigation";

export async function redirectAction(path) {
  redirect(path);
}
