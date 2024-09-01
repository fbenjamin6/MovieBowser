export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_AUTHORIZATION}`
  }
}

export const LANGS = {
  es: 'es-MX',
  en: 'en-US'
}
