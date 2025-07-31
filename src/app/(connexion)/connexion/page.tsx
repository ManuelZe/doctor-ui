
import { motion, AnimatePresence } from "framer-motion";
import { cookies } from 'next/headers'
import Link from "next/link";
import { UserPen, KeySquareIcon } from "lucide-react";

export default async function ConnexionPage() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('access_token');
  const username = cookieStore.get('username');

  return (
        <form action="/api/login" method="POST">
          <div className="mb-5 flex items-center justify-between gap-2">
            <UserPen className="text-gray-400" />
            <input
              type="text"
              name="username"
              defaultValue={username ? username.value : ''}
              autoComplete="username"
              autoFocus
              placeholder="Entrez votre Username"
              className="block w-full placeholder:text-xs items-center-safe rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              required
            />
          </div>

          <div className="flex items-center justify-between gap-2">
            <KeySquareIcon className="text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Entrez votre Password"
              className="block w-full placeholder:text-xs items-center-safe rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              required
            />
          </div>

          <Link
            href="/email"
            className="text-right text-blue-600 font-serif text-xs"
          >
            Mot de passe oublié ?
          </Link>

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              name="remember_me"
              value="true"
              className="mr-2"
            />
            <label className="font-serif text-sm font-bold text-black">Se Souvenir de moi</label>
          </div>

          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-indigo-600 px-3.5 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Envoyer
          </button>
        </form>
  );
}
