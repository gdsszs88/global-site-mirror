import { Send, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingContact = () => {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-glow hover:scale-110 transition-transform"
        onClick={() => window.open('https://t.me/gaoshengsm', '_blank')}
        aria-label="Telegram联系"
      >
        <Send className="h-6 w-6" />
      </Button>
      
      <div className="relative group">
        <Button
          size="lg"
          className="rounded-full w-14 h-14 shadow-glow hover:scale-110 transition-transform bg-accent hover:bg-accent/90"
          onClick={() => window.open('https://sc.server520.top', '_blank')}
          aria-label="自助购买"
        >
          <ShoppingCart className="h-6 w-6" />
        </Button>
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          <div className="bg-popover text-popover-foreground px-3 py-2 rounded-md shadow-lg text-sm">
            自助购买
          </div>
        </div>
      </div>
    </div>
  );
};
