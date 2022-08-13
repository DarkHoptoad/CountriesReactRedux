export const SET__SEARCH = "@@controls/SET__SEARCH";
export const SET__REGION = "@@controls/SET__REGION";
export const SET__CLEAR = "@@controls/SET__CLEAR";

export const setSearch = (search) => ({
  type: SET__SEARCH,
  payload: search,
});

export const setRegion = (region) => ({
  type: SET__REGION,
  payload: region,
});

export const setClear = () => ({
  type: SET__CLEAR,
});
