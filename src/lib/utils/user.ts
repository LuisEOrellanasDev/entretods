export interface UserDisplayData {
  firstName: string;
  lastName: string;
  email: string;
}

export const getDisplayName = (user: UserDisplayData): string => {
  const fullName = `${user.firstName} ${user.lastName}`.trim();
  return fullName || user.email;
};

export const getUserInitials = (user: UserDisplayData): string => {
  const fullName = getDisplayName(user);
  const names = fullName.split(' ');

  if (names.length >= 2) {
    return `${names[0].charAt(0)}${names[1].charAt(0)}`.toUpperCase();
  }

  return fullName.charAt(0).toUpperCase();
};

export const getDisplayNameWithIndicator = (
  user: UserDisplayData,
  currentUserId: string,
  userId: string
): string => {
  const name = getDisplayName(user);
  return userId === currentUserId ? `${name} (Tú)` : name;
};
