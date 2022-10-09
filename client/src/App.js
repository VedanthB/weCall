import { Typography, AppBar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Notifications, Sidebar, VideoPlayer } from "./components";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    marginBottom: "6rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    border: "2px solid black",
    padding: "1rem",
    color: "white",
    backgroundColor: "#4caf50",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <LocalPhoneIcon />

          <h2> weChat </h2>
        </div>
        <Typography variant="h4" align="center">
          Video Chat
        </Typography>

        <Button color="inherit">GitHub</Button>
      </AppBar>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};

export default App;
