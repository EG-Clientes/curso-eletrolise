"use client";

import React from "react";
import Image from "next/image";
import { Lock, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071F18] text-white py-8 sm:py-10 border-t border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Linha Principal Compacta */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-emerald-900/30">
          
          {/* Logo + Marca */}
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <Image
                src="/images/logo.png"
                alt="Raiz Eletrólise - Dilene Araújo"
                width={52}
                height={52}
                className="h-12 w-12 object-contain"
              />
            </div>
            <div className="text-left">
              <span className="font-bold text-lg tracking-tight text-white leading-tight block">
                Dilene Araújo
              </span>
              <span className="text-[11px] uppercase tracking-wider text-amber-300 font-semibold">
                Especialização em Eletrólise
              </span>
            </div>
          </div>

          {/* Endereço e Contato Rápidos em uma linha */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-emerald-200/80">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>São Bernardo do Campo — SP</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
              <Lock className="w-3 h-3 text-amber-300 shrink-0" />
              <span>Checkout Oficial Hotmart</span>
            </span>
          </div>

          {/* Links Rápidos Âncora */}
          <div className="flex items-center gap-5 text-xs text-emerald-100/70">
            <a href="#diferencial" className="hover:text-amber-200 transition-colors">Diferencial</a>
            <a href="#metodo" className="hover:text-amber-200 transition-colors">Conteúdo</a>
            <a href="#mentoria" className="hover:text-amber-200 transition-colors">Mentoria</a>
            <a href="#faq" className="hover:text-amber-200 transition-colors">Dúvidas</a>
            <a href="#inscricao" className="text-amber-300 font-bold hover:underline">Matrícula</a>
          </div>

        </div>

        {/* Linha Final: Avisos Legais e Transparência Literais do Print 06 */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-emerald-200/50 text-center sm:text-left">
          <p>
            Formação teórica online. A prática profissional depende das normas da sua região. Equipamento não incluso. Investimento: R$ 2.510,00.
          </p>
          <p className="shrink-0">
            Conteúdo autoral © Dilene Araújo — todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}