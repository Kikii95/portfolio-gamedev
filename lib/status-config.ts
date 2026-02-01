export const STATUS_CONFIG = {
  actif: {
    dotClass: 'bg-blue-500',
    cardClasses: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
    heroClasses: 'bg-blue-500/30 text-blue-300 border-blue-400/50',
  },
  pause: {
    dotClass: 'bg-orange-500',
    cardClasses: 'bg-orange-500/20 text-orange-400 border-orange-500/50',
    heroClasses: 'bg-orange-500/30 text-orange-300 border-orange-400/50',
  },
  stable: {
    dotClass: 'bg-cyan-500',
    cardClasses: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50',
    heroClasses: 'bg-cyan-500/30 text-cyan-300 border-cyan-400/50',
  },
  maintenance: {
    dotClass: 'bg-purple-500',
    cardClasses: 'bg-purple-500/20 text-purple-400 border-purple-500/50',
    heroClasses: 'bg-purple-500/30 text-purple-300 border-purple-400/50',
  },
  archive: {
    dotClass: 'bg-green-500',
    cardClasses: 'bg-green-500/20 text-green-400 border-green-500/50',
    heroClasses: 'bg-green-500/30 text-green-300 border-green-400/50',
  },
} as const;

export type ProjectStatus = keyof typeof STATUS_CONFIG;

export function getStatusConfig(status: ProjectStatus) {
  return STATUS_CONFIG[status];
}
