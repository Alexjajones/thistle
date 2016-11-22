import React, {Component} from 'react'

class Home extends Component {
    render() {
        let main = 'christmas-mini';

        let images = [
            {src: 'christmas-bambi', url: 'https://www.etsy.com/uk/shop/ThistlePaperCo'},
            {src: 'christmas-mittens', url: 'https://www.etsy.com/uk/shop/ThistlePaperCo?section_id=18064499'},
            {src: 'christmas-nutcracker', url: 'https://www.etsy.com/uk/shop/ThistlePaperCo?section_id=18064499'},
        ];

        var imagesEls = images.map((image) => {
            return (
                <div className="col-1-3" onClick={ () => window.open(image.url, '_blank') }>
                    <img className="home-image" src={'../../images/' + image.src + '.png'}/>
                </div>
            );
        });

        return (
            <div className="home grid">
                <img className="col-1-1 home-image-main" src={"../../images/" + main + '.jpg'} alt="home image"/>
                {imagesEls}
            </div>
        )
    }
}

export default Home;