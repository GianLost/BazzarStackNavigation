import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';

const imageProductFemale1 = require('../images/male1.png')
const imageProductFemale2 = require('../images/male2.png')
const imageProductFemale3 = require('../images/male-boot1.png')
const imageProductFemale4 = require('../images/male-boot2.png')
const imageProductFemale5 = require('../images/male3.png')
const imageProductFemale6 = require('../images/male4.png')
const imageProductFemale7 = require('../images/male5.png')
const imageProductFemale8 = require('../images/male6.png')


function maleFashion({ navigation }) {
    return (

        <ScrollView>
            <View style={style.femaleFashion}>

                <View style={style.femaleFashionView}>

                    <View style={style.femaleCards}>

                        <TouchableOpacity style={style.femaleCardButton}
                            onPress={() => navigation.navigate('Blusa Bazzar Branca Thin')}
                        >

                            <Image source={imageProductFemale1} style={style.femaleCardImage}></Image>

                        </TouchableOpacity>

                        <View style={style.femaleCardText}>

                            <Text style={style.markText}>Blusa Bazzar branca thin </Text>

                            <Text style={{ color: '#000', fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Preço:</Text><Text style={{ color: '#000', fontSize: 12 }}>R$ 180,00</Text>

                        </View>

                    </View>

                    <View style={style.femaleCards}>

                        <TouchableOpacity

                            onPress={() => navigation.navigate('Moletom Bazzar Yllw')}
                            style={style.femaleCardButton}

                        >

                            <Image source={imageProductFemale2} style={style.femaleCardImage}></Image>

                        </TouchableOpacity>

                        <View style={style.femaleCardText}>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Moletom Bazzar Yllw</Text>

                            <Text style={{ color: '#000', fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Preço:</Text><Text style={{ color: '#000', fontSize: 12 }}>R$ 218,00</Text>

                        </View>

                    </View>

                    <View style={style.femaleCards}>

                        <TouchableOpacity

                            onPress={() => navigation.navigate('Tênis Bazzar RedStar')}
                            style={style.femaleCardButton}
                        >

                            <Image source={imageProductFemale3} style={style.femaleCardImage}></Image>

                        </TouchableOpacity>

                        <View style={style.femaleCardText}>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Tênis Bazzar RedStar</Text>

                            <Text style={{ color: '#000', fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Preço:</Text><Text style={{ color: '#000', fontSize: 12 }}>R$ 200,00</Text>

                        </View>

                    </View>


                    <View style={style.femaleCards}>

                        <TouchableOpacity

                            onPress={() => navigation.navigate('Tênis Bazzar R&B')}
                            style={style.femaleCardButton}
                        >

                            <Image source={imageProductFemale4} style={style.femaleCardImage}></Image>

                        </TouchableOpacity>

                        <View style={style.femaleCardText}>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Tênis Bazzar R&B</Text>

                            <Text style={{ color: '#000', fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Preço:</Text><Text style={{ color: '#000', fontSize: 12 }}>R$ 260,00</Text>

                        </View>

                    </View>


                    <View style={style.femaleCards}>
                        <TouchableOpacity

                            onPress={() => navigation.navigate('Camisa Bazzar Brown Thin')}
                            style={style.femaleCardButton}

                        >

                            <Image source={imageProductFemale5} style={style.femaleCardImage}></Image>

                        </TouchableOpacity>


                        <View style={style.femaleCardText}>
                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Camisa Bazzar Brown thin</Text>

                            <Text style={{ color: '#000', fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Preço:</Text><Text style={{ color: '#000', fontSize: 12 }}>R$ 125,00</Text>

                        </View>

                    </View>

                    <View style={style.femaleCards}>

                        <TouchableOpacity

                            onPress={() => navigation.navigate('Camisa Bazzar Social Purple')}
                            style={style.femaleCardButton}

                        >

                            <Image source={imageProductFemale6} style={style.femaleCardImage}></Image>

                        </TouchableOpacity>

                        <View style={style.femaleCardText}>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Camisa Bazzar Social purple</Text>

                            <Text style={{ color: '#000', fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Preço:</Text><Text style={{ color: '#000', fontSize: 12 }}>R$ 200,00</Text>

                        </View>

                    </View>

                    <View style={style.femaleCards}>

                        <TouchableOpacity

                            onPress={() => navigation.navigate('Tênis Bazzar Grey Casual')}
                            style={style.femaleCardButton}

                        >

                            <Image source={imageProductFemale7} style={style.femaleCardImage}></Image>

                        </TouchableOpacity>

                        <View style={style.femaleCardText}>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Tênis Bazzar casual</Text>

                            <Text style={{ color: '#000', fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Preço:</Text><Text style={{ color: '#000', fontSize: 12 }}>R$ 280,00</Text>

                        </View>

                    </View>

                    <View style={style.femaleCards}>

                        <TouchableOpacity

                            onPress={() => navigation.navigate('Boot Bazzar HardWay')}
                            style={style.femaleCardButton}

                        >

                            <Image source={imageProductFemale8} style={style.femaleCardImage}></Image>

                        </TouchableOpacity>

                        <View style={style.femaleCardText}>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Boot Bazzar HardWay</Text>

                            <Text style={{ color: '#000', fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>

                            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>Preço:</Text><Text style={{ color: '#000', fontSize: 12 }}>R$ 255,00</Text>

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

export default maleFashion;