import { fromEvent, tap, of, delay, startWith } from 'rxjs';
import { exhaustMap, mergeMap } from 'rxjs';

const clicks = fromEvent(document.getElementById('save'), 'click');
const mockSaveDocument = of('done !').pipe(
  delay(5000),
  startWith('saving doc...')
);

const saveDocument = clicks.pipe(
  tap((click) => console.log('New Save Request...')),
  exhaustMap(() => mockSaveDocument),
  //Compare exhaustMap by replacing with mergeMap
  //mergeMap(() => mockSaveDocument)
);

saveDocument.subscribe((x) => console.log(x));
