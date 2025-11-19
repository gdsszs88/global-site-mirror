import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const AWSEC2 = () => {
  const ec2Features = [
    '高频 Intel Xeon 处理器',
    '性能可突增的 CPU',
    '1核 1G配置',
    '30GB SSD存储',
    '多操作系统可选',
    '可升级配置'
  ];

  const useCases = [
    '网站和 Web 应用程序',
    '开发环境',
    '构建服务器',
    '代码存储库',
    '微服务',
    '测试和暂存环境',
    '业务应用程序'
  ];

  const offers = [
    {
      title: 'EC2免费套餐',
      duration: '12个月',
      specs: '750小时/月 t2.micro实例',
      description: '适合开发测试和小型应用'
    },
    {
      title: 'Lightsail优惠',
      duration: '3个月',
      specs: '首月低至$3.5',
      description: '简化的VPS解决方案'
    },
    {
      title: 'RDS数据库',
      duration: '12个月',
      specs: '750小时/月',
      description: '托管式数据库服务'
    },
    {
      title: 'S3存储',
      duration: '12个月',
      specs: '5GB标准存储',
      description: '安全可靠的对象存储'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 py-20 md:py-32">
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              AWS亚马逊云官方授权代理商
            </h1>
            <p className="mb-4 text-lg text-muted-foreground md:text-xl">
              获取AWS优惠方案，支持多种货币付款方式，提供一对一专家技术支持
            </p>
            <p className="mb-8 text-base text-muted-foreground">
              支持游戏行业、电商平台、金融科技、直播、数据迁移等场景上云服务
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                立即体验
              </Button>
              <Button size="lg" variant="outline">
                查看价格
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* EC2 Free Tier Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              立即免费体验全球卓越的云服务
            </h2>
            <p className="text-lg text-muted-foreground">CLOUD SERVICES</p>
          </div>
          <div className="mx-auto max-w-5xl">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Amazon EC2 云服务器</CardTitle>
                <CardDescription className="text-base">
                  Amazon Elastic Compute Cloud（Amazon EC2）是一种 Web 云服务，能在云中提供安全且可调整大小的计算能力
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h3 className="mb-4 text-xl font-semibold">云服务器 - 免费12个月</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 font-medium">服务器配置</h4>
                      <ul className="space-y-2">
                        {ec2Features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-medium">应用场景</h4>
                      <ul className="space-y-2">
                        {useCases.map((useCase, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-blue-500" />
                            <span className="text-sm">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-blue-500 hover:bg-blue-600">开始免费12个月</Button>
                  <Button variant="outline">查看全部机型</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              更多优惠服务
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {offers.map((offer, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>{offer.title}</CardTitle>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-primary">{offer.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 font-medium">{offer.specs}</p>
                  <p className="mb-4 text-sm text-muted-foreground">{offer.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    了解详情
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-12 text-center text-white shadow-2xl">
            <h2 className="mb-4 text-3xl font-bold">开始免费试用</h2>
            <p className="mb-8 text-lg opacity-90">
              12个月免费套餐等您来体验
            </p>
            <Button size="lg" variant="secondary">
              立即注册
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

export default AWSEC2;
