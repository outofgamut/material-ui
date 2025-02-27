import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const customerIconsData = [
  { image: '/static/branding/companies/coursera.svg', width: 102, height: 16, alt: 'Coursera' },
  { image: '/static/branding/companies/amazon.svg', width: 92, height: 28, alt: 'Amazon' },
  { image: '/static/branding/companies/nasa.svg', width: 64, height: 53, alt: 'NASA' },
  { image: '/static/branding/companies/netflix.svg', width: 88, height: 24, alt: 'Netflix' },
  { image: '/static/branding/companies/unity.svg', width: 110, height: 40, alt: 'Unity' },
  {
    image: '/static/branding/companies/shutterstock.svg',
    width: 138,
    height: 21,
    alt: 'Shutterstock',
  },
];

export default function BrandingCustomerIcons() {
  return (
    <Container>
      <Grid container sx={{ mt: { xs: 8, sm: 11, lg: 15 }, alignItems: 'center' }}>
        {customerIconsData.map((customer) => (
          <Grid
            item
            container
            xs={6}
            sm={4}
            lg={2}
            key={customer.image}
            sx={{ justifyContent: 'center', my: { xs: 4, lg: 0 } }}
          >
            <img
              loading="lazy"
              width={customer.width}
              height={customer.height}
              src={customer.image}
              alt={customer.alt}
            />
          </Grid>
        ))}
      </Grid>
      <Typography
        color="text.secondary"
        sx={{ mt: { sm: 3, lg: 7 }, mb: { xs: 10, sm: 10, lg: 15 }, maxWidth: 400, mx: 'auto' }}
      >
        From startups to Fortune 500s, the world&apos;s best product teams use Material-UI.
      </Typography>
    </Container>
  );
}
