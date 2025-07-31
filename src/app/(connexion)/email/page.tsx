
import Link from "next/link";

export default function EmailPage() {

  return (
        <form action="/api/send_email" method="POST">
            <label htmlFor="email" className="font-serif sm:text-xs md:text-[16px] lg:text-xl xl:text-xl">Matricule</label>
            <div className="flex items-center justify-between gap-2">
              <input type="text"   placeholder="Entrez votre matricule"
              className="block w-3/4 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:text-[12px] placeholder:md:text-[14px] focus:outline-2  focus:outline-indigo-600"
              name="federation_id"
              required/>

              <button 
              type="submit"
              className="rounded-md bg-indigo-600 px-3.5 py-2 text-m font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Envoyer
              </button>
            </div>

            <Link className="text-left  text-blue-600 font-serif text-xs"  rel="stylesheet" href="/connexion">
              Identfiants Reçus? Connectez-vous.
            </Link>
            <p className="text-[12px] md:text-[14px] mt-5 font-serif">Veuillez Renseigner votre matricule pour reçevoir vos accès. </p>
        </form>
  );
}
