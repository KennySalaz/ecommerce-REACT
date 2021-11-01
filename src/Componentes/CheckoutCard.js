import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
/* import ShareIcon from '@material-ui/icons/Share'; */
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
/* import MoreVertIcon from '@material-ui/icons/MoreVert'; */
import accounting from 'accounting';
import { Delete } from '@material-ui/icons';
import { UsarContext } from '../estadoGlobal/UsarContexto';
import { actionTypes } from '../estadoGlobal/DefinicionFunciones';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: "1rem",

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const CheckoutCard = ({ product: { id, name, productType, image, price, rating, description } }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [{ addCar }, dispatch] = UsarContext()


  const addToCar = () => {
    dispatch({
      type: actionTypes.ADD_TO_CARD,
      item: {
        id,
        name,
        productType,
        image,
        price,
        rating,
        description
      }

    })
  }
  const handleExpandClick = () => {setExpanded(!expanded);};
  
  const removeAddCar = () => {
    dispatch({
      type: actionTypes.REMOVE_ADD,
      id,
    })
  }



  return (
    <Card className={classes.root}>
      <CardHeader
        /*   avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          } */
        action={
          <Typography
            className={classes.action}
            variant='h5'
            color='textSecondary'>
            {accounting.formatMoney(price, '$')}

          </Typography>

        }
        title={name}
        subheader="in Stock"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      <CardContent>
        {productType}
      </CardContent>
      <CardActions disableSpacing>

        <IconButton >
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> &#11088;</p>
            ))}
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        <IconButton onClick={removeAddCar}>
          <Delete />
        </IconButton>

      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>


          <Typography>
            {description}
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}

export default CheckoutCard
