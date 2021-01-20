import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import UnfoldMoreRoundedIcon from "@material-ui/icons/UnfoldMoreRounded";
import SaveRoundedIcon from '@material-ui/icons/SaveRounded';
import AddItemForm from "./AddItemForm";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    paddingLeft: "10vw",
    paddingRight: "10vw",
  },
  item: {
    fontFamily: 'Varela Round',
  },
}));

export default function ActionList(props) {

  const classes = useStyles();
  const [checked, setChecked] = useState([0]);
  const [isEditable, setIsEditable] = useState(false);

  const modeToggle = () => setIsEditable(!isEditable);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      
      {props.items.map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        return (
          <ListItem
            key={value}
            role={undefined}
            dense
            button
            onClick={handleToggle(value)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={value.action_name} />
            {isEditable && (
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="drag">
                  <UnfoldMoreRoundedIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                  <DeleteRoundedIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                  <EditRoundedIcon />
                </IconButton>
              </ListItemSecondaryAction>
            )}
          </ListItem>
        );
      })}

      {isEditable ? 
      (<>
      <AddItemForm />
      <IconButton onClick={modeToggle}>
        <SaveRoundedIcon/>
      </IconButton>
      </>) :
      (<IconButton onClick={modeToggle}>
            <EditRoundedIcon/>
      </IconButton>) }

    </List>
  );
}
