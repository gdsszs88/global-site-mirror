import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Phone } from 'lucide-react';

const AliCloud = () => {
  const features = [
    {
      title: '优惠折扣',
      description: '减了又减的折扣叠加方案',
      color: 'bg-gradient-to-br from-orange-500 to-red-500'
    },
    {
      title: '免备案',
      description: '只需邮箱轻松注册使用',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      title: '技术支持',
      description: '迁移上云，多云管理',
      color: 'bg-gradient-to-br from-orange-500 to-red-500'
    },
    {
      title: '多元支付',
      description: '多币种支付',
      color: 'bg-gradient-to-br from-blue-500 to-purple-500'
    }
  ];

  const advantages = [
    {
      title: '快速注册指导',
      description: '仅需提供一个邮箱注册，并使用海外手机号获取一次验证。极速开户，即刻开启阿里云国际上云之旅'
    },
    {
      title: '免备案',
      description: '阿里云国际无需实认证、免备案，快速注册直接购买。更好的保障您的个人信息安全'
    },
    {
      title: 'PayPal免绑定',
      description: '通过代理进行注册，不需要绑定PayPal信用卡，即可新购、充值、续费阿里云国际版，无须担心卡被盗刷'
    },
    {
      title: '多种支付方式',
      description: '国际版的业务我们按美金计费您可以选择美元或人民币支付，人民币支付可以按当天的汇率来计算'
    }
  ];

  const serverRegions = [
    {
      region: '国内云服务器',
      servers: ['云服务器ecs', 'gpu云服务器', '弹性裸金属云服务器', '弹性容器实例ECI', 'FPGA云服务器', '高防云服务器', '显卡云服务器', '香港云服务器', '台湾云服务器']
    },
    {
      region: '亚洲云服务器',
      servers: ['新加坡云服务器', '日本云服务器', '马来西亚云服务器', '印度云服务器', '越南云服务器', '泰国云服务器', '土耳其云服务器', '阿联酋云服务器', '菲律宾云服务器']
    },
    {
      region: '美洲云服务器',
      servers: ['美国云服务器', '加拿大云服务器', '巴西云服务器', '墨西哥云服务器', '阿根廷云服务器', '哥伦比亚云服务器']
    },
    {
      region: '欧洲云服务器',
      servers: ['英国云服务器', '法国云服务器', '德国云服务器', '荷兰云服务器', '瑞典云服务器', '立陶宛云服务器', '卢森堡云服务器', '冰岛云服务器', '罗马尼亚云服务器', '俄罗斯云服务器', '葡萄牙云服务器', '意大利云服务器']
    },
    {
      region: '大洋洲云服务器',
      servers: ['澳大利亚云服务器', '新西兰云服务器']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-blue-50 to-purple-50 dark:from-orange-950/20 dark:via-blue-950/20 dark:to-purple-950/20 py-16 md:py-24">
        <div className="container relative mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge className="mb-6 bg-orange-500 text-white hover:bg-orange-600">
                <img src="https://www.1468cn.com/dist/image/alygj/aliyun-logo.png" alt="阿里云" className="h-4 mr-2 inline" />
                合作伙伴
              </Badge>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                阿里云国际官方授权服务商
              </h1>
              <p className="mb-4 text-lg font-semibold text-orange-600 dark:text-orange-400 md:text-xl">
                代充值/送账号 免实开户 不绑卡免备案 多种支付方式
              </p>
              <p className="mb-3 text-base text-muted-foreground">
                国内/国外云服务器/数据库/云安全/大数据等全系列云服务!
              </p>
              <p className="mb-3 text-base text-muted-foreground">
                提供香港，美国，新加坡，日本，马来西亚，俄罗斯，德国等全球云服务器,
              </p>
              <p className="mb-8 text-base font-semibold text-foreground">
                助力企业出海上云降本增效!
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Telegram联系
                </Button>
                <Button size="lg" className="bg-green-500 hover:bg-green-600">
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsAPP联系
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <img 
                  src="https://www.1468cn.com/dist/image/alygj/banner-1-1.png" 
                  alt="阿里云服务器" 
                  className="relative z-10 w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="group relative overflow-hidden border-2 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className={`absolute inset-0 ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <CardHeader className="relative">
                  <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-xl ${feature.color} text-white shadow-lg`}>
                    <img 
                      src={`https://www.1468cn.com/dist/image/index/bbm-${index + 1}.png`} 
                      alt={feature.title}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              阿里云国际优势
            </h2>
            <p className="text-lg text-muted-foreground">
              阿里云国际站所有的产品，无需要实认证直接购买
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {advantages.map((advantage, index) => (
              <Card key={index} className="group transition-all hover:shadow-lg hover:border-orange-500/50">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">{advantage.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{advantage.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Servers Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              全球云服务器租用-助力企业出海上云降本增效
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              更多地区云服务器请点击下面在线咨询
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                <MessageCircle className="mr-2 h-5 w-5" />
                Telegram联系
              </Button>
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                <Phone className="mr-2 h-5 w-5" />
                WhatsAPP联系
              </Button>
            </div>
          </div>

          <div className="space-y-12">
            {serverRegions.map((region, regionIndex) => (
              <div key={regionIndex}>
                <h3 className="mb-6 text-2xl font-bold text-foreground border-l-4 border-orange-500 pl-4">
                  {region.region}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {region.servers.map((server, serverIndex) => (
                    <Button
                      key={serverIndex}
                      variant="outline"
                      className="hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all"
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

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">准备开始了吗？</h2>
            <p className="mb-8 text-lg opacity-95">
              立即联系我们，获取专属优惠方案和技术支持
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                <MessageCircle className="mr-2 h-5 w-5" />
                Telegram咨询
              </Button>
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                WhatsAPP咨询
              </Button>
            </div>
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
