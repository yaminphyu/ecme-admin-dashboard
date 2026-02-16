import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from '@/services/firebase';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const loginWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};

export const loginWithGithub = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const forgotPassword = async (email: string) => {
  if (!email) throw new Error('auth/email-required');
  return sendPasswordResetEmail(auth, email);
};

export const logout = () => signOut(auth);
