import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  backgroundContainer: {
    backgroundImage: `url(/kuvat/taustakuva.jpg)`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    overflow: "hidden",
    minHeight: "100vh",
  },
  mainContainer: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderLeft: "5px solid rgb(63,81,181)",
    borderRight: "5px solid rgb(63,81,181)",
    minHeight: "100vh",
    padding: 0,
    paddingTop: 84,
  },
});
export function OmaContainer(props) {
  const tyylit = useStyles();

  return (
    <Container maxWidth={false} className={tyylit.backgroundContainer}>
      <Container maxWidth="sm" className={tyylit.mainContainer}>
        {props.children}
      </Container>
    </Container>
  );
}
