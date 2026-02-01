"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { STATUS_CONFIG, type ProjectStatus } from "@/lib/status-config";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

export function StatusLegend() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("projects");

  const statuses = Object.keys(STATUS_CONFIG) as ProjectStatus[];

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-6">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground gap-2">
          <span>{t("statusLegend")}</span>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </Button>
      </CollapsibleTrigger>
      <AnimatePresence>
        {isOpen && (
          <CollapsibleContent forceMount asChild>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-4 p-4 rounded-lg bg-muted/30 border border-border/50">
                {statuses.map((status) => {
                  const config = STATUS_CONFIG[status];
                  return (
                    <div key={status} className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span>{config.icon}</span>
                        <span className="font-medium text-sm">{t(`status.${status}`)}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{t(`status.${status}Description`)}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </CollapsibleContent>
        )}
      </AnimatePresence>
    </Collapsible>
  );
}
