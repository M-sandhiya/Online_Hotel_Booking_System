import React from 'react';
import { Shield, Clock, CreditCard, Award } from 'lucide-react';

const SearchForm = () => {
  const features = [
    {
      icon: <Award className="w-12 h-12 text-primary-600" />,
      title: 'Luxury Selection',
      description: 'Handpicked premium hotels and resorts for an unforgettable experience.',
    },
    {
      icon: <Shield className="w-12 h-12 text-primary-600" />,
      title: 'Best Price Guarantee',
      description: 'We promise the best rates and will match any lower price you find.',
    },
    {
      icon: <Clock className="w-12 h-12 text-primary-600" />,
      title: '24/7 Support',
      description: 'Our dedicated team is here to assist you anytime, anywhere.',
    },
    {
      icon: <CreditCard className="w-12 h-12 text-primary-600" />,
      title: 'Secure Booking',
      description: 'Your payments and personal information are always protected.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose InnoStay</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
