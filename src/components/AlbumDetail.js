import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => { //los props también se pueden reestructurar, en esta ocasión a album
    const {title, artist, thumbnail_image, image, url} = album;
    const {
        headerContentStyle,
        headerTextStyle, 
        thumbnailStyle, 
        thumbnailContainerStyle,
        imageStyle} = styles;
    return(
        <Card>
            <CardSection>
                <View style= {thumbnailContainerStyle}>
                    <Image source = {{ uri: thumbnail_image }} style = {thumbnailStyle}></Image>
                </View>
                <View style= {headerContentStyle}>
                    <Text style = {headerTextStyle}> {title} </Text>
                    <Text> {artist}</Text>
                </View>
            </CardSection> 

            <CardSection>
                <Image source = {{ uri: image}} style = { imageStyle }/>
            </CardSection>
            
            <CardSection>
                <Button onPress = {() => Linking.openURL(url)} text>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },

    headerTextStyle: {
        fontSize: 18
    },

    thumbnailStyle: {
        height: 50,
        width: 50
    },

    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    imageStyle:{ //adaptative size
        height: 300,
        flex: 1,
        width: null
    }
}
export default AlbumDetail;