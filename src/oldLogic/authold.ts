// import { SignJWT, jwtVerify, JWTPayload } from 'jose';
// import { cookies } from 'next/headers';
// import { prisma } from '../lib/prisma';
// import { getEnv } from '../lib/config/env';

// const env = getEnv();
// if (!env.JWT_SECRET) {
//   throw new Error('JWT_SECRET is not set');
// }
// const secret = new TextEncoder().encode(env.JWT_SECRET);

// export async function signSession(payload: JWTPayload, expiresIn: string = '7d') {
//   return await new SignJWT(payload)
//     .setProtectedHeader({ alg: 'HS256' })
//     .setIssuedAt()
//     .setExpirationTime(expiresIn)
//     .sign(secret);
// }

// export async function verifySession(token: string) {
//   const { payload } = await jwtVerify(token, secret);
//   return payload;
// }

// export async function auth() {
//   const cookieStore = await cookies();
//   const token = cookieStore.get('session')?.value;

//   if (!token) {
//     return null;
//   }

//   try {
//     const payload = await verifySession(token);

//     if (!payload.userId) {
//       return null;
//     }

//     // Obtener datos del usuario de la base de datos
//     const user = await prisma.user.findUnique({
//       where: { id: payload.userId as string },
//       select: {
//         id: true,
//         firstName: true,
//         lastName: true,
//         email: true,
//       }
//     });

//     if (!user) {
//       return null;
//     }

//     return {
//       user: {
//         ...user,
//         name: `${user.firstName} ${user.lastName}`.trim()
//       }
//     };
//   } catch (error) {
//     return null;
//   }
// }
