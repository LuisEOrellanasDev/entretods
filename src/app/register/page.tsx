'use client';

import { useState } from 'react';
import { auth } from '@/lib/firebase/client';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { registerWithFirebaseAction } from '@/app/register/_actions/register';
import { parseFirebaseError } from '@/lib/utils/firebase-errors';
import { useToast } from '@/components/providers/ToastProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(cred.user, { displayName: `${firstName} ${lastName}`.trim() });
      const idToken = await cred.user.getIdToken();

      await registerWithFirebaseAction({ idToken, firstName, lastName });

      addToast({
        type: 'success',
        title: 'Cuenta creada exitosamente',
        message: 'Bienvenido a Entretods. Redirigiendo al dashboard...'
      });

      router.replace('/dashboard');
    } catch (err: any) {
      const errorMessage = parseFirebaseError(err);
      addToast({
        type: 'error',
        title: 'Error al crear cuenta',
        message: errorMessage
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-100 px-4 py-8">
      <div className="flex flex-col items-start justify-start w-full max-w-md bg-white rounded-xl shadow-lg p-6 mx-4">
        <h1 className="text-2xl font-bold mb-2">Crear cuenta</h1>

        <form onSubmit={handleSubmit} className="w-full mt-4 space-y-4">
          <input
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Nombre"
            required
          />
          <input
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Apellido"
            required
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Contraseña"
            required
          />
          <button
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-3 rounded-lg w-full font-medium transition-colors"
          >
            {loading ? 'Creando...' : 'Registrarse'}
          </button>
        </form>
        <Link href="/login" className="text-blue-600 hover:text-blue-700 mt-6 text-center w-full block">
          ¿Ya tienes cuenta? Inicia sesión
        </Link>
      </div>
    </div>
  );
}