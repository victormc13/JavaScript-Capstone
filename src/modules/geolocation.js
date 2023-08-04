const apiKey = '294b967cd6b04078ac7ded19316b344b';
const apiUrl = 'https://api.ipgeolocation.io/ipgeo';
// Construct the API URL with the API key as a query parameter
const requestUrl = `${apiUrl}?apiKey=${apiKey}`;
// Make the API request
const locationInfo = async () => {
  const response = await fetch(requestUrl);
  if (response.status === 200) {
    const data = await response.json();
    const dateTimeString = data.time_zone.current_time;
    const dateOnlyString = dateTimeString.split(' ')[0];
    return {
      countrycode: data.country_code2,
      time: dateOnlyString,
    };
  }
  throw new Error(`Error: ${response.status}`);
};
export default locationInfo;