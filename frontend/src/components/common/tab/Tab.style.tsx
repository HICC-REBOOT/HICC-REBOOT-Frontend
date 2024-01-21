import { CSSProperties } from 'react';
import styled from 'styled-components';
import theme from '@styles/theme';
import { Tabs, ThemeConfig } from 'antd';

export const StyledTabs = styled(Tabs)`
  .ant-tabs-centered {
    width: 100%;
  }

  .ant-tabs-nav-wrap {
    width: 100%;
  }

  .ant-tabs-nav-wrap::before {
    position: relative !important;
    width: 0.01rem !important;
  }
  .ant-tabs-nav-list {
    width: 100%;
  }
  .ant-tabs-tab {
    flex: 1;
    margin-left: 0 !important;
  }
  .ant-tabs-tab-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.typography.common.button1};
  }
`;

export const tabConfigStyle: ThemeConfig = {
  components: {
    Tabs: {
      itemActiveColor: theme.colors.white,
      itemHoverColor: theme.colors.white,
      itemSelectedColor: theme.colors.white,
      inkBarColor: theme.colors.point1,
      horizontalItemGutter: 0,
      horizontalMargin: '0 auto 6.4rem auto',
    },
  },
};

export const tabBarStyle: CSSProperties = {
  display: 'flex',
  width: '100%',
  height: '5.5rem',
  alignContent: 'center',
  backgroundColor: theme.colors.black,
  flexShrink: 0,
};
