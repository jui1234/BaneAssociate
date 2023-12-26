import { toast } from "react-toastify";
import API from "../config/axios"
import {
  ADD_MEMBER_TO_PROJECT, ADD_PROJECT, ADD_SOURCE, EDIT_PROJECT, EDIT_SOURCE, GET_ALL_LOGS, GET_ALL_PROJECTS, GET_LOG_BY_SOURCE, GET_SOURCE, Login, LoginReq,
  PROJECT, REMOVE_MEMBER_TO_PROJECT, REMOVE_SOURCE, SignUp, SignupReq, USER, UserList, CREATE_BUCKET, GET_BUCKET, UPDATE_BUCKET, DELETE_BUCKET, VIEW, GET_ALL_VIEW, ALERT, GET_ALL_ALERT, ADD_MEMBER_ALERT, GET_ALL_SOURCES, GET_GRAPH_ALERT,
} from "./APIConstants"

/**
 * Authentication
 */

/**
 * Fuction for get OTP for Login
 * @param {*} data
 * @returns
 */
export const LoginReqAPI = async (data) => {
  let response = await API.post(LoginReq, data);

  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};
/**
 * Fuction for Login
 * @param {*} data
 * @returns
 */
export const LoginAPI = async (data) => {
  let response = await API.post(Login, data);

  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Fuction for get OTP for Signup
 * @param {*} data
 * @returns
 */
export const SignupReqAPI = async (data) => {
  let response = await API.post(SignupReq, data);

  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Fuction for Signup
 * @param {*} data
 * @returns
 */
export const SignupAPI = async (data) => {
  let response = await API.post(SignUp, data);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Fuction for Get user information
 * @param {*} data
 * @returns
 */
export const GetUserDataAPI = async () => {
  let response = await API.get(USER);
  if (response.data.code === 201) {
    return response.data;
  } else if (response.data.code === 401) {
    // toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Fuction for Get user list
 * @param {*} data
 * @returns
 */
export const GetUserListAPI = async (projectId) => {
  let response = await API.get(UserList + '/' + projectId);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Project
 */

/**
 * Get all projects list
 */
export const GetAllProjectAPI = async (payload) => {
  let response = await API.post(GET_ALL_PROJECTS, payload);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};
/**
 * Get all Source list
 */
export const GetAllSourceAPI = async (payload) => {
  let response = await API.post(GET_ALL_SOURCES, payload);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Function for creating new project
 */
export const CreateProjectAPI = async (data) => {
  let response = await API.post(ADD_PROJECT, data);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Function for Edit project Data
 */
export const EditProjectAPI = async (projectId, data) => {
  let response = await API.post(EDIT_PROJECT + '/' + projectId, data);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Function for Get project Data
 */
export const GetProjectAPI = async (projectId) => {
  let response = await API.get(PROJECT + '/' + projectId);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Function for Delete project 
 */
export const DeleteProjectAPI = async (projectId) => {
  let response = await API.delete(PROJECT + '/' + projectId);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Function for Add Member to project 
 */
export const AddMemberToProjectAPI = async (payload) => {
  let response = await API.post(ADD_MEMBER_TO_PROJECT, payload);
  if (response.data.code === 201) {
    console.log('response.data', response.data)
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Function for Add Member to project 
 */
export const RemoveMemberFromProjectAPI = async (payload) => {
  let response = await API.post(REMOVE_MEMBER_TO_PROJECT, payload);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};





/**
 * Source
 */

/**
 * Function for creating new Souce
 */
export const CreateSourceAPI = async (data) => {
  let response = await API.post(ADD_SOURCE, data);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Function for get source data
 */
export const GetSourcDataAPI = async (sourceId) => {
  let response = await API.get(GET_SOURCE + '/' + sourceId);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Function for update source data
 */
export const UpdateSourcDataAPI = async (sourceId, data) => {
  let response = await API.put(EDIT_SOURCE + '/' + sourceId, data);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Function for update source data
 */
export const DeleteSourcDataAPI = async (sourceId) => {
  let response = await API.delete(REMOVE_SOURCE + '/' + sourceId);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};


/**
 * Device
 */

/**
 * Log
 */

/**
 * Function for get logs for specific source
 */
export const GetLogsOfSourceAPI = async (sourceId) => {
  let response = await API.post(GET_LOG_BY_SOURCE + '/' + sourceId);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Function for get All logs 
 */
/**
 * The function `GetAllLogsAPI` is an asynchronous function that sends a POST request to the
 * `GET_ALL_LOGS` endpoint and returns the response data if the code is 201, otherwise it displays an
 * error message and returns false.
 * @param data - The `data` parameter is an object that contains the data to be sent in the request
 * body. It is used as the payload for the `API.post` method.
 * @returns either the response data if the code is 201, or false if the code is not 201.
 */
export const GetAllLogsAPI = async (data) => {
  let response = await API.post(GET_ALL_LOGS, data);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};
/**
 * 
* Function for creating new project
 */
export const CreateBucketAPI = async (data) => {
  let response = await API.post(CREATE_BUCKET, data);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};
/**
 * Function for Get Bucket Data
 */
export const GetBucketAPI = async (bucketId) => {
  let response = await API.get(GET_BUCKET + '/' + bucketId);
  if (response.data.code === 201) {
    return response.data;
  } else {
    // toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Function for Edit Bucket Data
 */
export const EditBucketAPI = async (bucketId, data) => {
  let response = await API.put(UPDATE_BUCKET + '/' + bucketId, data);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};


/**
 * Function for Delete Bucket 
 */
export const DeleteBucketAPI = async (bucketId) => {
  let response = await API.delete(DELETE_BUCKET + '/' + bucketId);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};
/**
 * 
* Function for creating new view
 */
export const CreateViewAPI = async (data) => {
  let response = await API.post(VIEW, data);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};
/**
 * Function for Get View Data
 */
export const GetViewAPI = async (viewId) => {
  console.log("inside getviewapi",viewId)
  let token = localStorage.getItem('token')
  API.setToken(token);
  console.log("getviewapitoken",token)
  let response = await API.get(VIEW + '/' + viewId);
  console.log("insideresponse",response)
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Function for Edit view Data
 */
export const EditViewAPI = async (viewId, data) => {
  let response = await API.put(VIEW + '/' + viewId, data);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};


/**
 * Function for Delete Bucket 
 */
export const DeleteViewAPI = async (viewId) => {
  let response = await API.delete(VIEW + '/' + viewId);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Get all View list
 */
export const GetAllViewAPI = async () => {
  let response = await API.get(GET_ALL_VIEW);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Function for Add Member to project 
 */
export const AddMemberToAlertAPI = async (viewId) => {
  console.log("logmai",ADD_MEMBER_ALERT+ '/' + viewId)
  let response = await API.get(ADD_MEMBER_ALERT+ '/' + viewId);
  if (response.data.code === 201) {
    console.log('response.data', response.data)
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};
/**
 * 
* Function for creating new Alert
 */
export const CreateAlertAPI = async (data) => {
  let response = await API.post(ALERT, data);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};
/**
 * Function for Get Alert Data
 */
export const GetAlertAPI = async (alertId) => {
  let token = localStorage.getItem('token')
  API.setToken(token);
  let response = await API.get(ALERT + '/' + alertId);
  console.log("GetAlertAPIres",response)
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};
/**
 * Function for Get Graph Alert Data
 */
export const GetAlertGraphAPI = async (alertId) => {
  let response = await API.get(GET_GRAPH_ALERT + '/' + alertId);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Function for Edit view Data
 */
export const EditAlertAPI = async (alertId, data) => {
  let response = await API.put(ALERT + '/' + alertId, data);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};


/**
 * Function for Delete Bucket 
 */
export const DeleteAlertAPI = async (alertId) => {
  let response = await API.delete(ALERT + '/' + alertId);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};

/**
 * Get all projects list
 */
export const GetAllAlertAPI = async () => {
  let response = await API.post(GET_ALL_ALERT);
  if (response.data.code === 201) {
    return response.data;
  } else {
    toast.error(response?.data?.data || response?.data?.message || "Something went wrong");
    return false;
  }
};