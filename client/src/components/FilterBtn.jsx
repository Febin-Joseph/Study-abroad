import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FilterBtn = ({ onLocationChange, onDurationChange }) => {
  const [data, setData] = useState([]);
  const [uniqueLocations, setUniqueLocations] = useState([]);//Only sets unique location for displaying in the dropdown
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [uniqueDuration, setUniqueDuration] = useState([]);//Only sets unique duration for displaying in the dropdown
  const [selectedDuration, setSelectedDuration] = useState([])

  useEffect(() => {
    axios.get('https://studyabroad-back.onrender.com/api/courses', { withCredentials: true })
      .then(response => {
        const locationsSet = new Set(response.data.map(course => course.location));//Here it will  set one unique location using Set
        setUniqueLocations(Array.from(locationsSet));//Convert it to an Array containing unique values
        setData(response.data);

        const durationSet = new Set(response.data.map(course => course.duration));//Here it will  set one unique duration using Set
        setUniqueDuration(Array.from(durationSet));//Convert it to an Array containing unique values
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleLocationClick = (location) => {//Checking which location name is clicked
    setSelectedLocation(location);
    onLocationChange(location);
  };

  const handleAllClick = () => {//if clciked on all 
    setSelectedLocation(null);//seting to null for removing every filters and displaying every courses
    onLocationChange(null);
  };

  const handleDurationClick = (duration) => {//Checking which duration is clicked
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