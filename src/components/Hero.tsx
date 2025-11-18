import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-hero-from to-hero-to py-20 md:py-32">
      <div className="container relative mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {t('hero_title')}
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              {t('hero_subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all"
              >
                {t('hero_cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              >
                {t('learn_more')}
              </Button>
            </div>
          </div>

          {/* Right Content - Decorative Elements */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-white/10 backdrop-blur-3xl"></div>
              <div className="absolute h-48 w-48 animate-pulse rounded-full bg-accent/20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl"></div>
      <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
    </section>
  );
};
