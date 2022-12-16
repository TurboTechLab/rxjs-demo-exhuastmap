import {
  fromEvent,
  exhaustMap,
  tap,
  of,
  delay,
  startWith,
} from 'rxjs';

const clicks = fromEvent(document.getElementById('save'), 'click');
const mockSaveDocument = of('saved !').pipe(
  delay(10000),
  startWith('saving...')
);

const saveDocument = clicks.pipe(
  tap((click) => console.log('New Save Request...')),
  exhaustMap(() => mockSaveDocument)
);

saveDocument.subscribe((x) => console.log(x));
