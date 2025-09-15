import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { fetchWithAuth } from '@/libs/auth';


export async function GetSoldeActuel(doctor_id:number) {

    const res = await fetchWithAuth(`http://65.21.73.170:1000/doctor_com/actual_solde/${doctor_id}`)
    const data = await res.json()

    if (!data.montant_total) {
      const message = data.message
    }
    // console.log(data)
    
    const commission_non_facturee = data.commission_non_facturee
    const list_patient_name = data.list_patient_name
    const montant_prescription = data.montant_prescription
    const montant_realisation = data.montant_realisation
    const montant_total = data.montant_total
    const nombre_patient = data.nombre_patient
    const message = data.message
    

    return {
      list_patient_name: list_patient_name,
      montant_prescription : montant_prescription,
      montant_realisation : montant_realisation,
      montant_total : montant_total,
      nombre_patient : nombre_patient,
      message : message,
    }
}