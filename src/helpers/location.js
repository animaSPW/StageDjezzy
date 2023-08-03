async function getLocation() {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const location = `${latitude},${longitude}`;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          resolve(location);
        },
        error => {
          console.error("Unable to retrieve your location");
          reject(error);
        }
      );
    });
  } else {
    console.log("Geolocation not supported");
    throw new Error("Geolocation not supported");
  }
}
export default getLocation;