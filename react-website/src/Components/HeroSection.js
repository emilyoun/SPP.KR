import React from 'react'
import { Button } from './Button'
import './HeroSection.css'


function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/public/videos/video-2.mp4" autoPlay loop muted />
            <h1>She++Korea</h1>
            <p>Help one another Grow Together</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--larage'>
                    GET STARTED
                    </Button>
                </div>
            </div>
    )
}

export default HeroSection
