import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Cloud, Shield, Zap, Globe, CreditCard, Server, Database, Lock, Network, Brain, ShoppingCart, Users, Gamepad2, DollarSign } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container relative mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="mb-6 max-w-4xl text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
              {t('home_hero_title')}
            </h1>
            
            <div className="mb-8 space-y-2 text-lg text-white/90 md:text-xl">
              <p>{t('home_hero_subtitle_1')}</p>
              <p>{t('home_hero_subtitle_2')}</p>
              <p className="text-primary-foreground font-semibold">{t('home_hero_subtitle_3')}</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row mb-12">
              <Button size="lg" className="h-14 px-8 text-lg bg-[#0088cc] hover:bg-[#0088cc]/90 text-white">
                Telegram{t('contact')}
              </Button>
              <Button size="lg" className="h-14 px-8 text-lg bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                WhatsApp{t('contact')}
              </Button>
            </div>

            {/* Cloud Provider Logos */}
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white font-semibold">AWS</div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white font-semibold">Alibaba Cloud</div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white font-semibold">{t('huawei_cloud')}</div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white font-semibold">{t('tencent_cloud')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 text-center bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500/30 hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-orange-500/20 rounded-full">
                  <DollarSign className="h-8 w-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('feature_discount_title')}</h3>
              <p className="text-sm text-muted-foreground">{t('feature_discount_desc')}</p>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <Shield className="h-8 w-8 text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('feature_no_filing_title')}</h3>
              <p className="text-sm text-muted-foreground">{t('feature_no_filing_desc')}</p>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-orange-500/20 to-red-600/20 border-orange-500/30 hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-orange-500/20 rounded-full">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('feature_support_title')}</h3>
              <p className="text-sm text-muted-foreground">{t('feature_support_desc')}</p>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <CreditCard className="h-8 w-8 text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('feature_payment_title')}</h3>
              <p className="text-sm text-muted-foreground">{t('feature_payment_desc')}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Products and Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('products_services_title')}</h2>
            <p className="text-muted-foreground">PRODUCTS AND SERVICES</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Server, title: t('product_ecs'), desc: t('product_ecs_desc') },
              { icon: Shield, title: t('product_security'), desc: t('product_security_desc') },
              { icon: Zap, title: t('product_cdn'), desc: t('product_cdn_desc') },
              { icon: Database, title: t('product_oss'), desc: t('product_oss_desc') },
              { icon: Database, title: t('product_rds'), desc: t('product_rds_desc') },
              { icon: Lock, title: t('product_firewall'), desc: t('product_firewall_desc') },
              { icon: Network, title: t('product_cen'), desc: t('product_cen_desc') },
              { icon: Brain, title: t('product_ai'), desc: t('product_ai_desc') },
            ].map((product, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <product.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.desc}</p>
                <Button variant="outline" size="sm">{t('buy_now')}</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h2 className="text-4xl font-bold">{t('purchase_process_title')}</h2>
              <Button>{t('consult_now')}</Button>
            </div>
            <p className="text-muted-foreground">PURCHASE PROCESS</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { step: '1', title: t('step_1_title'), desc: t('step_1_desc') },
              { step: '2', title: t('step_2_title'), desc: t('step_2_desc') },
              { step: '3', title: t('step_3_title'), desc: t('step_3_desc') },
              { step: '4', title: t('step_4_title'), desc: t('step_4_desc') },
              { step: '5', title: t('step_5_title'), desc: t('step_5_desc') },
              { step: '6', title: t('step_6_title'), desc: t('step_6_desc') },
            ].map((item) => (
              <Card key={item.step} className="p-6 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl font-bold text-primary">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('payment_methods_title')}</h2>
            <p className="text-muted-foreground">PAYMENT METHOD</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[t('alipay'), t('wechat_pay'), t('bank_transfer'), 'PayPal', 'USDT', t('union_pay')].map((method, index) => (
              <div key={index} className="px-8 py-4 bg-background rounded-lg border shadow-sm text-lg font-semibold">
                {method}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Solutions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('professional_solutions_title')}</h2>
            <p className="text-muted-foreground">PROFESSIONAL SOLUTIONS</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: t('solution_ecommerce'), desc: t('solution_ecommerce_desc') },
              { title: t('solution_overseas'), desc: t('solution_overseas_desc') },
              { title: t('solution_migration'), desc: t('solution_migration_desc') },
              { title: t('solution_gaming'), desc: t('solution_gaming_desc') },
            ].map((solution, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground mb-4">{solution.desc}</p>
                <Button variant="outline">
                  {t('learn_more')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customized Solutions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('customized_solutions_title')}</h2>
            <p className="text-muted-foreground">CUSTOMIZED SOLUTIONS</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Gamepad2, title: t('industry_gaming'), desc: t('industry_gaming_desc') },
              { icon: DollarSign, title: t('industry_fintech'), desc: t('industry_fintech_desc') },
              { icon: Cloud, title: t('industry_live'), desc: t('industry_live_desc') },
              { icon: ShoppingCart, title: t('industry_ecommerce'), desc: t('industry_ecommerce_desc') },
            ].map((industry, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <industry.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                <p className="text-sm text-muted-foreground">{industry.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AWS Global Infrastructure */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('aws_infrastructure_title')}</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              {t('aws_infrastructure_desc')}
            </p>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="flex items-center justify-center mb-6">
              <Globe className="h-16 w-16 text-primary" />
            </div>
            <p className="text-center text-lg text-muted-foreground">
              {t('aws_infrastructure_regions')}
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t bg-gradient-to-br from-muted/30 to-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">{t('site_name')}</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 {t('site_name')}. {t('all_rights_reserved')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
