"use client";

import React from "react";
import { 
  Sparkles, 
  Dna, 
  Zap, 
  ShieldCheck, 
  ClipboardCheck, 
  Download, 
  FileText, 
  ArrowRight 
} from "lucide-react";

export default function GradeConteudo() {
  const modulos = [
    {
      numero: "01",
      icone: Dna,
      titulo: "Anatomia e Fisiologia Folicular",
      descricao: "A ciência biológica da raiz. Entenda a estrutura detalhada do pelo, a papila dérmica, células germinativas e as fases anágena, catágena e telógena para atuar no momento biológico perfeito da coagulação.",
      itens: [
        "Morfologia completa do folículo piloso",
        "Ciclo evolutivo e o timing exato da aplicação",
        "Diferenças estruturais entre pelos claros, ruivos e escuros"
      ]
    },
    {
      numero: "02",
      icone: Zap,
      titulo: "Correntes Elétricas & Termólise",
      descricao: "O coração da técnica. O funcionamento da corrente alternada de alta frequência gerando calor térmico na água tecidual, destruindo as células matrizes de forma permanente.",
      itens: [
        "Física das correntes aplicadas à eletrólise",
        "Termólise: calor, intensidade e tempo de pulso",
        "Calibração de potência conforme espessura e região do pelo"
      ]
    },
    {
      numero: "03",
      icone: ShieldCheck,
      titulo: "Biossegurança e Protocolos Clínicos",
      descricao: "Atuação blindada e sem riscos. Normas sanitárias indispensáveis, cuidados com a barreira cutânea, prevenção rigorosa de hiperpigmentação pós-inflamatória e esterilização.",
      itens: [
        "Assepsia e preparo correto da pele do cliente",
        "Parâmetros seguros para não lesionar a epiderme",
        "Cuidados e orientações home-care pós-procedimento"
      ]
    },
    {
      numero: "04",
      icone: ClipboardCheck,
      titulo: "Anamnese & Avaliação Personalizada",
      descricao: "O diagnóstico seguro antes de qualquer procedimento. Como identificar contraindicações absolutas, avaliar fototipos e construir a confiança imediata da cliente.",
      itens: [
        "Montagem da ficha de anamnese especializada",
        "Contraindicações clínicas e histórico hormonal",
        "Planejamento de sessões para corpo e áreas delicadas"
      ]
    }
  ];

  return (
    <section id="metodo" className="py-16 sm:py-24 bg-[#F7FAF8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/10 border border-emerald-800/20 text-emerald-950 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>Formação Teórica Completa</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            20 horas de conteúdo autoral desenhado para te dar{" "}
            <span className="font-serif italic font-medium text-emerald-800">
              segurança clínica absoluta.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            Você não vai receber dicas soltas de internet. É uma metodologia com embasamento científico, 
            estruturada passo a passo por quem domina a técnica há anos no mercado.
          </p>
        </div>

        {/* Grade com os 4 Cards dos Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {modulos.map((modulo, index) => {
            const Icone = modulo.icone;
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-950/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-emerald-700/30"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-900/10 text-emerald-900 flex items-center justify-center font-bold text-xl group-hover:bg-emerald-900 group-hover:text-amber-300 transition-colors duration-300">
                      <Icone className="w-7 h-7" />
                    </div>
                    <span className="text-2xl font-serif italic text-emerald-800/40 font-bold">
                      {modulo.numero}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-900 transition-colors">
                    {modulo.titulo}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-6">
                    {modulo.descricao}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 space-y-2.5">
                  {modulo.itens.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Card Magnético de Alta Conversão com Gatilhos Subconscientes */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-[#0B2E24] to-emerald-950 text-white p-7 sm:p-10 shadow-2xl border border-amber-300/20">
          {/* Efeito sutil de luz dourada ao fundo */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Lado Esquerdo: Valor Percebido Elevado */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
              <div className="w-16 h-16 rounded-2xl bg-emerald-900/80 border border-amber-300/30 text-amber-300 flex items-center justify-center shrink-0 shadow-inner">
                <Download className="w-8 h-8" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-300/20 text-amber-300 text-[11px] font-bold tracking-wider uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Acervo Autoral Exclusivo</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Material Didático Autoral & Slides Completos
                </h4>
                <p className="text-sm sm:text-base text-emerald-100/90 font-normal mt-1 max-w-xl leading-relaxed">
                  Tenha em mãos o passo a passo ilustrado das aulas para consultar sempre que precisar. Liberação gradual imediata e download 100% liberado a partir do 8º dia.
                </p>
              </div>
            </div>

            {/* Lado Direito: Botão Magnético Calibrado para Linha Única no Mobile */}
            <div className="flex flex-col items-center sm:items-end w-full lg:w-auto shrink-0">
              <a
                href="#inscricao"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-4 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-extrabold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 hover:from-amber-200 hover:to-amber-100 shadow-xl shadow-amber-950/40 hover:shadow-amber-400/20 active:scale-95 transition-all duration-300 whitespace-nowrap"
              >
                <span>Quero Me Especializar Agora</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
              <span className="text-[12px] text-emerald-300/80 mt-2.5 font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Matrícula 100% Segura pela Hotmart</span>
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}