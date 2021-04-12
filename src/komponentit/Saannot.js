import {
  Button,
  Container,
  List,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  otsikko: {
    padding: 10,
    fontWeight: 700,
  },
  parillinenTausta: {
    backgroundColor: "rgba(63,81,181,0.2)",
    padding: 5,
  },
  vaaleaTausta: {
    padding: 5,
  },
  linkkiNappi: {
    width: "50%",
    display: "inline-block",
    textAlign: "center",
    backgroundColor: "rgb(63,81,181)",
    border: "1px solid rgba(255,255,255,0.95)",
    color: "white",
    "&:hover": {
      color: "black",
    },
  },
});
export function Saannot() {
  const tyylit = useStyles();
  const saannot = [
    {
      id: 1,
      teksti: "Ilmoittautuminen kisapäivänä klo 9:00 mennessä",
    },
    {
      id: 2,
      teksti: "Pyynti laskettuna ja punnittuna klo 18:00 mennessä",
    },
    {
      id: 3,
      teksti: "Kalat tulee pyytää selkeästi rajatun kilpa-alueen sisältä",
    },
    {
      id: 4,
      teksti: "Kilpailijan tulee nostaa kalat itse",
    },
    {
      id: 5,
      teksti:
        "Kilpailijalla tulee olla mukanaan oma jääkaira ja kalastusvälineet",
    },
    {
      id: 6,
      teksti:
        "Kilpailijalla saa olla vain yksi pilkkivapa vedessä samanaikaisesti",
    },
    {
      id: 7,
      teksti:
        "Muiden kilpailijoiden häirintä on kiellettyä ja johtaa diskaamiseen",
    },
    {
      id: 8,
      teksti:
        "Osallistumalla kilpailuun kilpailija sitoutuu noudattamaan sääntöjä",
    },
  ];
  return (
    <Container>
      <Typography className={tyylit.otsikko} variant="h4" align="center">
        Säännöt
      </Typography>
      <List>
        {saannot.map((saanto, id) => {
          return (
            <ListItemText
            key={id}
              className={
                id % 2 === 0
                  ? `${tyylit.parillinenTausta}`
                  : `${tyylit.vaaleaTausta}`
              }
            >
              {saanto.id}. {saanto.teksti}
            </ListItemText>
          );
        })}
      </List>
      <Button
        style={{ marginTop: 10 }}
        color="primary"
        variant="contained"
        fullWidth
        component={Link}
        to="/saannot"
      >
        Säännöt
      </Button>
    </Container>
  );
}
