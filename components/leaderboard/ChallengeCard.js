import {
    Card,
    CardActionArea,
    Button,
    CardContent,
    Typography,
    CardActions,
    CardMedia,
    makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 360,
      margin: '.5em',
      [theme.breakpoints.down('sm')]: {
        maxWidth: 450,
      },
    },
    media: {
      height: 150,
    },
  }));

const ChallengeCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    )
}

export default ChallengeCard;