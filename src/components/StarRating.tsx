import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: number;
}

const StarRating = ({ rating, size = 14 }: StarRatingProps) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={
            star <= Math.floor(rating)
              ? "fill-bmw-gold text-bmw-gold"
              : star - 0.5 <= rating
              ? "fill-bmw-gold/50 text-bmw-gold"
              : "text-muted-foreground/30"
          }
        />
      ))}
      <span className="ml-1.5 text-muted-foreground text-xs">{rating.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;
