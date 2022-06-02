import React, { useState, useEffect } from 'react';
import { bool } from 'prop-types';

function Loading({ failed }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const load = setInterval(() => {
      setPercentage((prev) => {
        if (Number(prev) === 100) {
          clearInterval(load);
          return prev;
        }
        const curr = prev + 10;

        return curr;
      });
    }, Math.random() * 200 + 500);
  }, []);

  return (
    <div className="loader-container">
      <p>{failed ? `${<strong>¡Error!</strong>} no se pudo cargar la película` : `Cargando ${percentage}%`}</p> {/* eslint-disable-line */}
      <div className="loader">
        <div className="loader-background">
          <div className="loading" />
        </div>
      </div>
    </div>
  );
}

Loading.propTypes = {
  failed: bool.isRequired,
};

export default Loading;
