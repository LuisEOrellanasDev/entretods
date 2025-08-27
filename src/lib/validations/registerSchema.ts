import { z } from 'zod';

export const RegisterSchema = z.object({
  email: z.string().email('Email inválido'),
  firstName: z.string().min(1, 'Nombre es requerido').max(50, 'Nombre muy largo'),
  lastName: z.string().min(1, 'Apellido es requerido').max(50, 'Apellido muy largo'),
  password: z.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .max(100, 'Contraseña muy larga')
    .regex(/^(?=.*[a-z])/, 'Debe contener al menos una letra minúscula')
    .regex(/^(?=.*[A-Z])/, 'Debe contener al menos una letra mayúscula')
    .regex(/^(?=.*\d)/, 'Debe contener al menos un número')
    .regex(/^(?=.*[@$!%*?&])/, 'Debe contener al menos un carácter especial (@$!%*?&)'),
  phone: z.string().optional().refine((val) => {
    if (!val) return true;
    // Validar formato de teléfono colombiano básico
    return /^(\+57|57)?[1-9]\d{9}$/.test(val.replace(/\s/g, ''));
  }, 'Formato de teléfono inválido'),
});