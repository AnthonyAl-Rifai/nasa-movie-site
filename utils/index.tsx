export const convertRuntime = (runtime: number) => {
  if (runtime) {
    let minutes = runtime;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} hr ${remainingMinutes} min`;
  } else {
    return null;
  }
};

export const truncate = (overview: string) => {
  if (overview) {
    const splitOverview = overview.split(' ');
    if (splitOverview.length >= 20) {
      return `${overview.split(' ').slice(0, 20).join(' ')}...`;
    }
    return overview;
  } else {
    return null;
  }
};
