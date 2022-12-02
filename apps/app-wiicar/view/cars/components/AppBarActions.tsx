import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTranslate } from 'core';
import {
  Button,
  Chip,
  FlexContainer,
  Popover,
  SelectField,
  TextField,
  Typography,
  useTheme
} from 'ui';
import { TPaginationParams } from '../hooks';
import { AppBaContainer } from './styled';

export interface AppBarActionsProps extends TPaginationParams {
  handlePaginationParams: (args: TPaginationParams) => void;
  filter?: string;
  handleFilter: (text: string) => void;
  getCars: () => void;
}
export const AppBarActions = ({
  limit,
  offset,
  totalCount,
  filter,
  getCars,
  handleFilter,
  handlePaginationParams
}: AppBarActionsProps) => {
  const translate = useTranslate();
  const { theme } = useTheme();

  return (
    <AppBaContainer>
      <TextField
        name="filter"
        placeholder={translate('cars.table.input_search_placeholder')}
        iconRight={{ name: 'search' }}
        style={{ marginRight: '20px' }}
        value={filter}
        onChange={(ev) => handleFilter(ev.target.value || '')}
      />
      <FlexContainer
        padding="0"
        align="center"
        justify="center"
        direction="row"
        className="pagination"
      >
        <Button variant="outlined" background="border" size="large">
          <Chip
            typographyProp={{
              variant: 'caption'
            }}
            title={translate('cars.table.result')}
            variant="contained"
            color="primary"
            size="large"
          />
          <SelectField
            width="70px"
            name="limit"
            value={limit}
            onChange={(ev) =>
              handlePaginationParams({
                offset,
                totalCount,
                limit: Number(ev.target.value)
              })
            }
            options={[
              { label: '10', value: 10 },
              { label: '25', value: 25 },
              { label: '50', value: 50 }
            ]}
          />
        </Button>
        <KeyboardArrowLeftIcon
          style={{
            color:
              offset <= 1
                ? theme?.colors.text.disabled
                : theme?.colors.text.textPrimary
          }}
          fontSize="medium"
          onClick={() =>
            offset > 1 &&
            handlePaginationParams({
              limit,
              offset: Number(offset - 1),
              totalCount
            })
          }
        />
        <TextField
          name="range"
          value={offset}
          className="pagination-offset"
          onChange={(ev) =>
            handlePaginationParams({
              limit,
              offset: Number(ev.target.value),
              totalCount
            })
          }
          width="80px"
          inputProps={{
            style: { textAlign: 'center' }
          }}
        />
        <Typography variant="body1" style={{ whiteSpace: 'nowrap' }}>
          {translate('cars.of')} &nbsp; {totalCount / limit}
        </Typography>
        <KeyboardArrowRightIcon
          className="pagination-offset-right-icon"
          style={{
            color:
              offset >= totalCount / limit
                ? theme?.colors.text.disabled
                : theme?.colors.text.textPrimary
          }}
          fontSize="medium"
          onClick={() =>
            offset < totalCount / limit &&
            handlePaginationParams({
              limit,
              offset: Number(offset + 1),
              totalCount
            })
          }
        />
      </FlexContainer>
      <Popover
        title={translate('cars.actions.self')}
        children={
          <FlexContainer align="flex-start" padding="0">
            <Button
              title={translate('cars.actions.store')}
              variant="text"
              size="fullWidth"
              style={{ justifyContent: 'flex-start', marginBottom: 0 }}
            />
            <Button
              title={translate('cars.actions.bulk_upload')}
              variant="text"
              size="fullWidth"
              onClick={() => getCars()}
              style={{ justifyContent: 'flex-start', marginBottom: 0 }}
            />
            <Button
              title={translate('cars.actions.download_excel')}
              variant="text"
              size="fullWidth"
              style={{ justifyContent: 'flex-start', marginBottom: 0 }}
            />
            <Button
              title={translate('cars.actions.new_register')}
              variant="text"
              size="fullWidth"
              style={{ justifyContent: 'flex-start', marginBottom: 0 }}
            />
            <Button
              title={translate('cars.actions.delete')}
              variant="text"
              size="fullWidth"
              typographyProps={{
                color: 'primary'
              }}
              style={{ justifyContent: 'flex-start', marginBottom: 0 }}
            />
          </FlexContainer>
        }
      />
    </AppBaContainer>
  );
};
