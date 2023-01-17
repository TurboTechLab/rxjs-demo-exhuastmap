import { fromEvent, tap, of, delay, startWith } from 'rxjs';
import { exhaustMap, mergeMap } from 'rxjs';

const clicks = fromEvent(document.getElementById('save'), 'click');
const mockSaveDocument = of('done !').pipe(
  delay(5000),
  startWith('Called save doc...')
);

const saveDocument = clicks.pipe(
  tap((click) => console.log('New Save Request...')),
  exhaustMap(() => mockSaveDocument)
  //Compare exhaustMap by replacing with mergeMap,
  //every request should make a call to save.
  //mergeMap(() => mockSaveDocument)
);

saveDocument.subscribe((x) => console.log(x));
