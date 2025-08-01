
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function POST(req: Request) {
  const formData = await req.formData()
  const username = formData.get('username')
  const password = formData.get('password')
  const remember_me = formData.get('remember_me')

  const response = await fetch('http://65.21.73.170:7600/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, remember_me }),
  })

  const cookieStore = await cookies()

  const all = cookieStore.getAll()
  all.forEach(c => cookieStore.delete(c.name))

  const data = await response.json()
  console.log(data)

  if (!data.access_token){
    return new Response('Unauthorized', { status: 401 }) // Return early if no token
  }

  const token = data.access_token
  const matricule = data["data"]["username"]
  const doctor_id = data["data"]["doctor_id"]
  const email = data["data"]["email"]
  const name = data["data"]["first_name"]+ " "+ data["data"]["last_name"]

  cookieStore.set('access_token', token)
  cookieStore.set('username', matricule)
  cookieStore.set('doctor_id', doctor_id)
  cookieStore.set('email', email)
  cookieStore.set('name', name)

  redirect('/dashboard')
}