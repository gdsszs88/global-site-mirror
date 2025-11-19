import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, TrendingUp, HeadphonesIcon } from 'lucide-react';

const Partner = () => {
  const advantages = [
    {
      icon: Award,
      title: '全球份额第一',
      description: '代理全球领先的云服务平台'
    },
    {
      icon: Users,
      title: '节点资源丰富',
      description: '覆盖全球主要地区的数据中心'
    },
    {
      icon: TrendingUp,
      title: '更具安全性',
      description: '企业级安全保障体系'
    },
    {
      icon: HeadphonesIcon,
      title: '灵活的定价模版',
      description: '多样化的定价方案'
    }
  ];

  const benefits = [
    {
      title: '丰厚佣金',
      description: '极具竞争力的佣金比例，按月结算'
    },
    {
      title: '营销支持',
      description: '提供专业的营销资料和技术文档'
    },
    {
      title: '技术培训',
      description: '定期的产品培训和技术支持'
    },
    {
      title: '专属客户经理',
      description: '一对一的客户经理服务'
    },
    {
      title: '品牌授权',
      description: '获得官方授权代理资质'
    },
    {
      title: '灵活政策',
      description: '灵活的合作模式和返点政策'
    }
  ];

  const requirements = [
    '具有合法的企业资质',
    '有一定的客户资源或渠道',
    '认同我们的服务理念',
    '有意愿长期合作发展'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 py-20 md:py-32">
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              全球云服务器总代理
            </h1>
            <p className="mb-4 text-lg text-muted-foreground md:text-xl">
              无需信用卡、免备案、隐私安全
            </p>
            <p className="mb-4 text-base text-muted-foreground">
              即充即用、长期稳定、高效无忧
            </p>
            <p className="mb-8 text-base text-muted-foreground">
              365×24H技术支持，全渠道支付
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-purple-500 hover:bg-purple-600">
                成为合作伙伴
              </Button>
              <Button size="lg" variant="outline">
                了解详情
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AWS Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Amazon Web Services优势
            </h2>
            <p className="text-lg text-muted-foreground">ADVANTAGE</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-2 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
                    <advantage.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{advantage.title}</CardTitle>
                  <CardDescription>{advantage.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              成为AWS/阿里云二级代理的优势
            </h2>
            <p className="text-lg text-muted-foreground">THE ADVANTAGES OF SECONDARY AGENTS</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                合作要求
              </h2>
            </div>
            <Card className="border-2">
              <CardHeader>
                <CardTitle>基本要求</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white">
                        {index + 1}
                      </span>
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              合作流程
            </h2>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-4">
              {['提交申请', '资质审核', '签订协议', '开始合作'].map((step, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-lg font-bold text-white">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{step}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-12 text-center text-white shadow-2xl">
            <h2 className="mb-4 text-3xl font-bold">加入我们，共创未来</h2>
            <p className="mb-8 text-lg opacity-90">
              成为我们的合作伙伴，共享云计算市场红利
            </p>
            <Button size="lg" variant="secondary">
              立即申请
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

export default Partner;
