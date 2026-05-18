import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { REVIEWS } from "@/lib/site-data";

export function ReviewCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative group">
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex -ml-4 md:-ml-6">
          {REVIEWS.map((review, index) => (
            <div 
              key={index} 
              className="pl-4 md:pl-6 min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          className="size-12 rounded-full glass-panel flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary/20 hover:text-primary transition-colors z-10"
          aria-label="Vorherige Bewertung"
        >
          <ChevronLeft className="size-6" />
        </button>
        <button
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          className="size-12 rounded-full glass-panel flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary/20 hover:text-primary transition-colors z-10"
          aria-label="Nächste Bewertung"
        >
          <ChevronRight className="size-6" />
        </button>
      </div>
    </div>
  );
}
