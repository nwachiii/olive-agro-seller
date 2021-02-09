//
import { Grid, Card, CardContent, Button } from '@material-ui/core';
import React from 'react';

import stock1 from '../../assets/images/stock-photos/stock-1.jpg';

function ShowProducts({ products }) {
  return (
    <Grid container spacing={4}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4}>
          <Card className="mb-4">
            <img alt={product.title} className="card-img-top" src={stock1} />
            <CardContent className="p-3">
              <h5 className="card-title font-weight-bold font-size-lg">
                {product.title}
              </h5>
              <p className="card-text">{product.category}</p>
              <div className="display-flex justify-content-space-between">
                <p className="card-text">
                  PRICE: <strong>{product.price}</strong>
                </p>
                <Button color="secondary" size="large" variant="contained">
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ShowProducts;
