export const SET__LOADING = "@@detal/SET__LOADING";
export const SET__ERROR = "@@detal/SET__ERROR";
export const SET__COUNTRY = "@@detal/SET__COUNTRY";
export const SET__CLEAR = "@@detal/SET__CLEAR";
export const SET__NEIGHBORS = "@@detal/SET__NEIGHBORS";

export const setLoading = () => ({
  type: SET__LOADING,
});

export const setNeighbors = (countries) => ({
  type: SET__NEIGHBORS,
  payload: countries,
});

export const setClear = () => ({
  type: SET__CLEAR,
});

export const setError = (err) => ({
  type: SET__ERROR,
  payload: err,
});

export const setCountry = (country) => ({
  type: SET__COUNTRY,
  payload: country,
});

export const loadCountryByName =
  (name) =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());

    client
      .get(api.searchByCountry(name))
      .then(({ data }) => dispatch(setCountry(data[0])))
      .catch((err) => dispatch(setError(err.message)));
  };

export const loadNeighborsByBorder =
  (borders) =>
  (dispatch, _, { client, api }) => {
    client
      .get(api.filterByCode(borders))
      .then(({ data }) => dispatch(setNeighbors(data.map((c) => c.name))))
      .catch(console.error);
  };
