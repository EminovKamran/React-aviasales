let id = '';
const url = 'https://aviasales-test-api.kata.academy/';

export const AviaService = async () => {
  if (!id) {
    const response = await fetch(`${url}search`);
    if (response.ok) {
      const body = await response.json();
      id = body.searchId;
    }
  } else {
    throw new Error(`Not fetch ${url}`);
  }

  const newResponse = await fetch(`${url}tickets?searchId=${id}`);
  if (newResponse.ok) {
    return newResponse.json();
  }
  throw new Error(`Not fetch ${url}`);
};

export default AviaService;
