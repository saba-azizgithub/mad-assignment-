import * as Location from 'expo-location';
import MapView from 'react-native-maps';

async function getCurrentLocation() {
  try {
    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    return { latitude, longitude };
  } catch (error) {
    console.log(error);
  }
}
async function getPrayerTimes(latitude, longitude) {
  const timestamp = Math.floor(Date.now() / 1000);
  const url = `https://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longitude}&method=2&month=${timestamp}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


function PrayerTimesMap(props) {
  const { latitude, longitude, prayerTimes } = props;
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta,
      }}
    >
      {prayerTimes.map((prayerTime) => (
        <MapView.Marker
          coordinate={{ latitude, longitude }}
          title={prayerTime.name}
          description={prayerTime.time}
        />
      ))}
    </MapView>
  );
}
