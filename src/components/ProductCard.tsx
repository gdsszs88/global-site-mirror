import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  titleKey: string;
  descriptionKey: string;
  imageSrc: string;
}

export const ProductCard = ({ titleKey, descriptionKey, imageSrc }: ProductCardProps) => {
  const { t } = useLanguage();

  return (
    <Card className="group overflow-hidden border-border transition-all hover:shadow-lg hover:border-primary/50">
      <div className="aspect-video overflow-hidden">
        <img
          src={imageSrc}
          alt={t(titleKey)}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{t(titleKey)}</CardTitle>
        <CardDescription className="text-base">{t(descriptionKey)}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="ghost" className="group/btn w-full justify-between">
          {t('view_details')}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
};
