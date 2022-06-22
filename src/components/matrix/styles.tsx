export const styles = {
  boxContainer: {
    flexGrow: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 8,
    paddingBottom: 10,
    minHeight: 210,
  },
  gridContainer: {
    width: { lg: "64%", md: "80%", xs: "90%" },
  },
  gridItem: {
    border: "4px solid #282c34",
    borderRadius: 2,
  },
  squareBox: {
    width: "100%",
    minHeight: 120,
    height: "100%",
  },
  taskContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    textAlign: "left",
    p: 2,
    mr: 2,
    mb: 2,
    transition: "0.2s",
    borderStyle: "solid",
    borderRadius: 2,
    "&:hover": {
      boxShadow: "0 0 5px white",
      transform: "scale(1.01)",
      cursor: "grab",
    },
  },
  taskTitleBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: 800,
    textTransform: "uppercase",
  },
  taskCategory: {
    textTransform: "uppercase",
  },
  taskComment: {
    opacity: 0.8,
  },
  taskBottomBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mt: 2,
  }
};
