import qs from 'qs'

function oauth(axios) {
    return (config) => {
      const { url, ...credentials } = config;
  
      const body = {
        ...credentials,
      };
  
      // remove blank scope
      if ('scope' in body && !body.scope) {
        delete body.scope;
      }
  
      return axios({
        url,
        method: 'post',
        data: qs.stringify(body),
      }).then((res) => res.data);
    };
  }
 
  
  
  
  
  