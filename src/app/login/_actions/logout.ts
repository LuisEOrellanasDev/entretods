'use server';

import { clearSessionCookie } from '@/lib/firebase/firebaseSesion';

export async function logoutAction(_formData: FormData) {
  await clearSessionCookie();
}