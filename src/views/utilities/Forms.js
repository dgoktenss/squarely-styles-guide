import PropTypes from 'prop-types';
// import { MuiThemeProvider, createMuiTheme } from '@mui/styles';

// material-ui
import { Box, Button, Card, Grid, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import SimpleForm from './simple-form';

const UIColor = () => (
    <MainCard title="Forms">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <SubCard title="Simple Form">
                    <Grid container spacing={gridSpacing}>
                        <Grid item>
                            <SimpleForm />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default UIColor;
