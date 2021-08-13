import React, { useState, useEffect } from 'react';
import { Card, Icon, Image, Grid , Header} from 'semantic-ui-react';

const MemeGenerator = () => {

    const [meme , setMeme] = useState([]);
    
    return (
        <>
        <Header as='h2'>Meme Generator</Header>
            <Grid centered columns={2}>
                <Card>
                    <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Daniel</Card.Header>
                        <Card.Meta>Joined in 2016</Card.Meta>
                        <Card.Description>
                            Daniel is a comedian living in Nashville.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            10 Friends
                        </a>
                    </Card.Content>
                </Card>
            </Grid>
        </>
    )
}

export default MemeGenerator;
