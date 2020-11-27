# libfetch
HTTP client library for use in Browser and with Vue.js

## Usage
```js
npm i libfetch
import * as libfetch from 'libfetch'
```
### GET
```js
  libfetch.get('/api/foo/')
    .then(data => {
      console.log(data)
    })
    .catch(err => console.error(err.message))
 ```
 
### POST
```js
  let body = {foo:'bar'}
  libfetch.post('/api/foo/create', body)
    .then(data => {
      console.log(data)
    })
    .catch(err => console.error(err.message))
 ```
 
### PUT
```js
  let id = 1
  let body = {foo:'bar'}
  libfetch.put(`/api/foo/update/${id}`, body)
    .then(data => {
      console.log(data)
    })
    .catch(err => console.error(err.message))
 ```
 
 ### DELETE
```js
  let id = 1
  libfetch.del(`/api/foo/delete/${id}`, body)
    .then(data => {
      console.log(data)
    })
    .catch(err => console.error(err.message))
 ```