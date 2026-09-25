"use client";

import React, { useState } from "react";
import { Sparkles, ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

export default function Faq() {
  // Lista com as 6 perguntas cirúrgicas baseadas nos documentos oficiais
  const duvidas = [
    {
      pergunta: "O aparelho / equipamento de eletrólise está incluso no valor?",
      resposta: "Não. Esta é uma especialização teórica avançada focada no domínio científico da técnica (anatomia folicular, métodos galvânica, termólise, blend e biossegurança). O equipamento não está incluso e a prática profissional na sua clínica depende das regulamentações do conselho de classe da sua região."
    },
    {
      pergunta: "Quando recebo o material didático autoral para download?",
      resposta: "Ao se matricular, você tem liberação parcial imediata do conteúdo em aulas para já iniciar seus estudos. A liberação completa do material didático autoral com todos os slides e PDF para download definitivo é liberada a partir do 8º dia da compra."
    },
    {
      pergunta: "Como e quando acontecem as mentorias online ao vivo com Dilene Araújo?",
      resposta: "Os encontros ao vivo online iniciam a partir do 15º dia após a compra, garantindo que você já tenha assistido e absorvido a base teórica. São 4 encontros semanais, com duração de 120 minutos cada (8 horas no total), em turmas fechadas para tirar dúvidas."
    },
    {
      pergunta: "A eletrólise realmente funciona em pelos brancos, claros e ruivos?",
      resposta: "Sim! Ao contrário do laser tradicional que necessita da melanina (cor escura) do pelo para agir, a eletrólise atua diretamente na papila dérmica e nas células matrizes por coagulação térmica. Por isso, é o único método reconhecido pelo FDA americano como 100% definitivo para pelos brancos, claros, ruivos e em todos os fototipos de pele."
    },
    {
      pergunta: "Receberei certificado após a conclusão?",
      resposta: "Sim! Ao cumprir as 20 horas da formação e participar das etapas do curso, você receberá o Certificado Digital de Conclusão da Especialização Avançada em Eletrólise assinado pela especialista Dilene Araújo, comprovando sua capacitação teórica."
    },
    {
      pergunta: "Quem pode fazer o curso?",
      resposta: "A especialização é destinada a esteticistas e profissionais da área da saúde que desejam se especializar na técnica definitiva de eletrólise."
    },
    {
      pergunta: "Quais são as formas de pagamento disponíveis na Hotmart?",
      resposta: "Você pode realizar o investimento de R$ 4.310,00 à vista via Pix, boleto bancário ou parcelar em até 12 vezes no cartão de crédito diretamente pela plataforma segura da Hotmart, com total proteção dos seus dados bancários."
    }
  ];

  // Controle de abertura: todos começam fechados por padrão
  const [aberto, setAberto] = useState<number | null>(null);

  const toggleDuvida = (index: number) => {
    setAberto(aberto === index ? null : index);
  };

  return (
    <section id="faq" className="pt-10 pb-14 sm:pt-14 sm:pb-16 bg-white relative overflow-hidden border-t border-emerald-950/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Topo Compacto sem espaço ocioso */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-900/10 border border-emerald-800/20 text-emerald-950 text-xs font-bold tracking-wide uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
            Perguntas{" "}
            <span className="font-serif italic font-medium text-emerald-800">
              Frequentes
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Tudo o que você precisa saber sobre a formação e as mentorias.
          </p>
        </div>

        {/* Lista Compacta de Acordeões: Menos rolagem e leitura rápida */}
        <div className="space-y-2.5 mb-10">
          {duvidas.map((item, index) => {
            const isAberto = aberto === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isAberto
                    ? "bg-[#FAF9F6] border-emerald-800/30 shadow-sm"
                    : "bg-white border-slate-200/90 hover:border-emerald-800/20"
                }`}
              >
                <button
                  onClick={() => toggleDuvida(index)}
                  className="w-full py-3.5 px-5 sm:py-4 sm:px-6 text-left flex items-center justify-between gap-3 transition-colors"
                  aria-expanded={isAberto}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {item.pergunta}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isAberto
                        ? "bg-emerald-800 text-white rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isAberto && (
                  <div className="px-5 sm:px-6 pb-4 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-emerald-950/5 animate-in fade-in duration-200 font-normal">
                    {item.resposta}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Card de Fechamento com Design Premium & Alta Conversão */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-[#0B2E24] to-emerald-950 text-white p-6 sm:p-8 shadow-xl border border-amber-300/25">
          {/* Brilho suave no fundo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-400/15 border border-amber-300/20 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" />
                <span>Oportunidade Exclusiva</span>
              </div>
              <h4 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                Pronta para ser a maior referência na sua região?
              </h4>
              <p className="text-xs sm:text-sm text-emerald-200/90 mt-1 font-normal max-w-md">
                Garanta sua vaga na turma fechada com 4 mentorias ao vivo online antes do término das inscrições.
              </p>
            </div>

            <div className="flex flex-col items-center sm:items-end w-full sm:w-auto shrink-0">
              <a
                href="#inscricao"
                className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full text-sm sm:text-base font-extrabold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 hover:from-amber-200 hover:to-amber-100 shadow-lg shadow-amber-950/40 hover:shadow-amber-400/20 active:scale-95 transition-all duration-300"
              >
                <span>Quero Me Especializar Agora</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <span className="text-[11px] text-emerald-300/80 mt-2 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Garantia legal de 7 dias Hotmart</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}