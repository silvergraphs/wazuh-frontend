import * as React from 'react';
import {DataGrid, GridRowsProp, GridColumns} from '@mui/x-data-grid';
import QuickSearchToolbar from '../../Atoms/QuickSearchToolbar';
import { useHistory } from 'react-router-dom';

function escapeRegExp(value: string) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

interface IProps {
  rows: GridRowsProp;
  columns: GridColumns;
  redirectionEntity: string;
}

const FilterGrid: React.FC<IProps> = ({rows, columns, redirectionEntity}) => {
  const [searchText, setSearchText] = React.useState('');
  const [localRows, setLocalLocalRows] = React.useState(rows);
  const history = useHistory();

  const requestSearch = (searchValue: string) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = rows.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setLocalLocalRows(filteredRows);
  };

  React.useEffect(() => {
    setLocalLocalRows(rows);
  }, [rows]);

  return (
    <div style={{height: '70vh', width: '100%'}}>
      <DataGrid
        components={{Toolbar: QuickSearchToolbar}}
        rows={localRows}
        columns={columns}
        autoPageSize={true}
        disableSelectionOnClick={true}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event: any) => requestSearch(event.target.value),
            clearSearch: () => requestSearch(''),
          },
        }}
        onCellClick={(event) => history.push(`${redirectionEntity}/${event.row.id}`)}
      />
    </div>
  );
}

export default FilterGrid;