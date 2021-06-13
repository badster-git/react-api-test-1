import { useState, useEffect } from "react";
import User from "./components/User";

import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import { Typography, Button } from "@material-ui/core";

import "./App.css";

const useStyles = makeStyles((theme) => ({
  appContainer: {
    marginTop: "60px",
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    color: theme.palette.common.white,
    marginTop: "15%",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "20px 20px",
  },
  navigation: {
    display: "flex",
    justifyContent: "center",
    padding: "20px 20px",
    "& button": {
      color: `${theme.palette.common.lightGrey} !important`,
      "&.Mui-selected": {
        color: `${theme.palette.common.black} !important`,
      },
    },
  },
}));

const App = () => {
  const classes = useStyles();

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(20);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${count}`)
      .then((response) => response.json())
      .then((json) => {
        json.results.map((user, idx) => {
          return setUser((oldArr) => [...oldArr, user]);
        });
        setLoading(false);
      })
      .catch((error) => setError("something went wrong."));
  }, [count]);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [page]);

  const fetchUser = () => {
    setLoading(true);
    setUser([]);
    fetch(`https://randomuser.me/api/?results=${count}`)
      .then((response) => response.json())
      .then((json) => {
        json.results.map((user, idx) => {
          return setUser((oldArr) => [...oldArr, user]);
        });
        setLoading(false);
      })
      .catch((error) => setError("something went wrong."));
  };

  const changePage = (e, p) => {
    const pageNum = p;
    setPage(pageNum);
  };

  const getPaginatedData = () => {
    const startIdx = page * 5 - 5;
    const endIdx = startIdx + 5;
    return user.slice(startIdx, endIdx);
  };

  const renderUser = (user) => {
    let title = user.name.title,
      first = user.name.first,
      last = user.name.last,
      userName =
        title === "Miss" || title === "Madame" || title === "Mademoiselle"
          ? `${title} ${first} ${last}`
          : `${title}. ${first} ${last}`,
      picture = user.picture.large;
    console.log(picture);

    return (
      <div key={first}>
        <User userName={userName} picture={picture} />
      </div>
    );
  };

  if (error) return <h1>{error}</h1>;

  return (
    <div className={`container ${classes.appContainer}`}>
      <div className={classes.btnContainer}>
        <Button onClick={() => fetchUser()}>Fetch New Users</Button>
      </div>
      {loading ? (
        <Typography className={classes.loading} variant="h2">
          loading...
        </Typography>
      ) : (
        <div className={classes.userList}>
          <div>{getPaginatedData().map((u, idx) => renderUser(u))}</div>
          <Pagination
            count={Math.ceil(count / 5)}
            page={page}
            color="secondary"
            onChange={changePage}
            className={classes.navigation}
          />
        </div>
      )}
    </div>
  );
};

export default App;
