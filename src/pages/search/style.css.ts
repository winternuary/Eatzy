import { style } from "@vanilla-extract/css";

export const searchResults = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
  gap: "1rem",
  padding: "1rem",
});

export const recipeItemStyle = style({
  textAlign: "center",
  cursor: "pointer",
  background: "#f9f9f9",
  padding: "1rem",
  borderRadius: "8px",
  transition: "background 0.3s",
  ":hover": {
    background: "#f1f1f1",
  },
});

export const image = style({
  borderRadius: "8px",
});
