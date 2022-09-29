import { Steps } from 'antd';
import { FlexContainer, Typography } from 'ui';
import { TActionTableOptions } from './types';

const { Step } = Steps;

export const StepsView = ({ menu, onChange, current }: TActionTableOptions) => {
  return (
    <FlexContainer direction="row">
      <Steps onChange={onChange} size="small" current={current}>
        {menu.map((x, i) => (
          <Step
            key={`steps${i}`}
            title={<Typography variant="subtitle">{x.title}</Typography>}
            description={
              <Typography variant="subtitle">{x.description || ''}</Typography>
            }
          />
        ))}
      </Steps>
    </FlexContainer>
  );
};
