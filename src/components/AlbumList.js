import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };

    //Lifecycle component
    componentWillMount(){
        console.log('componentWillMount in AlbumList');
        //debugger; permite poner puntos especificos para detener la ejecución del código
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then( response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album}/>); //El nombre de los props es arbitrario
    }
    render(){
        console.log(this.state);
        return(
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>

        );
    }
};



export default AlbumList;