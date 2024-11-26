import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      
      {/* Profile Image Section */}
      <View style={styles.profileHeader}>
        <Image source={require("../../../assets/profilepic.jpg")} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>MariaDesiree Ganohay</Text>
          <Text style={styles.username}>@flowerlover</Text>
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>120</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>500</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>320</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bio Section */}
      <View style={styles.bioSection}>
        <Text style={styles.bioTitle}>Bio</Text>
        <Text style={styles.bioText}>
          Passionate about flowers and nature. I love creating beautiful floral arrangements and spreading joy through petals.
        </Text>
      </View>

      {/* Favorite Flowers Section */}
      <View style={styles.sectionBox}>
        <Text style={styles.favoritesTitle}>Favorite Flowers</Text>
        <View style={styles.favoritesList}>
          <Text style={styles.favoritesText}>- Roses</Text>
          <Text style={styles.favoritesText}>- Tulips</Text>
          <Text style={styles.favoritesText}>- Orchids</Text>
        </View>
      </View>

      {/* Recent Activity Section */}
      <View style={styles.sectionBox}>
        <Text style={styles.recentActivityTitle}>Recent Arrangements</Text>
        <View style={styles.recentList}>
          <Text style={styles.recentActivityText}>- Created: Wedding Bouquets</Text>
          <Text style={styles.recentActivityText}>- Created: Anniversary Centerpieces</Text>
          <Text style={styles.recentActivityText}>- Created: Birthday Floral Arrangements</Text>
        </View>
      </View>

      {/* Edit Profile Button */}
      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    padding: 20,
  },
  profileHeader: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 90,  
    height: 90, 
    borderRadius: 45,
    borderWidth: 3,
    borderColor: "#ddd",
  },
  profileInfo: {
    marginLeft: 15,
  },
  name: {
    color: "#333",
    fontSize: 18,  
    fontWeight: "bold",
  },
  username: {
    color: "#888",
    fontSize: 14, 
    marginTop: 5,
  },
  stats: {
    flexDirection: "row",
    marginTop: 8,
  },
  statItem: {
    alignItems: "center",
    marginRight: 20,  
  },
  statNumber: {
    fontSize: 14,  
    fontWeight: "bold",
    color: "#333",
  },
  statLabel: {
    fontSize: 12,  
    color: "#888",
  },
  bioSection: {
    marginBottom: 20,
  },
  bioTitle: {
    fontSize: 16, 
    fontWeight: "bold",
    color: "#333",
  },
  bioText: {
    fontSize: 14,  
    color: "#555",
    marginTop: 10,
  },
  sectionBox: {
    backgroundColor: "light-pink",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  favoritesTitle: {
    fontSize: 16,  
    fontWeight: "bold",
    color: "#333",
  },
  favoritesList: {
    marginTop: 10,
    paddingLeft: 10,
  },
  favoritesText: {
    fontSize: 14,  
    color: "#666",
  },
  recentActivityTitle: {
    fontSize: 16,  
    fontWeight: "bold",
    color: "#333",
  },
  recentList: {
    marginTop: 10,
    paddingLeft: 10,
  },
  recentActivityText: {
    fontSize: 14,  
    color: "#666",
  },
  buttonSection: {
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#cd5e77", 
    paddingVertical: 12,
    borderRadius: 30,
    marginBottom: 15,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,  
    fontWeight: "bold",
  },
});
