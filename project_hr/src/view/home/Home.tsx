import {
  List,
  ListSubheader,
  Button,
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { Routes } from 'routing/Routes';
import {
  QUERY_KEY_GET_PUBLIC_JOBS,
  getPublicJobs,
} from 'api/getPublicJobs/getPublicJobs';
import { jobsToListAdapter } from 'api/getPublicJobs/jobsToListAdapter';
import { DataStatusHandler } from 'components/DataStatusHandler/DataStatusHandler';
import { LanguageMenu } from 'layouts/DashboardLayout/LangugaeMenu/LanguageMenu';
import { Header } from 'components/Header/Header';
import { sxFlexBox } from 'view/signin/theme';

import { JobsList } from './JobsList/JobsList';

export const Home = () => {
  const results = useQuery([QUERY_KEY_GET_PUBLIC_JOBS], getPublicJobs);
  const { t } = useTranslation();

  return (
    <>
      <Header title="Home" />
      <Container component="main" maxWidth="xs" sx={sxFlexBox}>
        <Box sx={{ mr: 'auto' }}>
          <LanguageMenu />
        </Box>
        <Card sx={{ mt: 2 }}>
          <CardMedia
            component="img"
            height="194"
            image="https://eventis.pl/uploads/article/item_41/dzial-hr.webp"
            alt="Paella dish"
          />
        </Card>
        <Box>
          <Button
            component={Link}
            variant="contained"
            color="secondary"
            to={Routes.signin}
            sx={{ mr: 2 }}
          >
            <Typography variant="h6">{t('home.signin')}</Typography>
          </Button>
          <Button
            component={Link}
            variant="contained"
            color="secondary"
            to={Routes.signup}
            sx={{ my: 6 }}
          >
            <Typography variant="h6">{t('home.signup')}</Typography>
          </Button>
        </Box>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              <Typography>{t('home.footer_text')}</Typography>
            </ListSubheader>
          }
        >
          <DataStatusHandler {...results}>
            {(data) => <JobsList list={jobsToListAdapter(data) ?? []} />}
          </DataStatusHandler>
        </List>
      </Container>
    </>
  );
};
