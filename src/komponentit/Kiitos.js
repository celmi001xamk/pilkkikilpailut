import {
  Container,
  Table,
  TableRow,
  TableCell,
  Typography,
  makeStyles,
  TableBody,
} from "@material-ui/core";

const useStyles = makeStyles({
  parillinenTausta: {
    backgroundColor: "rgba(63,81,181,0.2)"
  },
});


export function Kiitos({ location }) {
  const tyylit = useStyles();

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center">
        Ilmoittautuminen vastaanotettu!
        <br />
        Kiitos!
      </Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className={tyylit.parillinenTausta} width="50%">Etunimi:</TableCell>
            <TableCell className={tyylit.parillinenTausta}>{location.state.current.etunimi}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sukunimi:</TableCell>
            <TableCell>{location.state.current.sukunimi}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={tyylit.parillinenTausta}>Asuinpaikkakunta:</TableCell>
            <TableCell className={tyylit.parillinenTausta}>
              {location.state.current.asuinpaikkakunta}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Puhelinnumero:</TableCell>
            <TableCell>{location.state.current.puhelinnumero}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={tyylit.parillinenTausta}>Sähköposti:</TableCell>
            <TableCell className={tyylit.parillinenTausta}>{location.state.current.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ikäsarja:</TableCell>
            <TableCell>{location.state.current.ikasarja}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
}
