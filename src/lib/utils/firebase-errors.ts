export function getFirebaseErrorMessage(errorCode: string): string {
  const errorMessages: Record<string, string> = {
    'auth/invalid-credential': 'Las credenciales proporcionadas son incorrectas. Verifica tu email y contraseña.',
    'auth/user-not-found': 'No existe una cuenta con este email. ¿Necesitas registrarte?',
    'auth/wrong-password': 'La contraseña es incorrecta. Inténtalo de nuevo.',
    'auth/email-already-in-use': 'Ya existe una cuenta con este email. ¿Quieres iniciar sesión?',
    'auth/invalid-email': 'El formato del email no es válido.',
    'auth/operation-not-allowed': 'Esta operación no está permitida. Contacta al soporte.',
    'auth/weak-password': 'La contraseña es muy débil. Debe tener al menos 6 caracteres.',
    'auth/too-many-requests': 'Demasiados intentos fallidos. Espera un momento antes de intentar de nuevo.',
    'auth/network-request-failed': 'Error de conexión. Verifica tu conexión a internet.',
    'auth/invalid-verification-code': 'El código de verificación es inválido.',
    'auth/invalid-verification-id': 'El ID de verificación es inválido.',
    'auth/missing-verification-code': 'Falta el código de verificación.',
    'auth/missing-verification-id': 'Falta el ID de verificación.',
    'auth/credential-already-in-use': 'Esta credencial ya está asociada a otra cuenta.',
    'auth/invalid-phone-number': 'El número de teléfono no es válido.',
    'auth/missing-phone-number': 'Falta el número de teléfono.',
    'auth/quota-exceeded': 'Se ha excedido la cuota de solicitudes. Inténtalo más tarde.',
    'auth/cancelled-popup-request': 'La ventana emergente fue cancelada.',
    'auth/popup-blocked': 'La ventana emergente fue bloqueada por el navegador.',
    'auth/popup-closed-by-user': 'La ventana emergente fue cerrada por el usuario.',
    'auth/unauthorized-domain': 'Este dominio no está autorizado para esta operación.',
    'auth/invalid-action-code': 'El código de acción es inválido o ha expirado.',
    'auth/expired-action-code': 'El código de acción ha expirado.',
    'auth/invalid-continue-uri': 'La URL de continuación no es válida.',
    'auth/missing-continue-uri': 'Falta la URL de continuación.',
    'auth/missing-ios-bundle-id': 'Falta el ID del bundle de iOS.',
    'auth/missing-android-pkg-name': 'Falta el nombre del paquete de Android.',
    'auth/unauthorized-continue-uri': 'La URL de continuación no está autorizada.',
    'auth/invalid-dynamic-link-domain': 'El dominio del enlace dinámico no es válido.',
    'auth/admin-restricted-operation': 'Esta operación está restringida a administradores.',
    'auth/argument-error': 'Error en los argumentos proporcionados.',
    'auth/invalid-api-key': 'La clave API no es válida.',
    'auth/invalid-user-token': 'El token del usuario no es válido.',
    'auth/invalid-tenant-id': 'El ID del tenant no es válido.',
    'auth/tenant-id-mismatch': 'El ID del tenant no coincide.',
    'auth/unsupported-tenant-operation': 'Esta operación no es compatible con tenants.',
    'auth/invalid-provider-id': 'El ID del proveedor no es válido.',
    'auth/missing-oauth-client-secret': 'Falta el secreto del cliente OAuth.',
    'auth/invalid-oauth-client-id': 'El ID del cliente OAuth no es válido.',
    'auth/invalid-oauth-responsetype': 'El tipo de respuesta OAuth no es válido.',
    'auth/invalid-oauth-scope': 'El alcance OAuth no es válido.',
    'auth/auth-domain-config-required': 'Se requiere configuración del dominio de autenticación.',
    'auth/operation-not-supported-in-this-environment': 'Esta operación no es compatible en este entorno.',
    'auth/timeout': 'La operación ha expirado. Inténtalo de nuevo.',
    'auth/missing-app-credential': 'Faltan las credenciales de la aplicación.',
    'auth/invalid-app-credential': 'Las credenciales de la aplicación no son válidas.',
    'auth/session-cookie-expired': 'La cookie de sesión ha expirado.',
    'auth/session-cookie-revoked': 'La cookie de sesión ha sido revocada.',
    'auth/invalid-login-credentials': 'Las credenciales de inicio de sesión no son válidas.',
    'auth/account-exists-with-different-credential': 'Ya existe una cuenta con un método de autenticación diferente.',
    'auth/requires-recent-login': 'Esta operación requiere una autenticación reciente. Inicia sesión de nuevo.',
    'auth/provider-already-linked': 'Este proveedor ya está vinculado a la cuenta.',
    'auth/no-such-provider': 'No existe tal proveedor para esta cuenta.',
    'auth/invalid-user-import': 'Los datos de importación del usuario no son válidos.',
    'auth/maximum-user-count-exceeded': 'Se ha excedido el número máximo de usuarios.',
    'auth/missing-uid': 'Falta el UID del usuario.',
    'auth/reserved-claims': 'Los claims proporcionados están reservados.',
    'auth/invalid-claims': 'Los claims personalizados no son válidos.',
    'auth/claims-too-large': 'Los claims personalizados son demasiado grandes.',
    'auth/id-token-expired': 'El token de ID ha expirado.',
    'auth/id-token-revoked': 'El token de ID ha sido revocado.',
    'auth/invalid-id-token': 'El token de ID no es válido.',
    'auth/user-token-expired': 'El token del usuario ha expirado.',
    'auth/token-expired': 'El token ha expirado.',
    'auth/app-deleted': 'La aplicación ha sido eliminada.',
    'auth/invalid-message-payload': 'Los datos del mensaje no son válidos.',
    'auth/invalid-sender': 'El remitente no es válido.',
    'auth/invalid-recipient-email': 'El email del destinatario no es válido.',
    'auth/missing-from': 'Falta el campo "from" en la configuración del email.',
    'auth/missing-message-payload': 'Faltan los datos del mensaje.',
    'auth/invalid-package-name': 'El nombre del paquete no es válido.',
    'userIsNotInDatabase': 'Tu cuenta de Firebase fue eliminada porque no existe en nuestra base de datos. Por favor regístrate nuevamente.'
  };

  return errorMessages[errorCode] || 'Ha ocurrido un error inesperado. Inténtalo de nuevo.';
}

export function parseFirebaseError(error: any): string {
  if (error?.code) {
    return getFirebaseErrorMessage(error.code);
  }

  if (error?.message) {
    if (error.message === 'USER_NOT_IN_DATABASE') {
      return getFirebaseErrorMessage('userIsNotInDatabase');
    }

    const codeMatch = error.message.match(/\(([^)]+)\)/);
    if (codeMatch && codeMatch[1]) {
      return getFirebaseErrorMessage(codeMatch[1]);
    }
  }

  return 'Ha ocurrido un error inesperado. Inténtalo de nuevo.';
}

export function isUserNotInDatabaseError(error: any): boolean {
  return error?.message === 'USER_NOT_IN_DATABASE';
}

export const userIsNotInDatabase = 'USER_NOT_IN_DATABASE';
