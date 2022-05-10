import PropTypes from 'prop-types';
// import { MuiThemeProvider, createMuiTheme } from '@mui/styles';

// material-ui
import { Box, Button, Card, Grid, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// const redTheme = createMuiTheme({ palette: { primary: red } });

const ColorBox = ({ bgcolor, title, data, dark }) => (
    <>
        <Card sx={{ mb: 3 }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 4.5,
                    bgcolor,
                    color: dark ? 'grey.800' : '#ffffff'
                }}
            >
                {title && (
                    <Typography variant="subtitle1" color="inherit">
                        {title}
                    </Typography>
                )}
                {!title && <Box sx={{ p: 1.15 }} />}
            </Box>
        </Card>
        {data && (
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="subtitle2">{data.label}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
                        {data.color}
                    </Typography>
                </Grid>
            </Grid>
        )}
    </>
);

ColorBox.propTypes = {
    bgcolor: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.object.isRequired,
    dark: PropTypes.bool
};

// ===============================|| UI COLOR ||=============================== //

const UIColor = () => (
    <MainCard title="Buttons">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <SubCard title="Colored Buttons">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Button size="medium" style={{ backgroundColor: '#53BC7D' }} color="primary" variant="contained">
                                Primary
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Button size="medium" style={{ backgroundColor: '#202F4F' }} color="primary" variant="contained">
                                Secondary
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Button size="medium" style={{ backgroundColor: '#48639C' }} color="primary" variant="contained">
                                Info
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Button size="medium" style={{ backgroundColor: '#53BC7D' }} color="primary" variant="contained">
                                Success
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Button size="medium" style={{ backgroundColor: '#ECB871' }} color="primary" variant="contained">
                                Warning
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Button size="medium" style={{ backgroundColor: '#DE888C' }} color="primary" variant="contained">
                                Error
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Button size="medium" style={{ backgroundColor: '#666D73' }} color="primary" variant="contained">
                                Disabled
                            </Button>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="Soft Buttons">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Button size="medium" style={{ backgroundColor: '#21b6ae' }} color="primary" variant="contained">
                                Primary
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Button size="medium" style={{ backgroundColor: '#E9F6F7' }} color="primary" variant="contained">
                                Secondary
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Button size="medium" style={{ backgroundColor: '#9EAECF' }} color="primary" variant="contained">
                                Info
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Button size="medium" style={{ backgroundColor: '#BCE0C5' }} color="primary" variant="contained">
                                Success
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Button size="medium" style={{ backgroundColor: '#FFE7C7' }} color="primary" variant="contained">
                                Warning
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Button size="medium" style={{ backgroundColor: '#E9B4B4' }} color="primary" variant="contained">
                                Error
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Button size="medium" style={{ backgroundColor: '#C5CDD4' }} color="primary" variant="contained">
                                Disabled
                            </Button>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="Different Sizes and Shapes">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Button size="small" style={{ backgroundColor: '#48639C' }} color="primary" variant="contained">
                                Small
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Button size="medium" style={{ backgroundColor: '#48639C' }} color="primary" variant="contained">
                                Medium
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Button size="large" style={{ backgroundColor: '#48639C' }} color="primary" variant="contained">
                                Large
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Button size="small" color="primary" variant="text">
                                Text
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Button size="medium" color="primary" variant="text">
                                Text
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Button size="large" color="primary" variant="text">
                                Text
                            </Button>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default UIColor;
