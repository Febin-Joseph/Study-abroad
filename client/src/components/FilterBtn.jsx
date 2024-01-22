import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FilterBtn = ({ onLocationChange, onDurationChange }) => {
  const [data, setData] = useState([]);
  const [uniqueLocations, setUniqueLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [uniqueDuration, setUniqueDuration] = useState([]);
  const [selectedDuration, setSelectedDuration] = useState([])

  useEffect(() => {
    axios.get('https://studyabroad-back.onrender.com/api/courses', { withCredentials: true })
      .then(response => {
        const locationsSet = new Set(response.data.map(course => course.location));
        setUniqueLocations(Array.from(locationsSet));
        setData(response.data);

        const durationSet = new Set(response.data.map(course => course.duration));
        setUniqueDuration(Array.from(durationSet));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    onLocationChange(location);
  };

  const handleAllClick = () => {
    setSelectedLocation(null);
    onLocationChange(null);
  };

  const handleDurationClick = (duration) => {
    setSelectedDuration(duration);
    onDurationChange(duration);
  };

  return (
    <div className='max-container padding-container flexEnd gap-10 p-5 mb-10'>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn m-1">Destination</label>
        <ul tabIndex={0} className="dropdown-content z-30 menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a onClick={handleAllClick}>All</a>
          </li>
          {uniqueLocations.map((location, index) => (
            <li key={index}>
              <a onClick={() => handleLocationClick(location)}>
                {location}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn m-1">Duration</label>
        <ul tabIndex={0} className="dropdown-content z-30 menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a onClick={handleAllClick}>All</a>
          </li>
          {uniqueDuration.map((duration, index) => (
            <li key={index}>
              <a onClick={() => handleDurationClick(duration)}>
                {duration} Months
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterBtn;