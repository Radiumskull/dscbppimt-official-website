import {
    ListItem,
    Avatar,
    makeStyles,
    Card,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        
    }
}))

const RankCard = () => {
    return(
        <ListItem> 
            <Card>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Card>
        </ListItem>
    )
}

export default RankCard