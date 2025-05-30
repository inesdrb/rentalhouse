'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const schema = Yup.object().shape({
  nom: Yup.string()
    .required('Nom est obligatoire')
    .min(4, 'Le nom doit contenir au moins 4 caractères'),
  email: Yup.string()
    .required("L'email est obligatoire")
    .email('Email invalide'),
  telephone: Yup.string()
    .required('Numéro de téléphone obligatoire')
    .matches(/^\d{8,}$/, 'Le numéro doit contenir au moins 8 chiffres'),
  message: Yup.string()
    .required('Message est obligatoire')
    .max(30, 'Le message ne doit pas dépasser 30 caractères'),
});

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Message envoyé :', data);
    alert('Message envoyé avec succès !');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Section formulaire */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded p-6 space-y-4"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-secondary">Contactez-nous</h2>

          {/* Nom */}
          <div>
            <label className="block text-sm font-medium text-secondary">Nom*</label>
            <input
              type="text"
              {...register('nom')}
              placeholder="Votre nom"
              className={`mt-1 w-full p-2 border ${errors.nom ? 'border-red-500' : 'bordersecondary'} rounded focus:outline-none focus:ring-2 focus:ring-secondary`}
            />
            {errors.nom && <p className="text-red-500 text-sm">{errors.nom.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-secondary">Email*</label>
            <input
              type="email"
              {...register('email')}
              placeholder="Votre email"
              className={`mt-1 w-full p-2 border ${errors.email ? 'border-red-500' : 'border-secondary'} rounded focus:outline-none focus:ring-2 focus:ring-secondary`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Téléphone */}
          <div>
            <label className="block text-sm font-medium text-secondary">Téléphone*</label>
            <input
              type="tel"
              {...register('telephone')}
              placeholder="Votre numéro"
              className={`mt-1 w-full p-2 border ${errors.telephone ? 'border-red-500' : 'border-secondary'} rounded focus:outline-none focus:ring-2 focus:ring-secondary`}
            />
            {errors.telephone && <p className="text-red-500 text-sm">{errors.telephone.message}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-secondary ">Message*</label>
            <textarea
              {...register('message')}
              placeholder="Votre message"
              rows={4}
              className={`mt-1 w-full p-2 border ${errors.message ? 'border-red-500' : 'border-secondary'} rounded focus:outline-none focus:ring-2 focus:ring-seconcary`}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          {/* Bouton */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-secondary text-white px-6 py-2 rounded hover:brightness-110 transition"
            >
              Envoyer
            </button>
          </div>
        </form>

        {/* Section info contact */}
        <div className="bg-primary shadow-md rounded p-6 space-y-6">
          <h3 className="text-xl font-bold mb-4 text-center text-secondary">Informations de contact</h3>

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-secondary mt-1" />
            <p>123 Rue Chabbia,  2243 Tozeur, Tunisie</p>
          </div>

          <div className="flex items-start gap-3">
            <FaPhoneAlt className="text-secondary mt-1" />
            <p>+21612345678</p>
          </div>

          <div className="flex items-start gap-3">
            <FaEnvelope className="text-secondary mt-1" />
            <p>contact@renthouse.fr</p>
          </div>

          <div>
            <Image
                    src="/images/image4.jpg"
                    alt="contact"
                    width={500}
                    height={500}
                    className="object-contain h-64 w-full transition-transform duration-300 hover:scale-105"
                    unoptimized
                  />
          </div>
        </div>
      </div>
    </div>
  );
}
