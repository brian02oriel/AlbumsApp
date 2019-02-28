import React from 'react';
import { View } from 'react-native';

const Card = (props) =>{

    return (
        <View style = {styles.containerStyle} > 
            {props.children} 
        </View> //props.children renderiza todo lo que está dentro del componente padre
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export default Card;

