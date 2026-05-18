import { useState } from "react";
import { Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

type Review = {
  author: string;
  date: string;
  rating: number;
  service: string;
  text: string;
  source: string;
};

export function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  
  const maxLength = 160;
  const shouldTruncate = review.text.length > maxLength;
  
  const displayText = expanded ? review.text : 
    (shouldTruncate ? review.text.slice(0, maxLength) + "..." : review.text);

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col h-full bg-white/5 relative">
      <div className="flex gap-1 mb-4">
        {[...Array(review.rating)].map((_, index) => (
          <Star key={index} className="size-4 fill-primary text-primary drop-shadow-[0_0_5px_rgba(16,185,129,0.3)]" />
        ))}
      </div>
      
      <p className="font-semibold text-primary mb-3 text-sm">
        {review.service}
      </p>
      
      <div className="text-foreground/80 leading-relaxed text-base italic flex-1 min-h-[5rem]">
        "{displayText}"
        {shouldTruncate && (
          <button 
            onClick={() => setExpanded(!expanded)}
            className="ml-2 text-primary font-medium hover:underline text-sm inline-flex items-center not-italic"
          >
            {expanded ? "Weniger" : "Weiterlesen"}
          </button>
        )}
      </div>
      
      <div className="mt-8 pt-5 border-t border-glass-border flex flex-wrap justify-between items-end gap-2">
        <div>
          <p className="font-bold text-white">{review.author}</p>
          <p className="text-xs text-foreground/50 mt-1">Bewertet am {review.date}</p>
        </div>
        <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-semibold text-primary/80 uppercase tracking-wider backdrop-blur-md flex items-center gap-1">
          {review.source}
          {review.source === "MyHammer" && <ExternalLink className="size-3" />}
        </div>
      </div>
    </div>
  );
}
