import React from 'react';
import { auth, provider } from '../firebase/FirebaseConfig';
import { signInWithPopup } from 'firebase/auth';

const Auth = ({ setIsAuth }) => {
  // ÜYE OLMA FONK.
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem('token', res.user.refreshToken);
        setIsAuth(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="auth">
      <h1>Chat Odası</h1>
      <p>Devam etmek için Giriş Yap</p>
      <button onClick={signIn}>
        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" />
        Google ile giriş yap
      </button>
    </div>
  );
};

export default Auth;
