import { Steps } from 'antd';
import { FlexContainer, Typography } from 'ui';
import { TActionTableOptions } from './types';

const { Step } = Steps;

export const StepsView = ({ menu }: TActionTableOptions) => {
  return (
    <FlexContainer direction="row">
      <Steps size="small" current={0}>
        {menu.map((x: any, i: number) => (
          <Step
            key={i}
            title={<Typography variant="subtitle">{x?.title}</Typography>}
            description={
              <Typography variant="subtitle">{x?.description}</Typography>
            }
          />
        ))}
      </Steps>
    </FlexContainer>
  );
};
