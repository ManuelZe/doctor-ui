
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export async function fetchWithAuth(url: string, options?: RequestInit) {
  const cookieStore = await cookies()
  const token = (await cookies()).get('access_token')?.value

  if (!token) {
    redirect('/connexion')
  }

  const res = await fetch(url, {
    ...options,
    headers: {
      ...(options?.headers || {}),
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  })

  // Si le token est invalide/expiré
  if (res.status === 401 || res.status === 403) {
    // Supprimer tous les cookies

    redirect('/connexion')
  }

  return res
}