import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Switch, ScrollView } from 'react-native';
import { Link } from 'expo-router'; 

const Settings = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [modalVisible, setModalVisible] = useState(false);
  const [theme, setTheme] = useState('Light');
  const [notifications, setNotifications] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const [dataSaver, setDataSaver] = useState(false);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setModalVisible(false);
  };

  const toggleSwitch = (setting) => {
    switch (setting) {
      case 'notifications':
        setNotifications(!notifications);
        break;
      case 'autoPlay':
        setAutoPlay(!autoPlay);
        break;
      case 'dataSaver':
        setDataSaver(!dataSaver);
        break;
      case 'theme':
        setTheme(theme === 'Light' ? 'Dark' : 'Light');
        break;
      default:
        break;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {/* General Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>General</Text>
        <TouchableOpacity style={styles.option} onPress={() => alert('Profile clicked')}>
          <Text style={styles.optionText}>Profile</Text>
          <Text style={styles.arrow}>▶</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => alert('Notification clicked')}>
          <Text style={styles.optionText}>Notification</Text>
          <Text style={styles.arrow}>▶</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => alert('Bookmarks clicked')}>
          <Text style={styles.optionText}>Bookmarks</Text>
          <Text style={styles.arrow}>▶</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => alert('Email Notification clicked')}>
          <Text style={styles.optionText}>Email Notification</Text>
          <Text style={styles.arrow}>▶</Text>
        </TouchableOpacity>
      </View>

      {/* Transaction Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Transaction</Text>
        <TouchableOpacity style={styles.option} onPress={() => alert('Email Notification clicked')}>
          <Text style={styles.optionText}>Email Notification</Text>
          <Text style={styles.arrow}>▶</Text>
        </TouchableOpacity>
      </View>

      {/* Preferences Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Preferences</Text>
        <TouchableOpacity style={styles.option} onPress={() => toggleSwitch('theme')}>
          <Text style={styles.optionText}>Theme: {theme}</Text>
          <Text style={styles.arrow}>▶</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => setModalVisible(true)}>
          <Text style={styles.optionText}>Language: {selectedLanguage}</Text>
          <Text style={styles.arrow}>▶</Text>
        </TouchableOpacity>
      </View>

      {/* Share Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Share</Text>
        <TouchableOpacity style={styles.option} onPress={() => alert('Referral clicked')}>
          <Text style={styles.optionText}>Referral</Text>
          <Text style={styles.arrow}>▶</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => alert('Social Media clicked')}>
          <Text style={styles.optionText}>Social Media</Text>
          <Text style={styles.arrow}>▶</Text>
        </TouchableOpacity>
      </View>

      {/* Other Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Other</Text>
        <TouchableOpacity style={styles.option} onPress={() => alert('Rating & Review clicked')}>
          <Text style={styles.optionText}>Rating & Review</Text>
          <Text style={styles.arrow}>▶</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => alert('Help Center clicked')}>
          <Text style={styles.optionText}>Help Center</Text>
          <Text style={styles.arrow}>▶</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => alert('About Us clicked')}>
          <Text style={styles.optionText}>About Us</Text>
          <Text style={styles.arrow}>▶</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => alert('App Version clicked')}>
          <Text style={styles.optionText}>App Version</Text>
          <Text style={styles.arrow}>▶</Text>
        </TouchableOpacity>
        <Link href="/" style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </Link>
      </View>

   

      {/* Language Selection Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Select Language</Text>
            <TouchableOpacity onPress={() => handleLanguageSelect('English')}>
              <Text style={styles.modalOption}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLanguageSelect('Spanish')}>
              <Text style={styles.modalOption}>Spanish</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLanguageSelect('French')}>
              <Text style={styles.modalOption}>French</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLanguageSelect('German')}>
              <Text style={styles.modalOption}>German</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  section: {
    marginBottom: 25,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  arrow: {
    fontSize: 18,
    color: '#cd5e77',
  },
  logoutButton: {
    padding: 15,
    backgroundColor: '#cd5e77',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
  },
 
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalOption: {
    fontSize: 16,
    color: '#333',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  closeButton: {
    backgroundColor: '#db0000',
    padding: 10,
    marginTop: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Settings;
