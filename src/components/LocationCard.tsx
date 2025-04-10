
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface LocationCardProps {
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}

const LocationCard = ({ city, address, phone, email, hours }: LocationCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
      <h3 className="text-2xl font-bold mb-4">{city}</h3>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <MapPin className="w-5 h-5 text-ridge-gold mr-3 mt-1" />
          <p>{address}</p>
        </div>
        
        <div className="flex items-center">
          <Phone className="w-5 h-5 text-ridge-gold mr-3" />
          <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:text-ridge-gold transition-colors">
            {phone}
          </a>
        </div>
        
        <div className="flex items-center">
          <Mail className="w-5 h-5 text-ridge-gold mr-3" />
          <a href={`mailto:${email}`} className="hover:text-ridge-gold transition-colors">
            {email}
          </a>
        </div>
        
        <div className="flex items-start">
          <Clock className="w-5 h-5 text-ridge-gold mr-3 mt-1" />
          <p>{hours}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
