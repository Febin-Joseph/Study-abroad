import React from 'react';
import SelectBtn from './SelectBtn';

const Card = ({ data }) => {
  const { id, company, location, image, course, duration, description } = data;

  return (
    <div key={id}>
      <div className='max-container'>
        <div className="card card-compact min-w-93 h-[500px] w-95 shadow-xl p-1 rounded-3xl bg-white-20">
          <div className='flex flex-row relative overflow-hidden'>
            <div className='bg-black w-full rounded-3xl flex h-[90px] p-5 relative'>
              <div className='flex flex-col gap-1.5'>
                <h2 className='text-white-10 font-semibold'>{company}</h2>
                <h2 className='text-white-40 font-medium pl-2'>{location}</h2>
              </div>
            </div>

            <div className='absolute top-0 right-0 bg-white-10 w-[115px] h-[100px] rounded-3xl rounded-tl-0 rounded-br-0'>
              <img className='object-cover w-full h-full rounded-3xl rounded-tl-0 rounded-br-0' src={image} alt={company} />
            </div>
          </div>
          <div className="card-body">
            <div className="flex flex-col">
              <h2 className=" font-bold text-black text-[18px]">{course}</h2>
              <h2 className="font-bold text-black text-[15px] pl-3 pt-2">{duration} Months</h2>
            </div>

            {description.map((desc, index) => (
              <div key={index} className='mt-2 pl-6 font-semibold text-[18px] text-black text-opacity-7 flex flex-col'>
                <ul>
                  <li key={index}>
                    <p className="flex items-center whitespace-wrap">
                      <span className='bg-blue-10 w-3 h-3 rounded-full mr-2'></span>
                      {desc}
                    </p>
                  </li>
                </ul>
              </div>
            ))}

            <div className='mt-8 flex-grow'>
              <SelectBtn />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;