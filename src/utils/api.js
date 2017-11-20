import axios from 'axios';
const apiUrl = 'https://launchlibrary.net/1.2'

function checkNext(element, index, array) {
  const launchDate = new Date(element.net).getTime();
  const today = new Date().getTime();
  
  if (launchDate > today) {
    return element;
  }
}

export function fetchNextLaunches() {
  return axios.get(`${apiUrl}/launch/next/1`)
  .then(response => response.data.launches.filter(checkNext));
}

export function fetchMoreLaunches(offset) {
  return axios.get(`${apiUrl}/launch/next/10?offset=${offset}`)
  .then(response =>  response.data.launches.filter(checkNext));
}

export function fetchLaunch(id) {
  return axios.get(`${apiUrl}/launch/${id}`)
  .then(response =>  response.data.launches[0]);
}