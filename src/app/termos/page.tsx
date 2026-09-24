"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar"; // Ajuste o caminho do seu Navbar se necessário

export default function TermosPage() {
  const termos = [
    {
      numero: "1",
      titulo: "OBJETO",
      texto: "Esta especialização oferece formação teórica online sobre eletrólise — Especialização Teórica Avançada em Eletrólise com Mentoria ao Vivo — by Dilene Araújo —, com conteúdo didático em slides, orientações profissionais, mentoria ao vivo e emissão de certificado digital de conclusão."
    },
    {
      numero: "2",
      titulo: "TITULARIDADE E DIREITOS AUTORAIS",
      texto: "Todo o conteúdo é de titularidade de Dilene Araújo. © Dilene Araújo — Todos os direitos reservados. Proibida a reprodução total ou parcial sem autorização."
    },
    {
      numero: "3",
      titulo: "ACESSO AO CONTEÚDO E LIBERAÇÃO DO MATERIAL",
      texto: "Após a confirmação do pagamento, o aluno recebe acesso à Área de Membros. O material teórico é liberado de forma parcial após a compra. A liberação total do conteúdo, inclusive para download, ocorre a partir do 8º (oitavo) dia após a data da compra. O acesso é pessoal e intransferível. Não é permitido compartilhar login, senha, links ou arquivos."
    },
    {
      numero: "4",
      titulo: "DOWNLOAD DOS MATERIAIS",
      texto: "O download completo dos materiais NÃO é liberado imediatamente. A liberação total do material teórico, inclusive para download, fica disponível a partir do 8º (oitavo) dia após a data da compra. Até lá, o estudo é realizado online na Área de Membros, conforme a liberação parcial dos módulos/conteúdos."
    },
    {
      numero: "5",
      titulo: "CERTIFICADO DE CONCLUSÃO",
      texto: "O certificado será emitido somente após 20 (vinte) dias da compra e conclusão do conteúdo. O certificado é emitido em formato digital. Caso o aluno deseje via impressa pelos Correios, deverá solicitar e arcar integralmente com os custos de impressão e envio. O certificado comprova a conclusão do conteúdo teórico e não substitui exigências legais para o exercício profissional."
    },
    {
      numero: "6",
      titulo: "ENCONTROS DE DÚVIDAS / MENTORIA AO VIVO",
      texto: "As mentorias ao vivo iniciam a partir do 15º (décimo quinto) dia após a compra. Serão oferecidos 4 (quatro) encontros semanais de 120 (cento e vinte) minutos por turma. As mentorias ocorrem aos domingos, podendo haver alteração de dia ou horário quando necessário, com aviso prévio aos participantes da turma. Os encontros são coletivos (Meet ou Zoom), em formato de turma."
    },
    {
      numero: "7",
      titulo: "EQUIPAMENTOS E IMPORTAÇÃO",
      texto: "A especialização NÃO inclui aparelho de eletrólise, sondas, pinças nem quaisquer equipamentos. A aquisição e eventual importação são de responsabilidade do aluno."
    },
    {
      numero: "8",
      titulo: "O QUE ESTÁ INCLUÍDO",
      texto: "Acesso ao conteúdo teórico online em slides (liberação parcial, com liberação total inclusive download a partir do 8º dia); certificado digital; e mentoria ao vivo conforme o item 6. Não inclui equipamentos. Envio físico do certificado pelos Correios, se solicitado, será por conta do aluno."
    },
    {
      numero: "9",
      titulo: "NATUREZA DO CONTEÚDO",
      texto: "Formação teórica. As informações têm caráter educacional e não substituem legislação, normas sanitárias ou exigências locais."
    },
    {
      numero: "10",
      titulo: "DIREITO DE ARREPENDIMENTO (7 DIAS)",
      texto: "O aluno pode desistir da compra em até 7 (sete) dias corridos a contar do acesso ao conteúdo digital, conforme o CDC e a política da plataforma. A liberação total com download só ocorre a partir do 8º dia, após o prazo de arrependimento."
    },
    {
      numero: "11",
      titulo: "REEMBOLSO",
      texto: "Pedidos de reembolso serão analisados conforme o CDC e as regras da Hotmart."
    },
    {
      numero: "12",
      titulo: "CONDUTA DO ALUNO",
      texto: "Uso ético do conteúdo; sem compartilhamento; sem apresentar a especialização como habilitação oficial não prevista em lei."
    },
    {
      numero: "13",
      titulo: "LIMITAÇÃO DE RESPONSABILIDADE",
      texto: "A coordenadora não se responsabiliza por resultados práticos individuais, intercorrências, importação de equipamentos ou exigências regulatórias locais."
    },
    {
      numero: "14",
      titulo: "PROTEÇÃO DE DADOS",
      texto: "Dados tratados conforme a LGPD para execução do contrato, acesso, certificado e comunicação relacionada à especialização."
    },
    {
      numero: "15",
      titulo: "SUPORTE",
      texto: "Canal oficial informado na área do aluno ou página de vendas, além das mentorias ao vivo quando disponíveis."
    },
    {
      numero: "16",
      titulo: "FORO",
      texto: "Foro da comarca de residência da coordenadora, salvo disposição legal em favor do consumidor."
    },
    {
      numero: "17",
      titulo: "ACEITE",
      texto: "Ao finalizar a compra, o aluno declara estar de acordo com estes Termos."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7FAF8] flex flex-col">
      {/* Puxa o Navbar idêntico do site */}
      <Navbar />

      <main className="flex-1 py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Botão Voltar */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 hover:text-emerald-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para a página principal</span>
            </Link>
          </div>

          {/* Card Principal dos Termos */}
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-emerald-950/10 shadow-sm">
            
            {/* Cabeçalho do Documento */}
            <div className="border-b border-emerald-950/10 pb-6 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/10 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Documento Oficial</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                TERMOS DE COMPRA E USO
              </h1>
              <p className="text-base sm:text-lg font-semibold text-emerald-900 mt-1">
                Especialização Teórica Avançada em Eletrólise com Mentoria ao Vivo — by Dilene Araújo
              </p>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                Ao adquirir esta especialização, você declara ter lido, compreendido e aceitado integralmente os presentes Termos de Compra e Uso.
              </p>
            </div>

            {/* Lista dos 17 Termos (Texto 100% Original) */}
            <div className="space-y-6">
              {termos.map((item) => (
                <div key={item.numero} className="text-left">
                  <h2 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    {item.numero}. {item.titulo}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {item.texto}
                  </p>
                </div>
              ))}
            </div>

            {/* Rodapé / Assinatura Oficial */}
            <div className="mt-10 pt-8 border-t border-emerald-950/10 text-center sm:text-left text-xs sm:text-sm text-slate-600 space-y-1">
              <p className="font-bold text-slate-900">Dilene Araújo — Coordenadora</p>
              <p>Especialização Teórica Avançada em Eletrólise com Mentoria ao Vivo — by Dilene Araújo</p>
              <p className="text-slate-500 pt-2">© Dilene Araújo — Todos os direitos reservados.</p>
            </div>

          </div>

          {/* Card CTA Luxo no Padrão da Landing Page */}
          <div className="mt-8 sm:mt-10 relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-[#0B2E24] to-emerald-950 text-white p-6 sm:p-8 shadow-xl border border-amber-300/25">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-400/15 border border-amber-300/20 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3 h-3" />
                  <span>Matrículas Abertas</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  Pronto para garantir a sua vaga na Especialização?
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200/90 mt-1 font-normal max-w-md">
                  Retorne à página inicial e garanta sua vaga na turma com mentoria ao vivo online antes do término das inscrições.
                </p>
              </div>

              <div className="flex flex-col items-center sm:items-end w-full sm:w-auto shrink-0">
                <Link
                  href="/#inscricao"
                  className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full text-sm sm:text-base font-extrabold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 hover:from-amber-200 hover:to-amber-100 shadow-lg shadow-amber-950/40 hover:shadow-amber-400/20 active:scale-95 transition-all duration-300 whitespace-nowrap"
                >
                  <span>Quero Me Especializar Agora</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-[11px] text-emerald-300/80 mt-2 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Matrícula 100% Segura pela Hotmart</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}