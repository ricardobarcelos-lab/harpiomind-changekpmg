import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Lock, Sparkles } from "lucide-react";

interface HarpioMindDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  candidateLabel: string;
}

const HarpioMindDialog = ({ open, onOpenChange, candidateLabel }: HarpioMindDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-0 bg-gradient-harpio p-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-kpmg-light/10 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gold/20 blur-3xl pointer-events-none" />

        <div className="relative p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
              <Lock className="w-5 h-5 text-harpio-black" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-gold-light">Perfil Blindado</p>
              <p className="text-xs text-white/60">{candidateLabel}</p>
            </div>
          </div>

          <DialogHeader className="text-left space-y-3">
            <DialogTitle className="font-display text-2xl text-white leading-tight">
              Já contratou o seu plano <span className="italic text-gold-light">Harpio Mind</span>?
            </DialogTitle>
            <DialogDescription className="text-white/70 text-sm leading-relaxed">
              A identidade desta pessoa candidata, perfil completo, histórico profissional e dados de contato
              estão protegidos. Desbloqueie o relatório integral assinando o plano Harpio Mind.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 grid grid-cols-3 gap-2 text-center">
            {["Identidade", "LinkedIn", "Contato"].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-2 py-3">
                <Lock className="w-3 h-3 mx-auto mb-1 text-gold-light" />
                <p className="text-[10px] font-semibold text-white/70">{item}</p>
              </div>
            ))}
          </div>

          <DialogFooter className="mt-8 gap-2 sm:gap-2">
            <Button
              variant="ghost"
              onClick={() => onOpenChange(false)}
              className="text-white/60 hover:text-white hover:bg-white/10"
            >
              Mais tarde
            </Button>
            <Button
              className="bg-gradient-gold text-harpio-black font-bold hover:opacity-90 shadow-gold"
              onClick={() => onOpenChange(false)}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Contratar Harpio Mind
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HarpioMindDialog;
