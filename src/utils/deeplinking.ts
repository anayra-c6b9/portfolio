export function openYoutube(
  event: MouseEvent,
  url: string,
  channel: string | null
) {
  event.preventDefault();

  //check if the device is android or ios or desktop
  const isAndroid = /(android)/i.test(navigator.userAgent);
  const isIos = /(iphone|ipad)/i.test(navigator.userAgent);

  // creating the appropriate URL based on the device
  const appUrl = isIos
    ? `vnd.youtube://www.youtube.com/@${channel}553`
    : `intent://www.youtube.com/@${channel}553#Intent;package=com.google.android.youtube;scheme=https;end`;

  if (isAndroid || (isIos && channel)) window.location.href = appUrl;
  else window.open(url, '_blank', 'noopener noreferrer');
}
