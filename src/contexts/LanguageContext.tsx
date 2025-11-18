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
    products: '产品中心',
    solutions: '解决方案',
    about: '关于我们',
    contact: '联系我们',
    hero_title: '专业产品展示平台',
    hero_subtitle: '为您提供最优质的产品和服务解决方案',
    hero_cta: '立即咨询',
    our_products: '我们的产品',
    product_a: '产品系列 A',
    product_b: '产品系列 B',
    product_c: '产品系列 C',
    product_d: '产品系列 D',
    product_a_desc: '高性能的产品解决方案，满足您的各种业务需求，提供稳定可靠的服务。',
    product_b_desc: '创新的产品设计，领先的技术支持，为您的业务增长保驾护航。',
    product_c_desc: '企业级产品服务，专业的技术团队，7x24小时全天候支持。',
    product_d_desc: '智能化产品管理，一站式解决方案，助力企业数字化转型。',
    learn_more: '了解更多',
    view_details: '查看详情',
    category_hardware: '硬件产品',
    category_software: '软件产品',
    category_service: '服务方案',
  },
  en: {
    home: 'Home',
    products: 'Products',
    solutions: 'Solutions',
    about: 'About Us',
    contact: 'Contact',
    hero_title: 'Professional Product Showcase Platform',
    hero_subtitle: 'Providing the best products and service solutions for you',
    hero_cta: 'Get Consultation',
    our_products: 'Our Products',
    product_a: 'Product Series A',
    product_b: 'Product Series B',
    product_c: 'Product Series C',
    product_d: 'Product Series D',
    product_a_desc: 'High-performance product solutions that meet your various business needs with stable and reliable services.',
    product_b_desc: 'Innovative product design with leading technical support to safeguard your business growth.',
    product_c_desc: 'Enterprise-grade product services with professional technical team and 24/7 support.',
    product_d_desc: 'Intelligent product management, one-stop solutions to help enterprises with digital transformation.',
    learn_more: 'Learn More',
    view_details: 'View Details',
    category_hardware: 'Hardware Products',
    category_software: 'Software Products',
    category_service: 'Service Solutions',
  },
  ja: {
    home: 'ホーム',
    products: '製品',
    solutions: 'ソリューション',
    about: '会社概要',
    contact: 'お問い合わせ',
    hero_title: 'プロフェッショナル製品展示プラットフォーム',
    hero_subtitle: '最高品質の製品とサービスソリューションを提供します',
    hero_cta: '今すぐ相談',
    our_products: '私たちの製品',
    product_a: '製品シリーズA',
    product_b: '製品シリーズB',
    product_c: '製品シリーズC',
    product_d: '製品シリーズD',
    product_a_desc: '高性能な製品ソリューションで、様々なビジネスニーズに応え、安定した信頼性の高いサービスを提供します。',
    product_b_desc: '革新的な製品デザインと最先端の技術サポートで、ビジネスの成長をサポートします。',
    product_c_desc: 'エンタープライズグレードの製品サービス、専門技術チーム、24時間365日のサポート。',
    product_d_desc: 'インテリジェント製品管理、ワンストップソリューションで企業のデジタル変革を支援します。',
    learn_more: '詳細を見る',
    view_details: '詳細を表示',
    category_hardware: 'ハードウェア製品',
    category_software: 'ソフトウェア製品',
    category_service: 'サービスソリューション',
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
