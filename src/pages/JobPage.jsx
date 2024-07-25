import React from 'react';
// import {useState, useEffect} from 'react';
import {useParams, useLoaderData} from 'react-router-dom';


const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();

  return  <h1>{job.title}</h1>;
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};


export {JobPage as default, jobLoader} ;