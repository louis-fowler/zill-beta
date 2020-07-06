import request from 'superagent'

// import DB

const getUsers = () => {
  return request 
    .get('http://localhost:3000/api/users/')
}

export {getUsers} 
