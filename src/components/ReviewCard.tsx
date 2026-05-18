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
    <div className="surface-panel p-6 sm:p-8 flex flex-col h-full bg-foreground/5 relative">
      <div className="flex gap-1 mb-4">
        {[...Array(review.rating)].map((_, index) => (
          <Star key={index} className="size-4 fill-accent text-accent drop-shadow-[0_0_5px_rgba(166,124,82,0.3)]" />
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
          <p className="font-bold text-heading">{review.author}</p>
          <p className="text-xs text-foreground/50 mt-1">Bewertet am {review.date}</p>
        </div>
        <div className="px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full text-[10px] font-semibold text-primary/80 uppercase tracking-wider backdrop-blur-md flex items-center gap-1">
          {review.source}
          {review.source === "MyHammer" && <ExternalLink className="size-3" />}
        </div>
      </div>
    </div>
  );
}
