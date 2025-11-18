import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';
import productA from '@/assets/product-a.jpg';
import productB from '@/assets/product-b.jpg';
import productC from '@/assets/product-c.jpg';
import productD from '@/assets/product-d.jpg';

const Index = () => {
  const { t } = useLanguage();

  const products = [
    { titleKey: 'product_a', descriptionKey: 'product_a_desc', image: productA },
    { titleKey: 'product_b', descriptionKey: 'product_b_desc', image: productB },
    { titleKey: 'product_c', descriptionKey: 'product_c_desc', image: productC },
    { titleKey: 'product_d', descriptionKey: 'product_d_desc', image: productD },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Products Section */}
      <section id="products" className="relative py-20 md:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-overlay opacity-30"></div>
        
        <div className="container relative mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <span className="text-sm font-semibold text-primary">{t('featured')}</span>
            </div>
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {t('our_products')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              {t('products_subtitle')}
            </p>
            <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-gradient-primary shadow-glow"></div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                titleKey={product.titleKey}
                descriptionKey={product.descriptionKey}
                imageSrc={product.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t bg-gradient-to-br from-muted/30 to-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
                <span className="text-xl font-bold text-white">P</span>
              </div>
              <span className="text-xl font-bold text-foreground">ProductHub</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 ProductHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
