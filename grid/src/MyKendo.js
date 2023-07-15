import React from 'react'
import '@progress/kendo-theme-default/dist/all.css';
import { Calendar } from '@progress/kendo-react-dateinputs'
import { process } from '@progress/kendo-data-query';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './products.json';

function MyKendo() {
    return (  


<Grid
  data={products}>
  <GridColumn field="ProductName" />
  <GridColumn field="UnitPrice" />
  <GridColumn field="UnitsInStock" />
  <GridColumn field="Discontinued" />
</Grid>

    );
}

export default MyKendo;