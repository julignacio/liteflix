import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import close01 from '../../assets/close01.svg';
import clip from '../../assets/clip.svg';
import logo from '../../assets/logo.svg';
import StyledAddMovie from './StyledAddMovie';
import { addLocalMovie } from '../../services/localStorage';
import Loading from './Loading';

function AddMovie({ setViewModal }) {
  const [movie, setMovie] = useState({
    image: '',
    title: '',
  });
  const [loadedImage, setLoadedImage] = useState(false);
  const [failed, setFailed] = useState(false);
  const [finished, setFinished] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);

  const validateInputs = () => {
    if (movie.title && movie.image) {
      return setDisabledButton(false);
    }
    return setDisabledButton(true);
  };

  const dropImage = (event) => {
    event.preventDefault();
    const file = event.target.files[0];

    if (file !== undefined) {
      const fileType = file.type;
      const validExtension = ['image/jpeg', 'image/jpg', 'image/png'];

      if (validExtension.includes(fileType)) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = (loadEvent) => {
          setLoadedImage(true);
          setMovie({ ...movie, image: loadEvent.target.result });
          validateInputs();
        };
      } else {
        setFailed(true);
      }
    }
  };

  const handleChange = (input, event) => {
    if (input === 'title') setMovie({ ...movie, [input]: event.target.value });
    if (input === 'image') dropImage(event);

    return validateInputs();
  };

  const handleClick = (e) => {
    e.preventDefault();
    setFinished(true);
    return addLocalMovie(movie);
  };
  return (
    <StyledAddMovie>
      {finished ? (
        <div className="congrats">
          <img src={logo} alt="" />
          <div className="content">
            <strong>¡Felicitaciones!</strong>
            <p>{movie.title} fue correctamente subida.</p> {/* eslint-disable-line */}
          </div>
          <Button variant="primary" onClick={() => setViewModal(false)} className="submit-button">Ir a home</Button>
        </div>
      ) : (
        <div className="first-step" display={!finished ? 'flex' : 'none'}>
          <div className="modal-header">
            <h2>Agregar película</h2>
            <Icon
              image={close01}
              alt="Close modal"
              onClick={() => setViewModal(false)}
              className="close"
              size="xsmall"
            />
          </div>
          <form onSubmit={handleClick}>
            {loadedImage ? (
              <Loading failed={failed} finished={finished} loading={loadedImage} />
            ) : (
              <div className="input-image">
                <Icon image={clip} alt="" size="xsmall" className="clip" />
                <span aria-hidden="true">
                  <strong>Agregá un archivo </strong>
                  {window.innerWidth >= 1000 && 'o arrastralo y soltalo aquí'}
                </span>
                <input
                  type="file"
                  className="form-control"
                  accept="image/x-png,image/jpeg"
                  onChange={(e) => handleChange('image', e)}
                  aria-label="Upload an image"
                />
              </div>
            )}
            <input
              placeholder="Título"
              className="form-control"
              value={movie.title}
              onChange={(e) => handleChange('title', e)}
            />
            <Button
              variant="primary"
              onClick={handleClick}
              disabled={disabledButton}
              className="submit-button"
            >
              Subir película
            </Button>
          </form>
        </div>
      )}
    </StyledAddMovie>
  );
}

AddMovie.propTypes = {
  setViewModal: PropTypes.func.isRequired,
};

export default AddMovie;
