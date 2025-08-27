// 'use server';

// import bcrypt from 'bcryptjs';
// import { redirect } from 'next/navigation';
// import { cookies } from 'next/headers';
// import { prisma } from '../../../lib/prisma';
// import { signSession } from '../../../lib/auth';
// import { LoginSchema } from '../../../lib/validations/loginSchema';
// import { logAuditEvent, AuditActions, AuditResources } from '../../../lib/utils/auditLog';

// export async function loginAction(prevState: any, formData: FormData) {
//   const rawData = {
//     email: formData.get('email') as string,
//     password: formData.get('password') as string,
//   };

//   const parsed = LoginSchema.safeParse(rawData);
//   if (!parsed.success) {
//     return { error: 'Datos inválidos' };
//   }

//   const { email, password } = parsed.data;

//   const user = await prisma.user.findUnique({ where: { email } });
//   if (!user) {
//     // Log failed login attempt
//     await logAuditEvent({
//       userId: 'anonymous',
//       action: AuditActions.LOGIN_FAILED,
//       resource: AuditResources.AUTH,
//       details: { email, reason: 'user_not_found' }
//     });
//     return { error: 'Credenciales inválidas' };
//   }

//   const validPassword = await bcrypt.compare(password, user.password);
//   if (!validPassword) {
//     // Log failed login attempt
//     await logAuditEvent({
//       userId: user.id,
//       action: AuditActions.LOGIN_FAILED,
//       resource: AuditResources.AUTH,
//       details: { email, reason: 'invalid_password' }
//     });
//     return { error: 'Credenciales inválidas' };
//   }

//   try {
//     const token = await signSession({
//       userId: user.id,
//       email: user.email,
//       name: user.firstName
//     });

//     const cookieStore = await cookies();
//     cookieStore.set({
//       name: 'session',
//       value: token,
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'lax',
//       path: '/',
//       maxAge: 60 * 60 * 24 * 7,
//     });

//     // Log successful login
//     await logAuditEvent({
//       userId: user.id,
//       action: AuditActions.LOGIN_SUCCESS,
//       resource: AuditResources.AUTH,
//       details: { email }
//     });
//   } catch {
//     return { error: 'Error del servidor' };
//   }

//   redirect('/dashboard');
// }
