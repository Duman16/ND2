import React, { useEffect, useState } from 'react';
import { fetchEntities } from '../features/entities/entitiesAPI';

const Starships = () => {
  const [starships, setStarships] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchEntities('starships', page).then((data) => setStarships(data.results));
  }, [page]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Космические корабли</h1>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Название</th>
            <th>Модель</th>
            <th>Производитель</th>
          </tr>
        </thead>
        <tbody>
          {starships.map((starship, index) => (
            <tr key={index}>
              <td>{starship.name}</td>
              <td>{starship.model}</td>
              <td>{starship.manufacturer}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-secondary"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
        >
          Назад
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Вперед
        </button>
      </div>
    </div>
  );
};

export default Starships;
