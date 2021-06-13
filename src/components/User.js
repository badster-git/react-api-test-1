import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  userContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    marginTop: "20px",
    padding: "15px 0",
  },

  userImage: {
    margin: "0 auto",
  },
  userName: {
    margin: "10px auto",
    color: theme.palette.common.white,
  },
}));

const User = (userObject) => {
  const classes = useStyles();
  return (
    <div className={classes.userContainer}>
      <div className={classes.userImage}>
        <Avatar
          alt={userObject.userName}
          src={userObject.picture}
          className={classes.large}
        />
      </div>
      <Typography variant="h4" className={classes.userName}>
        {userObject.userName}
      </Typography>
    </div>
  );
};

export default User;
