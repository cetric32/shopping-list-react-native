import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text, Alert} from 'react-native';
import 'react-native-get-random-values';
import {v4} from 'uuid';
import AddItem from './components/AddItem';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: v4(),
      text: 'milk',
    },
    {
      id: v4(),
      text: 'jelly',
    },
    {
      id: v4(),
      text: 'fresh',
    },
    {
      id: v4(),
      text: 'beans',
    },
    {
      id: v4(),
      text: 'legumes',
    },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => {
        return item.id !== id;
      });
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an Item');
    } else {
      setItems((prevItems) => {
        return [{id: v4(), text: text}, ...prevItems];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
