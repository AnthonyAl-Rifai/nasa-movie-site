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
