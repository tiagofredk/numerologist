import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  withStyles
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ColoredButton from "./ColoredButton";

const styles = theme => ({
  dialogActions: {
    justifyContent: "flex-start",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  dialog: {
    zIndex: 1400
  },
  backIcon: {
    marginRight: theme.spacing(1)
  }
});

function CookieRulesDialog(props) {
  
  const { classes, onClose, open, theme, languageDef } = props;
  
  return (
    <Dialog
      open={open}
      scroll="paper"
      onClose={onClose}
      className={classes.dialog}
    >
      <DialogTitle>{languageDef.cookie.t1}</DialogTitle>
      <DialogContent>
        <Typography variant="h6" color="primary" paragraph>
          {languageDef.cookie.t2}
        </Typography>
        <Typography paragraph>
          {languageDef.cookie.t3}
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          {languageDef.cookie.t4}
        </Typography>
        <Typography paragraph>
          {languageDef.cookie.t5}
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          {languageDef.cookie.t6}
        </Typography>
        <Typography paragraph>
          {languageDef.cookie.t7}
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          {languageDef.cookie.t8}
        </Typography>
        <Typography paragraph>{languageDef.cookie.t9}</Typography>
        <Typography paragraph>
          {languageDef.cookie.t10}
        </Typography>
        <Typography paragraph>{languageDef.cookie.t11}</Typography>
        <Typography paragraph>
          {languageDef.cookie.t12}
        </Typography>
        <Typography paragraph>{languageDef.cookie.t13}</Typography>
        <Typography paragraph>
          {languageDef.cookie.t14}
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          {languageDef.cookie.t15}
        </Typography>
        <Typography paragraph>
          {languageDef.cookie.t16}
        </Typography>
        <Typography paragraph>
          {languageDef.cookie.t17}
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          {languageDef.cookie.t18}
        </Typography>
        <Typography paragraph>
          {languageDef.cookie.t19}
        </Typography>
        <Typography paragraph>
          {languageDef.cookie.t20}
        </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <ColoredButton
          onClick={onClose}
          variant="contained"
          color={theme.palette.common.black}
        >
          <ArrowBackIcon className={classes.backIcon} />
          {languageDef.cookie.t21}
        </ColoredButton>
      </DialogActions>
    </Dialog>
  );
}

export default withStyles(styles, { withTheme: true })(CookieRulesDialog);
