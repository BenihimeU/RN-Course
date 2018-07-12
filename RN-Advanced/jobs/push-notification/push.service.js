import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const PUSH_END_POINT = 'http://rallycoding.herokuapp.com/api/tokens';
const PUSH_TOKEN = 'pushToken';

const PushService = async () => {
  let pushToken = await AsyncStorage.getItem(PUSH_TOKEN)
  if (pushToken) {
    return
  } else {
    let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
      return;
    }
    let token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
    await axios.post(PUSH_END_POINT, { token: { token } });
    // AsyncStorage.getItem(PUSH_TOKEN, token);
  }
};

export default PushService;