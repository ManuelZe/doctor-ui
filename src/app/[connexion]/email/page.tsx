"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function EmailPage() {

  const [federation_id, setMatricule] = useState("");
  const [clicked, setClicked] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const router = useRouter();

  const envoyerMatricule = async () => {
    setClicked(true);
    try {
      const response = await fetch("http://65.21.73.170:7600/users/send_email/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ federation_id }),
      });

      const data = await response.json();
      console.log(data);

      if (data.Username){
        setAnimateOut(true); // délenche animation sortante
        setTimeout(() => {
          router.push(`/connexion/connexion`);
        }, 500);
      }

      } catch (error) {
      console.error("Error:", error);
    } 

    

  };

  return (
    <AnimatePresence>
      {!animateOut && (
        <motion.div
          key="connexion"
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.5 }}>
        <div>
            <label htmlFor="email" className="font-serif sm:text-xs md:text-[16px] lg:text-xl xl:text-xl">Matricule</label>
            <div className="flex items-center justify-between gap-2">
              <input type="text" value={federation_id} placeholder="Entrez votre matricule"
              className="block w-3/4 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 placeholder:text-[12px] placeholder:md:text-[14px] focus:outline-2  focus:outline-indigo-600"
              onChange={(e) => setMatricule(e.target.value)} />

              <button 
              type="button"
              onClick={envoyerMatricule}
              className="rounded-md bg-indigo-600 px-3.5 py-2 text-m font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Envoyer
              </button>
            </div>

            <Link type="button" className="text-left  text-blue-600 font-serif text-xs"  rel="stylesheet" href="/connexion/connexion">
              Identfiants Reçus? Connectez-vous.
            </Link>
            <p className="text-[12px] md:text-[14px] mt-5 font-serif">Veuillez Renseigner votre matricule pour reçevoir vos accès. </p>
        </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
