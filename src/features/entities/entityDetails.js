import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EntityDetails = () => {
  const { endpoint, id } = useParams(); // Динамические параметры из маршрута
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.dev/documentation/${endpoint}/${id}/`).then((response) => {
      setDetails(response.data);
    });
  }, [endpoint, id]);

  if (!details) {
    return <p>Загрузка...</p>;
  }

  return (
    <div>
      <h1>Детали</h1>
      <pre>{JSON.stringify(details, null, 2)}</pre>
    </div>
  );
};

export default EntityDetails;
