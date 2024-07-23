import React from 'react';
import {useState, useEffect} from 'react';

const JobPage = () => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async() => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);  
      } catch (error) {
        console.log('Error fetching data', error);
        
      } finally{
        setLoading(false);
      }

    }

    fetchJob();
  },[])


  return 
    <div>JobPage</div>
  
};


export default JobPage;