
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Users, TrendingUp, Package } from 'lucide-react';
import HeroImage from '@/assets/Hero.png';

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section - Technology & AI Focus */}
      <section className="relative bg-ridge-black text-white py-40">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-90">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40" 
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')` 
            }}
          ></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Text Content */}
            <div className="lg:w-1/2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                We Build the Future of Commerce
              </h1>
              <p className="text-2xl mb-4 text-ridge-gold font-medium">
                Through Revolutionary Technology & Exceptional Talent
              </p>
              <p className="text-xl mb-12 text-gray-300 leading-relaxed">
                Ridge Valley Co isn't just another distribution company. We're pioneering the intersection of AI, logistics, and human potential to redefine what's possible in modern commerce.
              </p>
              <div className="flex flex-wrap gap-6">
                <Button asChild className="btn-primary text-lg px-8 py-4">
                  <Link to="/careers">Join Our Mission</Link>
                </Button>
                <Button asChild className="bg-white text-ridge-black hover:bg-gray-200 transition-colors font-montserrat uppercase font-bold py-4 px-8 rounded text-lg">
                  <Link to="/technology">Our Technology</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:w-1/2">
              <img 
                src={HeroImage} 
                alt="Anton the Giraffe - Innovation Personified" 
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* People & Purpose Section - 30% */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Exceptional talent at Ridge Valley" 
                className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="w-20 h-20 rounded-full bg-ridge-gold/10 flex items-center justify-center mb-8">
                <Users className="text-ridge-gold w-10 h-10" />
              </div>
              <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                At Ridge Valley Co, we're building more than a company—we're creating a movement. Our mission is to empower ambitious professionals to redefine what's possible in commerce through innovation, technology, and relentless execution.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We seek individuals who thrive in dynamic environments, who see challenges as opportunities, and who believe that the future belongs to those bold enough to create it.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-ridge-gold rounded-full mr-4"></span>
                  <span className="text-lg">Competitive equity packages for all team members</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-ridge-gold rounded-full mr-4"></span>
                  <span className="text-lg">Unlimited learning and development budget</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-ridge-gold rounded-full mr-4"></span>
                  <span className="text-lg">Flexible remote-first culture</span>
                </div>
              </div>
              <Button asChild className="btn-secondary text-lg">
                <Link to="/contact" className="flex items-center">
                  Join Our Mission <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & AI Section - 30% */}
      <section className="section-padding bg-ridge-black text-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="AI and automation at Ridge Valley" 
                className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="w-20 h-20 rounded-full bg-ridge-gold/10 flex items-center justify-center mb-8">
                <Zap className="text-ridge-gold w-10 h-10" />
              </div>
              <h2 className="text-4xl font-bold mb-8">Powered by Cutting-Edge Technology</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Our proprietary AI systems optimize every aspect of our operations—from predictive analytics and automated logistics to real-time decision making that outpaces traditional methods by 300%.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                We're not just using technology; we're creating it. Our engineering team develops breakthrough solutions that transform how businesses operate at scale.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 p-6 rounded-xl">
                  <h4 className="text-ridge-gold font-bold mb-2">Machine Learning</h4>
                  <p className="text-gray-300">Predictive algorithms that anticipate market demands</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl">
                  <h4 className="text-ridge-gold font-bold mb-2">Automation</h4>
                  <p className="text-gray-300">99.7% accuracy in order processing and fulfillment</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl">
                  <h4 className="text-ridge-gold font-bold mb-2">Real-time Analytics</h4>
                  <p className="text-gray-300">Live insights driving strategic decisions</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl">
                  <h4 className="text-ridge-gold font-bold mb-2">Cloud Architecture</h4>
                  <p className="text-gray-300">Scalable infrastructure for unlimited growth</p>
                </div>
              </div>
              <Button asChild className="btn-primary text-lg">
                <Link to="/technology" className="flex items-center">
                  Explore Our Tech Stack <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneurship & Future Section - 20% */}
      <section className="section-padding bg-gradient-to-br from-ridge-gold/10 to-ridge-gold/5">
        <div className="container-custom text-center">
          <div className="w-20 h-20 rounded-full bg-ridge-gold/20 flex items-center justify-center mb-8 mx-auto">
            <TrendingUp className="text-ridge-gold w-10 h-10" />
          </div>
          <SectionHeading 
            title="Shaping Tomorrow's Economy" 
            subtitle="We don't follow trends—we create them. Ridge Valley Co is building the infrastructure for the next generation of commerce."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-ridge-gold mb-4">$50M+</div>
              <div className="text-xl font-bold mb-2">Revenue Growth</div>
              <p className="text-gray-600">Projected over the next 24 months through innovation</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-ridge-gold mb-4">3x</div>
              <div className="text-xl font-bold mb-2">Market Expansion</div>
              <p className="text-gray-600">Aggressive scaling across North American markets</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-ridge-gold mb-4">100+</div>
              <div className="text-xl font-bold mb-2">Visionary Team</div>
              <p className="text-gray-600">Exceptional talent driving unprecedented growth</p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Investment Opportunities</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
              We're actively seeking strategic partners and investors who share our vision of revolutionizing commerce through technology and exceptional execution. Join us in building the future.
            </p>
            <Button asChild className="btn-primary text-lg">
              <Link to="/investors">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Packaging Discovery Section - 20% */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="w-20 h-20 rounded-full bg-ridge-gold/10 flex items-center justify-center mb-8">
                <Package className="text-ridge-gold w-10 h-10" />
              </div>
              <h2 className="text-4xl font-bold mb-8">Our Foundation: Packaging Excellence</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                While our vision extends far beyond traditional boundaries, our expertise in packaging distribution provides the solid foundation for everything we build.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From corrugated solutions to custom retail packaging, we've mastered the fundamentals before reaching for the extraordinary.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="btn-secondary">
                  <Link to="/solutions">Our Solutions</Link>
                </Button>
                <Button asChild className="bg-gray-100 text-ridge-black hover:bg-gray-200 transition-colors font-montserrat uppercase font-bold py-3 px-6 rounded">
                  <Link to="/locations">Our Locations</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" 
                alt="Ridge Valley packaging operations" 
                className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-ridge-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Shape the Future?</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Whether you're an investor, potential team member, or industry visionary, Ridge Valley Co offers unprecedented opportunities to be part of something transformational.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button asChild className="btn-primary text-lg px-8 py-4">
              <Link to="/careers">Join Our Team</Link>
            </Button>
            <Button asChild className="bg-white text-ridge-black hover:bg-gray-200 transition-colors font-montserrat uppercase font-bold py-4 px-8 rounded text-lg">
              <Link to="/contact">Start a Conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
