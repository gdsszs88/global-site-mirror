import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'zh' | 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  zh: {
    home: '首页',
    alicloud: '阿里云国际站',
    aws: 'AWS亚马逊云',
    aws_ec2: 'AWS EC2优惠',
    migration: '上云迁移',
    partner: '合作代理',
    hero_title: '专业云服务解决方案',
    hero_subtitle: '提供全球领先的云计算服务，助力企业数字化转型',
    hero_badge: '可信赖的云服务合作伙伴',
    get_started: '立即开始',
    learn_more: '了解更多',
    featured: '精选推荐',
    our_products: '我们的产品',
    products_subtitle: '为您提供最优质的产品和服务',
    product_a: '高性能云服务器',
    product_a_desc: '弹性可扩展的计算能力，满足各种业务需求',
    product_b: '云数据库服务',
    product_b_desc: '安全可靠的数据存储解决方案',
    product_c: '云安全防护',
    product_c_desc: '全方位的安全防护体系',
    product_d: '大数据分析',
    product_d_desc: '专业的数据分析和处理平台',
    view_details: '查看详情',
    stat_products: '200+',
    stat_categories: '8',
    stat_customers: '1000+',
  },
  en: {
    home: 'Home',
    alicloud: 'Alibaba Cloud International',
    aws: 'AWS Amazon Cloud',
    aws_ec2: 'AWS EC2 Offers',
    migration: 'Cloud Migration',
    partner: 'Partner Program',
    hero_title: 'Professional Cloud Solutions',
    hero_subtitle: 'Leading global cloud computing services for digital transformation',
    hero_badge: 'Trusted Cloud Service Partner',
    get_started: 'Get Started',
    learn_more: 'Learn More',
    featured: 'Featured',
    our_products: 'Our Products',
    products_subtitle: 'Providing premium products and services',
    product_a: 'High-Performance Cloud Servers',
    product_a_desc: 'Elastic and scalable computing power for all business needs',
    product_b: 'Cloud Database Services',
    product_b_desc: 'Secure and reliable data storage solutions',
    product_c: 'Cloud Security Protection',
    product_c_desc: 'Comprehensive security protection system',
    product_d: 'Big Data Analytics',
    product_d_desc: 'Professional data analysis and processing platform',
    view_details: 'View Details',
    stat_products: '200+',
    stat_categories: '8',
    stat_customers: '1000+',
  },
  ja: {
    home: 'ホーム',
    alicloud: 'Alibaba Cloud国際版',
    aws: 'AWSアマゾンクラウド',
    aws_ec2: 'AWS EC2特典',
    migration: 'クラウド移行',
    partner: 'パートナープログラム',
    hero_title: 'プロフェッショナルクラウドソリューション',
    hero_subtitle: 'デジタル変革のためのグローバルクラウドコンピューティングサービス',
    hero_badge: '信頼できるクラウドサービスパートナー',
    get_started: '始める',
    learn_more: '詳細を見る',
    featured: '注目',
    our_products: '私たちの製品',
    products_subtitle: 'プレミアム製品とサービスを提供',
    product_a: '高性能クラウドサーバー',
    product_a_desc: 'あらゆるビジネスニーズに対応する弾力的でスケーラブルなコンピューティングパワー',
    product_b: 'クラウドデータベースサービス',
    product_b_desc: '安全で信頼性の高いデータストレージソリューション',
    product_c: 'クラウドセキュリティ保護',
    product_c_desc: '包括的なセキュリティ保護システム',
    product_d: 'ビッグデータ分析',
    product_d_desc: 'プロフェッショナルなデータ分析および処理プラットフォーム',
    view_details: '詳細を見る',
    stat_products: '200+',
    stat_categories: '8',
    stat_customers: '1000+',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('zh')) {
      setLanguage('zh');
    } else if (browserLang.startsWith('ja')) {
      setLanguage('ja');
    } else {
      setLanguage('en');
    }
  }, []);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.zh] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
