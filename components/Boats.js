import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boats = ({icon_name, title, description, poster}) => {
  return (
    <View style={styles.Parent}>
      <Text style={[styles.bigText, styles.Child]}>
        <Icon name={icon_name} size={30} color="#B23B23" />
        {title}
      </Text>
      <View>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
      <Image source={poster} style={{maxHeight: 200, maxWidth: 389}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  bigText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  Child: {
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    textAlign: 'center',
    marginBottom: 15,
    backgroundColor: '#4d4d4d',
  },
  Parent: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'space-around',
    flexDirection: 'column',
    padding: 10,
    backgroundColor: 'grey',
    marginBottom: 15,
  },
  description: {
    backgroundColor: 'lightgrey',
    maxWidth: 360,
    marginBottom: 15,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
  }
});

export default Boats;
