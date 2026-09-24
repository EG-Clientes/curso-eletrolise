"use client";

import React from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Award, 
  GraduationCap, 
  Building2, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react";

export default function SobreEspecialista() {
  return (
    <section id="especialista" className="py-16 sm:py-24 bg-[#F4F8F5] relative overflow-hidden border-t border-emerald-950/5">
      {/* Detalhe de fundo */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LADO ESQUERDO: Foto Imponente com Selos de NY */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Moldura com gradiente de luxo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-800/20 via-amber-300/20 to-emerald-700/20 rounded-3xl blur-md -z-10" />

              <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-950/10 shadow-2xl bg-white aspect-[4/5]">
                <Image
                  src="/images/dilene-autoridade.png"
                  alt="Dilene Araújo - Especialista e Mentora em Eletrólise"
                  fill
                  className="object-cover object-top"
                  onError={(e) => {
                    // Fallback caso a foto 5 ainda esteja sendo gerada
                    e.currentTarget.src = "/images/hero-dilene.png";
                  }}
                />

                {/* Tarja inferior elegante */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/70 to-transparent p-6 text-white text-left">
                  <p className="text-xs uppercase tracking-widest text-amber-300 font-bold">
                    Referência no Método
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    Dilene Araújo
                  </h3>
                </div>
              </div>

              {/* Selo Flutuante: Formação Americana */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-emerald-900/15 rounded-2xl p-4 shadow-xl flex items-center gap-3.5 max-w-[270px]">
                <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">Nova York, EUA</p>
                  <p className="text-xs font-bold text-slate-900 leading-tight">Long Island School of Electrolysis</p>
                </div>
              </div>

            </div>
          </div>

          {/* LADO DIREITO: A História e a Autoridade da Mentora */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/10 border border-emerald-800/20 text-emerald-950 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>Sua Mentora & Guia</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Aprenda com quem buscou a técnica na fonte e{" "}
              <span className="font-serif italic font-medium text-emerald-800">
                vive a prática clínica real.
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
              <p>
                <strong>Dilene Araújo</strong> é especialista em depilação definitiva por eletrólise, com formação técnica internacional pela prestigiada <strong>Long Island School of Electrolysis Inc. em Nova York</strong>. Os Estados Unidos são o berço do desenvolvimento do método.
              </p>
              <p>
                No comando de sua clínica própria em São Paulo (Raiz Eletrólise), Dilene atende diariamente clientes que já haviam passado por anos de tratamentos a laser sem sucesso — especialmente em <strong>pelos brancos, loiros, alterações hormonais na menopausa e foliculite severa</strong>.
              </p>
              <p className="font-medium text-emerald-950">
                Esta especialização foi criada para transmitir todo o rigor teórico, anatomia folicular e parametrização das correntes.
              </p>
            </div>

            {/* 3 Pilares de Confiança em Destaque */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-8 pt-8 border-t border-emerald-950/10">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Origem nos EUA</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Metodologia com padrão internacional de NY.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-emerald-700 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Clínica Ativa</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Experiência real com clientes de todos os fototipos.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-emerald-700 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Método Autoral</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Claro e compreensível.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}