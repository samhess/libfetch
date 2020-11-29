# libfetch
HTTP client library for use in Browser and with Vue.js.

This module sets HTTP Headers as follows:
* Content-Type to *application/json*
* Authorization to *Bearer ${token}*
The JWT is taken from the localStorage Item *jwt*, or it can be set using *libfetch.setToken()*

This module handles the response promise and returns the JSON body promise.

## Installation
```npm i libfetch```

## Usage
```js
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
  libfetch.del(`/api/foo/delete/${id}`)
    .then(data => {
      console.log(data)
    })
    .catch(err => console.error(err.message))
 ```