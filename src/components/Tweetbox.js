import React from 'react'
import './Tweetbox.css'
import { Avatar, Button } from '@material-ui/core'

function Tweetbox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox-input'>
                    <Avatar src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' />
                    <input placeholder='Tweet your feels' type='text' />
                </div>
                    <input 
                        className='tweetBox-input-image'
                        placeholder='Enter image url'
                        type='text'
                    />
                <Button className='tweetBox-tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
