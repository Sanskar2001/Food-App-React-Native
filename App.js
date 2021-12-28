import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HeaderTabs from './components/HeaderTabs';
import Home from './Home';
import RootNavigation from './navigation';

export default function App() {
  return (
    <RootNavigation></RootNavigation>
  );
}


