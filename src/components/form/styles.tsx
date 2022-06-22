export const styles = {
  addButton: {
    width: { lg: "64%", md: "80%", xs: "90%" },
  },
  addIcon: {
    mr: 2,
  },
  modalBox: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  formBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    width: "80%",
  },
  switchBox: {
    display: "flex",
    alignItems: "center",
    p: 0.5,
  },
  switchText: {
    ml: 1,
    color: "white",
  },
  textField: {
    m: 1,
  },
  submitButton: {
    mt: 4,
    mb: 2,
    width: "40%",
  },
};
