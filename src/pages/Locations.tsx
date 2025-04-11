import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import LocationCard from '@/components/LocationCard';
// Removed previous import of { locations } from '@/data/locations'
// and replaced with updated location data
const locations = [
  {
    id: 'phoenix',
    city: 'Phoenix',
    address: '2636 S Wilson St, Suite 104, Tempe, AZ 85282',
    phone: '(702) 817-4778',
    email: 'info@ridgevalley.co',
    hours: 'Mon-Fri: 8am - 4pm'
  },
  {
    id: 'brooklyn',
    city: 'Brooklyn',
    address: '14 53rd St, 6th & 7th Floors, Brooklyn, NY 11232',
    phone: '(702) 817-4778',
    email: 'info@ridgevalley.co',
    hours: 'Mon-Fri: 8am - 4pm'
  },
  {
    id: 'saltlakecity',
    city: 'Salt Lake City',
    address: '1580 S 500 W, Suite 100, Salt Lake City, UT 8411',
    phone: '(702) 817-4778',
    email: 'info@ridgevalley.co',
    hours: 'Mon-Fri: 8am - 4pm'
  }
];

const LocationsPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Our Locations" 
        subtitle="Ridge Valley Co has three convenient locations to serve you across the United States."
      />
      
      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <iframe
              title="Ridge Valley Co Locations"
              src="https://www.google.com/maps/d/embed?mid=19aKIsAj5_YFQntin6C3KTIOd-L8LNaI&ehbc=2E312F"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Locations Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location) => (
              <LocationCard
                key={location.id}
                city={location.city}
                address={location.address}
                phone={location.phone}
                email={location.email}
                hours={location.hours}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* National Coverage Section */}
      <section className="section-padding bg-ridge-gold/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">National Coverage</h2>
            <p className="text-lg mb-8">
              With our strategically located facilities in Phoenix, Brooklyn, and Salt Lake City, 
              Ridge Valley Co can efficiently serve businesses across the United States. 
              Our national network allows us to provide fast delivery times and responsive 
              service no matter where your business is located.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Our Service Capabilities Include:</h3>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ridge-gold rounded-full mr-3"></span>
                  Next-day delivery to major metropolitan areas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ridge-gold rounded-full mr-3"></span>
                  Nationwide shipping via trusted carriers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ridge-gold rounded-full mr-3"></span>
                  Rush order processing for time-sensitive needs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ridge-gold rounded-full mr-3"></span>
                  Bulk delivery scheduling for large orders
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-ridge-gold rounded-full mr-3"></span>
                  International shipping capabilities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LocationsPage;
