import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Diferenciais from "@/components/Diferenciais";
import GradeConteudo from "@/components/GradeConteudo";
import Mentoria from "@/components/Mentoria";
import SobreEspecialista from "@/components/SobreEspecialista";
import Oferta from "@/components/Oferta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import SeoDossie from "@/components/SeoDossie";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <Navbar />
      <Hero />
      <Diferenciais />
      <GradeConteudo />
      <Mentoria />
      <SobreEspecialista />
      <Oferta />
      <Faq />
      <SeoDossie />
      <Footer />
    </main>
  );
}