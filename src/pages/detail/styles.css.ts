import { style } from "@vanilla-extract/css";

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 20px",
  margin: "0",
});

export const backButton = style({
  padding: "8px 16px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: "5px",
  margin: "0",
  ":hover": {
    backgroundColor: "#005bb5",
  },
});

export const Logo = style({
  fontFamily: "DOSIyagiMedium",
  fontSize: "2rem",
  margin: "0",
});

export const detailBox = style({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
});

export const image = style({
  borderRadius: "15px",
  marginBottom: "10px",
});

export const nameBox = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "5px 0 0 0",
});

export const favoriteContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0",
});

export const favoriteIcon = style({
  fontSize: "28px",
  cursor: "pointer",
  transition: "color 0.3s ease",
  ":hover": {
    color: "#ff6347",
  },
});

export const name = style({
  fontFamily: "Pretendard-Regular",
  display: "flex",
  fontSize: "28px",

  fontWeight: "800",
});

export const ingredientText = style({
  fontFamily: "Pretendard-Regular",
  display: "flex",
  fontSize: "20px",
  fontWeight: "700",
  margin: "15px 0 0 0",
});

export const ingredient = style({
  fontFamily: "Pretendard-Regular",
  display: "flex",
  fontSize: "18px",
  fontWeight: "500",
  margin: "10px 0 0 0",
});

export const recipe = style({
  fontFamily: "Pretendard-Regular",
  display: "flex",
  fontSize: "20px",
  fontWeight: "700",
  margin: "15px 0 0 0",
});

export const way = style({
  fontFamily: "Pretendard-Regular",
  display: "flex",
  fontSize: "18px",
  fontWeight: "500",
  margin: "10px 0 0 0",
});
