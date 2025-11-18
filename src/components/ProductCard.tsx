import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Star } from 'lucide-react';

interface ProductCardProps {
  titleKey: string;
  descriptionKey: string;
  imageSrc: string;
}

export const ProductCard = ({ titleKey, descriptionKey, imageSrc }: ProductCardProps) => {
  const { t } = useLanguage();

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card-gradient transition-all duration-500 hover:shadow-strong hover:border-primary/30 hover:-translate-y-2">
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-overlay opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageSrc}
          alt={t(titleKey)}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-sm shadow-medium">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-semibold text-foreground">4.9</span>
        </div>
      </div>

      <CardHeader className="relative pb-4">
        <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
          {t(titleKey)}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {t(descriptionKey)}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative">
        <Button 
          variant="ghost" 
          className="group/btn w-full justify-between h-12 bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <span className="font-semibold">{t('view_details')}</span>
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-2" />
        </Button>
      </CardContent>

      {/* Shine Effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></div>
    </Card>
  );
};
