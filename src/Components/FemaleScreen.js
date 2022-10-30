import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';

const imageProductFemale1 = require('../images/female1.png')
const imageProductFemale2 = require('../images/female2.png')
const imageProductFemale3 = require('../images/female-boot1.png')
const imageProductFemale4 = require('../images/female-boot2.png')
const imageProductFemale5 = require('../images/female3.png')
const imageProductFemale6 = require('../images/female4.png')
const imageProductFemale7 = require('../images/female5.png')
const imageProductFemale8 = require('../images/female6.png')


function femaleFashion({ navigation }) {
    return (

        <ScrollView>
            <View style={style.femaleFashion}>

                <View style={style.femaleFashionView}>

                    <View style={style.femaleCards}>

                        <TouchableOpacity style={style.femaleCardButton}
                            onPress={() => navigation.navigate('Blusa Bazzar Branca')}
                        >

                            <Image source={imageProductFemale1} style={style.femaleCardImage}></Image>

                        </TouchableOpacity>

                        <View style={style.femaleCardText}>

                            <Text style={style.markText}>Blusa Bazzar branca Revoir</Text>

                            <Text style={{ color: '#000', fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Preço:</Text><Text style={{ color: '#000', fontSize: 12 }}>R$ 80,00</Text>

                        </View>

                    </View>

                    <View style={style.femaleCards}>

                        <TouchableOpacity

                            onPress={() => navigation.navigate('Vestido Bazzar Florido')}
                            style={style.femaleCardButton}

                        >

                            <Image source={imageProductFemale2} style={style.femaleCardImage}></Image>

                        </TouchableOpacity>

                        <View style={style.femaleCardText}>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Vestido Bazzar Florido</Text>

                            <Text style={{ color: '#000', fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Preço:</Text><Text style={{ color: '#000', fontSize: 12 }}>R$ 198,00</Text>

                        </View>

                    </View>

                    <View style={style.femaleCards}>

                        <TouchableOpacity

                            onPress={() => navigation.navigate('Tênis Bazzar Color S')}
                            style={style.femaleCardButton}
                        >

                            <Image source={imageProductFemale3} style={style.femaleCardImage}></Image>

                        </TouchableOpacity>

                        <View style={style.femaleCardText}>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Tênis Bazzar Color S</Text>

                            <Text style={{ color: '#000', fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Preço:</Text><Text style={{ color: '#000', fontSize: 12 }}>R$ 240,00</Text>

                        </View>

                    </View>


                    <View style={style.femaleCards}>

                        <TouchableOpacity

                            onPress={() => navigation.navigate('Tênis Bazzar Pink')}
                            style={style.femaleCardButton}
                        >

                            <Image source={imageProductFemale4} style={style.femaleCardImage}></Image>

                        </TouchableOpacity>

                        <View style={style.femaleCardText}>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Tênis Bazzar Pink</Text>

                            <Text style={{ color: '#000', fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Preço:</Text><Text style={{ color: '#000', fontSize: 12 }}>R$ 220,00</Text>

                        </View>

                    </View>


                    <View style={style.femaleCards}>
                        <TouchableOpacity

                            onPress={() => navigation.navigate('Vestido Bazzar Preto')}
                            style={style.femaleCardButton}

                        >

                            <Image source={imageProductFemale5} style={style.femaleCardImage}></Image>

                        </TouchableOpacity>


                        <View style={style.femaleCardText}>
                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Vestido Bazzar preto longo</Text>

                            <Text style={{ color: '#000', fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Preço:</Text><Text style={{ color: '#000', fontSize: 12 }}>R$ 265,00</Text>

                        </View>

                    </View>

                    <View style={style.femaleCards}>

                        <TouchableOpacity

                            onPress={() => navigation.navigate('Bolsa Bazzar Vintage')}
                            style={style.femaleCardButton}

                        >

                            <Image source={imageProductFemale6} style={style.femaleCardImage}></Image>

                        </TouchableOpacity>

                        <View style={style.femaleCardText}>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Bolsa Bazzar vintage London</Text>

                            <Text style={{ color: '#000', fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Preço:</Text><Text style={{ color: '#000', fontSize: 12 }}>R$ 415,00</Text>

                        </View>

                    </View>

                    <View style={style.femaleCards}>

                        <TouchableOpacity

                            onPress={() => navigation.navigate('Bolsa Bazzar Red Hot')}
                            style={style.femaleCardButton}

                        >

                            <Image source={imageProductFemale7} style={style.femaleCardImage}></Image>

                        </TouchableOpacity>

                        <View style={style.femaleCardText}>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Bolsa Bazzar Red Hot</Text>

                            <Text style={{ color: '#000', fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Preço:</Text><Text style={{ color: '#000', fontSize: 12 }}>R$ 280,00</Text>

                        </View>

                    </View>

                    <View style={style.femaleCards}>

                        <TouchableOpacity

                            onPress={() => navigation.navigate('Sapato Bazzar Salto')}
                            style={style.femaleCardButton}

                        >

                            <Image source={imageProductFemale8} style={style.femaleCardImage}></Image>

                        </TouchableOpacity>

                        <View style={style.femaleCardText}>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Sapato Bazzar salto fashion</Text>

                            <Text style={{ color: '#000', fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Preço:</Text><Text style={{ color: '#000', fontSize: 12 }}>R$ 155,00</Text>

                        </View>

                    </View>

                </View>

            </View>
        </ScrollView>

    );
}

const style = StyleSheet.create({

    femaleFashion: {

        width: '100%',
        backgroundColor: '#F1BF3E',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },

    femaleFashionView: {

        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 30,
        marginBottom: 30,
        padding: 20

    },

    femaleCards: {

        width: '48%',
        marginTop: 20,

    },

    femaleCardButton: {

        alignItems: 'center',
        width: '100%'

    },

    femaleCardText: {

        alignItems: 'center',
        marginBottom: 15,
        marginTop: 15
    },

    femaleCardImage: {
        borderRadius: 10
    },

    femaleFashionText: {

        fontSize: 35,
        color: '#000'

    },

    markText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 12
    }

});

export default femaleFashion;