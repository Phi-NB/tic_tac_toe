export const addUser = (userName, userId) => async (dispatch) => {
  dispatch({
    type: "AddUser",
    payload: { userName, userId },
  });
};

export const addAuth = (accessToken, refreshToken) => async (dispatch) => {
  dispatch({
    type: "AddAuth",
    payload: { accessToken, refreshToken },
  });
};
