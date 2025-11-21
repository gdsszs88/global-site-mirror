import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  FileCheck, 
  CreditCard, 
  Globe, 
  Server,
  Database,
  Lock,
  HardDrive
} from "lucide-react";

const AliCloud = () => {
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

  const advantages = [
    {
      title: "快速注册指导",
      description: "仅需提供一个邮箱注册，并使用海外手机号获取一次验证。极速开户，即刻开启阿里云国际上云之旅"
    },
    {
      title: "免备案",
      description: "阿里云国际无需实认证、免备案，快速注册直接购买。更好的保障您的个人信息安全"
    },
    {
      title: "PayPal免绑定",
      description: "通过代理进行注册，不需要绑定PayPal信用卡，即可新购、充值、续费阿里云国际版，无须担心卡被盗刷"
    },
    {
      title: "多种支付方式",
      description: "国际版的业务我们按美金计费您可以选择美元或人民币支付，人民币支付可以按当天的汇率来计算"
    }
  ];

  const serverRegions = [
    {
      title: "国内云服务器",
      servers: ["云服务器ecs", "gpu云服务器", "弹性裸金属云服务器", "弹性容器实例ECI", "FPGA云服务器", "高防云服务器", "显卡云服务器", "香港云服务器", "台湾云服务器"]
    },
    {
      title: "亚洲云服务器",
      servers: ["新加坡云服务器", "日本云服务器", "马来西亚云服务器", "印度云服务器", "越南云服务器", "泰国云服务器", "土耳其云服务器", "阿联酋云服务器", "菲律宾云服务器"]
    },
    {
      title: "美洲云服务器",
      servers: ["美国云服务器", "加拿大云服务器", "巴西云服务器", "墨西哥云服务器", "阿根廷云服务器", "哥伦比亚云服务器"]
    },
    {
      title: "欧洲云服务器",
      servers: ["英国云服务器", "法国云服务器", "德国云服务器", "荷兰云服务器", "瑞典云服务器", "立陶宛云服务器", "卢森堡云服务器", "冰岛云服务器", "罗马尼亚云服务器", "俄罗斯云服务器", "葡萄牙云服务器", "意大利云服务器"]
    },
    {
      title: "大洋洲云服务器",
      servers: ["澳大利亚云服务器", "印尼云服务器", "新西兰云服务器"]
    },
    {
      title: "非洲云服务器",
      servers: ["埃及云服务器", "南非云服务器", "刚果云服务器", "非洲云服务器"]
    }
  ];

  const instanceTypes = [
    { name: "经济型 e实例", cpu: "2核2G", disk: "40G ESSD Entry云盘", bandwidth: "1Mbps", price: "$14.48/月 起" },
    { name: "突发性能t6", cpu: "2核4G", disk: "40G 高效云盘", bandwidth: "1Mbps", price: "$26.33/月 起" },
    { name: "内存型实例（r7，r6，r5）", cpu: "1：8", iops: "60万", pps: "r7：24000000 pps", price: "$89.97/月 起" }
  ];

  const coreServices = [
    { icon: <Server className="h-8 w-8" />, title: "云服务器 ECS", description: "弹性扩展的计算服务" },
    { icon: <Database className="h-8 w-8" />, title: "云数据库 RDS", description: "稳定可靠的数据库服务" },
    { icon: <Lock className="h-8 w-8" />, title: "云安全", description: "全方位的安全防护" },
    { icon: <HardDrive className="h-8 w-8" />, title: "云存储", description: "海量可靠的存储空间" }
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
              阿里云国际官方授权服务商
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              代充值/送账号 免实开户 不绑卡免备案 多种支付方式
            </p>
            <p className="text-lg text-muted-foreground">
              国内/国外云服务器/数据库/云安全/大数据等全系列云服务!
            </p>
            <p className="text-lg text-muted-foreground">
              提供香港，美国，新加坡，日本，马来西亚，俄罗斯，德国等全球云服务器，助力企业出海上云降本增效!
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

      {/* Advantages */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">阿里云国际优势</h2>
            <p className="text-xl text-muted-foreground">阿里云国际站所有的产品，无需要实认证直接购买</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-medium transition-all cursor-pointer" onClick={() => window.open(telegramLink, '_blank')}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Servers */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">全球云服务器租用-助力企业出海上云降本增效</h2>
            <p className="text-xl text-muted-foreground mb-6">更多地区云服务器请点击下面在线咨询</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button onClick={() => window.open(telegramLink, '_blank')}>Telegram联系</Button>
              <Button variant="outline" onClick={() => window.open(telegramLink, '_blank')}>WhatsApp联系</Button>
            </div>
          </div>

          <div className="space-y-8">
            {serverRegions.map((region, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold mb-4">{region.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {region.servers.map((server, idx) => (
                    <Button 
                      key={idx} 
                      variant="outline" 
                      onClick={() => window.open(telegramLink, '_blank')}
                    >
                      {server}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instance Types */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">基于场景的规格族分类</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instanceTypes.map((instance, index) => (
              <Card key={index} className="hover:shadow-glow transition-all">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{instance.name}</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-muted-foreground">配置:</span> {instance.cpu}</p>
                    {instance.disk && <p><span className="text-muted-foreground">系统盘:</span> {instance.disk}</p>}
                    {instance.bandwidth && <p><span className="text-muted-foreground">带宽:</span> {instance.bandwidth}</p>}
                    {instance.iops && <p><span className="text-muted-foreground">IOPS:</span> {instance.iops}</p>}
                    {instance.pps && <p><span className="text-muted-foreground">网络:</span> {instance.pps}</p>}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-2xl font-bold text-primary mb-4">{instance.price}</p>
                    <Button className="w-full" onClick={() => window.open(telegramLink, '_blank')}>
                      立即购买
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">核心服务</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">立即开始您的云之旅</h2>
          <p className="text-xl text-muted-foreground mb-8">专业团队为您提供一对一技术支持</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={() => window.open(telegramLink, '_blank')}>
              免费咨询
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
          <p>© 2024 阿里云国际服务商. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AliCloud;
