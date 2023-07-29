import React, { Component } from 'react'
import axios from 'axios';


export class Random extends Component {
    state = { advice: "", img: "https://1.bp.blogspot.com/-_NVPT4_UIH4/X5-KvuqjLNI/AAAAAAAA_e4/rbsr1Z_C3jM2QdD2HZebogB6M3dayurRACLcBGAsYHQ/s3840/loneliness_alone_sunset_188916_2560x1440.jpg", temp: 0 };

    componentDidMount() {
        this.fetchAdvice();
    }
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({img: 'https://picsum.photos/2400/1200', temp: this.state.temp + 1})
                this.setState({ advice });
                console.log(advice);
            })
            .catch((error) => {
                console.log(error)
            })
    }
    render() {
        const { advice } = this.state;
        return (
            <div className='container' style={{
                background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${this.state.img})`,
              }}>
                <div className='card'>
                    <h1 className='heading'> {advice}</h1>
                    <button className='button' onClick={this.fetchAdvice}><span>QUOTE<strong></strong></span></button>
                </div>
            </div>
        )
    }
}

export default Random;