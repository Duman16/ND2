import React, { useEffect, useState } from 'react';
import { fetchEntities } from '../features/entities/entitiesAPI';

const Character = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchEntities('people', page).then((data) => setCharacters(data.results));
  }, [page]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Персонажи</h1>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Имя</th>
            <th>Рост</th>
            <th>Вес</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character, index) => (
            <tr key={index}>
              <td>{character.name}</td>
              <td>{character.height}</td>
              <td>{character.mass}</td>
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

export default Character;