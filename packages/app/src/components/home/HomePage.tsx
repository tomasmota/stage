import { Content, Header, Page } from '@backstage/core-components';
import {
  ClockConfig,
  ComponentAccordion,
  ComponentTab,
  ComponentTabs,
  HeaderWorldClock,
  HomePageRandomJoke,
  HomePageStarredEntities,
  WelcomeTitle,
} from '@backstage/plugin-home';
import { HomePageSearchBar } from '@backstage/plugin-search';
import { Grid } from '@material-ui/core';
import React from 'react';

const clockConfigs: ClockConfig[] = [
  {
    label: 'NYC',
    timeZone: 'America/New_York',
  },
  {
    label: 'UTC',
    timeZone: 'UTC',
  },
  {
    label: 'STO',
    timeZone: 'Europe/Stockholm',
  },
  {
    label: 'TYO',
    timeZone: 'Asia/Tokyo',
  },
];

const timeFormat: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};
export const HomePage = () => (
  <Page themeId="home">
    <Header title={<WelcomeTitle />} pageTitleOverride="Home">
      <HeaderWorldClock
        clockConfigs={clockConfigs}
        customTimeFormat={timeFormat}
      />
    </Header>
    <Content>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <HomePageSearchBar />
        </Grid>
        <Grid item xs={12} md={4}>
          <HomePageRandomJoke />
        </Grid>
        <Grid item xs={12} md={4}>
          <HomePageRandomJoke
            defaultCategory="any"
            Renderer={ComponentAccordion}
          />
          <HomePageRandomJoke
            title="Another Random Joke"
            Renderer={ComponentAccordion}
          />
          <HomePageRandomJoke
            title="One More Random Joke"
            defaultCategory="programming"
            Renderer={ComponentAccordion}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ComponentTabs
            title="Random Jokes"
            tabs={[
              {
                label: 'Programming',
                Component: () => (
                  <HomePageRandomJoke
                    defaultCategory="programming"
                    Renderer={ComponentTab}
                  />
                ),
              },
              {
                label: 'Any',
                Component: () => (
                  <HomePageRandomJoke
                    defaultCategory="any"
                    Renderer={ComponentTab}
                  />
                ),
              },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <HomePageStarredEntities />
        </Grid>
        <Grid item xs={12} md={4}>
          <HomePageStarredEntities />
        </Grid>
      </Grid>
    </Content>
  </Page>
);
