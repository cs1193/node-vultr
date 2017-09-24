console.log('Index');

process.on('uncaughtException', (error) => {
  console.error('Unhandled Exception', error);
});

process.on('uncaughtRejection', (error, promise) => {
  console.error('Unhandled Rejection', error);
});
