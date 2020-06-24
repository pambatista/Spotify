import React from "react";

import { Container, Header, SongList } from "./styles";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://upload.wikimedia.org/wikipedia/pt/0/06/Foo_Fighters_-_One_by_One.jpg"
        alt="Playlist"
      />
      <div>
        <span>Playlist</span>
        <h1>Seilá</h1>
        <p>13 Músicas</p>

        <button>Play</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Link Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Link Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Link Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Link Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Link Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Link Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Link Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
