import React from 'react';
import {useParams, useLoaderData, useNavigate} from 'react-router-dom';

const EditJobPage = () => {
  const job = useLoaderData();

  return (
    <div>EditJobPage</div>
  )
}

export default EditJobPage