
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  className?: string;
}

const TestimonialCard = ({ quote, author, company, className }: TestimonialCardProps) => {
  return (
    <div className={cn("bg-white p-8 rounded-lg shadow-md border border-gray-100", className)}>
      <div className="text-ridge-gold mb-4 text-3xl font-serif">"</div>
      <p className="italic mb-6 text-gray-700">{quote}</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
