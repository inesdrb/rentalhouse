'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  nom: Yup.string()
    .required('Le nom est obligatoire')
    .min(5, 'Le nom doit contenir au moins 5 caractères'),
  cin: Yup.string()
    .required('Le CIN est obligatoire')
    .matches(/^\d{8}$/, 'Le CIN doit contenir exactement 8 chiffres'),
  email: Yup.string()
    .required("L'email est obligatoire")
    .email('Email invalide'),
  motDePasse: Yup.string()
    .required('Le mot de passe est obligatoire')
    .min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
  confirmationMotDePasse: Yup.string()
    .required('Veuillez confirmer votre mot de passe')
    .oneOf([Yup.ref('motDePasse')], 'Les mots de passe ne correspondent pas'),
  conditions: Yup.bool()
    .oneOf([true], 'Vous devez accepter les conditions'),
});

export default function InscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Données du formulaire :', data);
    alert('Inscription réussie !');
    reset(); // Réinitialise le formulaire après envoi
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-secondary">Inscription</h2>

        {/* Nom */}
        <div>
          <label className="block text-sm text-secondary">Nom*</label>
          <input
            type="text"
            {...register('nom')}
            className={`w-full p-2 border ${
              errors.nom ? 'border-red-500' : 'border-secondary'
            } rounded`}
            placeholder="Votre nom"
          />
          {errors.nom && <p className="text-red-500 text-sm">{errors.nom.message}</p>}
        </div>

        {/* CIN */}
        <div>
          <label className="block text-sm text-sencondary">CIN*</label>
          <input
            type="text"
            {...register('cin')}
            className={`w-full p-2 border ${
              errors.cin ? 'border-red-500' : 'border-sencondary'
            } rounded`}
            placeholder="12345678"
          />
          {errors.cin && <p className="text-red-500 text-sm">{errors.cin.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-secondary">Email*</label>
          <input
            type="email"
            {...register('email')}
            className={`w-full p-2 border ${
              errors.email ? 'border-red-500' : 'border-secondary'
            } rounded`}
            placeholder="exemple@email.com"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Mot de passe */}
        <div>
          <label className="block text-sm text-secondary">Mot de passe*</label>
          <input
            type="password"
            {...register('motDePasse')}
            className={`w-full p-2 border ${
              errors.motDePasse ? 'border-red-500' : 'border-secondary'
            } rounded`}
            placeholder="******"
          />
          {errors.motDePasse && <p className="text-red-500 text-sm">{errors.motDePasse.message}</p>}
        </div>

        {/* Confirmation mot de passe */}
        <div>
          <label className="block text-sm text-secondary">Confirmation du mot de passe*</label>
          <input
            type="password"
            {...register('confirmationMotDePasse')}
            className={`w-full p-2 border ${
              errors.confirmationMotDePasse ? 'border-red-500' : 'border-secondary'
            } rounded`}
            placeholder="******"
          />
          {errors.confirmationMotDePasse && (
            <p className="text-red-500 text-sm">{errors.confirmationMotDePasse.message}</p>
          )}
        </div>

        {/* Conditions */}
        <div className="flex items-center gap-2">
          <input type="checkbox" {...register('conditions')} />
          <label className="text-sm text-secondary">
            J’accepte les <a href="#" className="underline">conditions d’utilisation</a>
          </label>
        </div>
        {errors.conditions && <p className="text-red-500 text-sm">{errors.conditions.message}</p>}

        {/* Bouton */}
        <button
          type="submit"
          className="w-full bg-secondary text-primary py-2 rounded hover:brightness-110 hover:bg-trisary transition"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}
