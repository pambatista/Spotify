import { call, put } from "redux-saga/effects";

import api from "../../service/api";

import { Creators as PlaylistsActions } from "../ducks/playlists";
import { Creators as ErrorActions } from "../ducks/error";

export function* getPlaylists() {
  try {
    const response = yield call(api.get, "/playlists");

    yield put(PlaylistsActions.getPlaylistsSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError("Não foi possivel obter as playlists"));
  }
}
