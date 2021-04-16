import { Box, makeStyles } from '@material-ui/core';
import { ContractStore, ParagraphStore, useParagraphsStore } from '@store';
import { observer } from 'mobx-react';
import React from 'react';
import { Insights } from './Insights';
import { Paragraph } from './Paragraph';

export const SCROLLING_DELAY_IN_MS = 400;

const useStyles = makeStyles(({ variables, spacing }) => ({
  mainContent: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    width: '100%',
    overflow: 'hidden',
  },
  text: {
    width: '60%',
    overflow: 'auto',
  },
  insight: {
    width: '39%',
    overflow: 'auto',
  },
}));

interface IProps {
  contract: ContractStore;
}

export const Contract: React.FC<IProps> = observer(function Contract({ contract }) {
  const classes = useStyles();
  const [selectedParagraphKey, setSelectedParagraphKey] = React.useState<string>(null);
  const paragraphsStore = useParagraphsStore();

  React.useEffect(() => {
    paragraphsStore.init(contract.uuid);
  }, []);

  return (
    <Box className={classes.mainContent}>
      <Box className={classes.text}>
        {paragraphsStore.paragraphs.map((paragraph: ParagraphStore) => (
          <>
            {paragraph.sentences.map((s) => (
              <Paragraph
                key={s.uuid}
                paragraph={s}
                selectParagraph={() => setSelectedParagraphKey(s.uuid)}
                paragraphKey={s.uuid}
                selectedParagraphKey={selectedParagraphKey}
              />
            ))}
          </>
        ))}
      </Box>
      <Box className={classes.insight}>
        {paragraphsStore.paragraphs.map((paragraph: ParagraphStore) => (
          <Insights
            key={paragraph.uuid}
            insights={paragraph.insights}
            advice={paragraph.advice}
            paragraphKey={paragraph.uuid}
            selectedParagraphKey={selectedParagraphKey}
            selectInsights={() => setSelectedParagraphKey(paragraph.uuid)}
          />
        ))}
      </Box>
    </Box>
  );
});
