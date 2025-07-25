"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ConnexionPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember_me, setRemember_me] = useState("");
  const [animateOut, setAnimateOut] = useState(false);
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const envoyerIdentifiants = async () => {
    setClicked(true);
    const payload = {
      username : username,
      password : password,
      remember_me : remember_me,
    }
    try {
      const response = await fetch("http://65.21.73.170:7600/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log(data);

      // if (data.username){
      //   router.push(`/confirmation?user=${data.username}`);
      // }

      } catch (error) {
      console.error("Error:", error);
    } 

    

  };

  return (
      <AnimatePresence>
      {!animateOut && (
        <motion.div
          key="connexion"
          initial={{ x: 300, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}>
        <div>
            <label htmlFor="email" className="mb-2 font-serif text-xs text-black">Username :</label>
            <div className="mb-5 flex items-center justify-between gap-2">
              <input type="text" value={username} placeholder="Entrez votre Username"
              className="block w-full placeholder:text-xs items-center-safe rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2  focus:outline-indigo-600"
              onChange={(e) => setUsername(e.target.value)} />
            </div>

            <label htmlFor="email" className="mb-2 font-serif text-xs text-black">Password :</label>
            <div className="flex items-center justify-between gap-2">
              <input type="password" value={password} placeholder="Entrez votre Password"
              className="block w-full placeholder:text-xs items-center-safe rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2  focus:outline-indigo-600"
              onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Link type="button" className="text-right  text-blue-600 font-serif text-xs"  rel="stylesheet" href="/connexion/email">
              Mot de passe oublié ?
            </Link>

            <div className="flex items-center mt-4">
              <input 
                type="checkbox" 
                value={remember_me} 
                onChange={(e) => setRemember_me(e.target.value)} 
                className="mr-2"
              />
              <label className="font-serif text-sm font-bold text-black">Remember me</label>
            </div>

            <button 
              type="button"
              onClick={envoyerIdentifiants}
              className="mt-5 w-full rounded-md bg-indigo-600 px-3.5 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Envoyer
            </button>
        </div>
      </motion.div>
      )}
    </AnimatePresence>
  );
}
