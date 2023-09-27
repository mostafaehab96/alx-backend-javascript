import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body;
  uploadPhoto().then((response) => {
    body = response.body;
    createUser().then((response) => console.log(body, response.firstName, response.lastName));
  }).catch(() => console.log('Signup system offline'));
}
