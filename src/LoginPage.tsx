export default function LoginPage() {
  return (
    <div className="bg-gradient-to-br from-blue-950 to-blue-800 min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full p-8 bg-slate-100 rounded-3xl shadow-[0_20px_30px_rgba(135,206,235,0.5)]">
        <img
          src="src/types/logoIR.jpeg"
          alt="logo"
          className="w-24 mb-8 mx-auto block rounded-full shadow-[0_10px_30px_rgba(0,0,180,0.7)]"
        />
        <h2 className="text-gray-800 text-center text-3xl font-extrabold mb-6">
          Bienvenue chez IRoom Services
        </h2>

        <form className="space-y-6">
          <div>
            <label className="text-gray-600 text-sm font-medium block mb-2">
              Adresse Email
            </label>
            <input
              type="text"
              name="username"
              required
              className="w-full text-gray-800 text-base border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Entrez votre email"
            />
          </div>

          <div>
            <label className="text-gray-600 text-sm font-medium block mb-2">
              Mot de Passe
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full text-gray-800 text-base border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Entrez votre mot de passe"
            />
          </div>

          <button
            className="w-full py-3 px-6 text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            <a href="/acceuille" className="w-full block text-center">
              Connexion
            </a>
          </button>

        </form>

        <p className="text-gray-600 text-sm text-center mt-6">
          Vous n'avez pas de compte ?{" "}
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
