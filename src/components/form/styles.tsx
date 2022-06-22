export const styles = {
  addButton: {
    width: { lg: "16%", md: "80%", xs: "90%" },
    mt:1
  },
  addIcon: {
    mr: 2,
  },
  modalBox: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { lg: "25%", md: "40%", xs: "80%" },
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    height: { lg: "56vh", md: "56vh", xs: "100vh" },
  },
  formBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left"
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
    width: "100%",
  },
};
