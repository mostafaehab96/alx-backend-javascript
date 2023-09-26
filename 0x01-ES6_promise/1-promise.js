export default function getFullResponseFromAPI(success) {
  return new Promise((resolver, reject) => {
    if (success) {
      resolver({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
