
import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from 'react-native';

const SearchScreen = () => {
  const people = [
    { id: 1, image: 'https://randomuser.me/api/portraits/men/60.jpg', name: 'Person 1' },
    { id: 2, image: 'https://randomuser.me/api/portraits/women/70.jpg', name: 'Person 2' },
    { id: 3, image: 'https://randomuser.me/api/portraits/men/44.jpg', name: 'Person 3' },
  ];

  const places = [
    { id: 1, image: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-versailles-gardens.jpg', name: 'Palacio de Versalles' },
    { id: 2, image: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-mont-st-michel.jpg', name: 'Monte Saint-Michel' },
    { id: 3, image: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-chateau-de-chenonceau.jpg', name: 'Castillo de Chenonceau' },
  ];

  const categories = [
    { id: 1, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/250px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg', name: 'Arte' },
    { id: 2, image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Pareja_2.jpg', name: 'Paisajes' },
    { id: 3, image: 'https://imagenes.serpadres.es/files/article_social_75/uploads/05/f6f02b68d99.jpeg', name: 'frases' },
  ];

  return (
    <ScrollView style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search" />
      <Text style={styles.sectionTitle}>People</Text>
      <ScrollView horizontal style={styles.horizontalList}>
        {people.map((person) => (
          <View key={person.id} style={styles.item}>
            <Image source={{ uri: person.image }} style={ styles.imagePerson} />
            <Text>{person.name}</Text>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.sectionTitle}>Places</Text>
      <ScrollView horizontal style={styles.horizontalList}>
        {places.map((place) => (
          <View key={place.id} style={styles.item}>
            <Image source={{ uri: place.image }} style={styles.image} />
            <Text>{place.name}</Text>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal style={styles.horizontalList}>
        {categories.map((category) => (
          <View key={category.id} style={styles.item}>
            <Image source={{ uri: category.image }} style={styles.image} />
            <Text>{category.name}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  horizontalList: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  item: {
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 0,
    marginBottom: 5,
  },
  imagePerson: {
    width: 130,
    height: 130,
    borderRadius: 80,
    marginBottom: 5,
  },
});

export default SearchScreen;