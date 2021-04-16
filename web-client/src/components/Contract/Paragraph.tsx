import { Box, makeStyles, RootRef, Typography } from '@material-ui/core';
import { ParagraphStore, useUIStore } from '@store';
import debounce from 'lodash/debounce';
import { observer } from 'mobx-react';
import React from 'react';
import { SCROLLING_DELAY_IN_MS } from './Contract';

interface IStyles {
  bold: boolean;
  underline: boolean;
  italic: boolean;
  strike: boolean;
  isThisSelected: boolean;
}

const useStyles = makeStyles(({ variables, spacing }) => ({
  root: {
    transform: 'translate(0, 0, 0)',
    padding: spacing(2, 1),
    cursor: 'pointer',
    borderRadius: variables.borders.content,
    transition: `border ${variables.effectsSpeed.fast}`,
    border: (props: IStyles) =>
      props.isThisSelected ? `1px solid ${variables.colors.borderDark}` : `1px solid transparent`,
  },
  view: {
    fontStyle: (props: IStyles) => (props.italic ? 'italic' : 'normal'),
    fontWeight: (props: IStyles) => (props.bold ? variables.fonts.weight.bold : variables.fonts.weight.regular),
    textDecoration: (props: IStyles) => {
      if (props.underline) {
        return 'underline';
      } else if (props.strike) {
        return 'line-through';
      }
    },
  },
}));

interface IProps {
  paragraph: ParagraphStore;
  selectParagraph: () => void;
  paragraphKey: string;
  selectedParagraphKey: string;
}

export const Paragraph: React.FC<IProps> = observer(
  ({ paragraph, paragraphKey, selectedParagraphKey, selectParagraph }) => {
    const {
      styles: { bold, underline, italic, strike },
      sentences,
    } = paragraph;
    const isThisSelected = selectedParagraphKey === paragraphKey;
    const classes = useStyles({ bold, underline, italic, strike, isThisSelected });

    const currentElementRef = React.useRef();
    const uiStore = useUIStore();

    React.useEffect(() => {
      if (uiStore && currentElementRef) {
        uiStore.addParagraphRef(currentElementRef);
      }
    }, [uiStore, currentElementRef]);

    const handleClick = () => {
      selectParagraph();

      const insightRef = uiStore.insightsRefs[paragraphKey] as any;

      const delayedAction = debounce(() => {
        insightRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }, SCROLLING_DELAY_IN_MS);

      delayedAction();
    };

    return (
      <RootRef rootRef={currentElementRef}>
        <Box className={classes.root} onClick={handleClick}>
          <Typography variant='body1' className={classes.view}>
            lol
          </Typography>
        </Box>
      </RootRef>
    );
  },
);
