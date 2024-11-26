import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

// Example of flowers data
const flowers = [
  { id: 1, title: "Dozen White Roses & Tulips Bouquet", price: "₱9,000.00", image: require("../../../assets/flower1.png") },
  { id: 2, title: "Petite Love", price: "₱3,000.00", image: require("../../../assets/flower2.png") },
  { id: 3, title: "Symphony of Joy Bouquet", price: "₱3,500.00Sale", image: require("../../../assets/flower3.png") },
  { id: 4, title: "Red Dozen Love in Black Wrap", price: "₱6,500.00", image: require("../../../assets/flower4.png") },
  { id: 5, title: "Dozen White Roses Bouquet", price: "₱7,337.00", image: require("../../../assets/flower5.png") },
  { id: 6, title: "Mikrokosmos", price: "₱3,289.00", image: require("../../../assets/flower6.png") },
];

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.shopName}>Maria's Flower Shop</Text>
      </View>

      {/* Cart Icon */}
      <TouchableOpacity style={styles.cartIcon}>
        <Text style={styles.cartText}>🛒</Text>
      </TouchableOpacity>

      {/* Flowers Grid */}
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {flowers.map((flower) => (
          <View key={flower.id} style={styles.productItem}>
            <Image source={flower.image} style={styles.productImage} />
            <Text style={styles.productTitle}>{flower.title}</Text>
            <Text style={styles.productPrice}>{flower.price}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Terms & Conditions</Text>
        <Text style={styles.footerText}>Privacy Policy</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9", 
    padding: 20,
  },
  header: {
    marginBottom: 10,
    alignItems: "center", 
  },
  shopName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#db7093", 
    textAlign: "center",
  },
  cartIcon: {
    position: "absolute",
    top: 30,
    right: 20,
    backgroundColor: "#db7093",
    borderRadius: 50,
    padding: 5, 
  },
  cartText: {
    fontSize: 16, 
    color: "#fff",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  productItem: {
    width: "48%",
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  productImage: {
    width: "100%",
    height: 180,
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#db7093",
    marginTop: 8,
  },
  productPrice: {
    fontSize: 14,
    color: "#db7093",
    marginTop: 5,
  },
  footer: {
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 30,
  },
  footerText: {
    fontSize: 14,
    color: "#db7093",
    marginVertical: 5,
  },
});
