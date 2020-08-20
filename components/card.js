import { Card, Typography, CardContent, CardMedia, Button, Box, Grid, List, ListItem} from '@material-ui/core'
import { useRouter } from 'next/router'
import styles from '../styles/Card.module.css'
import Message from '../public/svgs/message.svg'
import placeholder from '../public/images/placeholder.jpg'
import sample from '../public/svgs/message.svg'

export const AboutCard = () => {
    return(
    <Card className={styles.aboutCard}>
        <Message />
        <Typography variant="subtitle1" component="h5">Talks</Typography>
        <Typography variant="body2" component="p">Get updated with the latest news and announcements</Typography>
    </Card>)
}

export const ContactCard = (props) => {
    const router = useRouter()

    const routeHandler = () => {
        router.push(props.actionLink)
    }
    return(
    <Card style={{margin : '8px'}}>
        <CardMedia image={placeholder} style={{height : '200px'}}></CardMedia>
        <CardContent style={{display : 'flex', flexDirection : 'column'}}>
            <Typography variant="subtitle1" style={{fontWeight : '600'}}>Why DSC?</Typography>
            <Typography variant="body2">Get updated with the latest news and announcements. Get updated with the latest news and announcements. Get updated with the latest news and announcements.t news and announcements</Typography>
            <Button variant="contained" color="primary" style={{margin : '0px auto', marginTop : '2em'}} onClick={routeHandler}>{props.action}</Button>
        </CardContent>
    </Card>)
}


export const EventCard = (props) => {
    const router = useRouter();

    return(
    <Card>
        <CardContent>
                <Grid container wrap="wrap-reverse">
                    <Grid item xs={12} md={3}>
                        <img src={placeholder} style={{height : '100%', width : '100%', objectFit : 'cover'}}/>
                    </Grid>
                    <Grid item xs={12} md={9} container direction="column" justify="space-between">
                        <Grid item className={styles.cardContent}>
                            <Box>
                                <Typography variant="h6" style={{fontWeight : '600'}}>{props.title}</Typography>
                                <Typography variant="body1" style={{fontWeight : '500', marginBottom : '1em'}}>speaker: {props.speaker}</Typography>
                            </Box>
                            <Box className={styles.cardDescription}>
                                <Typography variant="body2" className={styles.cardDescription}>{props.discription}</Typography>
                            </Box>
                        </Grid>
                        <Grid item className={styles.buttonsLG}>
                            <Box>
                                <Button variant="contained" style={{marginRight : '1em', background : 'white'}}>Explore</Button>
                                <Button variant="contained" color="primary">Read More</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            <Box className={styles.buttonsMD}>
                <Button variant="contained" style={{marginRight : '1em', background : 'white'}}>Explore</Button>
                <Button variant="contained" color="primary">Read More</Button>
            </Box>
        </CardContent>

    </Card>)
}

export const BlogCard = (props) => {
    const router = useRouter();

    return(
    <Card className={styles.blogCard}>
        <CardContent>
                <Grid container wrap="wrap">
                    <Grid item xs={12} md={3}>
                        <img src={placeholder} style={{height : '90%', width : '90%', objectFit : 'cover'}}/>
                    </Grid>
                    <Grid item xs={12} md={9} container direction="column" justify="space-between">
                        <Grid item className={styles.cardContent}>
                            <Box>
                                <Typography variant="h6" style={{fontWeight : '600'}}>{props.title}</Typography>
                                <Typography variant="body1" style={{fontWeight : '500', marginBottom : '1em'}}>speaker: {props.speaker}</Typography>
                            </Box>
                            <Box className={styles.cardDescription}>
                                <Typography variant="body2" className={styles.cardDescription}>{props.discription}</Typography>
                            </Box>
                        </Grid>
                        <Grid item style={{display : 'flex', justifyContent : 'flex-end'}}>
                            <Button variant="contained" style={{marginRight : '1em', background : 'white'}}>Explore</Button>
                            <Button variant="contained" color="primary">Read More</Button>
                        </Grid>
                    </Grid>
                </Grid>
        </CardContent>

    </Card>)
}