/**
 * Utilidades para manejo de datos de usuario
 */

export interface UserDisplayData {
  firstName: string;
  lastName: string;
  email: string;
}

/**
 * Obtiene el nombre completo del usuario o su email como fallback
 */
export const getDisplayName = (user: UserDisplayData): string => {
  const fullName = `${user.firstName} ${user.lastName}`.trim();
  return fullName || user.email;
};

/**
 * Obtiene las iniciales del usuario para avatares
 */
export const getUserInitials = (user: UserDisplayData): string => {
  const fullName = getDisplayName(user);
  const names = fullName.split(' ');

  if (names.length >= 2) {
    return `${names[0].charAt(0)}${names[1].charAt(0)}`.toUpperCase();
  }

  return fullName.charAt(0).toUpperCase();
};

/**
 * Formatea el nombre del usuario con indicador si es el usuario actual
 */
export const getDisplayNameWithIndicator = (
  user: UserDisplayData,
  currentUserId: string,
  userId: string
): string => {
  const name = getDisplayName(user);
  return userId === currentUserId ? `${name} (Tú)` : name;
};
