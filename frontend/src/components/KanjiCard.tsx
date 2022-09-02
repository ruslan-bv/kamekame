import * as React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

interface KanjiCardProps {
    content: string
}

const KanjiCard: React.FC<KanjiCardProps> = ({ content }) => {
    const dummyKanji = '木';

    return (
        <Card>
            <CardContent>
                <Typography variant="h6">{dummyKanji}</Typography>
                <Typography>
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to Deck</Button>
            </CardActions>
        </Card>
    )
}

export default KanjiCard;
