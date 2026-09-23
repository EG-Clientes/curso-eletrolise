"use client";

import React from "react";
import Image from "next/image";
import { Check, X, ShieldAlert, Sparkles, Zap, HeartHandshake } from "lucide-react";

export default function Diferenciais() {
  return (
    <section id="diferencial" className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-emerald-950/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Topo da Seção: Título e Posicionamento */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/5 border border-emerald-800/15 text-emerald-800 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>A Grande Oportunidade na Estética</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            Por que o mercado precisa de você dominando a{" "}
            <span className="font-serif italic font-normal text-emerald-800">
              eletrólise avançada?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            O laser revolucionou a estética, mas deixou uma lacuna milionária aberta. Diariamente, clientes 
            procuram clínicas para remover pelos que o laser simplesmente não enxerga.
          </p>
        </div>

        {/* Comparativo Estratégico: Laser vs Eletrólise */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 sm:mb-20">
          
          {/* Card Esquerda: As Limitações do Laser Comum */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Limitações do Laser Tradicional</h3>
                <p className="text-xs text-slate-500">Dependente exclusivamente da melanina do pelo</p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span><strong>Ineficaz em pelos brancos e claros:</strong> não há pigmento para atrair a luz, deixando o pelo intacto.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span><strong>Fraco em pelos ruivos e finos:</strong> baixa resposta térmica na papila folicular.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span><strong>Classificado como redução temporária:</strong> o pelo pode voltar a crescer após alterações hormonais.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span><strong>Clientes insatisfeitas sem solução:</strong> você precisa dizer &quot;não posso te atender&quot; e perde a venda.</span>
              </li>
            </ul>
          </div>

          {/* Card Direita: O Poder Supremo da Eletrólise */}
          <div className="lg:col-span-6 bg-gradient-to-br from-emerald-950 to-emerald-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-800/40 relative overflow-hidden">
            {/* Brilho de fundo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-emerald-800/60">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 text-amber-300 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">O Domínio da Eletrólise</h3>
                <p className="text-xs text-emerald-200">Ação térmica direta nas células matrizes da raiz</p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-emerald-100 text-sm sm:text-base">
                <Check className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                <span><strong>Eficaz em 100% dos pelos:</strong> elimina brancos, ruivos, loiros, castanhos e escuros com precisão cirúrgica.</span>
              </li>
              <li className="flex items-start gap-3 text-emerald-100 text-sm sm:text-base">
                <Check className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                <span><strong>Único reconhecido pelo FDA:</strong> método mundialmente chancelado como remoção permanente definitiva.</span>
              </li>
              <li className="flex items-start gap-3 text-emerald-100 text-sm sm:text-base">
                <Check className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                <span><strong>Solução para foliculite crônica:</strong> trata pelos encravados, inflamados e reduz a sudorese local.</span>
              </li>
              <li className="flex items-start gap-3 text-emerald-100 text-sm sm:text-base">
                <Check className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                <span><strong>Monopólio na sua região:</strong> pouquíssimas profissionais dominam a técnica com base científica sólida.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bloco Visual: A Imagem de Precisão + Destaques de Aplicação */}
        <div className="rounded-3xl bg-[#FAF9F6] border border-emerald-950/10 p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Foto de Precisão */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-slate-200">
              <Image
                src="/images/procedimento-precisao.png"
                alt="Procedimento de alta precisão em eletrólise"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-emerald-950/85 backdrop-blur-md rounded-xl p-3 text-white text-xs border border-white/10">
                <p className="font-semibold text-amber-200">Atuação Fio a Fio</p>
                <p className="text-slate-300 text-[11px]">Coagulação térmica das células matrizes sem agredir a pele ao redor.</p>
              </div>
            </div>

            {/* Texto de Apoio e Indicações Reais */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <div className="inline-flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2">
                <HeartHandshake className="w-4 h-4" />
                <span>Casos Clínicos Reais</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 leading-snug">
                Da face às regiões íntimas: domínio total para tratar o corpo inteiro.
              </h3>
              
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-medium">
                Seja para fios resistentes no queixo e buço (comuns após a menopausa), sobrancelhas, 
                pescoço, ou em procedimentos de <strong>alta demanda como virilha e áreas íntimas</strong> com 
                foliculite crônica. Você terá a base teórica completa para atender qualquer região com segurança absoluta.
              </p>

              {/* Badges de Cobertura com Contraste Marcante e Nítido */}
              <div className="flex flex-wrap gap-2.5">
                <span className="px-3.5 py-2 rounded-lg bg-emerald-900/10 border border-emerald-800/25 text-emerald-950 text-xs sm:text-sm font-bold shadow-xs">
                  Virilha & Áreas Íntimas
                </span>
                <span className="px-3.5 py-2 rounded-lg bg-emerald-900/10 border border-emerald-800/25 text-emerald-950 text-xs sm:text-sm font-bold shadow-xs">
                  Pelos Brancos & Grisalhos
                </span>
                <span className="px-3.5 py-2 rounded-lg bg-emerald-900/10 border border-emerald-800/25 text-emerald-950 text-xs sm:text-sm font-bold shadow-xs">
                  Face, Buço, Queixo & Colo
                </span>
                <span className="px-3.5 py-2 rounded-lg bg-emerald-900/10 border border-emerald-800/25 text-emerald-950 text-xs sm:text-sm font-bold shadow-xs">
                  Tratamento de Foliculite Crônica
                </span>
                <span className="px-3.5 py-2 rounded-lg bg-emerald-900/10 border border-emerald-800/25 text-emerald-950 text-xs sm:text-sm font-bold shadow-xs">
                  Pele Clara a Pele Negra
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}