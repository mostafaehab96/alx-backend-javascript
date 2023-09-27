import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto().then((response) => console.log(response.body))
    .then(createUser().then((response) => console.log(response.firstName, response.lastName)))
    .catch(console.log('Signup system offline'));
}
