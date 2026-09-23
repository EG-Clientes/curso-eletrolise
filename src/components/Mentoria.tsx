"use client";

import React from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Video, 
  Users, 
  HelpCircle, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  ArrowRight 
} from "lucide-react";

export default function Mentoria() {
  const pilaresMentoria = [
    {
      icone: Video,
      titulo: "4 Encontros Semanais ao Vivo",
      descricao: "São 120 minutos de aula ao vivo a cada domingo (8 horas de acompanhamento em tempo real), direto com Dilene Araújo em sala virtual exclusiva."
    },
    {
      icone: Calendar,
      titulo: "Início Estratégico no 15º Dia",
      descricao: "As mentorias começam após o 15º dia da compra. Esse tempo garante que você já tenha absorvido a base teórica para tirar dúvidas de alto nível."
    },
    {
      icone: Users,
      titulo: "Turmas Fechadas e Reduzidas",
      descricao: "Nada de salas lotadas com milhares de pessoas. As vagas são limitadas para que você tenha espaço real de fala e atenção individualizada."
    },
    {
      icone: HelpCircle,
      titulo: "Estudo de Casos & Tira-Dúvidas",
      descricao: "Traga as dúvidas dos seus atendimentos, fotos de clientes, casos difíceis de foliculite ou pelos resistentes para avaliar junto com a mentora."
    }
  ];

  return (
    <section id="mentoria" className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-emerald-950/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/10 border border-emerald-800/20 text-emerald-950 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>Acompanhamento Próximo e Real</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            Você não estará sozinha em frente a uma{" "}
            <span className="font-serif italic font-medium text-emerald-800">
              tela gravada.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            O grande diferencial desta formação é o acesso direto à mentora. Encontros aos domingos, 
            pensados sob medida para a sua rotina de atendimentos durante a semana.
          </p>
        </div>

        {/* Bloco Central com Imagem + Cards dos Encontros */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14">
          
          {/* Lado Esquerdo: Imagem da Aluna na Mentoria */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-950/10 aspect-[4/5] bg-slate-100">
              <Image
                src="/images/mentoria-ao-vivo.png"
                alt="Mentoria ao vivo em eletrólise estética"
                fill
                className="object-cover"
              />
              
              {/* Card sobre a foto com horário e dia */}
              <div className="absolute bottom-5 left-5 right-5 bg-emerald-950/90 backdrop-blur-md rounded-2xl p-4 text-white border border-white/10 shadow-xl">
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Ao Vivo pelo Google Meet / Zoom</span>
                </div>
                <p className="text-sm font-semibold text-white">4 Domingos • 120 minutos por encontro</p>
                <p className="text-[11px] text-slate-300 mt-0.5">Comunicação prévia com a turma para alinhamento de horários.</p>
              </div>
            </div>
          </div>

          {/* Lado Direito: Grid 2x2 no Mobile (Compacto e Elegante) e no Desktop */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-6">
            {pilaresMentoria.map((pilar, index) => {
              const Icone = pilar.icone;
              return (
                <div 
                  key={index}
                  className="bg-[#FAF9F6] rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-emerald-950/10 hover:border-emerald-800/30 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-emerald-900 text-amber-300 flex items-center justify-center mb-3 sm:mb-5 shadow-inner">
                      <Icone className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-xs sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2 leading-tight">
                      {pilar.titulo}
                    </h3>
                  </div>
                  <p className="text-[11px] sm:text-sm text-slate-700 leading-snug sm:leading-relaxed font-normal sm:font-medium mt-1">
                    {pilar.descricao}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Card de Matrícula na Mentoria com Design Premium & Escassez */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#F0F7F3] via-white to-[#F0F7F3] p-6 sm:p-9 border-2 border-emerald-800/20 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            
            {/* Informações e Proteção Jurídica */}
            <div className="flex items-start gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-emerald-900 text-amber-300 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-900/10 text-emerald-950 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                  <span>Cronograma Exclusivo por Turma</span>
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900">
                  4 Encontros aos Domingos • A partir do 15º dia
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed max-w-xl mt-1">
                  Encontros virtuais em grupo reduzido para tirar dúvidas de atendimentos reais. <span className="text-slate-500 font-normal">(Sujeito a mudança de dia/horário com aviso prévio).</span>
                </p>
              </div>
            </div>

            {/* CTA Encorpado Calibrado para Linha Única no Mobile */}
            <div className="flex flex-col items-center sm:items-end w-full lg:w-auto shrink-0">
              <a
                href="#inscricao"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-4 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-extrabold text-white bg-emerald-800 hover:bg-emerald-900 shadow-xl shadow-emerald-950/20 hover:shadow-emerald-950/35 active:scale-95 transition-all duration-300 whitespace-nowrap"
              >
                <span>Quero Me Especializar Agora</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
              <span className="text-[11px] text-emerald-800 font-semibold mt-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>Vagas limitadas para acompanhamento individual</span>
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}