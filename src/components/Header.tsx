import { useState } from 'react';
import { Menu, X, ChevronDown, Moon, Sun, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { key: 'home', href: '#home', hasSubmenu: false },
    {
      key: 'products',
      href: '#products',
      hasSubmenu: true,
      submenu: [
        { key: 'category_hardware', href: '#hardware' },
        { key: 'category_software', href: '#software' },
        { key: 'category_service', href: '#service' },
      ],
    },
    { key: 'solutions', href: '#solutions', hasSubmenu: false },
    { key: 'about', href: '#about', hasSubmenu: false },
    { key: 'contact', href: '#contact', hasSubmenu: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-hero-from to-hero-to">
            <span className="text-xl font-bold text-white">P</span>
          </div>
          <span className="text-xl font-bold text-foreground">ProductHub</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {menuItems.map((item) =>
            item.hasSubmenu ? (
              <DropdownMenu key={item.key}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  {t(item.key)}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.submenu?.map((subItem) => (
                    <DropdownMenuItem key={subItem.key}>
                      <a href={subItem.href}>{t(subItem.key)}</a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(item.key)}
              </a>
            )
          )}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setLanguage('zh')}>
                中文 {language === 'zh' && '✓'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                English {language === 'en' && '✓'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('ja')}>
                日本語 {language === 'ja' && '✓'}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            {menuItems.map((item) => (
              <div key={item.key}>
                <a
                  href={item.href}
                  className="block text-sm font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
                {item.hasSubmenu && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {item.submenu?.map((subItem) => (
                      <a
                        key={subItem.key}
                        href={subItem.href}
                        className="text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t(subItem.key)}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
