
export default function Incidents() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
                {/* Header */}
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
                    🛠️ Ticket d'Incident - Maintenance des Chambres
                </h2>

                <form className="space-y-6">
                    {/* Room Number */}
                    <div>
                        <label htmlFor="roomNumber" className="block text-sm mb-2 font-medium text-gray-700">
                            Numéro de la Chambre
                        </label>
                        <input
                            id="roomNumber"
                            name="roomNumber"
                            type="number"
                            placeholder="101"
                            className="mt-1 w-full p-3 rounded-md border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 shadow-lg"
                        />
                    </div>

                    {/* Problem Type */}
                    <div>
                        <label htmlFor="problemType" className="block text-sm mb-2 font-medium text-gray-700">
                            Type de Problème
                        </label>
                        <select
                            id="problemType"
                            name="problemType"
                            className="mt-1 w-full rounded-md p-3 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 shadow-lg"
                        >
                            <option value="plumbing">Plomberie</option>
                            <option value="electricity">Électricité</option>
                            <option value="furniture">Mobilier</option>
                            <option value="cleaning">Propreté</option>
                            <option value="heating">Chauffage</option>
                            <option value="ventilation">Ventilation</option>
                        </select>
                    </div>

                    {/* Problem Description */}
                    <div>
                        <label htmlFor="problemDescription" className="block text-sm mb-2 font-medium text-gray-700">
                            Description du Problème
                        </label>
                        <textarea
                            id="problemDescription"
                            name="problemDescription"
                            placeholder="Veuillez fournir une description détaillée du problème."
                            className="mt-1 w-full rounded-md p-3 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 shadow-lg"
                        ></textarea>
                    </div>

                    {/* Priority */}
                    <div>
                        <label htmlFor="priority" className="block text-sm mb-2 font-medium text-gray-700">
                            Priorité
                        </label>
                        <select
                            id="priority"
                            name="priority"
                            className="mt-1 w-full rounded-md p-3 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 shadow-lg"
                        >
                            <option value="low">Faible</option>
                            <option value="medium">Moyenne</option>
                            <option value="high">Urgent</option>
                        </select>
                    </div>

                    {/* File Attachments */}
                    <div>
                        <label htmlFor="attachments" className="block text-sm mb-2 font-medium text-gray-700">
                            Pièces Jointes
                        </label>
                        <input
                            id="attachments"
                            name="attachments"
                            type="file"
                            className="mt-1 block w-full text-sm p-3 text-gray-500 file:py-2 file:px-4 file:border-gray-300 file:rounded-md file:bg-gray-50 hover:file:bg-gray-100 shadow-lg"
                        />
                    </div>

                    {/* Contact Information */}
                    <div>
                        <label htmlFor="contact" className="block text-sm mb-2 font-medium text-gray-700">
                            Informations de Contact
                        </label>
                        <input
                            id="contact"
                            name="contact"
                            type="email"
                            placeholder="Votre email"
                            className="mt-1 w-full rounded-md p-3 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 shadow-lg"
                        />
                    </div>

                    {/* Incident Status */}
                    <div>
                        <label htmlFor="status" className="block text-sm mb-2 font-medium text-gray-700">
                            Statut de l'Incident
                        </label>
                        <select
                            id="status"
                            name="status"
                            className="mt-1 w-full rounded-md p-3 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 shadow-lg"
                        >
                            <option value="open">Ouvert</option>
                            <option value="in-progress">En Cours</option>
                            <option value="resolved">Résolu</option>
                        </select>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-4 mt-6">
                        <button
                            type="button"
                            className="rounded-md px-4 py-2 text-sm mb-2 font-medium text-gray-700 bg-gray-200 hover:bg-gray-300"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        >
                            Soumettre
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
