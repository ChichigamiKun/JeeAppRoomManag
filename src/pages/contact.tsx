import { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import Navbar from '../components/Navbar';

export default function ContactPage() {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    companyCode: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch('/api/profile');
      const data = await response.json();
      setProfile(data);
    };
    fetchProfile();
  }, []);

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
  };

  const handleSave = () => {
    console.log('Données modifiées', profile);
    setIsEditable(false);
  };

  return (

    <div className="isolate bg-[#1a1a2e] text-[#eaeaea] px-6 py-24 sm:py-30 lg:px-10 rounded-2xl">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-5xl font-semibold tracking-tight text-[#ebecec] sm:text-6xl">
          Contact en cas d'urgence
        </h2>
        <p className="mt-4 text-lg text-[#c1c1c1]">
          Votre message sera envoyé aux parties concernées. <br /> Merci pour votre confiance
        </p>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handleEditToggle}
          className="inline-block bg-[#47e8be] text-[#1a1a2e] font-semibold py-3 px-8 rounded-md hover:bg-[#228369] focus:outline-none focus:ring-2 focus:ring-[#228369] focus:ring-offset-2"
        >
          {isEditable ? 'Annuler la modification' : 'Modifier'}
        </button>
      </div>

      <form action="#" method="POST" className="mx-auto mt-16 max-w-5xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-lg font-semibold text-[#c1c1c1]">
              Nom
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                value={profile.firstName}
                autoComplete="given-name"
                readOnly={!isEditable}
                className={`w-full p-3 pl-12 rounded-[10px] border border-[#333737] focus:border-[#47e8be] focus:outline-none focus:ring focus:ring-[#228369] text-[#ebecec] bg-[#1a1a2e] ${!isEditable ? 'bg-[#333737]' : ''}`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="last-name" className="block text-lg font-semibold text-[#c1c1c1]">
              Prénom
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                value={profile.lastName}
                autoComplete="family-name"
                readOnly={!isEditable}
                className={`w-full p-3 pl-12 rounded-[10px] border border-[#333737] focus:border-[#47e8be] focus:outline-none focus:ring focus:ring-[#228369] text-[#ebecec] bg-[#1a1a2e] ${!isEditable ? 'bg-[#333737]' : ''}`}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-lg font-semibold text-[#c1c1c1]">
              Code Appogé
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                value={profile.companyCode}
                autoComplete="organization"
                readOnly={!isEditable}
                className={`w-full p-3 pl-12 rounded-[10px] border border-[#333737] focus:border-[#47e8be] focus:outline-none focus:ring focus:ring-[#228369] text-[#ebecec] bg-[#1a1a2e] ${!isEditable ? 'bg-[#333737]' : ''}`}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-lg font-semibold text-[#c1c1c1]">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                value={profile.email}
                autoComplete="email"
                readOnly={!isEditable}
                className={`w-full p-3 pl-12 rounded-[10px] border border-[#333737] focus:border-[#47e8be] focus:outline-none focus:ring focus:ring-[#228369] text-[#ebecec] bg-[#1a1a2e] ${!isEditable ? 'bg-[#333737]' : ''}`}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-lg font-semibold text-[#c1c1c1]">
              Numéro de téléphone
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-[#1a1a2e] border border-[#333737]">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className={`col-start-1 row-start-1 w-full appearance-none rounded-md py-3 pl-4 pr-8 text-xl text-[#ebecec] bg-[#1a1a2e] border-[#333737] focus:outline-none focus:ring-[#47e8be] sm:text-lg ${!isEditable ? 'bg-[#333737]' : ''}`}
                    disabled={!isEditable}
                  >
                    <option>MA</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-[#c1c1c1] sm:size-4"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  value={profile.phoneNumber}
                  placeholder="123-456-7890"
                  readOnly={!isEditable}
                  className={`block min-w-0 grow py-2.5 pl-3 pr-4 shadow-lg text-xl text-[#ebecec] placeholder:text-[#c1c1c1] focus:outline-none sm:text-lg ${!isEditable ? 'bg-[#333737]' : ''}`}
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-lg font-semibold text-[#c1c1c1]">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={6}
                value={profile.message}
                readOnly={!isEditable}
                className={`w-full p-3 pl-12 rounded-[10px] border border-[#333737] focus:border-[#47e8be] focus:outline-none focus:ring focus:ring-[#228369] text-[#ebecec] bg-[#1a1a2e] ${!isEditable ? 'bg-[#333737]' : ''}`}
              />
            </div>
          </div>
        </div>

        {isEditable && (
          <div className="mt-10">
            <button
              type="button"
              onClick={handleSave}
              className="block w-full rounded-md shadow-lg bg-[#47e8be] px-5 py-4 text-center text-xl font-semibold text-[#1a1a2e] hover:bg-[#228369] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#228369]"
            >
              Sauvegarder
            </button>
          </div>
        )}
      </form>
    </div>

  );
}
