import PropTypes from 'prop-types';
// import { MuiThemeProvider, createMuiTheme } from '@mui/styles';

// material-ui
import { Box, Button, Card, Grid, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// ===============================|| UI COLOR ||=============================== //

const UIColor = () => (
    <MainCard title="Radio Buttons">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <SubCard title="Basic">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Vertical</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Inline with disabled option</FormLabel>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                            <FormControlLabel value="disabled" disabled control={<Radio />} label="other" />
                        </RadioGroup>
                    </FormControl>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default UIColor;
