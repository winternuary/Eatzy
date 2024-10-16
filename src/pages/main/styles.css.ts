import { style } from "@vanilla-extract/css";

export const recipeListStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",
  padding: "20px",
  overflowY: "scroll",
});

export const recipeItemStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  cursor: "pointer",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

export const Logo = style({
  fontFamily: "DOSIyagiMedium",
  fontSize: "2rem",
  padding: "16px 0 0 20px",
  marginTop: "15px",
});

export const inputContainerStyle = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "22rem",
  height: "2.5rem",
  margin: "16px 0 0 20px",
});

export const inputStyle = style({
  fontFamily: "DOSIyagiMedium",
  width: "100%",
  height: "100%",
  padding: "10px 40px 10px 15px",
  fontSize: "16px",
  borderRadius: "8px",
  backgroundColor: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

export const searchIconStyle = style({
  position: "absolute",
  right: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  width: "20px",
  height: "20px",
});

export const popularBox = style({
  marginTop: "10px",
});

export const popularName = style({
  display: "flex",
  fontFamily: "DOSIyagiMedium",
  fontSize: "20px",
  margin: "16px 0 0 20px",
  fontWeight: "500",
});

export const category = style({
  fontFamily: "DOSIyagiMedium",
  fontSize: "16px",
  margin: "10px 0 0 20px",
  fontWeight: "600",
});

export const image = style({
  borderRadius: "5px",
  marginBottom: "10px",
});

export const recipeName = style({
  fontFamily: "DOSIyagiMedium",
  display: "flex",
  justifyContent: "start",
  fontSize: "18px",
  fontWeight: "500",
});
