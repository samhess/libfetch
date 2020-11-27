const token = localStorage.getItem('token')

export function get(url) {
  let opt = {}
  opt.headers = { 
    Authorization: `Bearer ${token}`
  }
  opt.method = 'GET'
  let promise = fetch(url, opt)
    .then(checkStatus)
  return promise
}

export function post(url,body) {
  let opt = {}
  opt.headers = { 
    Authorization: `Bearer ${token}`,
    "Content-Type": 'application/json',
  }
  opt.method = 'POST'
  opt.body = JSON.stringify(body)
  let promise = fetch(url, opt)
    .then(checkStatus)
  return promise
}

export function put(url,body) {
  let opt = {}
  opt.headers = { 
    Authorization: `Bearer ${token}`,
    "Content-Type": 'application/json',
  }
  opt.method = 'PUT'
  opt.body = JSON.stringify(body)
  let promise = fetch(url, opt)
    .then(checkStatus)
  return promise
}

export function del(url) {
  let opt = {}
  opt.headers = { 
    Authorization: `Bearer ${token}`
  }
  opt.method = 'DELETE'
  let promise = fetch(url, opt)
    .then(checkStatus)
  return promise
}

function checkStatus(response) {
  if (!response.ok) {
    // check if we got some body / error message before cancelling
    if ('body' in response) {
      response.text()
        .then(data => console.error(data))
    } else {
      console.error('network error')
    }
    throw new Error(response.statusText)
  }
  // returning a promise will result in promise chaining
  return response.json() 
}