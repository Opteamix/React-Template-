import styled from "styled-components";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";

const GridWrapper = styled.div<{ height?: string }>`
  display: flex;
  flex: 1;
  height: ${({ height }) => height || "100%"};
`;

interface OptxGridProps extends DataGridProps {
  height?: string;
  pageSizeOptions?: number[];
  checkboxSelection?: boolean;
  pageNumber?: number;
  pageSize?: number;
}

const defaultPageSizeOptions = [25, 50, 100];

const OptxGrid = ({
  height,
  rows,
  columns,
  pageSizeOptions,
  pageNumber = 0,
  pageSize = 5,
  checkboxSelection = true,
  disableColumnSorting = false,
  disableColumnFilter = false,
  disableColumnMenu = false,
  hideFooterPagination = false,
  ...props
}: OptxGridProps) => {
  return (
    <GridWrapper height={height}>
      <DataGrid
        {...props}
        rows={rows || []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: pageNumber, pageSize: pageSize },
          },
        }}
        pageSizeOptions={pageSizeOptions || defaultPageSizeOptions}
        checkboxSelection={checkboxSelection}
        disableColumnSorting={disableColumnSorting}
        disableColumnFilter={disableColumnFilter}
        disableColumnMenu={disableColumnMenu}
        hideFooterPagination={hideFooterPagination}
      />
    </GridWrapper>
  );
};

export default OptxGrid;
