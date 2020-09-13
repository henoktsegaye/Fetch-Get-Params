## Fetch-Get-Params
a fetch get request that accepts params as an objects and sends request in the URL approprietly , since that is not supported in fetch.
usage
`
Get(url , {key:value, key2:value2})
  .then(res=>res.json())
   .then(response => console.log('response'))
   .catch(err => console.log('err', err));
`
###Fetch get param uses fetch Behind the scene , so make sure your setup allows that
