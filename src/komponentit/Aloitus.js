import {
  Container,
  TableRow,
  TableCell,
  makeStyles,
  Typography,
  Table,
  TableBody,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  otsikko: {
    padding: 10,
    fontWeight: 700,
  },
  parillinenTausta: {
    backgroundColor: "rgba(63,81,181,0.2)",
  },
  kuva: {
    width: "100%",
    marginBottom: 10,
    boxShadow: "0px 0px 10px 5px rgb(63,81,181)",
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

export function Aloitus() {
  const tyylit = useStyles();

  return (
    <Container>
      <Typography className={tyylit.otsikko} variant="h4" align="center">
        Tervetuloa Pilkkisoihin!
      </Typography>
      <img
        className={tyylit.kuva}
        src="/kuvat/aloituskuva.jpg"
        alt="pilkinta"
      />
      <Typography paragraph={true}>
        Jo 16-vuotta järjestetyt Pilkkisat ovat taas täällä! Monelle
        perinteeksikin muodostunut vuotuinen maaliskuun lopun Pilkkisat
        järjestetään jälleen Jääjärvellä. Mukaan toivotaan niin kaikkia vanhoja
        kuin uusia kasvoja. Taistelu Jääjärven kuninkuudesta voi jatkua!
      </Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className={tyylit.parillinenTausta} width="50%">
              Mitä?
            </TableCell>
            <TableCell className={tyylit.parillinenTausta}>
              Pilkkisat!
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Missä?</TableCell>
            <TableCell>Jääjärvellä!</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={tyylit.parillinenTausta}>Milloin?</TableCell>
            <TableCell className={tyylit.parillinenTausta}>
              21.3.2021!
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Miksi?</TableCell>
            <TableCell>Leipää ja sirkushuveja!</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography style={{ marginTop: 10 }}>
        Tarkasta säännöt ja ilmoittaudu mukaan!
      </Typography>
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
