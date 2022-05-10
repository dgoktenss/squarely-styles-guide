import PropTypes from 'prop-types';
// import { MuiThemeProvider, createMuiTheme } from '@mui/styles';

// material-ui
import { Box, Button, Card, Grid, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import SimpleTable from './page-table';

const UIColor = () => (
    <MainCard title="Tables">
        <SimpleTable />
    </MainCard>
);

export default UIColor;
