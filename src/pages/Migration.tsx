import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Cloud, Database, Shield, Zap } from 'lucide-react';

const Migration = () => {
  const steps = [
    {
      title: '评估分析',
      description: '全面评估现有IT架构，制定迁移方案'
    },
    {
      title: '方案设计',
      description: '设计最优的云架构和迁移路径'
    },
    {
      title: '数据迁移',
      description: '安全可靠的数据迁移服务'
    },
    {
      title: '测试验证',
      description: '全面测试确保业务连续性'
    },
    {
      title: '上线切换',
      description: '平滑切换，最小化业务影响'
    },
    {
      title: '持续优化',
      description: '持续监控和优化云环境'
    }
  ];

  const benefits = [
    {
      icon: Cloud,
      title: '降低成本',
      description: '减少基础设施投资，按需付费'
    },
    {
      icon: Zap,
      title: '提升性能',
      description: '利用云端强大的计算能力'
    },
    {
      icon: Shield,
      title: '增强安全',
      description: '企业级安全防护体系'
    },
    {
      icon: Database,
      title: '灵活扩展',
      description: '弹性伸缩，快速响应业务需求'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 py-20 md:py-32">
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              上云迁移服务
            </h1>
            <p className="mb-4 text-lg text-muted-foreground md:text-xl">
              专业的上云迁移解决方案，助力企业数字化转型
            </p>
            <p className="mb-8 text-base text-muted-foreground">
              提供从评估到实施的全流程服务，确保迁移过程安全、平稳、高效
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                咨询方案
              </Button>
              <Button size="lg" variant="outline">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              上云优势
            </h2>
            <p className="text-lg text-muted-foreground">
              为什么选择云迁移
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              迁移流程
            </h2>
            <p className="text-lg text-muted-foreground">
              专业的六步迁移方法论
            </p>
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, index) => (
                <Card key={index} className="relative transition-all hover:shadow-md">
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      {index < steps.length - 1 && (
                        <ArrowRight className="absolute right-0 top-8 h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              迁移服务范围
            </h2>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>应用迁移</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Web应用迁移</li>
                    <li>• 数据库迁移</li>
                    <li>• 容器化改造</li>
                    <li>• 微服务架构转型</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>数据迁移</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 结构化数据迁移</li>
                    <li>• 非结构化数据迁移</li>
                    <li>• 大数据平台迁移</li>
                    <li>• 数据同步与复制</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>基础设施迁移</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 物理服务器迁移</li>
                    <li>• 虚拟机迁移</li>
                    <li>• 存储迁移</li>
                    <li>• 网络配置迁移</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>混合云架构</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 混合云设计</li>
                    <li>• 多云管理</li>
                    <li>• 云端灾备</li>
                    <li>• 云原生改造</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 p-12 text-center text-white shadow-2xl">
            <h2 className="mb-4 text-3xl font-bold">开始您的上云之旅</h2>
            <p className="mb-8 text-lg opacity-90">
              专业团队为您提供免费评估和咨询服务
            </p>
            <Button size="lg" variant="secondary">
              免费咨询
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

export default Migration;
