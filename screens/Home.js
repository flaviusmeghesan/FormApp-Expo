import React,{useState, useCallback, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native';
import PalettePreview from '../components/PalettePreview';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Home = ({ navigation, route }) => {
  const newColorPalette = route.params ? 
  route.params.newColorPalette
  : undefined;
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const fetchColorPalettes = useCallback(async ()=>{
    const result = await fetch('https://color-palette-api.kadikraman.now.sh/palettes');
    if (result.ok){
      const palettes = await result.json();
      setColorPalettes(palettes);

    }
  },[]);
  useEffect(()=> {
    fetchColorPalettes();
  },[])
  
  const handleRefresh = useCallback(async ()=>{
  setIsRefreshing(true);
  await fetchColorPalettes();
  setIsRefreshing(false);
  //setTimeout(()=>{
   //setIsRefreshing(false)
     // },1000);
  },[]);
  useEffect(()=>{
    if(newColorPalette){
      setColorPalettes(palettes => [newColorPalette, ...palettes]);
    }
  },[newColorPalette]);

  return (
    <FlatList
    style={styles.list}
    data={colorPalettes}
    keyExtractor={item => item.paletteName}
    renderItem={({item})=>(
      <PalettePreview handlePress={() => {
        navigation.navigate('ColorPalette',item);
      }}
      colorPalette = {item}
      />
    )}

    refreshControl={<RefreshControl refreshing = {isRefreshing} onRefresh={handleRefresh} />}
    ListHeaderComponent={
    <TouchableOpacity onPress={()=>navigation.navigate('AddNewPaletteModal')}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Add a color palette</Text>
        </View>
    </TouchableOpacity>}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white'
  },
  buttonText:{
    color: 'white',
    fontSize: 16,
  },
  button:{
    backgroundColor: 'grey',
    width: 160,
    height: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    
    
  } 
});

export default Home;