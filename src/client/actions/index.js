import {
  FETCH_AREAS,
  FETCH_CATEGORIES,
  FETCH_CURRENT_USER,
  FETCH_PROPERTIES,
  FETCH_PROPERTIES_HOT,
  FETCH_USERS,
  LOGIN_USER
} from "./types";

import axios from "axios";

import cookie from "universal-cookie";
import CookieConfig from "../../helpers/cookieConfig";

let guest_token = CookieConfig();
const Cookies = new cookie();
let base_url = "https://www.basobaas.com/api";

export const fetchUsers = () => async (dispatch, getState, api) => {
  const users = await api.get("/users");

  dispatch({
    type: FETCH_USERS,
    payload: users
  });
};

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const user = await api.get("/current_user");

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: user
  });
};

export const fetchCategories = () => async (dispatch, getState, api) => {
  try {
    const categories = await axios.get(base_url + "/categories", {
      headers: {
        Authorization: `Bearer ${Cookies.get("token") || guest_token}`
      }
    });

    dispatch({
      type: FETCH_CATEGORIES,
      payload: categories.data
    });
  } catch (err) {
    console.log("Errpr", err);
  }
};

//areas
export const fetchAreas = () => async (dispatch, getState, api) => {
  try {
    const areas = await axios.get(base_url + "/areas", {
      headers: {
        Authorization: `Bearer ${Cookies.get("token") || guest_token}`
      }
    });

    dispatch({
      type: FETCH_AREAS,
      payload: areas.data
    });
  } catch (err) {
    console.log("Error", Cookies.get("token"));
  }
};

//Properties
export const fetchProperties = () => async (dispatch, getState, api) => {
  try {
    const properties = await axios.get(base_url + "/properties", {
      headers: {
        Authorization: `Bearer ${Cookies.get("token") || guest_token}`
      }
    });

    console.log(properties.data);

    dispatch({
      type: FETCH_PROPERTIES,
      payload: properties.data
    });
  } catch (err) {
    console.log("Errpr", err);
  }
};

export const fetchPropertiesHot = () => async (dispatch, getState, api) => {
  try {
    const properties = await axios.get(base_url + "/properties-hot", {
      headers: {
        Authorization: `Bearer ${Cookies.get("token") || guest_token}`
      }
    });

    console.log(properties.data);

    dispatch({
      type: FETCH_PROPERTIES_HOT,
      payload: properties.data
    });
  } catch (err) {
    console.log("Errpr", err);
  }
};

export const loginUser = data => async (dispatch, getState, api) => {
  const user = await axios.post(base_url + "/users/login", data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token") || guest_token}`
    }
  });

  Cookies.set("token", `${user.data.data.access_token}`);

  dispatch({
    type: LOGIN_USER,
    payload: user.data.data.access_token
  });
};
