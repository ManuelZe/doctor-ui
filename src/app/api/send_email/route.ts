
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function POST(req: Request) {

    const formData = await req.formData();
    const federation_id = formData.get('federation_id');
    const response = await fetch('http://65.21.73.170:7600/users/send_email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ federation_id }),
    })

    const data = await response.json();
    console.log(data);

    (await cookies()).set('federation_id', federation_id as string, { httpOnly: true, path: '/' });
    if (data.Username){
        return redirect('/connexion')
    }
    else {
        return new Response('Unauthorized', { status: 401 }) // Return early if no token
    }
}