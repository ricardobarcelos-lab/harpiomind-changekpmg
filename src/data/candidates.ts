// Top 20 candidatos mapeados — IDENTIDADE BLINDADA
// Os nomes reais foram removidos. Todos exibidos como "Pessoa candidata N".
// Descrições higienizadas: sem datas, sem tempo de casa, sem instituições de ensino
// e sem métricas públicas (seguidores) que permitam cruzamento de identidade.
// Acesso ao perfil completo somente via plano Harpio Mind.

export type AxisLevel = "high" | "mid" | "low";

export interface CandidateAxis {
  level: AxisLevel;
  label: string;
}

export interface Candidate {
  rank: number;
  score: string;
  scoreLabel?: string;
  company: string;
  role: string;
  location: string;
  headerSubtitle: string;
  description: string;
  axes: CandidateAxis[];
  salaryLabel: string;
  salaryValue: string;
  isBenchmark?: boolean;
  isTop?: boolean;
}

export const candidates: Candidate[] = [
  {
    rank: 1,
    score: "9.2",
    isTop: true,
    headerSubtitle: "Accenture · Talent & Organization Consultant",
    company: "Accenture (Talent & Organization)",
    role: "Consultant – Change Management",
    location: "São Paulo, SP",
    description:
      "Consultora júnior-pleno em projetos de transformação organizacional e Change Management na Accenture T&O. Experiência em múltiplos projetos simultâneos e contexto de consultoria de alta pressão. Inglês fluente documentado.",
    axes: [
      { level: "high", label: "✅ Aderência setorial" },
      { level: "high", label: "✅ Aderência funcional" },
      { level: "high", label: "✅ Consultoria Big" },
      { level: "mid", label: "⚠️ M&A-RH direto" },
    ],
    salaryLabel: "Pacote estimado",
    salaryValue: "R$ 8.500 – R$ 11.000",
  },
  {
    rank: 2,
    score: "9.0",
    isTop: true,
    headerSubtitle: "Alvarez & Marsal · M&A Associate",
    company: "Alvarez & Marsal (Financial Due Diligence)",
    role: "Associate – FDD / Transaction Advisory",
    location: "São Paulo, SP",
    description:
      "Background em M&A Transaction Services com experiência em due diligence financeira e análise de estruturas de custo. Perfil analítico sólido. Passagem anterior por outra Big Four. Naturalmente bilíngue pelo ambiente A&M.",
    axes: [
      { level: "high", label: "✅ M&A direto" },
      { level: "high", label: "✅ A&M hunting ground" },
      { level: "high", label: "✅ Financial modeling" },
      { level: "mid", label: "⚠️ HR-específico" },
    ],
    salaryLabel: "Pacote estimado",
    salaryValue: "R$ 9.000 – R$ 12.000",
  },
  {
    rank: 3,
    score: "8.8",
    isTop: true,
    headerSubtitle: "Deloitte · Consultora de Change Management",
    company: "Deloitte Human Capital",
    role: "Consultora – Change Management",
    location: "Osasco, SP",
    description:
      "Consultora júnior de Change Management na Deloitte – exatamente o hunting ground solicitado pelo stakeholder. Ambiente Big4 com exposição a múltiplos clientes e projetos de transformação organizacional.",
    axes: [
      { level: "high", label: "✅ Deloitte Human Capital" },
      { level: "high", label: "✅ Change Management" },
      { level: "mid", label: "⚠️ M&A-HR direto" },
      { level: "mid", label: "⚠️ Inglês a validar" },
    ],
    salaryLabel: "Pacote estimado",
    salaryValue: "R$ 6.500 – R$ 8.500",
  },
  {
    rank: 4,
    score: "8.7",
    isTop: true,
    headerSubtitle: "Accenture · M&A Transaction Services Specialist",
    company: "Accenture (Corporate Development)",
    role: "Transaction Services Specialist",
    location: "São Paulo, SP",
    description:
      "Especialista em Transaction Services / Corporate Development na Accenture – perfil incomum que combina M&A com consultoria de grandes projetos. Ampla exposição ao tema. Accenture exige inglês operacional.",
    axes: [
      { level: "high", label: "✅ M&A + Accenture" },
      { level: "high", label: "✅ Transaction Services" },
      { level: "high", label: "✅ Inglês provável" },
      { level: "mid", label: "⚠️ HR-específico" },
    ],
    salaryLabel: "Pacote estimado",
    salaryValue: "R$ 9.500 – R$ 13.000",
  },
  {
    rank: 5,
    score: "8.5",
    isTop: true,
    headerSubtitle: "PwC Brasil · M&A Transaction Services",
    company: "PwC Brasil (Deals / M&A)",
    role: "Senior Analyst – M&A Transaction Services",
    location: "São Paulo, SP",
    description:
      "Senior Analyst em M&A Transaction Services na PwC. Perfil sólido em due diligence e análise de transações. Inglês operacional para projetos internacionais esperado em PwC.",
    axes: [
      { level: "high", label: "✅ PwC M&A direto" },
      { level: "high", label: "✅ Transaction Services" },
      { level: "mid", label: "⚠️ People/HR-específico" },
      { level: "high", label: "✅ Inglês PwC" },
    ],
    salaryLabel: "Pacote estimado",
    salaryValue: "R$ 8.000 – R$ 11.000",
  },
  {
    rank: 6,
    score: "8.3",
    headerSubtitle: "Deloitte · Business Analyst – Customer Strategy",
    company: "Deloitte",
    role: "Business Analyst – Customer Strategy & Design",
    location: "São Paulo, SP",
    description:
      "Analista júnior de consultoria na Deloitte, com perfil em análise estratégica e design. Perfil para ser trazido em promoção ao pleno, como estratégia alinhada ao briefing do stakeholder.",
    axes: [
      { level: "high", label: "✅ Deloitte" },
      { level: "mid", label: "⚠️ Não HR direto" },
      { level: "mid", label: "⚠️ Inglês a validar" },
      { level: "high", label: "✅ Promoção possível" },
    ],
    salaryLabel: "Pacote estimado",
    salaryValue: "R$ 6.000 – R$ 8.000",
  },
  {
    rank: 7,
    score: "8.1",
    headerSubtitle: "PwC Brasil · M&A / Transaction Services",
    company: "PwC Brasil",
    role: "Advisory Associate III – M&A Deals",
    location: "São Paulo, SP",
    description:
      "Perfil M&A Due Diligence em PwC. Nível Associate III (≈ pleno-sênior) em Deals/Transaction Services. Background analítico em due diligence de transações. Perfil para lateralizar ao HR M&A.",
    axes: [
      { level: "high", label: "✅ PwC Transaction Services" },
      { level: "high", label: "✅ Due Diligence" },
      { level: "mid", label: "⚠️ RH específico" },
    ],
    salaryLabel: "Pacote estimado",
    salaryValue: "R$ 8.500 – R$ 10.500",
  },
  {
    rank: 8,
    score: "7.9",
    headerSubtitle: "EXEC · Senior Analyst Human Capital Projects",
    company: "EXEC (Human Capital)",
    role: "Senior Analyst – Human Capital Projects",
    location: "São Paulo, SP",
    description:
      "Senior Analyst em Human Capital Projects na EXEC. Perfil de consultoria de RH com foco em projetos. Boa visibilidade de mercado. Validação de inglês é crítica.",
    axes: [
      { level: "high", label: "✅ Human Capital direto" },
      { level: "mid", label: "⚠️ Não Big4" },
      { level: "mid", label: "⚠️ M&A a validar" },
    ],
    salaryLabel: "Pacote estimado",
    salaryValue: "R$ 7.500 – R$ 10.000",
  },
  {
    rank: 9,
    score: "7.8",
    headerSubtitle: "Ferrero · People & Org South America Manager",
    company: "Ferrero",
    role: "People & Organization South America Region Manager",
    location: "São Paulo, SP",
    description:
      "Certificação Prosci® em Change Management. Trajetória em HR Transformation e projetos. Perfil de corporativo mais sênior para a vaga – adequada para o time mas pode estar acima do level pleno.",
    axes: [
      { level: "high", label: "✅ Change Management Prosci" },
      { level: "high", label: "✅ HR Transformation" },
      { level: "low", label: "❌ Perfil mais sênior" },
      { level: "mid", label: "⚠️ Consultoria vs. corp." },
    ],
    salaryLabel: "Pacote estimado",
    salaryValue: "R$ 11.000 – R$ 16.000",
  },
  {
    rank: 10,
    score: "7.7",
    headerSubtitle: "DPSP · Ex-Accenture Change Management",
    company: "Grupo DPSP (ex-Accenture T&O)",
    role: "Change Management Specialist – Digital Transformation",
    location: "São Paulo, SP",
    description:
      "Background na Accenture Talent & Organization (exatamente o hunting ground). Atualmente em corporativo, mas com sólida base de consultoria. Perfil a ser atraído de volta para ambiente de consultoria com proposta de valor.",
    axes: [
      { level: "high", label: "✅ Ex-Accenture T&O" },
      { level: "high", label: "✅ Change Management" },
      { level: "mid", label: "⚠️ Saiu de consultoria" },
    ],
    salaryLabel: "Pacote estimado",
    salaryValue: "R$ 8.000 – R$ 10.500",
  },
  {
    rank: 11,
    score: "7.5",
    headerSubtitle: "Afya · Senior PMO HR Transformation & Change",
    company: "Afya (Educação Médica)",
    role: "Senior PMO | HR Transformation & Change Management",
    location: "Belo Horizonte, MG",
    description:
      "Perfil que combina PMO, HR Transformation e Change Management – três pilares da vaga. Porém localização em BH pode exigir relocalização. Empresa aberta em bolsa, com boa governança e escala.",
    axes: [
      { level: "high", label: "✅ PMO + HR Trans. + Change" },
      { level: "low", label: "❌ BH – relocação" },
      { level: "mid", label: "⚠️ Não consultoria" },
    ],
    salaryLabel: "Pacote estimado",
    salaryValue: "R$ 9.000 – R$ 12.000",
  },
  {
    rank: 12,
    score: "7.4",
    headerSubtitle: "HR Transformation | Change Management",
    company: "A validar",
    role: "HR Transformation | Culture | Change Management",
    location: "São Paulo, SP",
    description:
      "Perfil com experiência declarada em HR Transformation e Change Management. Contexto exato da vaga. Validação de inglês e M&A-HR são os próximos passos de assessment.",
    axes: [
      { level: "high", label: "✅ HR Trans. + Change" },
      { level: "mid", label: "⚠️ M&A a validar" },
      { level: "mid", label: "⚠️ Inglês a validar" },
    ],
    salaryLabel: "Pacote estimado",
    salaryValue: "R$ 8.000 – R$ 11.000",
  },
  {
    rank: 13,
    score: "7.3",
    headerSubtitle: "Arco Educação · Sr HRBP | HR Transformation",
    company: "Arco Educação",
    role: "Sr HRBP | HR Transformation | HR Projects",
    location: "São Paulo, SP",
    description:
      "Trajetória sólida em HR Transformation e Projects. Empresa listada em bolsa com boa governança. Perfil generalista de RH com foco em projetos – pode ter M&A implícito em contexto de empresa em crescimento via aquisições.",
    axes: [
      { level: "high", label: "✅ HR Transformation" },
      { level: "mid", label: "⚠️ HRBP vs. consultoria" },
      { level: "mid", label: "⚠️ M&A a validar" },
    ],
    salaryLabel: "Pacote estimado",
    salaryValue: "R$ 10.000 – R$ 14.000",
  },
  {
    rank: 14,
    score: "7.2",
    headerSubtitle: "Alvarez & Marsal · Tax & Labor M&A Associate",
    company: "Alvarez & Marsal",
    role: "Associate | Tax and Labor – M&A",
    location: "São Paulo, SP",
    description:
      "Perfil A&M com especialidade em Tax e Labor dentro de M&A – área adjacente ao HR M&A. Conhecimento de passivos trabalhistas em transações é altamente relevante para due diligence de RH. Inglês A&M.",
    axes: [
      { level: "high", label: "✅ A&M M&A" },
      { level: "high", label: "✅ Labor em transações" },
      { level: "mid", label: "⚠️ Tax vs. HR" },
    ],
    salaryLabel: "Pacote estimado",
    salaryValue: "R$ 8.000 – R$ 11.000",
  },
  {
    rank: 15,
    score: "7.1",
    headerSubtitle: "PwC Brasil · Transaction Services M&A Sr. Associate",
    company: "PwC Brasil",
    role: "Transaction Services M&A Sr. Associate",
    location: "São Paulo, SP",
    description:
      "Sr. Associate em Transaction Services na PwC Brasil. Background sólido em M&A com exposição a due diligence. Perfil adequado para lateralizar ao HR M&A com possibilidade de promoção. Inglês garantido pelo ambiente PwC.",
    axes: [
      { level: "high", label: "✅ PwC M&A" },
      { level: "high", label: "✅ Transaction Services" },
      { level: "mid", label: "⚠️ HR-específico" },
    ],
    salaryLabel: "Pacote estimado",
    salaryValue: "R$ 9.000 – R$ 11.500",
  },
  {
    rank: 16,
    score: "7.0",
    headerSubtitle: "Russell Reynolds · Business & People Advisory",
    company: "Russell Reynolds",
    role: "Business & People Advisory Consultant",
    location: "São Paulo, SP",
    description:
      "Consultora em Business & People Advisory na Russell Reynolds. Perfil de consultoria executiva de RH. Inglês nativo ao contexto RR. Possível interesse em migrar para advisory de M&A-HR na KPMG, que oferece maior aprendizado técnico.",
    axes: [
      { level: "high", label: "✅ People Advisory" },
      { level: "high", label: "✅ Consultoria premium" },
      { level: "mid", label: "⚠️ Headhunting vs. M&A" },
    ],
    salaryLabel: "Pacote estimado",
    salaryValue: "R$ 8.500 – R$ 12.000",
  },
  {
    rank: 17,
    score: "6.9",
    headerSubtitle: "Human Capital Management · Associate BP",
    company: "A confirmar",
    role: "Associate | Business Partner",
    location: "São Paulo, SP",
    description:
      "Perfil com background em Human Capital Management e Business Partnership. Exposição a projetos de People & Organization. Avaliação de inglês e M&A-HR é pré-requisito antes de avanço.",
    axes: [
      { level: "mid", label: "⚠️ Human Capital" },
      { level: "mid", label: "⚠️ M&A a validar" },
      { level: "mid", label: "⚠️ Inglês a validar" },
    ],
    salaryLabel: "Pacote estimado",
    salaryValue: "R$ 7.000 – R$ 9.500",
  },
  {
    rank: 18,
    score: "6.8",
    headerSubtitle: "People Experience · Talent Management & Analytics",
    company: "A confirmar",
    role: "Senior People Experience | Talent Mgmt & People Analytics",
    location: "São Paulo, SP",
    description:
      "Perfil People Analytics e Talent Management. Experiência em HR Transformation e Digitalização. Perfil adjacente que pode ter curva de aprendizado em M&A, mas traz skillset analítico e de dados que complementa a área.",
    axes: [
      { level: "high", label: "✅ HR Analytics" },
      { level: "mid", label: "⚠️ M&A a validar" },
      { level: "mid", label: "⚠️ Inglês a validar" },
    ],
    salaryLabel: "Pacote estimado",
    salaryValue: "R$ 8.000 – R$ 11.000",
  },
  {
    rank: 19,
    score: "6.7",
    headerSubtitle: "PwC Brasil · Advisory Associate III – TS/FDD",
    company: "PwC Brasil",
    role: "Advisory Associate III – Transaction Services / FDD",
    location: "São Paulo, SP",
    description:
      "Perfil Financial Due Diligence em PwC Brasil. Experiência em Accounting Integration. Inglês PwC garantido. Perfil financeiro que pode transitar ao People Diligence com curva de aprendizado moderada.",
    axes: [
      { level: "high", label: "✅ PwC FDD" },
      { level: "mid", label: "⚠️ Financial vs. HR" },
      { level: "high", label: "✅ Inglês PwC" },
    ],
    salaryLabel: "Pacote estimado",
    salaryValue: "R$ 8.000 – R$ 10.500",
  },
  {
    rank: 20,
    score: "N/A",
    scoreLabel: "Benchmark",
    isBenchmark: true,
    headerSubtitle: "KPMG · Senior People & Change Consultant (Benchmark Interno)",
    company: "KPMG Brasil (interno)",
    role: "Senior People & Change Consultant",
    location: "São Paulo, SP",
    description:
      "Benchmark Interno — Profissional já na KPMG Brasil atuando em Human Capital Advisory e Change Management. Representa o perfil-espelho ideal da vaga. Serve como parâmetro de calibração de salário (R$ 7.500 citado pelo stakeholder) e de competências esperadas.",
    axes: [
      { level: "high", label: "✅ KPMG Human Capital" },
      { level: "high", label: "✅ Change Management" },
      { level: "high", label: "✅ Benchmark salarial" },
    ],
    salaryLabel: "Benchmark atual",
    salaryValue: "R$ 7.500 (referência)",
  },
];
