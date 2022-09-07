import * as React from 'react';
import { Container, Card, CardContent, CardActions, Button, Typography } from '@mui/material';

interface KanjiCompleteCardProps {
    kanji: {
        kanji: string,
        grade: number,
        heisig_en: string,
        jlpt: null | number,
        kun_readings: string[],
        meanings: string[],
        on_readings: string[],
        stroke_count: number,
        unicode: string
    }
}

const KanjiCompleteCard: React.FC<KanjiCompleteCardProps> = ({ kanji }) => {
    console.log(kanji)
    return (
        <Card>
            <CardContent>
                <Typography variant="h3">{kanji.kanji}</Typography>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Typography variant="caption">Grade</Typography>
                    <Typography variant="body2">{kanji.grade}</Typography>
                    <Typography variant="caption">Heisig_en</Typography>
                    <Typography variant="body2">{kanji.heisig_en}</Typography>
                    <Typography variant="caption">JLPT</Typography>
                    <Typography variant="body2">{kanji.jlpt}</Typography>
                    <Typography variant="caption">Meanings</Typography>
                    <Typography variant="body2">{kanji.meanings}</Typography>
                    <Typography variant="caption">Kun readings</Typography>
                    <Typography variant="body2">{kanji.kun_readings}</Typography>
                    <Typography variant="caption">On readings</Typography>
                    <Typography variant="body2">{kanji.on_readings}</Typography>
                    <Typography variant="caption">Stroke count</Typography>
                    <Typography variant="body2">{kanji.stroke_count}</Typography>
                    <Typography variant="caption">Unicode</Typography>
                    <Typography variant="body2">{kanji.unicode}</Typography>
                </Container>
            </CardContent>
        </Card>
    )
}

export default KanjiCompleteCard;
