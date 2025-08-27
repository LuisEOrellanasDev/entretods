'use client';

import { useState } from 'react';
import { auth } from '@/lib/firebase/client';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createSessionAction } from '@/app/login/_actions/createSesion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 1) Sign-in with Firebase
      const cred = await signInWithEmailAndPassword(auth, email, password);

      // 2) Get fresh ID token
      const idToken = await cred.user.getIdToken();

      // 3) Ask server to create session cookie and ensure DB user exists
      await createSessionAction(idToken);

      // 4) Go to dashboard
      router.replace('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col items-start justify-start w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold">Iniciar sesión</h1>

        {error && (
          <div className="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full mt-4 space-y-3">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 border rounded" placeholder="Email" required />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 border rounded" placeholder="Contraseña" required />
          <button disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded w-full">
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        <Link href="/register" className="text-blue-600 mt-4">
          No tienes cuenta? Registrate
        </Link>
      </div>
    </div>
  );
}