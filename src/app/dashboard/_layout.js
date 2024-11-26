import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import DrawerContent from '../../components/Drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
            drawerContent={DrawerContent}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#141414',
                },
                drawerLabelStyle: {
                    color: '#cd5e77', 
                    fontSize: 16,
                },
                drawerInactiveTintColor: '#ffffff', 
                drawerActiveTintColor: '#ffffff', 
            }}
        >
            <Drawer.Screen
                name="(tabs)" 
                options={{
                    drawerLabel: 'Home',
                    title: 'Marias Flower Shop',
                    drawerIcon: ({ focused }) => (
                        <MaterialCommunityIcons 
                            name={focused ? 'home' : 'home-outline'} 
                            size={20} 
                            color="#cd5e77" 
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="settings" 
                options={{
                    drawerLabel: 'Settings',
                    title: 'Settings',
                    drawerIcon: ({ focused }) => (
                        <MaterialCommunityIcons 
                            name={focused ? 'cog' : 'cog-outline'} 
                            size={20} 
                            color="#cd5e77"
                        />
                    ),
                }}
            />
        </Drawer>
    </GestureHandlerRootView>
  );
}
