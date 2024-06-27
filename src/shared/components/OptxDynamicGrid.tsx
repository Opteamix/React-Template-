import reactElementToJSXString from "react-element-to-jsx-string";
import Grid from "@mui/material/Grid";

const OptxDynamicGrid = (rows: any, columns: any) => {
  const getGridItems = () => {
    const gridItems = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        gridItems.push(
          <Grid item xs={12 / columns}>
            {`Row${i + 1}, Col${j + 1}`}
          </Grid>
        );
      }
    }
    return gridItems;
  };

  const RenderGrid = () => (
    <Grid container spacing={2}>
      {getGridItems()}
    </Grid>
  );

  return reactElementToJSXString(RenderGrid());
};

export default OptxDynamicGrid;
