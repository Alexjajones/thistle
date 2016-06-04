import React, { Component } from 'react'
import $ from 'jquery'

class Instagram extends Component {
    componentDidMount() {
        var that = this;

        this.serverRequest = $.ajax({
            url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=1980936993.1677ed0.3f54e174dffd4a4ba2594ccaa0a38b1c',
            type: "GET",
            crossDomain: true,
            dataType: "jsonp",
            success: function (result) {
                that.setState({items: result.data});
            }
        });
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        if (this.state && this.state.items) {
            // Removing invalid items.
            var filtered = this.state.items.filter(function(item) {
                return item && item.images && item.type !== 'video';
            });

            // Only display a max of 12 items
            if (filtered.length > 12) {
                filtered.length = 12;
            }

            var images = filtered.map(function (item) {
                return <img key={item.id} className="insta-image col-1-6" src={item.images.standard_resolution.url} onClick={openInsta}/>

                function openInsta()
                {
                    window.open(item.link, '_blank');
                }
            });
        }

        return (
            <div className="insta-container grid">
                <h2 className="insta-text">@THISTLEPAPERCO ON INSTAGRAM</h2>
                {images}
            </div>
        )
    }
}

export default Instagram