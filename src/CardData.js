import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PostData from './data/data.json';

const useStyles = makeStyles({
  card: {
    minWidth: 'auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CardData() {
  const classes = useStyles();
  return(
    <div>
      <h1>Data loading in Card</h1>
      {
        PostData.map((postDetail, index) => (
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Date: {postDetail.Date}
              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Open: {postDetail.Open}
              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                High: {postDetail.High}
              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Low: {postDetail.Low}
              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Close: {postDetail.Close}
              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
               Ajdclose: {postDetail.Ajdclose}
              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Volume: {postDetail.Volume}
              </Typography>
            </CardContent>
          </Card>
        )
     )}
      }
    </div>
  )}
  


 