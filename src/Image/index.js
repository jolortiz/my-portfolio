import React from 'react';
import './index.css';

/*
~~ Do not display image until it is loaded.
~~ Jonathan Ortiz 2019
*/

export default class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imageLoaded: false };
    }
    handleImageLoaded() {
        this.setState({ imageLoaded: true });
    }
    handleImageErrored() {
        this.setState({ imageLoaded: false });
    }
    render() {
        const customStyles = {
            opacity: (this.state.imageLoaded) ? 1 : 0,
        };
        return (
            <img {...this.props}
                alt={this.props.alt}
                style={customStyles}
                onLoad={this.handleImageLoaded.bind(this)}
                onError={this.handleImageErrored.bind(this)}
        />
        );
    }
}