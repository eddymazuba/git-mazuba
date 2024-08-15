import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Fetch = () => {
  const [user, setUser] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios.get("https://dummyjson.com/users");
        setUser(results.data.users); // Access the correct part of the response data
        console.log(results.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul className='grid grid-cols-4 gap-4 lg:grid-cols-6 md:grid-cols-3 md:text-blue-700'>
        {user.map((item) => (
          <li className='flex text-black justify-center border-2 border-gray h-20 w-20 m-2' key={item.id}>{item.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
