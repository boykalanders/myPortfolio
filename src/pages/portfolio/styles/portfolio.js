import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  heading: {
    color: 'tomato',
    paddingTop: '1.5rem',
    textTransform: 'uppercase',
  },
  mainContainer: {
    height: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '3rem auto',
    border: 'none',
  },

  projectName: {
    color: 'tomato',
  },
  projectDescription: {
    color: 'rgb(132 29 2 / 1)',
    textAlign: 'justify',
  },
  button: {
    backgroundColor: 'rgb(218 218 218)',
  },
  chip: {
    margin: '0.5rem 0.5rem 0 0',
  },
}));
