import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PalettePreview from '../components/PalettePreview';



const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];
const BARCELONA = [
  { colorName: 'Purplish', hexCode: '#A50043' },
  { colorName: 'Blue', hexCode: '#004D98' },
  { colorName: 'Orange', hexCode: '#EDBB01' },
  { colorName: 'Yellow', hexCode: '#FFED03' },
  { colorName: 'Red', hexCode: '#DB0030' },
];
const REAL_MADRID = [
  { colorName: 'Yellow', hexCode: '#FEDD11' },
  { colorName: 'Blue', hexCode: '#00529F' },
  { colorName: 'White', hexCode: '#FFFFFF' },
  { colorName: 'Pinkish', hexCode: '#EE324D' },
  { colorName: 'Orange', hexCode: '#FEBD11' },
];
const COLOR_PALETTES=[
  
  { paletteName: 'Rainbow', colors: RAINBOW},
  { paletteName: 'Barcelona', colors: BARCELONA },
  { paletteName: 'Real Madrid', colors: REAL_MADRID},

  
];
const Home = ({ navigation }) => {
  return (
    <FlatList
    style={styles.list}
    data={COLOR_PALETTES}
    keyExtractor={item => item.paletteName}
    renderItem={({item})=>(
      <PalettePreview handlePress={() => {
        navigation.navigate('ColorPalette',item);
      }}
      colorPalette = {item}
      />
    )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white'
  }
});

export default Home;