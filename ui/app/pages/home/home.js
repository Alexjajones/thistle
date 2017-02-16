import React, {Component} from 'react'

class Home extends Component {
    render() {
        let main = 'feb-cover';

        let images = [
            {src: 'whimsical', url: 'https://www.etsy.com/uk/listing/512628859/watercolour-whimsical-calligraphy?ref=shop_home_active_4'},
            {src: 'minimal', url: 'https://www.etsy.com/uk/listing/507647517/watercolour-calligraphy-wedding-set?ref=related-7'},
            {src: 'monogram', url: 'https://www.etsy.com/uk/listing/499132130/watercolour-calligraphy-custom-monogram?ref=related-5'},
        ];

        var imagesEls = images.map((image) => {
            return (
                <a className="col-1-3" target="_blank" href={image.url} key={image.src}>
                    <img className="home-image" src={'../../images/' + image.src + '.png'}/>
                </a>
            );
        });

        return (
            <div className="home grid">
                <img className="col-1-1 home-image-main" src={"../../images/" + main + '.png'} alt="home image"/>
                {imagesEls}
            </div>
        )
    }
}

export default Home;