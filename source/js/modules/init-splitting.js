import Splitting from 'splitting';

export const initSplitting = () => {
  const settings = {
    by: 'words',
    by: 'lines',
  };

  Splitting(settings);
};
