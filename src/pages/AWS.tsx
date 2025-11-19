import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, Database, Shield, Boxes } from 'lucide-react';

const AWS = () => {
  const products = [
    { region: '中国·北京', type: 'EC2', zone: '中国区' },
    { region: '中国·香港', type: 'EC2', zone: '中国区' },
    { region: '印度·雅加达', type: 'EC2', zone: '国际区' },
    { region: '印度·孟买', type: 'EC2', zone: '国际区' },
    { region: '日本·大阪', type: 'EC2', zone: '国际区' },
    { region: '日本·东京', type: 'EC2', zone: '国际区' },
    { region: '韩国·首尔', type: 'EC2', zone: '国际区' },
    { region: '新加坡', type: 'EC2', zone: '国际区' },
  ];

  const services = [
    {
      icon: Server,
      title: 'EC2云服务器',
      description: '弹性计算服务，提供安全可靠的计算能力'
    },
    {
      icon: Database,
      title: 'RDS数据库',
      description: '托管式关系数据库服务'
    },
    {
      icon: Shield,
      title: '云安全',
      description: '全方位的安全防护解决方案'
    },
    {
      icon: Boxes,
      title: '云存储',
      description: '海量、安全、低成本的云存储服务'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-blue-50 to-purple-50 dark:from-orange-950/20 dark:via-blue-950/20 dark:to-purple-950/20 py-20 md:py-32">
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6">
              <span className="text-5xl font-bold text-orange-500">aws</span>
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              AWS官方授权代理商
            </h1>
            <p className="mb-4 text-lg text-muted-foreground md:text-xl">
              获取AWS优惠方案，支持多种货币付款方式，提供一对一专家技术支持
            </p>
            <p className="mb-8 text-base text-muted-foreground">
              支持游戏行业、电商平台、金融科技、直播、数据迁移等场景上云服务
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                联系咨询
              </Button>
              <Button size="lg" variant="outline">
                查看方案
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              AWS亚马逊云热门产品
            </h2>
            <p className="text-lg text-muted-foreground">POPULAR PRODUCTS</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>{product.region}</CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{product.zone}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">云服务器 ({product.type})</p>
                  <Button variant="outline" size="sm" className="w-full">
                    了解详情
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              核心服务
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card key={index} className="border-2 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-orange-500 via-blue-500 to-purple-500 p-12 text-center text-white shadow-2xl">
            <h2 className="mb-4 text-3xl font-bold">开始您的云之旅</h2>
            <p className="mb-8 text-lg opacity-90">
              专业团队为您提供7x24小时技术支持
            </p>
            <Button size="lg" variant="secondary">
              立即咨询
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

export default AWS;
