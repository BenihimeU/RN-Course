import React from 'react';
import { Linking } from 'react-native';
import Card from '../card/card';
import AlbumHeader from './album-header';
import AlbumBody from './album-body';
import CustomButton from '../card/button';

const AlbumDetail = ({ album }) => (
    <Card>
        <AlbumHeader 
            header={album}
        />
        <AlbumBody body={album} />
        <CustomButton
            attr={{ 
                title: 'Buy',
                onPressed: () => {
                    Linking.openURL(album.url).then(
                        (url) => {
                            console.log(url);
                        }
                    ).catch(err => console.error('An error occurred', err));
                }
            }}
        />
    </Card>
    );

export default AlbumDetail;
