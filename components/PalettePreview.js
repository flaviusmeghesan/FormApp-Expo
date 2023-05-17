import React from 'react';
import { TouchableOpacity,View, Text, StyleSheet, FlatList } from 'react-native';

const PalettePreview = ({handlePress, colorPalette}) =>{
    return (
        <TouchableOpacity 
      onPress={handlePress}>
        <Text style={styles.text}>{colorPalette.paletteName}</Text>
        <FlatList
        style={styles.list}
        horizontal={true}
        data={colorPalette.colors.slice(0,5)}
        keyExtractor = {item =>item.colorName}
        renderItem = {({item}) => <View style={[styles.box, {backgroundColor: item.hexCode}]}></View>}
        />
      </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
text: {
  fontWeight: 'bold',
  fontSize: 18,
  marginBottom: 2,
 
},
box: {
  marginRight: 5,
  height: 30,
  width: 30,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 2,
  elevation: 5,
},
list:{
  marginBottom: 10,
}
});
export default PalettePreview;