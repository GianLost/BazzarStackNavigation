import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreenStack from './src/Components/HomeScreenStack';
import FemaleScreen from './src/Components/FemaleScreen';
import FemaleProduct from './src/Components/FemaleProducts'
import MaleScreen from './src/Components/MaleScreen';
import MaleProduct from './src/Components/MaleProduct'

const Home = HomeScreenStack;
const femaleFashion = FemaleScreen;
const maleFashion = MaleScreen;

const whiteClothe = FemaleProduct.whiteClothe;
const floweryDress = FemaleProduct.floweryDress;
const shoesColorS = FemaleProduct.shoesColorS;
const shoesPink = FemaleProduct.shoesPink;
const blackDress = FemaleProduct.blackDress;
const vintageBag = FemaleProduct.vintageBag;
const redHotBag = FemaleProduct.redHotBag;
const highHeels = FemaleProduct.highHeels;

const whiteClotheThin = MaleProduct.whiteClotheThin;
const sweatshirtYllw = MaleProduct.sweatshirtYllw;
const shoesRed = MaleProduct.shoesRed;
const shoesRnB = MaleProduct.shoesRnB;
const brownClotheThin = MaleProduct.brownClotheThin;
const socialClothe = MaleProduct.socialClothe;
const shoesGrey = MaleProduct.shoesGrey;
const bootHardWay = MaleProduct.bootHardWay;




const Stack = createNativeStackNavigator();

function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={Home} />


        <Stack.Screen name="Moda Feminina" component={femaleFashion} />


        <Stack.Screen name="Blusa Bazzar Branca" component={whiteClothe} />

        <Stack.Screen name="Vestido Bazzar Florido" component={floweryDress} />

        <Stack.Screen name="Tênis Bazzar Color S" component={shoesColorS} />

        <Stack.Screen name="Tênis Bazzar Pink" component={shoesPink} />

        <Stack.Screen name="Vestido Bazzar Preto" component={blackDress} />

        <Stack.Screen name="Bolsa Bazzar Vintage" component={vintageBag} />

        <Stack.Screen name="Bolsa Bazzar Red Hot" component={redHotBag} />

        <Stack.Screen name="Sapato Bazzar Salto" component={highHeels} />


        <Stack.Screen name="Moda Masculina" component={maleFashion} />


        <Stack.Screen name="Blusa Bazzar Branca Thin" component={whiteClotheThin} />

        <Stack.Screen name="Moletom Bazzar Yllw" component={sweatshirtYllw} />

        <Stack.Screen name="Tênis Bazzar RedStar" component={shoesRed} />

        <Stack.Screen name="Tênis Bazzar R&B" component={shoesRnB} />

        <Stack.Screen name="Camisa Bazzar Brown Thin" component={brownClotheThin} />

        <Stack.Screen name="Camisa Bazzar Social Purple" component={socialClothe} />

        <Stack.Screen name="Tênis Bazzar Grey Casual" component={shoesGrey} />

        <Stack.Screen name="Boot Bazzar HardWay" component={bootHardWay} />

      </Stack.Navigator>

    </NavigationContainer>

  );

}

export default App;