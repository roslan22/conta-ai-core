import { IInsightDTO } from '@api';
import { Box, fade, makeStyles, Paper, RootRef, Typography } from '@material-ui/core';
import { useUIStore } from '@store';
import React from 'react';
import { useTranslation } from 'react-i18next';
import debounce from 'lodash/debounce';
import { SCROLLING_DELAY_IN_MS } from './Contract';

const useStyles = makeStyles(({ variables, spacing }) => ({
  root: {
    border: 'none',
    borderRadius: variables.borders.large,
    boxShadow: variables.shadows.insight,
    padding: spacing(2),
    backgroundColor: variables.colors.white,
    margin: spacing(4),
    cursor: 'pointer',
  },
  advice: {
    margin: spacing(1, 0),
  },
  parameters: {
    padding: spacing(1, 2),
    borderBottom: `1px solid ${variables.colors.borderDark}`,
  },
  safe: {
    backgroundColor: fade(variables.colors.right, 0.4),
  },
  medium: {
    backgroundColor: fade(variables.colors.right, 0.2),
  },
  problem: {
    backgroundColor: fade(variables.colors.wrong, 0.2),
  },
  match: {
    padding: spacing(1, 2),
  },
  insight: {
    marginTop: spacing(2),
    border: `1px solid ${variables.colors.borderDark}`,
    borderRadius: variables.borders.content,
  },
  insights: {
    transform: 'translate(0, 0, 0)',
    overflow: 'hidden',
    transition: `max-height ${variables.effectsSpeed.medium}, opacity ${variables.effectsSpeed.medium}`,
    maxHeight: (props: { isThisSelected: boolean }) => (props.isThisSelected ? 1000 : 0),
    opacity: (props: { isThisSelected: boolean }) => (props.isThisSelected ? 1 : 0),
  },
}));

interface IProps {
  insights: IInsightDTO[];
  advice: string;
  paragraphKey: string;
  selectedParagraphKey: string;
  selectInsights: () => void;
}

export const Insights: React.FC<IProps> = ({
  insights,
  advice,
  paragraphKey,
  selectedParagraphKey,
  selectInsights,
}) => {
  const { t } = useTranslation();
  const isThisSelected = selectedParagraphKey === paragraphKey;
  const classes = useStyles({ isThisSelected });

  const currentElementRef = React.useRef();
  const uiStore = useUIStore();

  React.useEffect(() => {
    if (uiStore && currentElementRef) {
      uiStore.addInsightRef(currentElementRef);
    }
  }, [uiStore, currentElementRef]);

  const handleClick = () => {
    selectInsights();

    const paragraphRef = uiStore.paragraphsRefs[paragraphKey] as any;

    const delayedAction = debounce(() => {
      paragraphRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, SCROLLING_DELAY_IN_MS);

    delayedAction();
  };

  const levelOfProblem = (score: number) => {
    if (score > 0.6) return classes.safe;
    if (score > 0.3) return classes.medium;
    if (score > 0) return classes.problem;
  };

  return (
    <RootRef rootRef={currentElementRef}>
      <Paper className={classes.root} onClick={handleClick}>
        <Typography className={classes.advice} variant='body2'>
          {advice}
        </Typography>
        <Box className={classes.insights}>
          {insights.map((insight: IInsightDTO, index: number) => (
            <Box key={index} className={`${classes.insight} ${levelOfProblem(insight.score)}`}>
              <Box className={classes.parameters}>
                <Typography variant='body2'>
                  {`${t('interfaceLabels.score')} ${insight.score}`}{' '}
                  {insight.template && ` | ${t('interfaceLabels.template')}`}
                </Typography>
              </Box>
              <Box className={classes.match}>
                <Typography variant='body1'>{insight.match}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>
    </RootRef>
  );
};
