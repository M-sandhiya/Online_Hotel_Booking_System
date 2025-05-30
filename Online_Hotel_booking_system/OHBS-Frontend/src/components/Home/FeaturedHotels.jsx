// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Star, MapPin } from 'lucide-react';
// import { Hotel } from '../../types';

// interface FeaturedHotelsProps {
//   hotels: Hotel[];
// }

// const FeaturedHotels = ({ hotels }: FeaturedHotelsProps) => {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container-custom">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">Featured Properties</h2>
//           <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Discover our handpicked selection of the most exceptional hotels and resorts
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {hotels.map((hotel) => (
//             <Link 
//               key={hotel.id} 
//               to={`/hotels/${hotel.id}`} 
//               className="group overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               <div className="relative h-64 overflow-hidden">
//                 <img 
//                   src={hotel.images[0]} 
//                   alt={hotel.name} 
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center shadow-md">
//                   <Star className="w-4 h-4 text-yellow-500 mr-1" />
//                   <span className="text-sm font-medium">{hotel.starRating}</span>
//                 </div>
//               </div>
              
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
//                   {hotel.name}
//                 </h3>
                
//                 <div className="flex items-center text-gray-500 mb-4">
//                   <MapPin className="w-4 h-4 mr-1" />
//                   <span className="text-sm">{hotel.address.city}, {hotel.address.country}</span>
//                 </div>
                
//                 <p className="text-gray-600 mb-4 line-clamp-2">{hotel.description}</p>
                
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <span className="text-2xl font-bold text-primary-600">
//                       ${hotel.rooms?.[0]?.pricePerNight}
//                     </span>
//                     <span className="text-gray-500"> / night</span>
//                   </div>
                  
//                   <button className="btn btn-primary">View Details</button>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
        
//         <div className="text-center mt-12">
//           <Link 
//             to="/hotels" 
//             className="btn btn-outline border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3"
//           >
//             View All Properties
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedHotels;
