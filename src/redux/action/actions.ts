export const addTheName = (value: string) => ({
  type: "ADD_NAME",
  payload: value,
});

export const setSearch = (value: string | null) => ({
  type: "SET_SEARCH",
  payload: value,
});
