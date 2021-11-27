import Layout from "../components/layout";
import {
    Typography,
    Container,
    Grid,
    List,
    ListItem
} from '@material-ui/core'
import ChallengeCard from "../components/leaderboard/ChallengeCard";
import RankCard from "../components/leaderboard/RankCard";

const Leaderboard = () => {
    return(
        <Layout>
            <Container>
                <Typography variant="h4" style={{marginTop: '2em'}}>Challenges</Typography>    
                <Grid container style={{ margin : '1em 0' }} justifyContent="center" alignContent="stretch">
                    <Grid item>
                        <ChallengeCard />  
                    </Grid>
                    <Grid item>
                        <ChallengeCard />  
                    </Grid>
                    <Grid item>
                        <ChallengeCard />  
                    </Grid>
                </Grid>


                <Typography variant="h4" style={{marginTop: '2em'}}>Leaderboard</Typography> 
                <List>
                    <RankCard></RankCard>
                    <ListItem>Second</ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Leaderboard;