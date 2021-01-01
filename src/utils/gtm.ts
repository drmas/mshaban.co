interface PageEventProps {
  event: string;
  page: string;
}

export const GTMPageView = (url: string) => {
  const pageEvent: PageEventProps = {
    event: 'pageview',
    page: url,
  };
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  window && window.dataLayer && window.dataLayer.push(pageEvent);
  return pageEvent;
};
