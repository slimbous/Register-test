export const styles = theme => {
  return {
    container: {
      border: "2px solid",
      padding: "10px",
      margin: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },

    root: {
      display: "flex",
      justifyContent: "center"
    },
    snackbar: {
      background: theme.palette.primary.main
    },
    content: {
      display: "flex",
      flexDirection: "column"
    }
  };
};
