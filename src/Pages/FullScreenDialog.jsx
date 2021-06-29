import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ContactUsCard from '../components/ContactUsCard';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
 
var {open,handleClose} = props;
  return (
    <div>
      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>


          </Toolbar>
        </AppBar>
        <h3 className="contacUsCardsHeading"> Faculty Head </h3>

        <div className="contactUsCardDialog">
        <ContactUsCard 
        name="Jatin"
        email="cs19b1013@iiitr.ac.in"
        phoneNum="9068334677"
        />

        </div>

        <h3 className="contacUsCardsHeading"> Web Team </h3>
        <div className="contactUsCardDialog">
        <ContactUsCard 
        name="Jatin"
        email="cs19b1013@iiitr.ac.in"
        phoneNum="9068334677"
        />

        <ContactUsCard 
        name="Jatin"
        email="cs19b1013@iiitr.ac.in"
        phoneNum="9068334677"
        />

        <ContactUsCard 
        name="Jatin"
        email="cs19b1013@iiitr.ac.in"
        phoneNum="9068334677"
        />
       </div>


       <h3 className="contacUsCardsHeading"> Placement Team Coordinators </h3>
        <div className="contactUsCardDialog">
        <ContactUsCard 
        name="Jatin"
        email="cs19b1013@iiitr.ac.in"
        phoneNum="9068334677"
        />

        <ContactUsCard 
        name="Jatin"
        email="cs19b1013@iiitr.ac.in"
        phoneNum="9068334677"
        />

       </div>
      </Dialog>
    </div>
  );
}