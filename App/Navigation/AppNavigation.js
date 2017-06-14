import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
import DataScreen from '../Containers/DataScreen'
import DataFormScreen from '../Containers/DataFormScreen'
import MainScreen from '../Containers/MainScreen'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: { title: 'Login' }
  },
  DataScreen: {
    screen: DataScreen
  },
  DataFormScreen: {
    screen: DataFormScreen,
    navigationOptions: { title: 'Inventory Form' }
  },
  MainScreen: {
    screen: MainScreen
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  //initialRouteName: 'LoginScreen',
  initialRouteName: 'DataScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
