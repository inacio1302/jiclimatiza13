import { createFileRoute } from "@tanstack/react-router";
import {
  AirVent,
  Wrench,
  ShieldCheck,
  Sparkles,
  Zap,
  Plug,
  ShowerHead,
  Lightbulb,
  ToggleLeft,
  Phone,
  Star,
  CheckCircle2,
  Clock,
  BadgeCheck,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

import heroImage from "../assets/hero-technician.jpg";
import beforeAfterImage from "../assets/before-after.jpg";

const WHATSAPP_NUMBER = "5511949104621";
const wa = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

const WA_DEFAULT = wa(
  "Olá! Vi o site da JI CLIMATIZA e gostaria de um orçamento de ar condicionado."
);

export const Route = createFileRoute("/")({
  head:  head: () => ({
  meta: [
    {
      charSet: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      title: 'Limpeza e Higienização de Ar Condicionado em SP | Jiclimatiza',
    },
    {
      name: 'description',
      content: 'Especialista em limpeza, higienização, manutenção preventiva e instalação de ar condicionado em São Paulo e Zona Sul. Atendimento rápido e orçamento gratuito.',
    },
    {
      name: 'keywords',
      content: 'limpeza de ar condicionado sp, higienização de ar condicionado zona sul, manutenção de ar condicionado são paulo, conserto de ar condicionado, limpeza de ar condicionado interlagos, instalaçao de ar condicionado sp',
    },
    // Meta Tags Locais para o Google entender sua região
    {
      name: 'geo.region',
      content: 'BR-SP',
    },
    {
      name: 'geo.placename',
      content: 'São Paulo',
    },
    // Compartilhamento em redes sociais
    {
      property: 'og:title',
      content: 'Limpeza e Higienização de Ar Condicionado em São Paulo | Jiclimatiza',
    },
    {
      property: 'og:description',
      content: 'Serviços de higienização, limpeza preventiva e manutenção de ar condicionado em São Paulo. Fale conosco pelo WhatsApp!',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
  scripts: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-16ZSBVQRS1',
      async: true,
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-16ZSBVQRS1');
      `,
    },
  ],
}),
    
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-16ZSBVQRS1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-16ZSBVQRS1');
</script>
    () => ({
    meta: [
      { title: "JI CLIMATIZA | Instalação, Manutenção e Higienização de Ar Condicionado em SP" },
      {
        name: "description",
        content:
          "Especialista em ar condicionado em São Paulo: instalação, corretiva, preventiva e higienização. Também serviços elétricos. Agende pelo WhatsApp em minutos.",
      },
      {
        property: "og:title",
        content: "JI CLIMATIZA — Ar condicionado instalado, consertado e limpo",
      },
      {
        property: "og:description",
        content:
          "Instalação, manutenção corretiva, preventiva e higienização de ar condicionado em São Paulo. Resposta rápida no WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.9-1.4A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.4.6c-.1.2-.3.3-.1.6.1.2.6 1 1.3 1.6.9.8 1.6 1 1.9 1.2.2.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.1.1.7-.3 1.4Z" />
    </svg>
  );
}

function WhatsAppButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-whatsapp px-7 py-3.5 font-display text-base font-semibold text-whatsapp-foreground shadow-frost transition-all hover:-translate-y-0.5 hover:brightness-110 ${className}`}
    >
      <WhatsAppIcon className="size-5 shrink-0" />
      {children}
    </a>
  );
}

const acServices = [
  {
    icon: AirVent,
    title: "Instalação de ar condicionado",
    description:
      "Split novo instalado com sucção, nivelamento e teste completo de operação, seguindo as boas práticas dos fabricantes.",
    tag: "Split e janela",
    message:
      "Olá! Quero um orçamento para instalação de ar condicionado.",
  },
  {
    icon: Wrench,
    title: "Corretiva de ar condicionado",
    description:
      "Seu ar parou de gelar, está pingando ou fazendo barulho? Diagnóstico preciso e reparo com garantia de serviço.",
    tag: "Reparo rápido",
    message:
      "Olá! Meu ar condicionado está com defeito e preciso de manutenção corretiva.",
  },
  {
    icon: ShieldCheck,
    title: "Preventiva de ar condicionado",
    description:
      "Revisão geral, reaperto de conexões, verificação de dreno e componentes para evitar quebra no auge do calor.",
    tag: "Evite surpresas",
    message:
      "Olá! Quero agendar uma manutenção preventiva do meu ar condicionado.",
  },
  {
    icon: Sparkles,
    title: "Higienização de ar condicionado",
    description:
      "Limpeza profunda de filtros, serpentina, bandeja e turbina. Elimina fungos, bactérias e odores do seu ar.",
    tag: "A partir de R$ 250",
    featured: true,
    message:
      "Olá! Quero agendar a higienização do meu ar condicionado por R$ 250!",
  },
];

const electricalServices = [
  {
    icon: ToggleLeft,
    title: "Troca de interruptores",
    message: "Olá! Preciso trocar interruptores. Podem me ajudar?",
  },
  {
    icon: ShowerHead,
    title: "Instalação de chuveiros elétricos",
    message: "Olá! Preciso instalar um chuveiro elétrico.",
  },
  {
    icon: Zap,
    title: "Torneira elétrica",
    message: "Olá! Preciso instalar ou reparar uma torneira elétrica.",
  },
  {
    icon: Lightbulb,
    title: "Lâmpadas e tomadas",
    message: "Olá! Preciso instalar lâmpadas e tomadas.",
  },
];

const testimonials = [
  {
    quote:
      "Excelente serviço! O técnico foi super pontual e profissional. Meu ar parou de fazer barulho e o cheiro sumiu completamente.",
    name: "Camila R.",
    place: "Vila Mariana, SP",
  },
  {
    quote:
      "Contratei para meu escritório, 4 aparelhos. Preço justo e serviço impecável. Já agendei a próxima manutenção.",
    name: "Roberto S.",
    place: "Mooca, SP",
  },
  {
    quote:
      "Rápido, limpo e eficiente. O ar ficou gelando muito mais. Economia na conta de luz já no primeiro mês!",
    name: "Marcos L.",
    place: "Pinheiros, SP",
  },
];

const faqs = [
  {
    q: "Quanto tempo demora uma higienização?",
    a: "Em média, 40 a 60 minutos por aparelho. O tempo pode variar conforme o estado do equipamento.",
  },
  {
    q: "A higienização faz sujeira na parede ou no chão?",
    a: "Não. Utilizamos plástico coletor e proteção completa. Todo o processo é limpo e seguro.",
  },
  {
    q: "Com que frequência devo higienizar o ar condicionado?",
    a: "Para residências, a cada 6 meses. Para comércios com grande circulação, a cada 3 meses.",
  },
  {
    q: "Vocês atendem em qual região?",
    a: "Atendemos toda São Paulo capital e região metropolitana. Confirme sua região pelo WhatsApp.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-base font-semibold text-foreground"
        aria-expanded={open}
      >
        {q}
        <ChevronDown
          className={`size-5 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
      )}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Barra superior com marquee */}
      <div className="overflow-hidden bg-navy py-2 text-navy-foreground">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-xs font-medium tracking-wide">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="flex items-center gap-2">
                <Sparkles className="size-3.5 text-primary" /> Higienização
                completa a partir de R$ 250
              </span>
              <span className="flex items-center gap-2">
                <Clock className="size-3.5 text-primary" /> Atendimento em até
                24h
              </span>
              <span className="flex items-center gap-2">
                <WhatsAppIcon className="size-3.5 text-whatsapp" /> Resposta em
                5 min no WhatsApp
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck className="size-3.5 text-primary" /> Garantia de 7
                dias
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#topo" className="flex items-center gap-2.5">
            <div className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-frost">
              <AirVent className="size-5" />
            </div>
            <div className="leading-none">
              <p className="font-display text-lg font-bold tracking-tight">
                JI CLIMATIZA
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-muted-foreground">
                Ar condicionado · São Paulo
              </p>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
            <a href="#servicos" className="transition-colors hover:text-foreground">
              Ar condicionado
            </a>
            <a href="#eletrica" className="transition-colors hover:text-foreground">
              Elétrica
            </a>
            <a href="#depoimentos" className="transition-colors hover:text-foreground">
              Depoimentos
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              Dúvidas
            </a>
          </nav>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            <WhatsAppIcon className="size-4" />
            <span className="hidden sm:inline">Chamar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      <main id="topo">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-frost-deep blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 bottom-0 size-[400px] rounded-full bg-frost blur-3xl"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:pb-24 lg:pt-20">
            <div>
              <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-primary shadow-card">
                <span className="size-2 animate-pulse-dot rounded-full bg-whatsapp" />
                Atendendo hoje em São Paulo
              </span>
              <h1 className="animate-rise mt-6 text-4xl font-bold leading-[1.05] text-balance sm:text-5xl lg:text-6xl [animation-delay:80ms]">
                Seu ar condicionado gelando{" "}
                <span className="text-primary">como novo</span>, sem dor de
                cabeça.
              </h1>
              <p className="animate-rise mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground [animation-delay:160ms]">
                Instalação, corretiva, preventiva e higienização de ar
                condicionado com técnico de confiança. Chame no WhatsApp e
                resolva hoje mesmo.
              </p>
              <div className="animate-rise mt-8 flex flex-wrap items-center gap-4 [animation-delay:240ms]">
                <WhatsAppButton href={WA_DEFAULT}>
                  Pedir orçamento grátis
                </WhatsAppButton>
                <a
                  href="tel:+5511949104621"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 font-display text-base font-semibold text-foreground shadow-card transition-all hover:-translate-y-0.5"
                >
                  <Phone className="size-5 text-primary" />
                  (11) 94910-4621
                </a>
              </div>
              <div className="animate-rise mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground [animation-delay:320ms]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-primary" /> Atendimento
                  em até 24h
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-primary" /> Garantia de 7
                  dias
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-primary" /> Técnicos
                  certificados
                </span>
              </div>
            </div>

            <div className="animate-rise relative [animation-delay:200ms]">
              <div className="overflow-hidden rounded-3xl border border-border shadow-frost">
                <img
                  src={heroImage}
                  alt="Técnico da JI CLIMATIZA instalando ar condicionado split"
                  className="aspect-[4/5] w-full object-cover"
                  width={1024}
                  height={1280}
                />
              </div>
              <div className="absolute -bottom-5 left-5 rounded-2xl border border-border bg-card px-5 py-4 shadow-card">
                <p className="font-display text-2xl font-bold text-primary">
                  4,9 <Star className="inline size-4 fill-sun text-sun" />
                </p>
                <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                  Avaliação dos clientes
                </p>
              </div>
              <div className="absolute -top-4 right-5 rounded-2xl bg-navy px-4 py-3 shadow-card">
                <p className="font-display text-sm font-semibold text-navy-foreground">
                  300+ clientes
                </p>
                <p className="text-[11px] text-navy-foreground/60">
                  satisfeitos em SP
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Oferta em destaque */}
        <section className="border-y border-border bg-frost">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 lg:flex-row">
            <div className="text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Oferta especial
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                Higienização de Split até 12.000 BTUs
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Por unidade · Dinheiro ou PIX · Residências e pequenos comércios
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm text-muted-foreground line-through">
                  R$ 280
                </p>
                <p className="font-display text-4xl font-bold text-primary">
                  R$ 250
                </p>
              </div>
              <WhatsAppButton
                href={wa(
                  "Olá! Quero aproveitar a promoção de higienização Split até 12.000 BTUs por R$ 250!"
                )}
              >
                Aproveitar oferta
              </WhatsAppButton>
            </div>
          </div>
        </section>

        {/* Serviços de ar condicionado */}
        <section id="servicos" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Nossa especialidade
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-balance sm:text-4xl">
              Ar condicionado é o nosso negócio
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Quatro frentes que resolvem de verdade: instalamos, consertamos,
              mantemos e higienizamos. Atendimento residencial e comercial.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {acServices.map((s) => (
              <article
                key={s.title}
                className={`group relative flex min-h-[280px] flex-col rounded-3xl border p-6 transition-all hover:-translate-y-1.5 ${
                  s.featured
                    ? "border-primary/40 bg-primary text-primary-foreground shadow-frost"
                    : "border-border bg-card shadow-card hover:border-primary/40"
                }`}
              >
                <div
                  className={`grid size-12 place-items-center rounded-2xl ${
                    s.featured
                      ? "bg-primary-foreground/15 text-primary-foreground"
                      : "bg-frost text-primary"
                  }`}
                >
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold leading-snug">
                  {s.title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    s.featured
                      ? "text-primary-foreground/85"
                      : "text-muted-foreground"
                  }`}
                >
                  {s.description}
                </p>
                <div className="mt-auto pt-5">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${
                      s.featured
                        ? "bg-primary-foreground/15 text-primary-foreground"
                        : "bg-frost text-primary"
                    }`}
                  >
                    {s.tag}
                  </span>
                  <a
                    href={wa(s.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-3 flex items-center gap-1.5 text-sm font-bold transition-all group-hover:gap-2.5 ${
                      s.featured ? "text-primary-foreground" : "text-primary"
                    }`}
                  >
                    Solicitar no WhatsApp <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Antes e depois */}
        <section className="bg-navy py-20 text-navy-foreground lg:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Resultados reais
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-balance sm:text-4xl">
                Veja a diferença com seus próprios olhos
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-navy-foreground/70">
                Fungos, bactérias e ácaros se acumulam no seu aparelho. Uma
                higienização profunda devolve ar limpo, elimina odores e ainda
                economiza até 20% na conta de energia.
              </p>
              <ul className="mt-6 space-y-3 text-sm font-medium">
                {[
                  "Elimina fungos, bactérias e odores",
                  "Economia de até 20% na conta de energia",
                  "Vida útil prolongada do equipamento",
                  "Processo limpo, com proteção total da parede",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-5 shrink-0 text-whatsapp" />
                    {item}
                  </li>
                ))}
              </ul>
              <WhatsAppButton
                href={wa(
                  "Olá! Vi as fotos de antes e depois e quero agendar uma higienização!"
                )}
                className="mt-8"
              >
                Quero meu ar assim também
              </WhatsAppButton>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-navy-foreground/10 shadow-frost">
                <img
                  src={beforeAfterImage}
                  alt="Filtro de ar condicionado antes e depois da higienização"
                  className="aspect-[4/3] w-full object-cover"
                  width={1280}
                  height={960}
                  loading="lazy"
                />
              </div>
              <div className="absolute left-4 top-4 rounded-full bg-foreground/80 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-background">
                Antes
              </div>
              <div className="absolute right-4 top-4 rounded-full bg-whatsapp px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-whatsapp-foreground">
                Depois
              </div>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Simples e rápido
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              3 passos para ar gelado
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Chame no WhatsApp",
                text: "Envie uma mensagem e receba resposta em menos de 5 minutos.",
              },
              {
                step: "02",
                title: "Escolha o melhor dia",
                text: "Agendamos no horário mais conveniente para você.",
              },
              {
                step: "03",
                title: "Ar limpo e gelando",
                text: "Serviço feito com garantia e seu ar como novo.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-3xl border border-border bg-card p-8 text-center shadow-card"
              >
                <p className="font-display text-5xl font-bold text-frost-deep">
                  {s.step}
                </p>
                <h3 className="mt-4 font-display text-xl font-bold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Serviços elétricos (secundário) */}
        <section id="eletrica" className="scroll-mt-24 border-y border-border bg-secondary py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.6fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                  Também resolvemos
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                  Serviços elétricos
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Pequenos serviços elétricos para deixar sua casa segura e
                  funcionando — o complemento perfeito para o seu ar.
                </p>
                <a
                  href={wa("Olá! Preciso de um serviço elétrico.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-all hover:gap-2.5"
                >
                  Chamar para serviço elétrico <span aria-hidden>→</span>
                </a>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {electricalServices.map((s) => (
                  <a
                    key={s.title}
                    href={wa(s.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40"
                  >
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-frost text-primary">
                      <s.icon className="size-5" />
                    </div>
                    <span className="text-sm font-semibold">{s.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 lg:py-24">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Depoimentos
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Clientes reais, ar gelado de verdade
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-3xl border border-border bg-card p-7 shadow-card"
              >
                <div className="flex gap-1" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-sun text-sun" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5">
                  <p className="font-display text-sm font-bold">{t.name}</p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="size-3" /> {t.place}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 border-t border-border bg-frost py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Dúvidas frequentes
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Perguntas comuns
              </h2>
            </div>
            <div className="mt-10 rounded-3xl border border-border bg-card px-6 shadow-card sm:px-8">
              {faqs.map((f) => (
                <FaqItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="relative overflow-hidden bg-navy py-24 text-center text-navy-foreground">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 size-[500px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/15 bg-navy-foreground/5 px-4 py-1.5 text-xs font-semibold text-navy-foreground/80">
              <span className="size-2 animate-pulse-dot rounded-full bg-whatsapp" />
              Estamos online agora
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold text-balance sm:text-5xl">
              Não deixe o calor vencer. Chame a JI CLIMATIZA.
            </h2>
            <p className="mt-4 text-lg text-navy-foreground/70">
              Fale direto com nosso técnico. Orçamento sem compromisso e
              resposta garantida em menos de 5 minutos.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <WhatsAppButton href={WA_DEFAULT}>
                Chamar no WhatsApp
              </WhatsAppButton>
              <a
                href="tel:+5511949104621"
                className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/25 px-7 py-3.5 font-display text-base font-semibold text-navy-foreground transition-all hover:-translate-y-0.5 hover:bg-navy-foreground/5"
              >
                <Phone className="size-5" />
                Ligar agora
              </a>
            </div>
            <p className="mt-7 text-sm text-navy-foreground/50">
              ✓ Sem compromisso · ✓ Preço justo · ✓ Profissional certificado
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-navy-foreground/10 bg-navy py-10 text-navy-foreground/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
              <AirVent className="size-4" />
            </div>
            <p className="font-display text-base font-bold text-navy-foreground">
              JI CLIMATIZA
            </p>
          </div>
          <p className="text-xs">
            Ar condicionado e elétrica em São Paulo · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>

      {/* Botão flutuante WhatsApp */}
      <a
        href={WA_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 text-sm font-bold text-whatsapp-foreground shadow-frost transition-all hover:-translate-y-1 hover:brightness-110"
      >
        <WhatsAppIcon className="size-5" />
        <span className="hidden sm:inline">Fale conosco</span>
      </a>
    </div>
  );
}
