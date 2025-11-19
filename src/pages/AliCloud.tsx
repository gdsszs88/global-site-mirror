import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Zap, Globe, DollarSign } from 'lucide-react';

const AliCloud = () => {
  const features = [
    {
      icon: DollarSign,
      title: '优惠折扣',
      description: '减了又减的折扣叠加方案'
    },
    {
      icon: Shield,
      title: '免备案',
      description: '只需邮箱轻松注册使用'
    },
    {
      icon: Zap,
      title: '技术支持',
      description: '迁移上云，多云管理'
    },
    {
      icon: Globe,
      title: '多元支付',
      description: '多币种支付'
    }
  ];

  const advantages = [
    {
      title: '快速注册',
      description: '仅需邮箱即可注册，无需复杂认证流程'
    },
    {
      title: '免备案',
      description: '无需实名认证，快速开始使用云服务'
    },
    {
      title: 'PayPal免绑定',
      description: '无需绑定信用卡，安全便捷'
    },
    {
      title: '多种支付方式',
      description: '支持支付宝、微信、银联等多种支付方式'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-blue-50 dark:from-orange-950/20 dark:to-blue-950/20 py-20 md:py-32">
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 dark:bg-orange-900/30 px-4 py-2">
              <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">官方授权服务商</span>
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              阿里云国际站
            </h1>
            <p className="mb-4 text-lg text-muted-foreground md:text-xl">
              代充值/送账号 免实名开户 不绑卡免备案 多种支付方式
            </p>
            <p className="mb-8 text-base text-muted-foreground">
              提供香港、美国、新加坡、日本等全球云服务器，助力企业出海上云降本增效
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                立即咨询
              </Button>
              <Button size="lg" variant="outline">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              阿里云国际优势
            </h2>
            <p className="text-lg text-muted-foreground">
              阿里云国际站所有产品，无需实名认证即可购买
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  <CardDescription>{advantage.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-orange-500 to-blue-500 p-12 text-center text-white shadow-2xl">
            <h2 className="mb-4 text-3xl font-bold">准备开始了吗？</h2>
            <p className="mb-8 text-lg opacity-90">
              立即联系我们，获取专属优惠方案
            </p>
            <Button size="lg" variant="secondary">
              联系我们
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 CloudHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AliCloud;
