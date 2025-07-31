"use client";

import { DollarSign } from "lucide-react";

interface SoldeActuelProps {
  name: string
  doctorId: string
  federationId : string
}
import { 
  Users, 
  Calendar, 
  FileText, 
  TrendingUp, 
  Activity,
  Clock,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

export function SoldeActuel({ name, doctorId, federationId, ...props }: SoldeActuelProps) {
  return (
    <div className="bg-blue-100/50 aspect-video rounded-xl p-4 grid grid-cols-2 gap-4 text-center">
        <div>
            <h1 className="scroll-m-20 text-l font-extrabold tracking-tight text-balance">
                Taxing Laughter: The Joke Tax Chronicles
            </h1>
        </div>
        <div>
        <h1 className="scroll-m-20 text-m font-extrabold tracking-tight text-balance">
            couscous
        </h1>
        </div>
    </div>
  );
}