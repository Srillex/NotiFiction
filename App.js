/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {StyleSheet, Text, View, Button} from 'react-native';
import PushNotification from 'react-native-push-notification';

const App = () => {
  const LocalNotify = () => {
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'First Notifications',
      message: 'Sending local notifications',
      color: 'red',
      subText: 'This is a subText',
    });
  };

  // its create Channel
  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName: 'Test-channel',
    });
  };
  useEffect(() => {
    createChannel();
  }, []);

  const ScheduleNotifications = async () => { await PushNotification.localNotificationSchedule({
      message: 'My Notification Message', // (required)
      date: new Date(Date.now() + 20 * 1000), // in 60 secs
      allowWhileIdle: true,
    });
  };

  return (
    <View style={styles.containers}>
      <Text style={styles.text}>Notification Home</Text>
      <Button title="Notify" onPress={LocalNotify} />
      <Button title="Schedule Notification" onPress={ScheduleNotifications} />
    </View>
  );
};

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});

export default App;
