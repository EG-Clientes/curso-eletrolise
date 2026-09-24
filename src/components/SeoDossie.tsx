"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SeoDossie() {
  const [isOpen, setIsOpen] = useState(false);

  const topicos = [
    {
      titulo: "1. O que é a Especialização em Eletrólise e como ela funciona?",
      conteudo:
        "A especialização em eletrólise capacita a profissional a dominar o único método reconhecido pela FDA capaz de eliminar o pelo de forma 100% definitiva. Ao contrário de tecnologias paliativas, o curso de eletrólise ensina a cauterização folicular precisa através de microcorrentes elétricas, destruindo as células germinativas na raiz do pelo."
    },
    {
      titulo: "2. Especialização em Eletrólise vs. Laser: por que é a depilação definitiva de verdade?",
      conteudo:
        "Enquanto métodos ópticos dependem do pigmento e atuam apenas como redução permanente, a formação em eletroepilação atua diretamente no bulbo folicular. Neste curso de eletrólise, você aprende a tratar pelos brancos, ruivos, louros e finos em qualquer fototipo com eficácia comprovada que nenhum laser alcança."
    },
    {
      titulo: "3. Quem pode fazer a Especialização em Eletrólise com Dilene Araújo?",
      conteudo:
        "A especialização em eletrólise é desenvolvida tanto para iniciantes na área estética quanto para esteticistas, biomédicas e micropigmentadoras que buscam elevar o tíquete médio. O curso de eletrólise oferece a fundamentação anatômica completa para atuar com total segurança técnica e precisão clínica desde o primeiro atendimento."
    },
    {
      titulo: "4. As técnicas ensinadas na Especialização em Eletrólise: Termólise, Galvânica e Blend",
      conteudo:
        "Dominar as três modalidades da eletroepilação é o pilar deste treinamento aprofundado. Ao longo do curso de eletrólise, você entende quando usar corrente galvânica química, termólise por termocoagulação ou o método Blend, personalizando o protocolo de acordo com a espessura e região do pelo tratado."
    },
    {
      titulo: "5. Biossegurança e saúde da pele na Especialização em Eletrólise",
      conteudo:
        "Preservar a integridade cutânea do cliente é essencial para evitar manchas e intercorrências inflamatórias. A especialização em eletrólise traz diretrizes rigorosas de assepsia, uso de agulhas e filamentos esterilizados, além do manejo pós-procedimento que um curso de eletrólise de excelência exige."
    },
    {
      titulo: "6. A Mentoria ao Vivo como diferencial da Especialização em Eletrólise",
      conteudo:
        "Mais do que aulas gravadas, o acompanhamento direto com Dilene Araújo acelera a curva de aprendizado prático da eletroepilação. No curso de eletrólise com mentoria ao vivo, você tira dúvidas de casos reais, afina a inserção da agulha e ganha a confiança necessária para atender com maestria."
    },
    {
      titulo: "7. Rentabilidade clínica e retorno com a Especialização em Eletrólise",
      conteudo:
        "A procura por tratamentos definitivos para pelos resistentes cresce vertiginosamente devido à saturação do mercado de laser. Com a especialização em eletrólise, seu consultório se torna referência regional exclusiva, cobrando por hora trabalhada e recuperando o investimento do curso de eletrólise logo nos primeiros clientes fixos."
    },
    {
      titulo: "8. Áreas de aplicação e casos complexos na Especialização em Eletrólise",
      conteudo:
        "Neste curso de eletrólise, você aprende a atuar com precisão cirúrgica desde regiões delicadas da face (como buço, queixo e sobrancelhas) até áreas corporais desafiadoras. A especialização em eletrólise capacita o profissional para resolver com maestria casos de foliculite severa, pelos hormonais e fios brancos ou loiros em qualquer fototipo, dominando a eletroepilação onde nenhuma outra tecnologia consegue entregar resultados."
    }
  ];

  return (
    <div className="w-full bg-transparent pb-8 pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título solto, elegante e alinhado à esquerda */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer"
          aria-expanded={isOpen}
        >
          <span className="text-sm sm:text-base font-semibold text-slate-500 group-hover:text-emerald-900 transition-colors">
            Especialização em Eletrólise - Depilação Definitiva
          </span>
          <ChevronDown
            className={`w-4 h-4 text-slate-400 group-hover:text-emerald-800 transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {/* Conteúdo Expansível integrado na página sem caixas pesadas */}
        <div
          className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="min-h-0">
            <div className="pt-2 border-t border-slate-200/60">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-4">
                {topicos.map((item, idx) => (
                  <article key={idx} className="space-y-1.5">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                      {item.titulo}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed text-justify">
                      {item.conteudo}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}