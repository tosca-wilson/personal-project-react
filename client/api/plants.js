import request from 'superagent'

export function getPlants () {
  return request.get('/v1/plants')
    .then(response => {
      return response.body
    })
}