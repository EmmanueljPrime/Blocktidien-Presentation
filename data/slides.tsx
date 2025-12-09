import SlideTitle from "@/components/slide-title"
import SlideContent from "@/components/slide-content"
import ProcessFlow from "@/components/process-flow"
import TechCard from "@/components/tech-card"
import MetricBox from "@/components/metric-box"

const slides = [
  {
    type: "title",
    content: <SlideTitle title="Blocktidien" subtitle="Veille autonome du Web3" accent="Automated Intelligence" />,
  },
  {
    type: "problem",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl mb-12">Le Problème</h2>
        <ul className="space-y-6 font-sans text-lg text-gray-700">
          <li className="flex gap-4">
            <span className="text-gray-400">01.</span>
            <span>L'industrie Web3 évolue trop vite</span>
          </li>
          <li className="flex gap-4">
            <span className="text-gray-400">02.</span>
            <span>Impossible de tout suivre manuellement</span>
          </li>
          <li className="flex gap-4">
            <span className="text-gray-400">03.</span>
            <span>25+ sources à surveiller chaque jour</span>
          </li>
          <li className="flex gap-4">
            <span className="text-gray-400">04.</span>
            <span>Besoin de tri intelligent et résumés</span>
          </li>
        </ul>
      </SlideContent>
    ),
  },
  {
    type: "process",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl mb-16 text-center">Comment ça marche</h2>
        <ProcessFlow
          steps={[
            {
              icon: "I",
              label: "Collecte",
              description: "25+ sources RSS",
              color: "bg-white border-2 border-black",
            },
            {
              icon: "II",
              label: "Stockage",
              description: "Supabase DB",
              color: "bg-white border-2 border-black",
            },
            {
              icon: "III",
              label: "Synthèse",
              description: "Gemini 2.5 Pro",
              color: "bg-white border-2 border-black",
            },
            {
              icon: "IV",
              label: "Publication",
              description: "Web Daily",
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
        <h2 className="font-serif text-4xl mb-12 text-center">Stack Technologique</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TechCard icon="№ 1" title="n8n" description="Orchestration & automatisation workflows" />
          <TechCard icon="№ 2" title="Supabase" description="Base de données & stockage cloud" />
          <TechCard icon="№ 3" title="Gemini 2.5 Pro" description="IA pour synthèse & filtrage" />
          <TechCard icon="№ 4" title="RSS Feeds" description="Collecte automatique 25+ sources" />
        </div>
      </SlideContent>
    ),
  },
  {
    type: "daily-process",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl mb-16">Processus Quotidien</h2>
        <div className="space-y-8 font-sans">
          <div className="flex gap-8 items-start">
            <div className="font-serif text-3xl text-gray-400 min-w-fit">01:00</div>
            <p className="text-lg text-gray-700 pt-2">Collecte : 10 sources aléatoires</p>
          </div>
          <div className="flex gap-8 items-start">
            <div className="font-serif text-3xl text-gray-400 min-w-fit">02:00</div>
            <p className="text-lg text-gray-700 pt-2">Synthèse : IA filtre et résume</p>
          </div>
          <div className="flex gap-8 items-start">
            <div className="font-serif text-3xl text-gray-400 min-w-fit">02:15</div>
            <p className="text-lg text-gray-700 pt-2">Publication sur le site web</p>
          </div>
        </div>
      </SlideContent>
    ),
  },
  {
    type: "metrics",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl mb-12 text-center">Résultats en Chiffres</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <MetricBox number="25+" label="Sources surveillées" />
          <MetricBox number="10-15" label="Articles/jour" />
          <MetricBox number="5" label="Articles publiés" />
          <MetricBox number="100%" label="Zéro bug" />
        </div>
      </SlideContent>
    ),
  },
  {
    type: "trends",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl mb-12">Tendances Identifiées</h2>
        <ul className="space-y-8 font-sans text-lg text-gray-700">
          <li className="border-l-2 border-black pl-6">
            <strong>Réglementation</strong> - MiCA, cadres gouvernementaux
          </li>
          <li className="border-l-2 border-black pl-6">
            <strong>IA + Blockchain</strong> - Infrastructure pour l'IA décentralisée
          </li>
          <li className="border-l-2 border-black pl-6">
            <strong>Protocoles matures</strong> - Scalabilité et sécurité
          </li>
        </ul>
      </SlideContent>
    ),
  },
  {
    type: "risks-opportunities",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl mb-12">Risques & Opportunités</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="border-l-4 border-black pl-8">
            <h3 className="font-serif text-2xl mb-6 uppercase tracking-wider">Risques</h3>
            <ul className="space-y-3 font-sans text-gray-700">
              <li className="flex gap-3"><span className="text-black">—</span> Piratages & sécurité</li>
              <li className="flex gap-3"><span className="text-black">—</span> Réglementation stricte</li>
            </ul>
          </div>
          <div className="border-l-4 border-black pl-8">
            <h3 className="font-serif text-2xl mb-6 uppercase tracking-wider">Opportunités</h3>
            <ul className="space-y-3 font-sans text-gray-700">
              <li className="flex gap-3"><span className="text-black">—</span> Adoption institutionnelle</li>
              <li className="flex gap-3"><span className="text-black">—</span> Solutions innovantes</li>
            </ul>
          </div>
        </div>
      </SlideContent>
    ),
  },
  {
    type: "architecture",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl mb-12">Architecture des Données</h2>
        <ul className="space-y-6 font-sans text-lg text-gray-700">
          <li className="flex gap-4">
            <span className="text-gray-400">→</span>
            <span>
              <strong>RSS Feeds</strong> - Sources à surveiller
            </span>
          </li>
          <li className="flex gap-4">
            <span className="text-gray-400">→</span>
            <span>
              <strong>Articles</strong> - Brutes collectées
            </span>
          </li>
          <li className="flex gap-4">
            <span className="text-gray-400">→</span>
            <span>
              <strong>Written_Articles</strong> - Synthèses finales publiées
            </span>
          </li>
        </ul>
        <p className="text-gray-500 text-sm mt-8">Traçabilité complète de la collecte à la publication</p>
      </SlideContent>
    ),
  },
  {
    type: "evolution",
    content: (
      <SlideContent>
        <h2 className="font-serif text-4xl mb-12">Améliorations Futures</h2>
        <ul className="space-y-6 font-sans text-lg text-gray-700">
          <li className="flex gap-4">
            <span className="text-gray-400">→</span>
            <span>Graphiques de tendances en temps réel</span>
          </li>
          <li className="flex gap-4">
            <span className="text-gray-400">→</span>
            <span>Système de commentaires pour l'équipe</span>
          </li>
          <li className="flex gap-4">
            <span className="text-gray-400">→</span>
            <span>Notes de fiabilité par source</span>
          </li>
          <li className="flex gap-4">
            <span className="text-gray-400">→</span>
            <span>Adaptation à d'autres secteurs</span>
          </li>
        </ul>
      </SlideContent>
    ),
  },
  {
    type: "closing",
    content: (
      <SlideTitle
        title="Blocktidien"
        subtitle="Veille Autonome • Synthèses Intelligentes • Tendances en Temps Réel"
        accent="leblocktidien.corentin-casset.com"
      />
    ),
  },
]

export default slides
