"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Rolagem suave para o topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Trava a rolagem do fundo quando a gaveta lateral do mobile estiver aberta
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/95 border-b border-emerald-950/10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            
            {/* Logo e Nome Clicáveis (Medidas e tamanhos 100% preservados) */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-left cursor-pointer focus:outline-none group active:scale-[0.99] transition-transform shrink-0"
              aria-label="Voltar ao início"
            >
              <div className="relative shrink-0 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Raiz Eletrólise - Dilene Araújo"
                  width={120}
                  height={120}
                  priority
                  className="h-[74px] w-[74px] sm:h-[86px] sm:w-[86px] object-contain transition-transform duration-200"
                />
              </div>
              <div className="flex flex-col shrink-0 whitespace-nowrap">
                <span className="font-bold text-xl sm:text-2xl tracking-tight text-emerald-950 leading-tight whitespace-nowrap">
                  Dilene Araújo
                </span>
                <span className="text-xs sm:text-sm uppercase tracking-wider text-emerald-700 font-bold whitespace-nowrap">
                  Especialização em Eletrólise
                </span>
              </div>
            </button>

            {/* Links Desktop em Linha Única sem quebra (whitespace-nowrap) */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 ml-8 xl:ml-12">
              <a
                href="#diferencial"
                className="text-base font-semibold text-slate-700 hover:text-emerald-800 transition-colors whitespace-nowrap"
              >
                O Diferencial
              </a>
              <a
                href="#metodo"
                className="text-base font-semibold text-slate-700 hover:text-emerald-800 transition-colors whitespace-nowrap"
              >
                Conteúdo
              </a>
              <a
                href="#mentoria"
                className="text-base font-semibold text-slate-700 hover:text-emerald-800 transition-colors whitespace-nowrap"
              >
                Mentoria ao Vivo
              </a>
              <a
                href="#especialista"
                className="text-base font-semibold text-slate-700 hover:text-emerald-800 transition-colors whitespace-nowrap"
              >
                Sobre a Mentora
              </a>
              <a
                href="#faq"
                className="text-base font-semibold text-slate-700 hover:text-emerald-800 transition-colors whitespace-nowrap"
              >
                Dúvidas
              </a>
            </nav>

            {/* CTA Desktop Mais Compacto (Sem atropelar o menu) */}
            <div className="hidden md:flex items-center shrink-0 ml-4">
              <a
                href="#inscricao"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 whitespace-nowrap"
              >
                <span>Quero Me Especializar Agora</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            </div>

            {/* Botão Mobile com Toggle Real (Abre e Fecha com transição pro X) */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative w-11 h-11 flex items-center justify-center rounded-xl text-emerald-950 hover:bg-emerald-50 active:scale-90 transition-all duration-200"
                aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
              >
                <div className="relative w-7 h-7">
                  <Menu
                    className={`absolute inset-0 w-7 h-7 transition-all duration-300 transform ${
                      mobileMenuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    className={`absolute inset-0 w-7 h-7 transition-all duration-300 transform ${
                      mobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                    }`}
                  />
                </div>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* OVERLAY ESCURECIDO COM DESFOQUE (Começa abaixo da faixa do header) */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 top-24 z-40 bg-black/40 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* GAVETA LATERAL COM PROPORÇÃO EDITORIAL AMPLA */}
      <aside
        className={`fixed top-24 right-0 z-40 w-[325px] sm:w-[360px] max-w-[88vw] bg-white border-l border-b border-emerald-950/10 rounded-bl-2xl shadow-2xl transition-transform duration-300 ease-out lg:hidden flex flex-col overflow-hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Links com o Design Editorial da Imagem (Divisórias + Sinal de '+') */}
        <nav className="px-7 pt-3 flex flex-col">
          {[
            { label: "O Diferencial", href: "#diferencial" },
            { label: "Conteúdo Programático", href: "#metodo" },
            { label: "Mentoria ao Vivo", href: "#mentoria" },
            { label: "Sobre a Mentora", href: "#especialista" },
            { label: "Dúvidas Frequentes", href: "#faq" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-4 border-b border-slate-100 text-slate-900 hover:text-emerald-800 transition-colors group"
            >
              <span className="font-serif text-xl sm:text-2xl tracking-normal text-slate-900 group-hover:translate-x-1 transition-transform">
                {item.label}
              </span>
              <span className="text-slate-300 font-light text-xl leading-none group-hover:text-emerald-800 transition-colors">
                +
              </span>
            </a>
          ))}
        </nav>

        {/* Botão de Inscrição Mais Fino e em Linha Única */}
        <div className="px-6 pt-3 pb-6">
          <a
            href="#inscricao"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 shadow-md active:scale-95 transition-all text-center whitespace-nowrap"
          >
            <span>Quero Me Especializar Agora</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </div>
      </aside>
    </>
  );
}