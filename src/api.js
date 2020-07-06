import request from 'superagent'

// import DB

const getUsers = (user) => {
  const {userName, email} = user
  return request 
    .get(`/api/users`)
    .query({user})
}

export {getUsers} 
