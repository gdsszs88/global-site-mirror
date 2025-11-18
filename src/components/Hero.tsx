import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero py-24 md:py-32 lg:py-40">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-white/5 blur-3xl animate-glow"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">{t('hero_badge')}</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 max-w-4xl text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            {t('hero_title')}
          </h1>

          {/* Subtitle */}
          <p className="mb-10 max-w-2xl text-lg text-white/90 md:text-xl lg:text-2xl">
            {t('hero_subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="group h-14 px-8 text-lg font-semibold bg-white text-primary hover:bg-white/90 shadow-strong transition-all duration-300 hover:scale-105"
            >
              {t('hero_cta')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 text-lg font-semibold border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
            >
              {t('learn_more')}
            </Button>
          </div>

          {/* Stats or Features */}
          <div className="mt-16 grid grid-cols-3 gap-8 md:gap-16">
            {[
              { number: '1000+', label: t('stat_products') },
              { number: '50+', label: t('stat_categories') },
              { number: '10K+', label: t('stat_customers') },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-3xl font-bold text-white md:text-4xl">{stat.number}</div>
                <div className="text-sm text-white/70 md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};
