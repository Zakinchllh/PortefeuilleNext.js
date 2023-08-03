"use client" // this is a client component
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

const useClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

const ContactSection = () => {
  const isClient = useClient(); // Utilisation du hook personnalisé pour détecter le rendu côté client
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ajouter le code pour gérer la soumission du formulaire ici, comme l'envoi des données à votre serveur backend ou à un service de messagerie électronique.
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  // Rendre le composant uniquement côté client
  if (!isClient) {
    return null;
  }
  return (
    <section id="contact" className="bg-gray-100 py-10 mt-2">
      <div className="container mx-auto px-4">
        <h1 className="text-center font-bold text-4xl mb-8">Contactez-moi</h1>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Informations de contact</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Nom: Ghanem Zakaria</li>
              <li>Email: Zakaria@gmail.com</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Envoyez-moi un message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Nom:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-teal-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-teal-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-teal-500"
                />
              </div>
              <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
