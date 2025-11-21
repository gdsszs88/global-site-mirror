import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileCheck, Server, CreditCard, Cpu, HardDrive, Zap } from "lucide-react";

const AWSEC2 = () => {
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

  const generalInstances = [
    {
      name: "Mac实例 - Mac1",
      features: ["在Apple Mac 硬件上构建", "唯一支持 Mac 实例的服务器", "6 个物理内核/12 个逻辑内核", "32GiB 内存", "专用的裸机实例"]
    },
    {
      name: "ARM架构实例 - T4g",
      features: ["Amazon Graviton2 Arm架构处理器", "2vCPU/ 512MB 内存起", "最高可达64vCPU/ 256G 内存", "高达 25Gbps 的网络带宽", "指定机型可享0元开机*"]
    },
    {
      name: "Intel 实例 - M6i",
      features: ["第 3 代英特尔至强可扩展处理器", "2vCPU/ 8G 内存起", "最高可达128vCPU/ 512G 内存", "高达 50 Gbps 的网络带宽", "全天候运行内存加密"]
    },
    {
      name: "AMD 实例 - M5a",
      features: ["AMD EPYC 7000 系列处理器", "2vCPU/ 8G 内存起", "最高可达 96vCPU/ 384G 内存", "最高 20Gbps 的网络带宽", "高达 3.6TB 的本地 NVMe 存储"]
    }
  ];

  const computeInstances = [
    {
      name: "ARM架构实例 - C6g",
      features: ["Amazon Graviton2 Arm架构处理器", "1vCPU/ 2G 内存起", "最高可达64vCPU/ 128G 内存", "高达 25Gbps 的网络带宽", "高达3.8TB 的本地 NVMe 存储"]
    },
    {
      name: "联网增强实例 - C5n",
      features: ["3.0 GHz Intel Xeon Platinum 处理器", "1vCPU/ 2G 内存起", "最高可达72vCPU/ 192G 内存", "支持高达 100Gbps 的网络带宽", "38Gbps EBS带宽"]
    },
    {
      name: "Intel 实例 - C5",
      features: ["第二代 Intel Xeon 可扩展处理器", "2vCPU/ 4G 内存起", "最高可达96vCPU/ 192G 内存", "支持25Gbps 的网络带宽", "高达 3.6T 的本地 NVMe 存储"]
    },
    {
      name: "AMD 实例 - C5a",
      features: ["AMD EPYC 7000 系列处理器", "2vCPU/ 4G 内存起", "最高可达96vCPU/ 192G 内存", "支持20Gbps 的网络带宽", "高达 3.8T 的本地 NVMe 存储"]
    }
  ];

  const serverTypes = [
    { icon: <Server className="h-8 w-8" />, name: "通用计算型", active: true },
    { icon: <Cpu className="h-8 w-8" />, name: "计算优化型", active: false },
    { icon: <HardDrive className="h-8 w-8" />, name: "内存优化型", active: false },
    { icon: <Zap className="h-8 w-8" />, name: "加速计算型", active: false },
    { icon: <HardDrive className="h-8 w-8" />, name: "存储优化型", active: false }
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
              AWS亚马逊云官方授权代理商
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
                WhatsApp联系
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

      {/* Free Tier Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">立即免费体验全球卓越的云服务</h2>
            <p className="text-xl text-muted-foreground">CLOUD SERVICES</p>
          </div>

          <Card className="max-w-4xl mx-auto mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Amazon EC2 云服务器</h3>
              <p className="text-muted-foreground mb-6">
                Amazon Elastic Compute Cloud（Amazon EC2 云服务器）是一种 Web 云服务，能在云中提供安全且可调整大小的计算能力。
              </p>
              <div className="bg-primary/10 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold mb-4">云服务器 - 免费12个月</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p>• 高频 Intel Xeon 处理器</p>
                    <p>• 性能可突增的 CPU</p>
                    <p>• 1核 1G</p>
                    <p>• 30GB SSD</p>
                    <p>• 多操作系统可选</p>
                    <p>• 可升级为MacOS/ Deep Learning AMI*</p>
                  </div>
                  <div className="space-y-2">
                    <p>• 网站和 Web 应用程序</p>
                    <p>• 开发环境</p>
                    <p>• 构建服务器</p>
                    <p>• 代码存储库</p>
                    <p>• 微服务</p>
                    <p>• 测试和暂存环境</p>
                    <p>• 业务应用程序</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">*需升级为非付费实例</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => window.open(telegramLink, '_blank')}>
                  开始免费12个月
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.open(telegramLink, '_blank')}>
                  查看全部机型
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Amazon Lightsail 虚拟专用服务器 (VPS)</h3>
              <p className="text-muted-foreground mb-6">
                Lightsail 提供一款易于使用的虚拟专用服务器 (VPS)，能为您提供构建应用程序或网站所需的一切，让您享受经济高效的每月计划。
              </p>
              <div className="bg-accent/10 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold mb-4">虚拟服务器VPS - 免费3个月</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p>• 1核 2G</p>
                    <p>• 60GB SSD 硬盘</p>
                    <p>• Linux/Windows/Unix 系统可选</p>
                    <p>• 3TB 数据传输</p>
                    <p>• CDN 永久免费 每月 1TB</p>
                    <p>• 数据库捆绑包3个月免费</p>
                    <p>• 容器（Micro-1节点）3个月免费</p>
                  </div>
                  <div className="space-y-2">
                    <p>• 静态 IP 地址， DNS 管理</p>
                    <p>• 直观的管理控制台</p>
                    <p>• 一键式 SSH 终端访问 (Linux/Unix)</p>
                    <p>• 一键式 RDP 访问 (Windows)</p>
                    <p>• 功能强大的 API</p>
                    <p>• 高度可用的 SSD 存储</p>
                    <p>• 服务器监控</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => window.open(telegramLink, '_blank')}>
                  开始免费12个月
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.open(telegramLink, '_blank')}>
                  查看全部机型
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Server Types */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Amazon EC2 服务器类型</h2>
            <p className="text-xl text-muted-foreground">SERVER TYPE</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serverTypes.map((type, index) => (
              <Button 
                key={index}
                variant={type.active ? "default" : "outline"}
                size="lg"
                className="gap-2"
                onClick={() => window.open(telegramLink, '_blank')}
              >
                {type.icon}
                {type.name}
              </Button>
            ))}
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">通用计算型实例</h3>
            <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              通用实例提供计算、内存和联网资源三方面的平衡，可用于各种不同的工作负载。这些实例非常适合于以相同比例使用这些资源的应用程序，如 Web 服务器和代码存储库。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {generalInstances.map((instance, index) => (
                <Card key={index} className="hover:shadow-glow transition-all">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold mb-4">{instance.name}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                      {instance.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                    <Button className="w-full" onClick={() => window.open(telegramLink, '_blank')}>
                      选择此机型
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">计算优化型实例</h3>
            <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              计算优化型实例非常适用于从高性能处理器获取的受计算限制的应用程序。属于此系列的实例非常适用于批处理工作负载、媒体转码、高性能 Web 服务器、高性能计算 (HPC)、科学建模、专用游戏服务器和广告服务器引擎、机器学习推理和其他计算密集型应用程序。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {computeInstances.map((instance, index) => (
                <Card key={index} className="hover:shadow-glow transition-all">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold mb-4">{instance.name}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                      {instance.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                    <Button className="w-full" onClick={() => window.open(telegramLink, '_blank')}>
                      选择此机型
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">开始使用 AWS EC2</h2>
          <p className="text-xl text-muted-foreground mb-8">专业团队为您提供一对一技术支持和优惠方案</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={() => window.open(telegramLink, '_blank')}>
              立即注册
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.open(telegramLink, '_blank')}>
              查看价格
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

export default AWSEC2;
