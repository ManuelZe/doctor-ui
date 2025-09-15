"use client";

import { DollarSign } from "lucide-react";

interface SoldeJourProps {
    data : any
    commission : number
    data_patients : any
    number : number
    message : any
}
import { 
  BadgeDollarSign
  
} from 'lucide-react';

export function SoldeJour({ data, commission, data_patients, number, message, ...props }: SoldeJourProps) {
  return (
    <div className="grid grid-cols-2 gap-2 bg-orange-100/50 aspect-video rounded-xl text-center pb-2">
      <div className="col-span-2 col-start-1 pl-4 pt-4">
        <h1 className="text-l tracking-tight text-balance text-left font-semibold ">Solde du jour</h1>
        <h3 className="text-xs text-left font-ligth ">(La totalité des commissions générées ce jour.)</h3>
      </div>
      <div className="justify-center-safe justify-items-center">
        <h1 className="scroll-m-20 text-xl font-bold tracking-tight text-balance">
              {data ? Number(data).toLocaleString('fr-FR') + ' FCFA' : '0 FCFA'}
        </h1>
      </div>
       <div className="flex items-center justify-center-safe ">
        <div className="flex items-center justify-center rounded-lg w-12 h-12 bg-orange-600">
          <BadgeDollarSign className="size-8 text-orange-100 "></BadgeDollarSign>
        </div>
      </div>
    </div>
    
  );
}