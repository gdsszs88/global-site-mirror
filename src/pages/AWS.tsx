import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileCheck, Server, CreditCard, Globe, Zap, Database, Lock } from "lucide-react";

const AWS = () => {
  const telegramLink = "https://t.me/gaoshengsm";

  const features = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "优惠折扣",
      description: "减了又减的折扣叠加方案"
    },
    {
      icon: <FileCheck className="h-12 w-12" />,
      title: "免备案",
      description: "只需邮箱轻松注册使用"
    },
    {
      icon: <Server className="h-12 w-12" />,
      title: "技术支持",
      description: "迁移上云，多云管理"
    },
    {
      icon: <CreditCard className="h-12 w-12" />,
      title: "多元支付",
      description: "多币种支付"
    }
  ];

  const products = [
    { region: "中国 · 北京（EC2）", zone: "中国区", type: "云服务器" },
    { region: "中国 · 香港（EC2）", zone: "中国区", type: "云服务器" },
    { region: "印度 · 雅加达（EC2）", zone: "国际区", type: "云服务器" },
    { region: "印度 · 孟买（EC2）", zone: "国际区", type: "云服务器" },
    { region: "日本 · 大阪（EC2）", zone: "国际区", type: "云服务器" },
    { region: "日本 · 东京（EC2）", zone: "国际区", type: "云服务器" },
    { region: "韩国 · 首尔（EC2）", zone: "国际区", type: "云服务器" },
    { region: "新加坡（EC2）", zone: "国际区", type: "云服务器" },
    { region: "澳大利亚 · 悉尼（EC2）", zone: "国际区", type: "云服务器" },
    { region: "南非 · 开普敦（EC2）", zone: "国际区", type: "云服务器" },
    { region: "美国 · 弗吉尼亚（EC2）", zone: "国际区", type: "云服务器" },
    { region: "美国 · 俄亥俄（EC2）", zone: "国际区", type: "云服务器" },
    { region: "美国 · 加利福尼亚（EC2）", zone: "国际区", type: "云服务器" },
    { region: "美国 · 俄勒冈（EC2）", zone: "国际区", type: "云服务器" },
    { region: "加拿大 · 蒙特利尔（EC2）", zone: "国际区", type: "云服务器" },
    { region: "巴西 · 圣保罗（EC2）", zone: "国际区", type: "云服务器" },
    { region: "德国 · 法兰克福（EC2）", zone: "国际区", type: "云服务器" },
    { region: "爱尔兰 · 都柏林（EC2）", zone: "国际区", type: "云服务器" },
    { region: "英国 · 伦敦（EC2）", zone: "国际区", type: "云服务器" },
    { region: "意大利 · 米兰（EC2）", zone: "国际区", type: "云服务器" },
    { region: "法国 · 巴黎（EC2）", zone: "国际区", type: "云服务器" },
    { region: "瑞典 · 斯德哥尔摩（EC2）", zone: "国际区", type: "云服务器" },
    { region: "阿联酋 · 阿布扎比（EC2）", zone: "国际区", type: "云服务器" },
    { region: "巴林 · 麦纳麦（EC2）", zone: "国际区", type: "云服务器" }
  ];

  const services = [
    { icon: <Server className="h-8 w-8" />, title: "EC2 云服务器", description: "弹性计算云服务", tag: "热销" },
    { icon: <Zap className="h-8 w-8" />, title: "EC2 Auto Scaling", description: "扩展计算容量以满足需求", tag: "热销" },
    { icon: <Globe className="h-8 w-8" />, title: "Batch", description: "任意规模完全受管的批处理" },
    { icon: <Database className="h-8 w-8" />, title: "Elastic Beanstalk", description: "运行和管理 Web 应用程序" },
    { icon: <Zap className="h-8 w-8" />, title: "Lambda", description: "无服务器计算" },
    { icon: <Lock className="h-8 w-8" />, title: "Lightsail", description: "启动和管理虚拟专用服务器" }
  ];

  const coreServices = [
    { icon: <Server className="h-8 w-8" />, title: "Amazon EC2", description: "安全可靠的云计算服务" },
    { icon: <Database className="h-8 w-8" />, title: "Amazon RDS", description: "托管关系数据库服务" },
    { icon: <Lock className="h-8 w-8" />, title: "安全与合规", description: "全方位的安全防护体系" },
    { icon: <Globe className="h-8 w-8" />, title: "全球基础设施", description: "覆盖全球的数据中心" }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient">
              AWS官方授权代理商
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              获取AWS优惠方案，支持多种货币付款方式，提供一对一专家技术支持
            </p>
            <p className="text-lg text-muted-foreground">
              支持游戏行业、电商平台、金融科技、直播、数据迁移等场景上云服务
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button size="lg" onClick={() => window.open(telegramLink, '_blank')}>
                Telegram联系
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open(telegramLink, '_blank')}>
                自助购买
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-glow transition-all cursor-pointer" onClick={() => window.open(telegramLink, '_blank')}>
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-primary mx-auto">{feature.icon}</div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AWS亚马逊云热门产品</h2>
            <p className="text-xl text-muted-foreground">POPULAR PRODUCTS</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-medium transition-all">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg font-bold">{product.region}</h3>
                  <p className="text-sm text-muted-foreground">{product.zone}</p>
                  <p className="text-sm">{product.type}</p>
                  <Button className="w-full mt-4" onClick={() => window.open(telegramLink, '_blank')}>
                    了解详情
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">核心服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-glow transition-all cursor-pointer" onClick={() => window.open(telegramLink, '_blank')}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-primary">{service.icon}</div>
                    {service.tag && (
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        {service.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button variant="outline" className="w-full">了解详情</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, index) => (
              <Card key={index} className="hover:shadow-medium transition-all text-center cursor-pointer" onClick={() => window.open(telegramLink, '_blank')}>
                <CardContent className="p-6 space-y-4">
                  <div className="text-primary mx-auto">{service.icon}</div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">立即开始使用 AWS</h2>
          <p className="text-xl text-muted-foreground mb-8">专业团队为您提供一对一技术支持和优惠方案</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={() => window.open(telegramLink, '_blank')}>
              立即咨询
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.open(telegramLink, '_blank')}>
              查看方案
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 AWS授权代理商. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AWS;
