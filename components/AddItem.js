import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export class AddItem extends Component {
  state = {
    text: '',
  };

  onChange = (textValue) => {
    console.log(textValue);
    this.setState({
      text: textValue,
    });
  };

  render() {
    this.myTextInput = React.createRef();
    return (
      <View>
        <TextInput
          value={this.state.text}
          placeholder="Add Item..."
          style={styles.input}
          onChangeText={this.onChange}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.props.addItem(this.state.text);
            this.setState({
              text: '',
            });
          }}>
          <Text style={styles.btnText}>
            <FontAwesome name="plus" size={13} /> Add Item
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
