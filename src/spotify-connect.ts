export function getSpotifyCode() {
  window.location.href =
    'https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' +
    process.env.REACT_APP_CLIENT_ID +
    '&scope=' +
    encodeURIComponent(process.env.REACT_APP_SCOPE as string) +
    '&redirect_uri=' +
    encodeURIComponent(process.env.REACT_APP_REDIRECT_URI as string);
}
