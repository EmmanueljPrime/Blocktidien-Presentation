import SlideTitle from "@/components/slide-title"
import SlideContent from "@/components/slide-content"
import ProcessFlow from "@/components/process-flow"
import TechCard from "@/components/tech-card"
import MetricBox from "@/components/metric-box"

const slides = [
  {
    type: "title",
    content: (
      <SlideTitle
        title="Automated Web3 Watch Device"
        subtitle="Dispositif de Veille Technologique Automatisée"
        accent="AW3D PROJECT"
      />
    ),
  },
  {
    type: "context",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl mb-10">Contexte & Enjeux</h2>
        <div className="space-y-6 font-sans text-base lg:text-lg xl:text-xl text-gray-800 leading-relaxed">
          <p className="border-l-4 border-black pl-6">
            <strong>Innovation sans précédent</strong> dans les technologies décentralisées et la finance numérique
          </p>
          <p className="border-l-4 border-black pl-6">
            <strong>Veille technologique</strong> : anticiper les disruptions et soutenir la prise de décision
          </p>
          <p className="border-l-4 border-black pl-6">
            Secteur <strong>Web3</strong> : haute volatilité exigeant une surveillance automatisée temps réel
          </p>
        </div>
      </SlideContent>
    ),
  },
  {
    type: "problem",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl mb-12">Le Défi</h2>
        <ul className="space-y-6 font-sans text-lg lg:text-xl xl:text-2xl text-gray-800">
          <li className="flex gap-4 items-start">
            <span className="text-gray-500 font-serif">I.</span>
            <span>Processus manuels <strong>inefficaces</strong></span>
          </li>
          <li className="flex gap-4 items-start">
            <span className="text-gray-500 font-serif">II.</span>
            <span>Besoin de systèmes <strong>automatisés et intelligents</strong></span>
          </li>
          <li className="flex gap-4 items-start">
            <span className="text-gray-500 font-serif">III.</span>
            <span>Collecte passive → <strong>Génération active d'insights</strong></span>
          </li>
        </ul>
      </SlideContent>
    ),
  },
  {
    type: "objective-english",
    content: (
      <SlideContent>
        <div className="border-2 border-black p-10">
          <p className="text-xs lg:text-sm font-sans uppercase tracking-widest text-gray-600 mb-6 text-center">Project Objective</p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl mb-8 text-center leading-tight">
            Fully automated system for continuous collection, synthesis, and distribution of Web3 technical information
          </h2>
          <p className="text-center text-sm text-gray-700 font-sans uppercase tracking-wide">Automated Web3 Watch Device — AW3D</p>
        </div>
      </SlideContent>
    ),
  },
  {
    type: "scope",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl mb-10">Périmètre de Veille</h2>
        <div className="space-y-8">
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-serif text-2xl lg:text-3xl xl:text-4xl mb-3 uppercase tracking-wide">Marchés Crypto</h3>
            <p className="text-gray-700 text-base lg:text-lg xl:text-xl">Tokens, CBDC, adoption institutionnelle</p>
          </div>
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-serif text-2xl lg:text-3xl xl:text-4xl mb-3 uppercase tracking-wide">DeFi</h3>
            <p className="text-gray-700 text-base lg:text-lg xl:text-xl">Protocoles, pools de liquidité, smart contracts</p>
          </div>
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-serif text-2xl lg:text-3xl xl:text-4xl mb-3 uppercase tracking-wide">Protocoles Core</h3>
            <p className="text-gray-700 text-base lg:text-lg xl:text-xl">L1/L2, DAOs, interopérabilité</p>
          </div>
        </div>
      </SlideContent>
    ),
  },
  {
    type: "keywords",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl mb-10 text-center">Focus Thématique</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-2 border-black p-6">
            <h3 className="font-serif text-xl mb-4 uppercase tracking-wide text-center">Thèmes Principaux</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-3 py-1 border border-black text-sm lg:text-base xl:text-lg">Cryptomonnaies</span>
              <span className="px-3 py-1 border border-black text-sm lg:text-base xl:text-lg">Blockchain</span>
              <span className="px-3 py-1 border border-black text-sm lg:text-base xl:text-lg">Finance décentralisée</span>
              <span className="px-3 py-1 border border-black text-sm lg:text-base xl:text-lg">NFT</span>
            </div>
          </div>
          <div className="border-2 border-black p-6">
            <h3 className="font-serif text-xl mb-4 uppercase tracking-wide text-center">Contexte</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-3 py-1 bg-gray-100 text-sm lg:text-base xl:text-lg">Réglementation</span>
              <span className="px-3 py-1 bg-gray-100 text-sm lg:text-base xl:text-lg">Sécurité</span>
              <span className="px-3 py-1 bg-gray-100 text-sm lg:text-base xl:text-lg">Adoption</span>
              <span className="px-3 py-1 bg-gray-100 text-sm lg:text-base xl:text-lg">Innovation</span>
            </div>
          </div>
        </div>
      </SlideContent>
    ),
  },
  {
    type: "methodology",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl mb-12">Méthodologie</h2>
        <div className="space-y-6 font-sans text-base lg:text-lg xl:text-xl text-gray-800">
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-semibold mb-2">Échantillonnage aléatoire</h3>
            <p className="text-gray-700">Sélection probabiliste évitant les biais</p>
          </div>
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-semibold mb-2">Workflow automatisé</h3>
            <p className="text-gray-700">10 flux / 25+ sources • Articles &lt; 24h</p>
          </div>
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-semibold mb-2">Filtrage IA</h3>
            <p className="text-gray-700">LLM comme filtre sémantique intelligent</p>
          </div>
        </div>
      </SlideContent>
    ),
  },
  {
    type: "process",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl mb-12 text-center">Architecture</h2>
        <ProcessFlow
          steps={[
            {
              icon: "I",
              label: "Collecte",
              description: "RSS • 10 flux/jour",
              color: "bg-white border-2 border-black",
            },
            {
              icon: "II",
              label: "Stockage",
              description: "Supabase",
              color: "bg-white border-2 border-black",
            },
            {
              icon: "III",
              label: "Analyse",
              description: "Gemini LLM",
              color: "bg-white border-2 border-black",
            },
            {
              icon: "IV",
              label: "Diffusion",
              description: "Web",
              color: "bg-white border-2 border-black",
            },
          ]}
        />
      </SlideContent>
    ),
  },
  {
    type: "tech-stack",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl mb-10 text-center">Stack Technologique</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TechCard
            icon="№ 1"
            title="n8n"
            description="Orchestration workflows et échantillonnage"
          />
          <TechCard
            icon="№ 2"
            title="Supabase"
            description="PostgreSQL cloud avec API automatique"
          />
          <TechCard
            icon="№ 3"
            title="Gemini 2.5 Pro"
            description="LLM pour filtrage et synthèse multimodale"
          />
          <TechCard
            icon="№ 4"
            title="RSS"
            description="Collecte structurée depuis sources crypto"
          />
        </div>
      </SlideContent>
    ),
  },
  {
    type: "data-model",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl mb-10">Modèle de Données</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-serif text-xl lg:text-2xl xl:text-3xl mb-2 uppercase tracking-wide">RSS Feeds</h3>
            <p className="text-sm lg:text-base xl:text-lg text-gray-700">Gestion sources + historique utilisation</p>
          </div>
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-serif text-xl lg:text-2xl xl:text-3xl mb-2 uppercase tracking-wide">Articles</h3>
            <p className="text-sm lg:text-base xl:text-lg text-gray-700">Métadonnées brutes + flag export</p>
          </div>
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-serif text-xl lg:text-2xl xl:text-3xl mb-2 uppercase tracking-wide">Written Articles</h3>
            <p className="text-sm lg:text-base xl:text-lg text-gray-700">Intelligence synthétisée finale</p>
          </div>
        </div>
        <p className="text-center text-sm lg:text-base xl:text-lg text-gray-600 mt-8 border-t-2 border-black pt-4">Séparation données brutes / intelligence finale</p>
      </SlideContent>
    ),
  },
  {
    type: "llm-role",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl mb-10">Rôle Dual du LLM</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-2 border-black p-6">
            <h3 className="font-serif text-2xl lg:text-3xl xl:text-4xl mb-4 uppercase tracking-wide">Filtre</h3>
            <p className="text-gray-700 text-sm lg:text-base xl:text-lg">Identification pertinence et élimination du bruit</p>
          </div>
          <div className="border-2 border-black p-6">
            <h3 className="font-serif text-2xl lg:text-3xl xl:text-4xl mb-4 uppercase tracking-wide">Analyste</h3>
            <p className="text-gray-700 text-sm lg:text-base xl:text-lg">Synthèse structurée + génération multimodale</p>
          </div>
        </div>
        <p className="text-center text-sm lg:text-base xl:text-lg text-gray-700 mt-6">Agrégation → Prompt → Output JSON → Persistence</p>
      </SlideContent>
    ),
  },
  {
    type: "daily-workflow",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl mb-12">Flux Quotidien</h2>
        <div className="space-y-6 font-sans">
          <div className="flex gap-6 items-start border-l-2 border-black pl-6">
            <div className="font-serif text-2xl lg:text-3xl xl:text-4xl text-gray-800 min-w-fit">01:00</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1 text-base lg:text-lg xl:text-xl">Collecte</p>
              <p className="text-sm lg:text-base xl:text-lg text-gray-700">10 sources • Articles &lt; 24h</p>
            </div>
          </div>
          <div className="flex gap-6 items-start border-l-2 border-black pl-6">
            <div className="font-serif text-2xl lg:text-3xl xl:text-4xl text-gray-800 min-w-fit">02:00</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1 text-base lg:text-lg xl:text-xl">Analyse</p>
              <p className="text-sm lg:text-base xl:text-lg text-gray-700">Filtrage LLM • Synthèse • Génération image</p>
            </div>
          </div>
          <div className="flex gap-6 items-start border-l-2 border-black pl-6">
            <div className="font-serif text-2xl lg:text-3xl xl:text-4xl text-gray-800 min-w-fit">02:15</div>
            <div>
              <p className="font-semibold text-gray-900 mb-1 text-base lg:text-lg xl:text-xl">Publication</p>
              <p className="text-sm lg:text-base xl:text-lg text-gray-700">Plateforme web publique</p>
            </div>
          </div>
        </div>
      </SlideContent>
    ),
  },
  {
    type: "metrics",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl mb-10 text-center">Performance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          <MetricBox number="25+" label="Flux RSS" />
          <MetricBox number="10" label="Flux/jour" />
          <MetricBox number="10-15" label="Articles traités" />
          <MetricBox number="1" label="Synthèse/jour" />
        </div>
        <p className="text-center text-sm text-gray-700 border-t-2 border-black pt-6">4 semaines • Publication constante</p>
      </SlideContent>
    ),
  },
  {
    type: "trends",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl mb-10">Tendances Identifiées</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-serif text-2xl lg:text-3xl xl:text-4xl mb-2 uppercase tracking-wide">I. Maturation Réglementaire</h3>
            <p className="text-sm lg:text-base xl:text-lg text-gray-600">MiCA • Hubs asiatiques • Actions FSA</p>
          </div>
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-serif text-2xl lg:text-3xl xl:text-4xl mb-2 uppercase tracking-wide">II. Convergence IA-Blockchain</h3>
            <p className="text-sm lg:text-base xl:text-lg text-gray-600">Hardware HPC • Storage décentralisé • GitHub Copilot</p>
          </div>
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-serif text-2xl lg:text-3xl xl:text-4xl mb-2 uppercase tracking-wide">III. Interopérabilité</h3>
            <p className="text-sm lg:text-base xl:text-lg text-gray-600">Bridges L2 • USDC natif • Sécurité post-quantique</p>
          </div>
        </div>
      </SlideContent>
    ),
  },
  {
    type: "risks-opportunities",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl mb-10">Risques & Opportunités</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-serif text-xl lg:text-2xl xl:text-3xl mb-4 uppercase tracking-wider">Risques</h3>
            <ul className="space-y-2 text-sm lg:text-base xl:text-lg text-gray-700">
              <li className="flex gap-3"><span className="text-black font-bold">—</span> Exploits wallets</li>
              <li className="flex gap-3"><span className="text-black font-bold">—</span> Pressions réglementaires</li>
              <li className="flex gap-3"><span className="text-black font-bold">—</span> Fragmentation protocoles</li>
            </ul>
          </div>
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-serif text-xl lg:text-2xl xl:text-3xl mb-4 uppercase tracking-wider">Opportunités</h3>
            <ul className="space-y-2 text-sm lg:text-base xl:text-lg text-gray-700">
              <li className="flex gap-3"><span className="text-black font-bold">—</span> zKYC conformité</li>
              <li className="flex gap-3"><span className="text-black font-bold">—</span> Adoption institutionnelle</li>
              <li className="flex gap-3"><span className="text-black font-bold">—</span> Infrastructure IA décentralisée</li>
            </ul>
          </div>
        </div>
      </SlideContent>
    ),
  },
  {
    type: "capitalization",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl mb-10">Capitalisation</h2>
        <div className="space-y-6 text-gray-800">
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-serif text-xl lg:text-2xl xl:text-3xl mb-2 uppercase tracking-wide">Préservation</h3>
            <p className="text-sm lg:text-base xl:text-lg text-gray-700">Stockage permanent pour analyse historique</p>
          </div>
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-serif text-xl lg:text-2xl xl:text-3xl mb-2 uppercase tracking-wide">Enrichissement</h3>
            <p className="text-sm lg:text-base xl:text-lg text-gray-700">Audit sources • Évolution prompt • Monitoring qualité</p>
          </div>
          <div className="border-l-4 border-black pl-6">
            <h3 className="font-serif text-xl lg:text-2xl xl:text-3xl mb-2 uppercase tracking-wide">Évolutions</h3>
            <p className="text-sm lg:text-base xl:text-lg text-gray-700">BI Grafana • Annotation collaborative • Scoring fiabilité</p>
          </div>
        </div>
      </SlideContent>
    ),
  },
  {
    type: "conclusion",
    content: (
      <SlideContent>
        <div className="border-4 border-black p-10">
          <h2 className="font-serif text-4xl mb-8 text-center">Conclusion</h2>
          <div className="space-y-4 text-base text-gray-800 leading-relaxed">
            <p className="text-center">
              Système de veille automatisé complet adapté au domaine <strong>Blockchain haute vélocité</strong>
            </p>
            <p className="text-center border-t-2 border-black pt-4 mt-4">
              <strong>Échantillonnage aléatoire</strong> + <strong>Filtrage sémantique LLM</strong>
            </p>
            <p className="text-center border-t-2 border-black pt-4 mt-4">
              Validation modèle <strong>low-code</strong> sur base <strong>API-driven</strong>
            </p>
          </div>
        </div>
      </SlideContent>
    ),
  },
  {
    type: "impact",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl mb-10 text-center">Impératif Stratégique</h2>
        <div className="space-y-8">
          <p className="text-xl text-center text-gray-800 leading-relaxed border-l-4 border-r-4 border-black px-8 py-6">
            Automatisation complète <strong>libère les analystes</strong> pour l'<strong>interprétation stratégique</strong> et la <strong>prise de décision</strong>
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="border-2 border-black p-4">
              <p className="font-serif text-2xl mb-2">Documenté</p>
            </div>
            <div className="border-2 border-black p-4">
              <p className="font-serif text-2xl mb-2">Évolutif</p>
            </div>
            <div className="border-2 border-black p-4">
              <p className="font-serif text-2xl mb-2">Collaboratif</p>
            </div>
          </div>
        </div>
      </SlideContent>
    ),
  },
  {
    type: "closing",
    content: (
      <SlideTitle
        title="Automated Web3 Watch Device"
        subtitle="Intelligence Automatisée • Analyse LLM • Publication Continue"
        accent="leblocktidien.corentin-casset.com"
      />
    ),
  },
]

export default slides
