import React from "react";

import { Container, Title, List, Playlist } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlist/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/0/06/Foo_Fighters_-_One_by_One.jpg"
          alt="Playlist"
        />
        <strong>As Melhores da vida</strong>
        <p>Relaxe ouvindo as melhores musicas do mundo!</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/0/06/Foo_Fighters_-_One_by_One.jpg"
          alt="Playlist"
        />
        <strong>As Melhores da vida</strong>
        <p>Relaxe ouvindo as melhores musicas do mundo!</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/0/06/Foo_Fighters_-_One_by_One.jpg"
          alt="Playlist"
        />
        <strong>As Melhores da vida</strong>
        <p>Relaxe ouvindo as melhores musicas do mundo!</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/0/06/Foo_Fighters_-_One_by_One.jpg"
          alt="Playlist"
        />
        <strong>As Melhores da vida</strong>
        <p>Relaxe ouvindo as melhores musicas do mundo!</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
