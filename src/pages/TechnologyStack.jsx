import { useState } from 'react';
import { HiBolt, HiArrowUp } from 'react-icons/hi2';
import { FaReact, FaVuejs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiNodedotjs, SiSupabase, SiFirebase, SiGraphql, SiSentry } from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const TechnologyStack = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="mb-4">
          <div className="w-12 h-0.5 bg-accent-primary mb-2" />
          <p className="text-sm text-accent-primary font-medium">{t.stack.digitalLab}</p>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
          {t.stack.title} <span className="text-accent-primary">{t.stack.titleHighlight}</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mb-6">
          {t.stack.description}
        </p>
      </section>


      {/* Core Frontend System */}
      <section className="max-w-7xl mx-auto mb-12">
        <div className="bg-dark-card border border-dark-border rounded-lg p-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-accent-primary/20 rounded flex items-center justify-center">
              <HiBolt className="h-4 w-4 text-accent-primary" />
            </div>
            <span className="text-xs text-accent-primary font-mono">{t.stack.coreFrontend}</span>
          </div>
          <h2 className="text-3xl font-bold mb-3">{t.stack.reactiveUI}</h2>
          <p className="text-gray-400 mb-6">
            {t.stack.reactiveUIDesc}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-dark-surface border border-dark-border rounded-lg p-4 text-center">
              <FaReact className="h-8 w-8 text-accent-primary mx-auto mb-2" />
              <p className="text-white font-medium mb-1">React.js</p>
              <p className="text-xs text-gray-400">{t.stack.componentBased}</p>
            </div>
            <div className="bg-dark-surface border border-dark-border rounded-lg p-4 text-center">
              <FaVuejs className="h-8 w-8 text-accent-primary mx-auto mb-2" />
              <p className="text-white font-medium mb-1">Vue.js</p>
              <p className="text-xs text-gray-400">{t.stack.reactiveSync}</p>
            </div>
            <div className="bg-dark-surface border border-dark-border rounded-lg p-4 text-center">
              <SiTailwindcss className="h-8 w-8 text-accent-primary mx-auto mb-2" />
              <p className="text-white font-medium mb-1">Tailwind</p>
              <p className="text-xs text-gray-400">{t.stack.utilityFirst}</p>
            </div>
            <div className="bg-dark-surface border border-dark-border rounded-lg p-4 text-center">
              <HiBolt className="h-8 w-8 text-accent-primary mx-auto mb-2" />
              <p className="text-white font-medium mb-1">Ant Design</p>
              <p className="text-xs text-gray-400">{t.stack.enterpriseUI}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Server Runtime & Content Layer Grid */}
      <section className="max-w-7xl mx-auto mb-12 grid md:grid-cols-2 gap-6">
        {/* Server Runtime */}
        <div className="bg-dark-card border border-dark-border rounded-lg p-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-accent-primary/20 rounded flex items-center justify-center">
              <HiBolt className="h-4 w-4 text-accent-primary" />
            </div>
            <span className="text-xs text-accent-primary font-mono">{t.stack.serverRuntime}</span>
          </div>
          <h2 className="text-3xl font-bold mb-3">{t.stack.engineData}</h2>
          <p className="text-gray-400 mb-6">
            {t.stack.engineDataDesc}
          </p>
          <div className="space-y-4">
            <div className="bg-dark-surface border border-dark-border rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <SiNodedotjs className="h-6 w-6 text-accent-primary" />
                <span className="text-white font-medium">Node.js</span>
              </div>
              <span className="text-xs text-accent-primary bg-accent-primary/10 px-2 py-1 rounded">v20_LTS</span>
            </div>
            <div className="bg-dark-surface border border-dark-border rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <SiSupabase className="h-6 w-6 text-accent-primary" />
                <span className="text-white font-medium">Supabase</span>
              </div>
              <span className="text-xs text-accent-primary bg-accent-primary/10 px-2 py-1 rounded">POSTGRES</span>
            </div>
            <div className="bg-dark-surface border border-dark-border rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <SiFirebase className="h-6 w-6 text-accent-primary" />
                <span className="text-white font-medium">Firebase</span>
              </div>
              <span className="text-xs text-accent-primary bg-accent-primary/10 px-2 py-1 rounded">SERVERLESS</span>
            </div>
          </div>
        </div>

        {/* Content Layer */}
        <div className="bg-dark-card border border-dark-border rounded-lg p-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-accent-primary/20 rounded flex items-center justify-center">
              <HiBolt className="h-4 w-4 text-accent-primary" />
            </div>
            <span className="text-xs text-accent-primary font-mono">{t.stack.contentLayer}</span>
          </div>
          <h2 className="text-3xl font-bold mb-3">Sanity.io</h2>
          <p className="text-gray-400">
            {t.stack.contentLayerDesc}
          </p>
        </div>
      </section>

      {/* Deployment */}
      <section className="max-w-7xl mx-auto mb-12">
        <div className="bg-dark-card border border-dark-border rounded-lg p-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-accent-primary/20 rounded flex items-center justify-center">
              <HiBolt className="h-4 w-4 text-accent-primary" />
            </div>
            <span className="text-xs text-accent-primary font-mono">{t.stack.deployment}</span>
          </div>
          <h2 className="text-3xl font-bold mb-3">Vercel & AWS</h2>
          <p className="text-gray-400">
            {t.stack.deploymentDesc}
          </p>
        </div>
      </section>

      {/* System Components */}
      <section className="max-w-7xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-2">{t.stack.systemComponents}</h2>
        <p className="text-gray-400 mb-8">{t.stack.systemComponentsDesc}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <SiNextdotjs className="h-8 w-8 text-accent-primary" />
              <h3 className="text-xl font-bold">Next.js 14</h3>
            </div>
            <p className="text-gray-400">
              {t.stack.nextjsDesc}
            </p>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <SiGraphql className="h-8 w-8 text-accent-primary" />
              <h3 className="text-xl font-bold">GraphQL</h3>
            </div>
            <p className="text-gray-400">
              {t.stack.graphqlDesc}
            </p>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <HiBolt className="h-8 w-8 text-accent-primary" />
              <h3 className="text-xl font-bold">Auth.js</h3>
            </div>
            <p className="text-gray-400">
              {t.stack.authjsDesc}
            </p>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <SiSentry className="h-8 w-8 text-accent-primary" />
              <h3 className="text-xl font-bold">Sentry</h3>
            </div>
            <p className="text-gray-400">
              {t.stack.sentryDesc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyStack;
