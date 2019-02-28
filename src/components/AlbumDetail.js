import React from 'react';
import { View, Image, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => { //los props también se pueden reestructurar, en esta ocasión a album
    const {title, artist, thumbnail_image} = album;
    const {headerContentStyle, thumbnailStyle} = styles;
    return(
        <Card>
            <CardSection>
                <View>
                    <Image source = {{ uri: thumbnail_image }} style = {thumbnailStyle}></Image>
                </View>
                <View style= {headerContentStyle}>
                    <Text> {title} </Text>
                    <Text> {artist}</Text>
                </View>
            </CardSection> 
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },

    thumbnailStyle: {
        height: 50,
        width: 50
    }
}
export default AlbumDetail;