export let URL: string;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  URL = 'http://192.168.31.34:8080';
} else {
  URL = 'https://coaching-village-api.herokuapp.com';
}
