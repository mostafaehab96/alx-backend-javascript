import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo;
  let user;

  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
  return {
    photo,
    user,
  };
}
