"use client";

import React from "react";
import { 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  CreditCard, 
  Award, 
  Clock, 
  FileCheck 
} from "lucide-react";

export default function Oferta() {
  return (
    <section id="inscricao" className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF9F6] via-[#F0F7F3] to-[#FAF9F6] relative overflow-hidden">
      {/* Luz ambiente dourada/esmeralda no fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho de Decisão */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/10 border border-emerald-800/20 text-emerald-950 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>Condição Exclusiva de Matrícula</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            O investimento que se paga com os seus{" "}
            <span className="font-serif italic font-medium text-emerald-800">
              primeiros atendimentos.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            Tenha em mãos a formação teórica de alto nível e o acompanhamento próximo de quem é pioneira 
            para nunca mais deixar dinheiro na mesa da sua clínica.
          </p>
        </div>

        {/* Card Principal da Oferta (Padrão de Luxo) */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-emerald-950 via-[#0B2E24] to-emerald-950 text-white p-7 sm:p-12 shadow-2xl border-2 border-amber-300/30 overflow-hidden">
            
            {/* Brilho decorativo no canto */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

            {/* Tag no topo do Card */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-emerald-800/60 mb-8">
              <div>
                <span className="px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-300/30">
                  Turma com Mentoria ao Vivo
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-3">
                  Especialização Avançada em Eletrólise
                </h3>
                <p className="text-sm text-emerald-200 mt-1">
                  por Dilene Araújo • Certificação Internacional em NY
                </p>
              </div>

              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/15 shrink-0">
                <Lock className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Pagamento Seguro Hotmart</span>
              </div>
            </div>

            {/* Grid: Checklist do que ela ganha (Esquerda) vs Preço & Botão (Direita) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Checklist de Entrega Completa */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <p className="text-xs uppercase tracking-widest text-amber-300 font-bold mb-2">
                  Tudo o que está incluso na sua matrícula:
                </p>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-emerald-50">
                      <strong>20 horas de conteúdo teórico autoral:</strong> anatomia folicular, física das correntes, termólise e anamnese.
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-emerald-50">
                      <strong>4 encontros semanais de mentoria ao vivo:</strong> 120 minutos por domingo com Dilene Araújo (a partir do 15º dia).
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-emerald-50">
                      <strong>Material didático autoral em slides:</strong> liberado para download permanente a partir do 8º dia.
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-emerald-50">
                      <strong>Certificado digital oficial de conclusão:</strong> comprovação de peso para o seu currículo e clínica.
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-emerald-50">
                      <strong>Espaço tira-dúvidas exclusivo:</strong> traga casos práticos da sua clínica para análise da mentora.
                    </span>
                  </div>
                </div>
              </div>

              {/* Bloco de Preço e Ação Hotmart */}
              <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/15 text-center flex flex-col items-center">
                <span className="text-xs uppercase tracking-widest text-emerald-200 font-semibold">
                  Investimento da Especialização
                </span>
                
                {/* Preço em Destaque Oficial */}
                <div className="my-4">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    R$ 2.510<span className="text-2xl font-bold text-amber-300">,00</span>
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-200 mt-1 font-medium">
                    à vista ou parcelado no cartão de crédito
                  </p>
                </div>

                {/* BOTÃO HOTMART - Destino de Conversão */}
                <a
                  href="https://pay.hotmart.com" // Aqui entrará o link do checkout da cliente
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 w-full py-4 px-6 rounded-full text-base sm:text-lg font-black text-slate-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 hover:from-amber-200 hover:to-amber-100 shadow-xl shadow-amber-950/40 hover:shadow-amber-400/20 active:scale-95 transition-all duration-300 mb-3"
                >
                  <span>Quero Me Especializar Agora</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>

                {/* Selos de Garantia Hotmart */}
                <div className="flex items-center justify-center gap-4 text-[11px] text-emerald-200/90 font-medium">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    7 Dias de Garantia
                  </span>
                  <span className="flex items-center gap-1">
                    <CreditCard className="w-4 h-4 text-emerald-400" />
                    Até 12x no Cartão
                  </span>
                </div>

                {/* Nota Literal do Print 01 */}
                <p className="text-[10px] text-emerald-200/60 mt-3 leading-snug max-w-[280px]">
                  Material teórico com liberação parcial; liberação total (inclusive download) a partir do 8º dia da compra.
                </p>
              </div>

            </div>

            {/* Aviso de Transparência Obrigatório do Rodapé do Card */}
            <div className="mt-8 pt-6 border-t border-emerald-800/60 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-200/70">
              <p>
                * Formação teórica online. Equipamento não incluso.
              </p>
              <p>
                © Dilene Araújo — Conteúdo autoral protegido.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}