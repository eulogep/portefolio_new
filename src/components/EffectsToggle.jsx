import { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Zap, Palette } from 'lucide-react';

const EffectsToggle = ({ enabled, onToggle, bgVariant, onCycleBg }) => {
  const nextLabel = useMemo(() => {
    switch (bgVariant) {
      case 'default': return 'Fond: violet';
      case 'purple': return 'Fond: noir';
      case 'dark': return 'Fond: bleu';
      default: return 'Fond suivant';
    }
  }, [bgVariant]);

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="icon"
        aria-pressed={enabled}
        aria-label={enabled ? 'Désactiver effets d’arrière-plan' : 'Activer effets d’arrière-plan'}
        onClick={onToggle}
        className={enabled ? 'text-primary' : ''}
      >
        <Zap size={20} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        aria-label={`Changer la couleur du fond (${nextLabel})`}
        onClick={onCycleBg}
      >
        <Palette size={20} />
      </Button>
    </div>
  );
};

export default EffectsToggle;
