import React from 'react';
import Card from '../card/card';
import AlbumHeader from './album-header';
import AlbumBody from './album-body';

const AlbumDetail = (props) => (
    <Card>
        <AlbumHeader 
            header={props.album}
        />
        <AlbumBody body={props.album} />
    </Card>
    );

export default AlbumDetail;
