Fetch-Get-Params
---

a fetch get request that accepts params as an objects and sends request in the URL approprietly , since that is not supported in fetch.

usage
---
example 1

```
import { Get} from 'fetch-get-param';

Get(url , {key:value, key2:value2})
  .then(res=>res.json())
   .then(response => console.log('response'))
   .catch(err => console.log('err', err));
```
---
Fetch get param uses fetch Behind the scene , so make sure your setup allows that
---
example 2

```
import { Get} from 'fetch-get-param';

// if you are using node js
//cons fetchGet = require('fetch-get-param');
// const {Get} = fetchGet;

  Get(url , options , headers)
  .then(function (response) { if(!response.ok) { throw new Error('Error on Network); return response.json() })
  .then(res => console.log('response is ', Json.parse(res))
  .catch(err => console.err('we have an err', err))
```
---
you can use the Post , Put the same way



