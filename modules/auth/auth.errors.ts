export const mapAuthError = (code: string) => {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'This email is already registered';

    case 'auth/invalid-email':
      return 'Invalid email address';

    case 'auth/weak-password':
      return 'Password must be at least 6 characters';

    case 'auth/password-not-the-same':
      return 'Password must be the same';

    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Invalid email or password';

    case 'auth/too-many-requests':
      return 'Too many attempts. Try again later.';

    case 'auth/email-required':
      return 'Email is needed to fill.';

    default:
      return 'Something went wrong. Please try again.';
  }
};
