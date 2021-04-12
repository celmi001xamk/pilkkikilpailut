import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  lomakeKentta: {
    marginTop: 10,
  },
  otsikko: {
    padding: 10,
    fontWeight: 700,
  },
});

export function Ilmoittaudu() {
  const tyylit = useStyles();
  const lomaketiedot = useRef({});
  const [virheilmoitus, setVirheilmoitus] = useState({});
  const history = useHistory();

  const formHandler = (e) => {
    e.preventDefault();

    let virheet = {};

    if (
      !lomaketiedot.current.etunimi ||
      lomaketiedot.current.etunimi.length < 2
    ) {
      virheet = {
        ...virheet,
        etunimi: "Etunimen tulee olla vähintään kaksi merkkiä pitkä",
      };
    }
    if (
      !lomaketiedot.current.sukunimi ||
      lomaketiedot.current.sukunimi.length < 2
    ) {
      virheet = {
        ...virheet,
        sukunimi: "Sukunimen tulee olla vähintään kaksi merkkiä pitkä",
      };
    }
    if (!lomaketiedot.current.puhelinnumero && !lomaketiedot.current.email) {
      virheet = {
        ...virheet,
        yhteystieto: "Täytä puhelinnumero tai sähköposti!",
      };
    }
    if (!lomaketiedot.current.ikasarja) {
      virheet = { ...virheet, ikasarja: "Valitse ikäsarja!" };
    }
    if (Object.entries(virheet).length > 0) {
      setVirheilmoitus({ ...virheet });
    } else {
      setVirheilmoitus({});
      history.push("/kiitos", lomaketiedot);
    }
  };

  const inputHandler = (e) => {
    lomaketiedot.current[e.target.name] = e.target.value;
  };
  return (
    <Container>
      <form onSubmit={formHandler}>
        <Typography
          variant="h4"
          className={tyylit.otsikko}
          align="center"
          paragraph={true}
        >
          Ilmottautuminen
        </Typography>
        <TextField
          className={tyylit.lomakeKentta}
          name="etunimi"
          variant="outlined"
          label="Etunimi"
          placeholder="Etunimi"
          error={!!virheilmoitus.etunimi}
          helperText={virheilmoitus.etunimi}
          fullWidth={true}
          onChange={inputHandler}
        />
        <TextField
          className={tyylit.lomakeKentta}
          name="sukunimi"
          variant="outlined"
          label="Sukunimi"
          placeholder="Sukunimi"
          error={!!virheilmoitus.sukunimi}
          helperText={virheilmoitus.sukunimi}
          fullWidth={true}
          onChange={inputHandler}
        />
        <TextField
          className={tyylit.lomakeKentta}
          name="asuinpaikkakunta"
          variant="outlined"
          label="Asuinpaikkakunta"
          placeholder="Paikkakunta"
          fullWidth={true}
          onChange={inputHandler}
        />
        <TextField
          className={tyylit.lomakeKentta}
          name="puhelinnumero"
          variant="outlined"
          label="Puhelinnumero"
          placeholder="0401234567"
          fullWidth={true}
          error={!!virheilmoitus.yhteystieto}
          helperText={virheilmoitus.yhteystieto}
          onChange={inputHandler}
        />
        <TextField
          className={tyylit.lomakeKentta}
          name="email"
          variant="outlined"
          label="Sähköposti"
          placeholder="pilkkija@pilkki.fi"
          fullWidth={true}
          error={!!virheilmoitus.yhteystieto}
          helperText={virheilmoitus.yhteystieto}
          onChange={inputHandler}
        />
        <FormControl className={tyylit.lomakeKentta} onChange={inputHandler}>
          <FormLabel>Ikäsarja</FormLabel>
          <RadioGroup row>
            <FormControlLabel
              value="Alle 15-vuotias"
              label="alle 15"
              control={
                <Radio
                  name="ikasarja"
                  onChange={inputHandler}
                  color="primary"
                />
              }
            />
            <FormControlLabel
              value="15 - 19-vuotias"
              label="15 - 19"
              control={
                <Radio
                  name="ikasarja"
                  onChange={inputHandler}
                  color="primary"
                />
              }
            />
            <FormControlLabel
              value="20 - 39-vuotias"
              label="20 - 39"
              control={
                <Radio
                  name="ikasarja"
                  onChange={inputHandler}
                  color="primary"
                />
              }
            />
            <FormControlLabel
              value="40 - 59-vuotias"
              label="40 - 59"
              control={
                <Radio
                  name="ikasarja"
                  onChange={inputHandler}
                  color="primary"
                />
              }
            />
            <FormControlLabel
              value="60 - 69-vuotias"
              label="60 - 69"
              control={
                <Radio
                  name="ikasarja"
                  onChange={inputHandler}
                  color="primary"
                />
              }
            />
            <FormControlLabel
              value="70 - 79-vuotias"
              label="70 - 79"
              control={
                <Radio
                  name="ikasarja"
                  onChange={inputHandler}
                  color="primary"
                />
              }
            />
            <FormControlLabel
              value="yli 80-vuotias"
              label="yli 80"
              control={
                <Radio
                  name="ikasarja"
                  onChange={inputHandler}
                  color="primary"
                />
              }
            />
          </RadioGroup>
          <FormHelperText error={!!virheilmoitus.ikasarja}>
            {virheilmoitus.ikasarja}
          </FormHelperText>
        </FormControl>
        <Button
          type="submit"
          fullWidth={true}
          variant="contained"
          color="primary"
        >
          Lähetä ilmoittautuminen
        </Button>
      </form>
    </Container>
  );
}
