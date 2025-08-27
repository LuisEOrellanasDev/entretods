// 'use server';

// import bcrypt from 'bcryptjs';
// import { redirect } from 'next/navigation';
// import { prisma } from '../../../lib/prisma';
// import { RegisterSchema } from '../../../lib/validations/registerSchema';

// export async function registerAction(prevState: any, formData: FormData) {
//   const rawData = {
//     email: formData.get('email') as string,
//     firstName: formData.get('firstName') as string,
//     lastName: formData.get('lastName') as string,
//     password: formData.get('password') as string,
//     phone: formData.get('phone') as string,
//   };

//   const parsed = RegisterSchema.safeParse(rawData);
//   if (!parsed.success) {
//     return { error: 'Datos inválidos' };
//   }

//   const { email, firstName, lastName, password, phone } = parsed.data;

//   const existing = await prisma.user.findUnique({ where: { email } });
//   if (existing) {
//     return { error: 'El email ya está registrado' };
//   }

//   try {
//     const hashed = await bcrypt.hash(password, 10);

//     await prisma.user.create({
//       data: {
//         email,
//         firstName,
//         lastName,
//         password: hashed,
//         phone: phone || undefined,
//       },
//     });
//   } catch {
//     return { error: 'Error del servidor' };
//   }

//   redirect('/login');
// }
