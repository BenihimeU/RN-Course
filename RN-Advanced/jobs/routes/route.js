import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/welcome.screen';
import AuthScreen from '../screens/auth.screen';
import MapScreen from '../screens/map.screen';
import DeckScreen from '../screens/deck.screen';
import ReviewScreen from '../screens/review.screen';
import SettingScreen from '../screens/setting.screen';

const TabNavigatorConfig = {
    navigationOptions: {
        tabBarVisible: false
    }
};

const TabBarComponent = createBottomTabNavigator({
    welcome: WelcomeScreen,
    authenticate: AuthScreen,
    main: {
        screen: createBottomTabNavigator({
            map: MapScreen,
            deck: DeckScreen,
            review: {
                screen: createStackNavigator({
                    review: ReviewScreen,
                    setting: SettingScreen
                }, { headerMode: 'float' })
            }
        }, {
                tabBarOptions: {
                    labelStyle: {
                        fontSize: 12
                    }
                }
                , tabBarPosition: 'bottom'
            })
    }
}, TabNavigatorConfig);

export default TabBarComponent;