import React, { useState } from 'react';
import axios from 'axios';

// Types pour LoginRequest et AuthResponse
interface LoginRequest {
  email: string;
  password: string;
}


export default function LoginPage() {
  // Déclarations des états
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    

    const loginData: LoginRequest = { email: email, password: password };

    try {
      const response = await axios.post('http://localhost:8081/api/auth/login',
        loginData
      );
      localStorage.setItem('jwt', response.data.token);
      alert('Connexion réussie !');
      window.location.href = '/accueil'; // Redirection
    } catch (err: any) {
      if (err.response?.status === 401) {
        setError('Identifiants invalides');
      } else {
        setError('Une erreur inattendue est survenue');
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-white-950 to-blue-800 min-h-screen flex items-center">
      <img
        src='src/types/11.jpg'
        alt=""
        className="max w-3/6 h-screen"
      />
      <div className="max-w-l m-auto w-auto p-8 bg-slate-100 rounded-3xl shadow-[0_20px_30px_rgba(0,0,255,0.5)]">
        <img
          src='src/types/logoIR.jpeg'
          alt="logo"
          className="w-24 mb-8 mx-auto block rounded-full shadow-[0_10px_30px_rgba(0,0,180,0.7)]"
        />
        <h2 className="text-gray-800 text-center text-3xl font-extrabold mb-6">
          Bienvenue chez IRoom Services
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Champ Email */}
          <div>
            <label className="text-gray-600 text-sm font-medium block mb-2">
              Adresse Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-gray-800 text-base border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Entrez votre email"
            />
          </div>

          {/* Champ Mot de passe */}
          <div>
            <label className="text-gray-600 text-sm font-medium block mb-2">
              Mot de Passe
            </label>
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-gray-800 text-base border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Entrez votre mot de passe"
            />
          </div>

          {/* Bouton Connexion */}
          <button
            type="submit"
            className="w-full py-3 px-6 text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            Connexion
          </button>
        </form>

        {/* Affichage des erreurs */}
        {error && (
          <p className="text-red-500 text-sm text-center mt-4">{error}</p>
        )}

        {/* Lien vers l'inscription */}
        <p className="text-gray-600 text-sm text-center mt-6">
          Vous n'avez pas de compte ?{' '}
          <a
            href="#"
            className="text-blue-500 font-semibold hover:underline"
          >
            Inscrivez-vous
          </a>
        </p>
      </div>
    </div>
  );
}
