import React, { useState, useEffect } from 'react';
import { Icon, Image, Header, Button } from 'semantic-ui-react';
import './MemeGenerator.css';

const MemeGenerator = () => {

    const [memes, setMemes] = useState([]);
    const [memeIndex, setMemeIndex] = useState(1);

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes').then(res => {
            res.json().then(res => {
                const memes = res.data.memes;
                setMemes(memes);
            });
        });
    }, [])

    return (
        memes.length ?
            <>
                <div className="MemeCard">
                    <Header as='h2'>Meme Generator</Header>
                    <Image src={memes[memeIndex].url} size='medium' centered rounded className='img' />
                    <div>
                        <Button animated className='Btn' onClick={() => setMemeIndex(memeIndex - 1)} primary>
                            <Button.Content visible>Prev</Button.Content>
                            <Button.Content hidden>
                                <Icon name='arrow left' />
                            </Button.Content>
                        </Button>
                        <Button animated className='Btn' onClick={() => setMemeIndex(memeIndex + 1)} positive>
                            <Button.Content visible>Next</Button.Content>
                            <Button.Content hidden>
                                <Icon name='arrow right' />
                            </Button.Content>
                        </Button>
                    </div>
                </div>
            </> : null
    )
}

export default MemeGenerator;
