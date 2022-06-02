import React, { useState, useEffect } from 'react';
import SideMenu from '../../components/SideMenu';
import Movie from '../../components/Movie';
import Nav from '../../components/Nav';
import { useFeatured } from '../../services';
import AddMovie from '../AddMovie';
import MovieList from '../MovieList';
import StyledApp from './StyledApp';

function App() {
  const [featured, setFeatured] = useState({ image: '', title: '', rating: 0 });
  const [viewModal, setViewModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  async function getFeatured() {
    const feat = await useFeatured();
    setFeatured(feat);
  }
  useEffect(() => {
    getFeatured();
  }, []);

  const menuOptions = [
    'Inicio',
    'Series',
    'Películas',
    'Agregadas recientemente',
    'Populares',
    'Mis películas',
    'Mi lista',
  ];

  return (
    <StyledApp image={featured.image}>
      <Nav setViewModal={setViewModal} setShowMenu={setShowMenu} />
      {viewModal ? <AddMovie setViewModal={setViewModal} /> : null}
      <SideMenu
        show={showMenu}
        menuOptions={menuOptions}
        setViewModal={setViewModal}
        setShow={setShowMenu}
      />
      <Movie variant="featured" movie={featured} />
      <MovieList />
    </StyledApp>
  );
}

export default App;
