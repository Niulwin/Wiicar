import { Modal as ModalContainer } from 'antd';
import { useTranslate } from 'core/i18n/hooks/useTranslate';
import { useTheme } from '../../../theme';
import { Button, FlexContainer } from '../../atoms';
import { TModalProps } from './types';

export const Modal = ({
  title,
  footer,
  loading,
  children,
  isVisible,
  onAccept,
  onCancel
}: TModalProps) => {
  const { theme } = useTheme();

  return (
    <ModalContainer
      footer={false}
      style={{ padding: 0, background: theme?.colors.background.main }}
      title={title}
      visible={isVisible}
      bodyStyle={{ padding: 0, background: theme?.colors.background.main }}
      onCancel={onCancel}
    >
      <FlexContainer padding="24px 10px 0 10px">{children}</FlexContainer>
      {footer && (
        <ModalFooter
          loading={loading}
          onCancel={onCancel}
          onAccept={onAccept}
        />
      )}
    </ModalContainer>
  );
};

export const ModalFooter = ({
  onCancel,
  onAccept,
  loading
}: Pick<TModalProps, 'onAccept' | 'onCancel' | 'loading'>) => {
  const translate = useTranslate();

  return (
    <FlexContainer
      direction="row"
      justify="flex-end"
      padding="30px 10px 10px 10px"
    >
      <Button
        title={translate('global.cancel')}
        onClick={onCancel}
        size="normal"
        background="error"
        color="light"
        loading={loading}
      />
      <Button
        title={translate('global.accept')}
        onClick={onAccept}
        size="normal"
        background="secondary"
        color="light"
        loading={loading}
        type="submit"
      />
    </FlexContainer>
  );
};
