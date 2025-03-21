// import React from 'react';

// const Venues = ({ venues, setSelectedVenue }) => {
//   return (
//     <div className="home-container">
//       <h1 className="text-4xl font-bold text-center mb-6">Welcome to Food Hall Ordering</h1>
//       <p className="text-center text-gray-600 mb-8">The contactless ordering solution for food halls</p>

//       <h2 className="text-2xl font-bold mb-6">Select a Food Hall</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {venues.map(venue => (
//           <div
//             key={venue.id}
//             className="venue-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
//             onClick={() => setSelectedVenue(venue)}
//           >
//             <img src={venue.image} alt={venue.name} height="40%" width="40%" />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold">{venue.name}</h3>
//               <p className="text-gray-600 mt-2">{venue.address}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Venues;
import React from 'react';
import "./Venues.css"

const Venues = ({ venues, setSelectedVenue }) => {
  return (
    <div className="home-container">
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to Food Hall Ordering</h1>
      <p className="text-center text-gray-600 mb-8">The contactless ordering solution for food halls</p>

      <h2 className="text-2xl font-bold mb-6">Select a Food Hall</h2>
      
      {/* Flexbox container */}
      <div className="venues-container">
        {venues.map(venue => (
          <div
            key={venue.id}
            className="venue-card"
            onClick={() => setSelectedVenue(venue)}
          >
            <img src={venue.image} alt={venue.name} className="venue-image" />
            <div className="venue-info">
              <h3>{venue.name}</h3>
              <p>{venue.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Venues;
