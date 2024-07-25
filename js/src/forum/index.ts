import app from 'flarum/forum/app';

app.initializers.add('dhtml/cpages', () => {
  console.log('[dhtml/cpages] Hello, forum!');
});
