import React from 'react';
import Header from './Header';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
} from "@progress/kendo-react-charts";

import { Grid, GridColumn } from "@progress/kendo-react-grid";

const products= [{"Full Name":'custname',1:2,1:2,1:2,1:2,1:2,1:2,1:2,1:2},{"Full Name":'custname',1:2},]
const data = [1, 2, 3, 35, 8, 1, 8, 9, 5, 6, 1, 2, 3, 35, 8, 1, 8, 9, 5, 6, 1, 2, 3, 35, 8, 1, 8, 9, 5, 6];
const data1 = [1, 8, 13, 15, 8, 1, 1, 1, 2, 4, 12, 56, 43, 2, 1, 2, 8, 9, 3, 2, 1, 4, 5, 6, 7, 3, 1, 2, 0, 3];
const seriesLabels = {
    visible: true,
    padding: 1,
    font: "bold 16px Arial, sans-serif",
    color: "#054",
};





const Charts = () => {
    return (
        <div>
            <Header />

            <>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm">
                            <Chart




                            >


                                <ChartSeries>
                                    <ChartSeriesItem data={data} name="Line" type="bar" color="black" />
                                    <ChartSeriesItem data={data1} name="Line" type="bar" />
                                </ChartSeries>
                            </Chart>
                        </div>
                        <div class="col-sm">
                            <Chart>
                                <ChartSeries>
                                    <ChartSeriesItem data={data} name="Line" type="column" />
                                    <ChartSeriesItem data={data1} name="Line" type="line" color="black" labels={seriesLabels} />
                                </ChartSeries>
                            </Chart>
                        </div>
                        <div class="col-sm">


                            <Grid
                                style={{
                                    height: "400px",
                                }}
                                data={products}
                            >
                                <GridColumn field="Full Name" title="ID" width="40px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="1" width="20px" />
                                <GridColumn field="1" title="31" width="20px" />

                            </Grid>


                        </div>
                    </div>
                </div>

            </>
        </div >
    );
}

export default Charts;

