export const formatTime = (time) => {
    return new Intl.DateTimeFormat("hr-HR", {hour: "2-digit", minute: "2-digit"}).format(new Date(time));
  }