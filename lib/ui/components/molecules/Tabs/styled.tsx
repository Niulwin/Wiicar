import { Tabs } from 'antd';
import styled from 'styled-components';

export const AntTabs = styled(Tabs)`
  width: 100%;

  & .ant-tabs-nav {
    box-shadow: -1px 2px 6px 0px #0000001f;
    margin: 0;
  }
  & .ant-tabs-nav-list {
    width: 100%;
  }
  & .ant-tabs-tab {
    width: 50%;
    font-size: 16px;
    font-weight: 600;
    justify-content: center !important;
    color: ${({ theme }) => theme.colors.text.textPrimary} !important;
  }
  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${({ theme }) => theme.colors.primary.main} !important;
    font-weight: 500;
  }
  & .ant-tabs-ink-bar {
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary.main} !important;
    pointer-events: none;
  }
`;
