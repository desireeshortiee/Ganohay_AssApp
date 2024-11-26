import { View, Image, Text, StyleSheet } from 'react-native'; 
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useSafeAreaInsets } from 'react-native-safe-area-context'; 
import { useRouter } from 'expo-router';

export default function DrawerContent(props) {
    const router = useRouter();
    const year = new Date().getFullYear();  

    const handleLogout = async () => {
        router.replace('/');
    };

    const { top, bottom } = useSafeAreaInsets();

    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}> 
            <DrawerContentScrollView
                {...props}
                scrollEnabled={true}
                contentContainerStyle={{ paddingTop: top }}
                style={styles.drawerScrollView}
            >
                <View style={styles.avatarSection}>
                    <Image 
                        source={require('../../assets/profilepic.jpg')} 
                        style={styles.profileImage} 
                    /> 
                    <Text style={styles.userName}>Maria Desiree Ganohay</Text>
                </View>

                {/* Drawer items for Home, Settings, etc */}
                <DrawerItemList 
                    {...props}
                    labelStyle={styles.drawerItemLabel} // Sets text color for Home and Settings
                    itemStyle={styles.drawerItem}      
                />
                
                {/* Logout Button */}
                <DrawerItem
                    label="Logout"
                    icon={({ size }) => (
                        <MaterialCommunityIcons name='logout' color="#cd5e77" size={size} />
                    )}
                    labelStyle={styles.drawerItemLabel} 
                    onPress={handleLogout}
                />
            </DrawerContentScrollView>

            <View style={[styles.footer, { paddingBottom: bottom }]}>
                <Text style={styles.footerText}>
                    Copyright &copy; {year}. All rights reserved
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerScrollView: {
        backgroundColor: '#ffffff', // Drawer background color
    },
    avatarSection: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: '#ffffff', // Background for avatar section
    },
    profileImage: {
        alignSelf: 'center',
        height: 120,
        width: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#cd5e77', // Border color for the profile image
    },
    userName: {
        color: '#cd5e77', // Text color for the user's name
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    drawerItem: {
        backgroundColor: '#cd5e77', // Background color for drawer items
    },
    drawerItemLabel: {
        color: '#cd5e77', // Text color for drawer item labels (e.g., Home, Settings)
        fontSize: 16,
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', // Footer background color
    },
    footerText: {
        color: '#cd5e77', // Footer text color
        fontSize: 14,
    },
});
