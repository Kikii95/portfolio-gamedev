"use client";

import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { STATUS_CONFIG, type ProjectStatus } from "@/lib/status-config";
import { useTranslations } from "next-intl";

interface StatusBadgeProps {
  status: ProjectStatus;
  variant?: "card" | "hero";
  showTooltip?: boolean;
}

export function StatusBadge({ status, variant = "card", showTooltip = true }: StatusBadgeProps) {
  const t = useTranslations("projects");
  const config = STATUS_CONFIG[status];

  const classes = variant === "hero" ? config.heroClasses : config.cardClasses;
  const label = t(`status.${status}`);
  const description = t(`status.${status}Description`);

  const badge = (
    <Badge variant="outline" className={`${classes} ${variant === "hero" ? "backdrop-blur-md" : ""}`}>
      {config.icon} {label}
    </Badge>
  );

  if (!showTooltip) {
    return badge;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{badge}</TooltipTrigger>
      <TooltipContent side="top" className="bg-background border border-border text-foreground">
        <p className="font-medium">{label}</p>
        <p className="text-muted-foreground text-xs">{description}</p>
      </TooltipContent>
    </Tooltip>
  );
}
