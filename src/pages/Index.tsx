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
      <section id="products" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t('our_products')}
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent"></div>
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
      <footer className="border-t bg-muted/50 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 ProductHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
