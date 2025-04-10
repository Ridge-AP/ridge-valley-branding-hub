
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  className?: string;
}

const ServiceCard = ({ title, description, icon: Icon, link, className }: ServiceCardProps) => {
  return (
    <Link 
      to={link}
      className={cn(
        "group block p-8 bg-white rounded-lg shadow-md border border-gray-100 transition-transform hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      <div className="w-16 h-16 rounded-full bg-ridge-gold/10 flex items-center justify-center mb-6">
        <Icon className="text-ridge-gold w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-ridge-gold transition-colors">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export default ServiceCard;
