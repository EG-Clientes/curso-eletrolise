"use client";

import React from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  CalendarCheck, 
  Sparkles, 
  Clock 
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F2F7F4] via-[#FAF9F6] to-[#FAF9F6] pt-4 pb-14 sm:pt-8 sm:pb-20 lg:pt-14 lg:pb-24">
      {/* Luz ambiente suave de fundo */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-100/35 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tag exclusiva para Mobile: fica acima da foto */}
        <div className="flex lg:hidden justify-center mb-5 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/10 border border-emerald-800/15 text-emerald-900 text-xs font-bold tracking-wide uppercase shadow-xs text-center">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>Do conhecimento à segurança na prática profissional</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* FOTO DA MENTORA */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center w-full animate-slide-right">
            
            <div className="relative w-full max-w-md group">
              {/* Brilho sutil de contorno */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-800/25 via-amber-200/20 to-emerald-700/20 rounded-3xl blur-md -z-10" />
              
              {/* Card da Foto */}
              <div className="relative rounded-3xl overflow-hidden border border-emerald-950/15 shadow-2xl bg-white aspect-[4/5] w-full">
                <Image
                  src="/images/hero-dilene.png"
                  alt="Dilene Araújo - Especialista em Eletrólise"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Efeito Editorial idêntico à referência: Gradiente escuro e texto refinado sobre a foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-7 text-white">
                  <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/90 mb-1">
                    Especialista Internacional & Mentora
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-serif tracking-tight text-white leading-tight">
                    Dilene <span className="italic font-light text-amber-200">Araújo</span>
                  </h3>
                  <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs text-emerald-100 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Certificada pela Long Island School of Electrolysis (NY, EUA)</span>
                  </div>
                </div>

                {/* Selo Flutuante Discreto: FDA */}
                <div className="absolute top-4 right-4 bg-emerald-950/80 backdrop-blur-md border border-amber-300/30 rounded-xl px-3 py-1.5 shadow-lg flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-300" />
                  <span className="text-[11px] font-bold tracking-wider text-amber-100 uppercase">FDA Approved</span>
                </div>
              </div>

            </div>

          </div>

          {/* COPY EDITORIAL */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start text-left animate-slide-left">
            
            {/* Tag visível apenas no Desktop (já que no mobile ela está no topo) */}
            <div className="hidden lg:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/10 border border-emerald-800/15 text-emerald-900 text-xs sm:text-sm font-bold tracking-wide uppercase mb-5">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>Do conhecimento à segurança na prática profissional</span>
            </div>

            {/* Headline limpa, elegante, sem traços e com destaque verde */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-5">
              A especialização avançada que elimina os pelos na raiz: alcance com precisão{" "}
              <span className="font-serif italic font-medium text-emerald-800">
                onde o laser não atua.
              </span>
            </h1>

            {/* Subheadline com forte apelo aos pelos brancos/ruivos (dor real das profissionais) */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-7 max-w-2xl font-normal">
              Domine a única técnica reconhecida pelo FDA como <strong>100% definitiva</strong>. Aprenda 
              a ciência real das correntes, anatomia e biossegurança para tratar com precisão 
              <strong> pelos brancos, claros, ruivos e escuros</strong> em todos os fototipos.
            </p>

            {/* Micro-benefícios com ícones refinados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              <div className="flex items-center gap-2.5 text-slate-800 font-medium text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>20 Horas de Conteúdo Teórico Autoral</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-800 font-medium text-sm sm:text-base">
                <CalendarCheck className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>4 Encontros de Mentoria ao Vivo (Domingos)</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-800 font-medium text-sm sm:text-base">
                <Award className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>Certificado Digital de Conclusão</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-800 font-medium text-sm sm:text-base">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>Apoio Direto da Especialista</span>
              </div>
            </div>

            {/* Botão de Ação CTA com alta taxa de clique */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#inscricao"
                className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-lg font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-xl shadow-emerald-900/25 hover:shadow-emerald-900/40 active:scale-95 transition-all duration-300"
              >
                <span>Quero Me Especializar Agora</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#metodo"
                className="inline-flex items-center justify-center px-6 py-4 rounded-full text-base font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-50 transition-colors duration-200"
              >
                Conhecer o Programa
              </a>
            </div>

            {/* Aviso de escassez e exclusividade */}
            <p className="mt-4 text-xs sm:text-sm text-slate-600 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Vagas limitadas por turma para garantir mentoria individualizada aos domingos.</span>
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}