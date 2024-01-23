import React, { useState, useEffect } from 'react';
import { Card, FilterBtn, Nav } from '../components';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);//taking filters
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://studyabroad-back.onrender.com/api/courses', { withCredentials: true })
      .then(response => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleLocationChange = (location) => {//handler for changing the location
    if (location) {
      const filteredCourses = data.filter(course => course.location === location);
      setFilteredData(filteredCourses);
    } else {
      setFilteredData(data);
    }
  };

  const handleDurationChange = (duration) => {//handler for changing the duration
    if (duration) {
      const filteredCourses = data.filter((course) => course.duration === duration);
      setFilteredData(filteredCourses);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <div>
      <Nav />
      <div className='bg-blue-30 pb-20 min-h-screen padding-container'>
        <FilterBtn
          onLocationChange={handleLocationChange}
          onDurationChange={handleDurationChange}
        />
        {loading ? (
          <div className='flex items-center justify-center mt-60'>
            <progress className="progress w-56 bg-white-10"></progress>
          </div>
        ) : (
          <div className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-5'>
            {filteredData.map(cardData => (
              <Card key={cardData.id} data={cardData} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;