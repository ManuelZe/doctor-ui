"use client";

import { DollarSign } from "lucide-react";

interface SoldeActuelProps {
  list_patient_name: any
  montant_prescription: any
  montant_realisation: any
  montant_total: number
  nombre_patient: any
  message: any
}
import { 
  BadgeDollarSign
  
} from 'lucide-react';

export function SoldeActuel({ list_patient_name, montant_prescription, montant_realisation, montant_total, nombre_patient, message, ...props }: SoldeActuelProps) {
  return (
    <div className="grid grid-cols-2 gap-2 bg-blue-100/50 aspect-video rounded-xl text-center pb-2">
      <div className="col-span-2 col-start-1 pl-4 pt-4">
        <h1 className="text-l tracking-tight text-balance text-left font-semibold ">Solde Principal</h1>
        <h3 className="text-xs text-left font-ligth ">(Du 21 du mois passé au 20 de ce mois)</h3>
      </div>
      <div className="justify-center-safe justify-items-center">
        <h1 className="scroll-m-20 text-xl font-bold tracking-tight text-balance">
              {montant_total ? Number(montant_total).toLocaleString('fr-FR') + ' FCFA' : '0 FCFA'}
        </h1>
      </div>
       <div className="flex items-center justify-center-safe ">
        <div className="flex items-center justify-center rounded-lg w-12 h-12 bg-blue-600">
          <BadgeDollarSign className="size-8 text-blue-100 "></BadgeDollarSign>
        </div>
      </div>
    </div>
    
  );
}