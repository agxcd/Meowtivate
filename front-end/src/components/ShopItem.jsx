import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '10rem',
  },
  card: {
    minHeight: '22rem',
    minWidth: '12rem',
  },
  coin: {
    height: '2.5rem'
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    paddingRight: '0.5rem'
  }
}));


export default function ShopItem(props) {
  const classes = useStyles();
  const { addPot, id, price, coins, setCoins, inventory } = props;
  const [isSold, setIsSold] = useState(false);

  const buyItem = (user_id, pot_id) => {
    setCoins(prev => prev - price);
    setIsSold(true);
    addPot(user_id, pot_id);
  }

  // Build array of inventory pot_ids
  const potIDs = inventory.map(obj => obj.pot_id);

  console.log(`Coin in pot ${id}:`, coins)
  // useEffect(() => {
  //   if (isSold) {
  //     setCoins(prev => prev - price)
  //   }
  // }, [isSold])

  return (
    <Grid item xs={6} sm={3}>
      <Card className={classes.card}>
        <CardContent>
          <header className="meow-item-header">
            <img
              className={classes.root}
              src={props.image}
              alt={props.name}
              price={props.price}
              style={props.style}
            />
            <h2 className="meow-item-header-name">{props.name}</h2>
          </header>
          <main className="meow-item-description">
            <p>{props.description}</p>
          </main>
          <footer className={classes.footer}>
            <p className={classes.price}>{props.price}</p>
            <img className={classes.coin} src='https://meowtivate.s3-us-west-2.amazonaws.com/miscellaneous/meowcoin.png' alt='meowcoin' />
          </footer>
          {price > coins ? (
            <Button 
              variant="contained" 
              disabled>
              BUY
          </Button>
          ) : (
            <Button 
              variant="contained" 
              color="secondary"
              onClick={() => buyItem(1, id)}>
              BUY
            </Button>
          )}

          {potIDs.includes(id) ? (
            <p>ALREADY IN INVENTORY</p>
          ) : (isSold ? (<p>ALREADY IN INVENTORY</p>) : "")}
        </CardContent>
      </Card>
    </Grid>
  );
}
