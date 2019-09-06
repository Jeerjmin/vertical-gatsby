import React from 'react'
import Helmet from 'react-helmet'
import Slider from "../components/slider/slider";

class Home extends React.Component {
    render() {

        return (
            <div style={{ background: '#fff' }}>
                <Helmet title="Home" />
                <div>Home</div>
                <Slider/>
            </div>
        )
    }
}

export default Home