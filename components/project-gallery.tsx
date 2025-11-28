"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ProjectGalleryProps {
  items: string[]; // Array of image/video URLs
  title: string;
}

export function ProjectGallery({ items, title }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  if (!items || items.length === 0) return null;

  const currentItem = items[currentIndex];
  const isVideo = currentItem.endsWith('.mp4') || currentItem.endsWith('.webm');

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Card className="overflow-hidden bg-muted/30 border-border/50">
        {/* Main Display */}
        <div className="relative aspect-video bg-black/50 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              {isVideo ? (
                <video
                  src={currentItem}
                  controls
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={currentItem}
                  alt={`${title} - Image ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {items.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background/90"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background/90"
                onClick={goToNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}

          {/* Fullscreen Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background/90"
            onClick={() => setFullscreenOpen(true)}
          >
            <Maximize2 className="h-5 w-5" />
          </Button>

          {/* Counter */}
          {items.length > 1 && (
            <div className="absolute bottom-2 right-2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
              {currentIndex + 1} / {items.length}
            </div>
          )}
        </div>

        {/* Thumbnails Row - Steam Style */}
        {items.length > 1 && (
          <div className="p-2 bg-muted/50">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border">
              {items.map((item, index) => {
                const thumbIsVideo = item.endsWith('.mp4') || item.endsWith('.webm');
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative flex-shrink-0 w-20 h-12 rounded overflow-hidden border-2 transition-all ${
                      index === currentIndex
                        ? 'border-primary scale-105'
                        : 'border-transparent hover:border-primary/50'
                    }`}
                  >
                    {thumbIsVideo ? (
                      <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                        <span className="text-xs">▶️</span>
                      </div>
                    ) : (
                      <Image
                        src={item}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </Card>

      {/* Fullscreen Dialog */}
      <Dialog open={fullscreenOpen} onOpenChange={setFullscreenOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0">
          <div className="relative w-full h-full min-h-[80vh]">
            {isVideo ? (
              <video
                src={currentItem}
                controls
                autoPlay
                loop
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={currentItem}
                  alt={`${title} - Fullscreen`}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
