import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const PrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      
      const response = await fetch(`https://api.aladhan.com/v1/calendarByCity?latitude=${latitude}&longitude=${longitude}&method=2`);
      const data = await response.json();
      const today = data.data[0];
      const currentPrayerTimes = today.timings;
      
      setPrayerTimes(currentPrayerTimes);
    });
  }, []);

  if (!prayerTimes) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {Object.keys(prayerTimes).map((key) => (
        <Text key={key}>{key}: {prayerTimes[key]}</Text>
      ))}
    </View>
  );
};

export default PrayerTimes;
