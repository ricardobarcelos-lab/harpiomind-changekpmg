import { useState, useMemo } from "react";
import {
  Briefcase,
  TrendingUp,
  Target,
  Users,
  Building2,
  GraduationCap,
  ShieldCheck,
  Lock,
  Award,
  Lightbulb,
  AlertTriangle,
  BarChart3,
  Compass,
  Crown,
} from "lucide-react";
import { candidates } from "@/data/candidates";
import CandidateCard from "@/components/CandidateCard";
import HarpioMindDialog from "@/components/HarpioMindDialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const navSections = [
  { id: "contexto", label: "01 · Contexto" },
  { id: "scorecard", label: "02 · Scorecard" },
  { id: "empresa", label: "03 · KPMG" },
  { id: "vaga", label: "04 · A Vaga" },
  { id: "perfil", label: "05 · Perfil Ideal" },
  { id: "time", label: "06 · Time" },
  { id: "candidatos", label: "07 · Candidatos" },
  { id: "pacote", label: "08 · Pacote" },
];

const heroStats = [
  { value: "20", label: "Candidatos mapeados" },
  { value: "8.5", label: "Score médio Top 5" },
  { value: "8–10", label: "Semanas estimadas" },
  { value: "R$ 7,5k", label: "Benchmark interno" },
];

const scoreChips = [
  { value: "8.4", label: "Aderência" },
  { value: "7.2", label: "Probabilidade" },
  { value: "5.5", label: "Custo-benefício" },
  { value: "7.0", label: "Dificuldade" },
  { value: "6.8", label: "Velocidade" },
  { value: "9.1", label: "Hunting Big4" },
];

const Index = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const [filter, setFilter] = useState<"all" | "big4" | "change" | "adj">("all");

  const filteredCandidates = useMemo(() => {
    if (filter === "all") return candidates;
    if (filter === "big4")
      return candidates.filter((c) =>
        [1, 2, 3, 4, 5, 6, 7, 14, 15, 19].includes(c.rank)
      );
    if (filter === "change")
      return candidates.filter((c) => [3, 9, 10, 11, 12, 13].includes(c.rank));
    return candidates.filter((c) => [8, 16, 17, 18, 20].includes(c.rank));
  }, [filter]);

  const openCandidate = (rank: number) => setSelectedCandidate(rank);
  const closeCandidate = () => setSelectedCandidate(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-14 bg-kpmg-dark/95 backdrop-blur-xl border-b border-white/10 flex items-center gap-1 px-6 overflow-x-auto">
        <span className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-gold-light pr-4 mr-2 border-r border-white/10 whitespace-nowrap">
          KPMG × Harpio
        </span>
        {navSections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="text-[10px] font-semibold tracking-[0.08em] uppercase text-white/65 px-3 py-1.5 rounded-md hover:bg-white/10 hover:text-white transition-smooth whitespace-nowrap"
          >
            {s.label}
          </a>
        ))}
      </nav>

      {/* HERO */}
      <header className="bg-gradient-hero relative overflow-hidden pt-24 pb-16 px-6 sm:px-12 lg:px-16">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-kpmg-light/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-1/3 w-[600px] h-[300px] bg-kpmg-accent/15 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <div className="flex items-center gap-4">
              <span className="font-display text-2xl font-bold text-white tracking-tight">
                Harpio<span className="text-gold-light">.</span>
              </span>
              <span className="w-px h-8 bg-white/30" />
              <span className="font-extrabold text-2xl text-white tracking-[-0.04em]">KPMG</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold text-gold-light text-[10px] font-bold tracking-[0.12em] uppercase">
              <Lock className="w-3 h-3" />
              Estritamente Confidencial
            </div>
          </div>

          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-kpmg-accent mb-3">
            Relatório Estratégico de Mapeamento
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.1] mb-4 max-w-4xl">
            Consultor RH —{" "}
            <em className="not-italic text-gold-light italic">Transformação Organizacional</em>
          </h1>
          <p className="text-sm text-white/70 max-w-2xl mb-10 leading-relaxed">
            Mapeamento Top 20 de talentos para a área de Human Capital Advisory & M&A People Diligence
            da KPMG Brasil. Perfis blindados — identidade liberada apenas via plano Harpio Mind.
          </p>

          <div className="flex flex-wrap gap-x-10 gap-y-6 pt-8 border-t border-white/15">
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-white leading-none">{s.value}</div>
                <div className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white/50 mt-1.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Score chips bar */}
      <div className="bg-kpmg-dark border-b-2 border-kpmg-blue px-6 sm:px-12 lg:px-16 py-5">
        <div className="max-w-7xl mx-auto flex gap-6 items-center overflow-x-auto">
          {scoreChips.map((c, idx) => (
            <div key={c.label} className="flex items-center gap-6 flex-shrink-0">
              <div className="flex flex-col items-center gap-1 min-w-[100px]">
                <span className="text-2xl font-extrabold text-gold-light leading-none">{c.value}</span>
                <span className="text-[9px] font-semibold tracking-[0.1em] uppercase text-white/50 text-center">
                  {c.label}
                </span>
              </div>
              {idx < scoreChips.length - 1 && <div className="w-px h-10 bg-white/10" />}
            </div>
          ))}
        </div>
      </div>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 space-y-20">
        {/* 01 · Contexto */}
        <Section id="contexto" num="01" title="Contexto Estratégico" icon={Compass}>
          <div className="grid md:grid-cols-3 gap-5">
            <InfoCard
              icon={Briefcase}
              title="Cliente"
              body="KPMG Brasil — uma das Big4. Linha de serviço Human Capital Advisory dentro de Deal Advisory."
            />
            <InfoCard
              icon={Target}
              title="Briefing"
              body="Consultor pleno bilíngue, com background em consultoria (preferencialmente Big4 ou A&M) e exposição a M&A People Diligence ou Change Management."
            />
            <InfoCard
              icon={TrendingUp}
              title="Mercado"
              body="Hunting ground concorrido em São Paulo. Faixa salarial KPMG em 5–25% abaixo do mercado para o nível pleno — exige proposta de valor sofisticada."
            />
          </div>
        </Section>

        {/* 02 · Scorecard */}
        <Section id="scorecard" num="02" title="Scorecard de Dificuldade" icon={BarChart3}>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-card rounded-2xl p-6 shadow-elegant border border-border">
              <h4 className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-kpmg-dark mb-5">
                Indicadores-chave
              </h4>
              <div className="space-y-4">
                {[
                  { label: "Aderência média Top 5", value: 84 },
                  { label: "Probabilidade de fechamento", value: 72 },
                  { label: "Custo-benefício do pacote", value: 55 },
                  { label: "Dificuldade de busca", value: 70 },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="flex justify-between text-[11px] font-semibold mb-1.5">
                      <span className="text-text-mid">{m.label}</span>
                      <span className="text-kpmg-dark font-bold">{m.value}/100</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-kpmg-blue to-kpmg-light rounded-full transition-smooth"
                        style={{ width: `${m.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-kpmg-dark to-kpmg-blue rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gold/20 blur-2xl" />
              <div className="relative">
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-gold-light mb-3">
                  Recomendação
                </p>
                <h4 className="font-display text-2xl font-bold mb-3 leading-tight">
                  Estratégia de busca em <em className="text-gold-light not-italic italic">três frentes</em>
                </h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex gap-2">
                    <Award className="w-4 h-4 text-gold-light flex-shrink-0 mt-0.5" />
                    <span>Hunting Big4/A&M (perfis 1–7, 14, 15, 19)</span>
                  </li>
                  <li className="flex gap-2">
                    <Lightbulb className="w-4 h-4 text-gold-light flex-shrink-0 mt-0.5" />
                    <span>Change & HR Transformation (3, 9–13)</span>
                  </li>
                  <li className="flex gap-2">
                    <Crown className="w-4 h-4 text-gold-light flex-shrink-0 mt-0.5" />
                    <span>Adjacentes premium (8, 16–18)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* 03 · Empresa */}
        <Section id="empresa" num="03" title="Sobre a Empresa — KPMG" icon={Building2}>
          <div className="bg-card rounded-2xl p-7 shadow-elegant border border-border">
            <div className="grid md:grid-cols-3 gap-5">
              <Fact label="Presença Global" value="145+ países" />
              <Fact label="Headcount Mundial" value="270k+ profissionais" />
              <Fact label="Brasil" value="22 escritórios" />
            </div>
            <p className="text-sm text-text-mid leading-relaxed mt-5">
              A linha Human Capital Advisory atua na intersecção entre consultoria de RH,
              transformação organizacional e suporte a transações (M&A People Diligence,
              Carve-Out, PMI). É um hub de conhecimento de alto valor agregado dentro de Deal Advisory.
            </p>
          </div>
        </Section>

        {/* 04 · Vaga */}
        <Section id="vaga" num="04" title="A Vaga em Detalhes" icon={Briefcase}>
          <div className="grid md:grid-cols-2 gap-5">
            <InfoCard
              icon={Target}
              title="Missão"
              body="Realizar diagnósticos organizacionais e mapear impactos de mudança (change impact assessment) em transações e projetos de transformação."
            />
            <InfoCard
              icon={ShieldCheck}
              title="Entregáveis"
              body="PowerPoint executivo, PMO de Integração, análise de remuneração, mapeamento de stakeholders e plano de change."
            />
          </div>
        </Section>

        {/* 05 · Perfil Ideal */}
        <Section id="perfil" num="05" title="Perfil Ideal & Hard Skills" icon={GraduationCap}>
          <div className="grid md:grid-cols-3 gap-5">
            <SkillCard
              title="Indispensáveis"
              tone="high"
              items={["Inglês fluente", "Big4 ou A&M", "Change Management", "Excel + PowerPoint executivo"]}
            />
            <SkillCard
              title="Desejáveis"
              tone="mid"
              items={["Prosci® / ADKAR", "PMI / PMP", "Experiência M&A People", "Espanhol"]}
            />
            <SkillCard
              title="Diferenciais"
              tone="gold"
              items={["MBA top-tier", "Experiência LATAM", "Publicações / palestras", "Network executivo"]}
            />
          </div>
        </Section>

        {/* 06 · Time & Organograma */}
        <Section id="time" num="06" title="Time Direto & Organograma Presumido" icon={Users}>
          <div className="bg-card rounded-2xl p-7 shadow-elegant border border-border overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-kpmg-blue text-white text-[10px] font-bold tracking-[0.1em] uppercase">
                  <th className="px-4 py-3 text-left">Nível</th>
                  <th className="px-4 py-3 text-left">Referência</th>
                  <th className="px-4 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="text-text-mid">
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-semibold text-kpmg-dark">Partner / Líder</td>
                  <td className="px-4 py-3">Nível acima do gestor</td>
                  <td className="px-4 py-3">Ativo</td>
                </tr>
                <tr className="border-b border-border bg-muted/40">
                  <td className="px-4 py-3 font-semibold text-kpmg-dark">Sr. Manager</td>
                  <td className="px-4 py-3">Hiring Manager</td>
                  <td className="px-4 py-3">Ativo</td>
                </tr>
                <tr className="border-b border-border bg-gold/10">
                  <td className="px-4 py-3 font-bold text-kpmg-dark">Consultor Pleno ← VAGA</td>
                  <td className="px-4 py-3">Posição a ser preenchida</td>
                  <td className="px-4 py-3 font-bold text-gold">Em busca</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-kpmg-dark">Consultor Júnior</td>
                  <td className="px-4 py-3">Time de apoio</td>
                  <td className="px-4 py-3">Ativo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* 07 · CANDIDATOS */}
        <Section id="candidatos" num="07" title="Mapeamento de Candidatos — Top 20" icon={Users}>
          <div className="bg-gradient-harpio rounded-2xl p-5 mb-6 flex items-start gap-3 text-white relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold/15 blur-2xl" />
            <Lock className="w-5 h-5 text-gold-light flex-shrink-0 mt-0.5 relative" />
            <div className="relative">
              <p className="font-bold text-sm mb-1">Identidades blindadas</p>
              <p className="text-[12.5px] text-white/70 leading-relaxed">
                Os 20 perfis abaixo estão mapeados como{" "}
                <span className="text-gold-light font-semibold">"Pessoa candidata N"</span>. Para
                desbloquear nome, LinkedIn, contato e perfil completo, contrate o plano Harpio Mind.
              </p>
            </div>
          </div>

          <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)} className="mb-6">
            <TabsList className="bg-muted h-auto p-1.5 flex-wrap">
              <TabsTrigger value="all" className="text-xs data-[state=active]:bg-kpmg-blue data-[state=active]:text-white">
                Todos (20)
              </TabsTrigger>
              <TabsTrigger value="big4" className="text-xs data-[state=active]:bg-kpmg-blue data-[state=active]:text-white">
                Big4 / A&M (10)
              </TabsTrigger>
              <TabsTrigger value="change" className="text-xs data-[state=active]:bg-kpmg-blue data-[state=active]:text-white">
                Change / HR Trans. (6)
              </TabsTrigger>
              <TabsTrigger value="adj" className="text-xs data-[state=active]:bg-kpmg-blue data-[state=active]:text-white">
                Adjacentes (5)
              </TabsTrigger>
            </TabsList>
            <TabsContent value={filter} className="mt-6">
              <div className="grid md:grid-cols-2 gap-5">
                {filteredCandidates.map((c) => (
                  <CandidateCard key={c.rank} candidate={c} onClick={() => openCandidate(c.rank)} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Top 5s */}
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            <PodiumCard
              icon="⭐"
              title="Top 5 mais aderentes"
              items={["Pessoa candidata 1 — 9.2", "Pessoa candidata 2 — 9.0", "Pessoa candidata 3 — 8.8", "Pessoa candidata 4 — 8.7", "Pessoa candidata 5 — 8.5"]}
            />
            <PodiumCard
              icon="🔒"
              title="Top 5 mais difíceis de atrair"
              items={["Pessoa candidata 4", "Pessoa candidata 9", "Pessoa candidata 2", "Pessoa candidata 13", "Pessoa candidata 11"]}
            />
            <PodiumCard
              icon="💎"
              title="Top 5 melhor custo-aderência"
              items={["Pessoa candidata 3", "Pessoa candidata 6", "Pessoa candidata 8", "Pessoa candidata 17", "Pessoa candidata 12"]}
            />
          </div>
        </Section>

        {/* 08 · Pacote */}
        <Section id="pacote" num="08" title="Análise Crítica do Pacote" icon={AlertTriangle}>
          <div className="bg-card rounded-2xl p-6 shadow-elegant border border-border overflow-x-auto">
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-kpmg-dark mb-5">
              Benchmark Salarial · Consultor RH/M&A · São Paulo 2025-26
            </h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-kpmg-blue text-white text-[10px] font-bold tracking-[0.1em] uppercase">
                  <th className="px-4 py-3 text-left">Nível</th>
                  <th className="px-4 py-3 text-left">Faixa Estimada</th>
                  <th className="px-4 py-3 text-left">Média</th>
                  <th className="px-4 py-3 text-left">KPMG</th>
                  <th className="px-4 py-3 text-left">Gap</th>
                </tr>
              </thead>
              <tbody className="text-text-mid">
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-semibold text-kpmg-dark">Júnior</td>
                  <td className="px-4 py-3">R$ 4.500 – R$ 6.500</td>
                  <td className="px-4 py-3">R$ 5.500</td>
                  <td className="px-4 py-3">—</td>
                  <td className="px-4 py-3">—</td>
                </tr>
                <tr className="border-b border-border bg-gold/10">
                  <td className="px-4 py-3 font-bold text-kpmg-dark">Pleno ← VAGA</td>
                  <td className="px-4 py-3 font-semibold">R$ 7.000 – R$ 10.500</td>
                  <td className="px-4 py-3 font-semibold">R$ 8.500</td>
                  <td className="px-4 py-3 font-semibold">R$ 7.000 – R$ 8.000</td>
                  <td className="px-4 py-3">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gold/20 text-gold border border-gold/30">
                      −5% a −25%
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-kpmg-dark">Sênior</td>
                  <td className="px-4 py-3">R$ 11.000 – R$ 16.500</td>
                  <td className="px-4 py-3">R$ 13.500</td>
                  <td className="px-4 py-3">—</td>
                  <td className="px-4 py-3">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-kpmg-dark text-white/60 text-center text-[11px] py-8 border-t border-white/10">
        <p className="font-bold tracking-[0.15em] uppercase text-gold-light mb-2">
          Harpio Mind · Mapeamento Estratégico
        </p>
        <p>Documento estritamente confidencial · KPMG × Harpio · 2025</p>
      </footer>

      {/* Dialog Harpio Mind */}
      <HarpioMindDialog
        open={selectedCandidate !== null}
        onOpenChange={(open) => !open && closeCandidate()}
        candidateLabel={selectedCandidate ? `Pessoa candidata ${selectedCandidate}` : ""}
      />
    </div>
  );
};

/* ───── Sub-componentes locais ───── */

const Section = ({
  id,
  num,
  title,
  icon: Icon,
  children,
}: {
  id: string;
  num: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) => (
  <section id={id} className="scroll-mt-20">
    <div className="flex items-center gap-4 mb-7">
      <div className="w-10 h-10 rounded-xl bg-kpmg-blue text-white text-[13px] font-extrabold flex items-center justify-center">
        {num}
      </div>
      <Icon className="w-5 h-5 text-kpmg-mid" />
      <h2 className="text-xl sm:text-2xl font-extrabold text-kpmg-dark tracking-[-0.02em]">{title}</h2>
      <div className="flex-1 h-px bg-gradient-divider ml-2" />
    </div>
    {children}
  </section>
);

const InfoCard = ({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) => (
  <div className="bg-card rounded-2xl p-6 shadow-elegant border border-border transition-smooth hover:shadow-premium hover:-translate-y-0.5">
    <div className="w-10 h-10 rounded-lg bg-kpmg-blue/10 text-kpmg-blue flex items-center justify-center mb-4">
      <Icon className="w-5 h-5" />
    </div>
    <h3 className="font-bold text-kpmg-dark mb-2">{title}</h3>
    <p className="text-[13px] text-text-mid leading-relaxed">{body}</p>
  </div>
);

const Fact = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-xl bg-muted/50 p-4">
    <p className="text-[9px] font-bold tracking-[0.12em] uppercase text-text-light mb-1">{label}</p>
    <p className="text-lg font-extrabold text-kpmg-dark">{value}</p>
  </div>
);

const SkillCard = ({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "high" | "mid" | "gold";
}) => {
  const palette = {
    high: "border-kpmg-accent/40 bg-kpmg-accent/5",
    mid: "border-gold/40 bg-gold/5",
    gold: "border-gold bg-gradient-to-br from-gold/10 to-gold-light/5",
  }[tone];

  return (
    <div className={`rounded-2xl p-5 border-2 ${palette} shadow-elegant`}>
      <h4 className="font-extrabold text-kpmg-dark mb-3 text-sm tracking-tight">{title}</h4>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-[13px] text-text-mid">
            <span className="w-1.5 h-1.5 rounded-full bg-kpmg-blue flex-shrink-0 mt-1.5" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
};

const PodiumCard = ({
  icon,
  title,
  items,
}: {
  icon: string;
  title: string;
  items: string[];
}) => (
  <div className="bg-card rounded-2xl p-5 border border-border shadow-elegant">
    <div className="flex items-center gap-2 mb-4">
      <span className="text-xl">{icon}</span>
      <h4 className="font-extrabold text-kpmg-dark text-sm tracking-tight">{title}</h4>
    </div>
    <ol className="space-y-1.5">
      {items.map((it, idx) => (
        <li key={it} className="flex items-center gap-3 text-[12.5px]">
          <span className="w-5 h-5 rounded-md bg-kpmg-blue/10 text-kpmg-blue text-[10px] font-bold flex items-center justify-center flex-shrink-0">
            {idx + 1}
          </span>
          <span className="text-text-mid">{it}</span>
        </li>
      ))}
    </ol>
  </div>
);

export default Index;
