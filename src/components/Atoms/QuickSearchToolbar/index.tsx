import {Box, IconButton, TextField, Theme} from "@mui/material";
import {GridToolbarFilterButton} from "@mui/x-data-grid";
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';

export default function QuickSearchToolbar(props: { value: unknown; onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined; clearSearch: React.MouseEventHandler<HTMLButtonElement> | undefined; }) {
  return (
    <Box sx={{
      padding: 1,
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }}>
      <div>
        <GridToolbarFilterButton/>
      </div>
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        sx={{
          margin: (theme: Theme) => theme.spacing(1, 0.5, 1.5),
          '& .MuiSvgIcon-root': {
            marginRight: (theme: Theme) => theme.spacing(0.5),
          },
          '& .MuiInput-underline:before': {
            borderBottom: `1px solid ${(theme: Theme) => theme.palette.divider}`,
          },
        }}
        InputProps={{
          startAdornment: <SearchIcon fontSize="small"/>,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{visibility: props.value ? 'visible' : 'hidden'}}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small"/>
            </IconButton>
          ),
        }}
      />
    </Box>
  );
}

QuickSearchToolbar.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};