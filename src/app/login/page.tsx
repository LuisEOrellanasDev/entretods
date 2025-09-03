'use client';

import { useState } from 'react';
import { auth } from '@/lib/firebase/client';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createSessionAction } from '@/app/login/_actions/createSesion';
import { parseFirebaseError, userIsNotInDatabase } from '@/lib/utils/firebase-errors';
import { useToast } from '@/components/providers/ToastProvider';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);

      const idToken = await cred.user.getIdToken();

      await createSessionAction(idToken);

      addToast({
        type: 'success',
        title: 'Inicio de sesión exitoso',
        message: 'Bienvenido de vuelta. Redirigiendo al dashboard...'
      });

      router.replace('/dashboard');
    } catch (err: any) {
      if (err === userIsNotInDatabase) {
        addToast({
          type: 'warning',
          title: 'Usuario no registrado',
          message: 'Tu cuenta de Firebase fue eliminada porque no existe en nuestra base de datos. Por favor regístrate nuevamente.'
        });

        setTimeout(() => {
          router.push('/register');
        }, 3000);
      } else {
        const errorMessage = parseFirebaseError(err);
        addToast({
          type: 'error',
          title: 'Error al iniciar sesión',
          message: errorMessage
        });
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-100 px-4 py-8">
      <div className="flex flex-col items-start justify-start w-full max-w-md bg-white rounded-xl shadow-lg p-6 mx-4">
        <h1 className="text-2xl font-bold mb-2">Iniciar sesión</h1>

        <form onSubmit={handleSubmit} className="w-full mt-4 space-y-4">
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
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        <Link href="/register" className="text-blue-600 hover:text-blue-700 mt-6 text-center w-full block">
          ¿No tienes cuenta? Regístrate
        </Link>
      </div>
    </div>
  );
}