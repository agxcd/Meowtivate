import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InventoryItem from '../components/InventoryItem';
import NavBar from '../components/NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: '10vw',
    marginRight: '10vw',
  },
  header: {
    fontFamily: "Varela Round",
    letterSpacing: "6px",
    color: 'grey',
    paddingBottom: '2em'
  },
}));

export default function InventoryPage(props) {
  const classes = useStyles();
  const { state, potFunctions } = props;
  const { setDefaultPot } = potFunctions;
  const { inventory } = state;
  console.log('userinven', inventory)

  return (
    <>
      <header>
        <NavBar/>
        <h1 className={classes.header}>my INVENTORY</h1>
      </header>
        <Grid container spacing={3} className={classes.root}>
          {inventory
            .sort(function(a, b) {
              return a.id - b.id;
            })
            .map((item) => {
              return (
                <InventoryItem 
                key={item.pot_idid}
                pot_id={item.pot_id}
                name={item.pot_name}
                image={item.image_url}
                description={item.description}
                isDefault={item.is_default}
                setDefaultPot={setDefaultPot}
                />
              );
            })}
        </Grid>
    </>
  );
}
