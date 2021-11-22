import cities from '../cities';

export function setCities() {
  // TODO: Api call! For now, simulate a DB
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}

export default function selectCity(city) {
  return {
    type: 'SELECT_CITY',
    payload: city
  };
}
