export const LOCAL_STORAGE_TOKEN_KEY = 'token';
export const LOCAL_STORAGE_BREADCRUMB = 'breadcrumbs';
export const LOCAL_STORAGE_NODE_GROUP = 'nodeGroupData';

// Token management
export const get_token = () => {
  try{
    const token = window.localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
    return token;
  }
  catch (error){
    console.error("Error getting token", error);
    return null;
  }
}

export const set_token = (token) => {
  try{
    window.localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
  }
  catch (error){
    console.error("Error setting token", error)
  }
}

export const clearToken = () => {
  try{
    window.localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
  }
  catch (error){
    console.error("Error clear token", error);
  }
}
  
export const clearLocalStorage = () => {
  try{
    localStorage.clear();
  }
  catch (error){
    console.error("Error clear localstorage", error);
  }
}

// Breadcrumb management
/*export const setBreadcrumbFullPaths = (breadcrumbs) => {
  try{
    window.localStorage.setItem(LOCAL_STORAGE_BREADCRUMB, breadcrumbs)
  }
  catch (error){
    console.error("Error setting breadcrumb", error)
  }
}

export const getBreadcrumbFullPaths = () => {
    try{
      return window.localStorage.getItem(LOCAL_STORAGE_BREADCRUMB) || ''
    }
    catch (error){
      console.error("Error getting breadcrumb", error);
      return '';
    }
}
*/
// Node Group management
/*export const setNodeGroupData = (data)=> {
  try{
    window.localStorage.setItem(LOCAL_STORAGE_NODE_GROUP, JSON.stringify(data))
  }
  catch (error){
    console.error("Error setting node group data", error);
  }
}
*/
/*
  export const getNodeGroupData = () => {
    try{
      const res =
      JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_NODE_GROUP) || '{"node":"","groupName":""}')
      return res || { node: '', groupName: ''};
    }
    catch (error){
      console.error("Error getting node group data", error);
      return { node: '', groupName: ''};
    }
}
*/