'use client';

import { useState } from 'react';

import { auth } from '@/lib/firebase/client';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { registerWithFirebaseAction } from '@/app/register/_actions/register';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(cred.user, { displayName: `${firstName} ${lastName}`.trim() });
      const idToken = await cred.user.getIdToken();

      await registerWithFirebaseAction({ idToken, firstName, lastName });

      router.replace('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Error al registrarse');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col items-start justify-start w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold">Crear cuenta</h1>

        {error && (
          <div className="w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full mt-4 space-y-3">
          <input value={firstName} onChange={e => setFirstName(e.target.value)} className="w-full p-2 border rounded" placeholder="Nombre" required />
          <input value={lastName} onChange={e => setLastName(e.target.value)} className="w-full p-2 border rounded" placeholder="Apellido" required />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 border rounded" placeholder="Email" required />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 border rounded" placeholder="Contraseña" required />
          <button disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded w-full">
            {loading ? 'Creando...' : 'Registrarse'}
          </button>
        </form>
        <Link href="/login" className="text-blue-600 mt-4">
          Ya tienes cuenta? Inicia sesión
        </Link>
      </div>
    </div>
  );
}