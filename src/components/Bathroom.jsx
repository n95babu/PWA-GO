import React, { Component } from 'react'
import { fetchBathrooms } from '../services/Api-Helper'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import logo from '../assets/logo.png';






class Bathroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bathrooms: [],
    };
  }

  componentDidMount = async () => {
    const data = await fetchBathrooms();
    this.setState({
      bathrooms: data,
    });
  }





  render() {
    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 4,
      },
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 400,
      },
      image: {
        width: 128,
        height: 128,
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },

    }));
    return (
      <div className='page'>
        {this.state.bathrooms.map((bathroom) => (
          <div className={useStyles.root}>
            <Paper className={useStyles.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={useStyles.image}>
                    <img className={useStyles.img} alt="complex" src={logo} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        {bathroom.borough}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {bathroom.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {bathroom.location}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        ))}
      </div>
    );
  };
};


export default Bathroom;
