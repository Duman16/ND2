import React, { useEffect, useState } from 'react';
import { fetchEntities } from '../features/entities/entitiesAPI';

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchEntities('planets', page).then((data) => setPlanets(data.results));
  }, [page]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Планеты</h1>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Название</th>
            <th>Климат</th>
            <th>Население</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((planet, index) => (
            <tr key={index}>
              <td>{planet.name}</td>
              <td>{planet.climate}</td>
              <td>{planet.population}</td>
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

export default Planets;
