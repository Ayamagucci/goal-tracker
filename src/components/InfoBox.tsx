import { type ReactNode } from 'react';

/* NOTE: types generally best when working w/ discriminated unions **
  (explicitly defined structures —> cannot extend later inadvertently)
*/
type HintProps = {
  mode: 'hint';
  children: ReactNode;
};

type WarningProps = {
  mode: 'warning';
  severity: 'low' | 'medium' | 'high';
  children: ReactNode;
};

type InfoBoxProps = HintProps | WarningProps;

export default function InfoBox(
  props: InfoBoxProps
) {
  const { mode, children } = props;
  if (mode === 'hint') {
    return (
      <aside className='infobox infobox-hint'>
        <p>{ children }</p>
      </aside>
    );
  }

  const { severity } = props;
  return (
    <aside className={ `infobox infobox-warning warning--${ severity }` }>
      <h2>Warning</h2>
      <p>{ children }</p>
    </aside>
  );
}