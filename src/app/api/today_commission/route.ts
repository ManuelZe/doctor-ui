import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { fetchWithAuth } from '@/libs/auth';


export async function TodayCommission(doctor_id:number) {

    const res = await fetchWithAuth(`http://65.21.73.170:7600/gnu_doctor/${doctor_id}/research`)
    const donnees = await res.json()

    if (!donnees.Data) {
      const message = donnees.message
      return {
        message: message}
    }
    
    console.log(donnees)
    
    const data = donnees.Data
    const commission = data.commission
    const data_patients = data.data_patients
    const number = donnees.number
    const message = donnees.message
    
    return {
      data: data,
      commission : commission,
      data_patients : data_patients,
      number : number,
      message : message,
    }
}