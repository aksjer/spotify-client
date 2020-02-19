import axios from 'axios';

export async function getAccessToken(code: string): Promise<void> {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/graphql`,
    JSON.stringify({
      query: `{ authenticate(code: "${code}") {access_token} }`
    }),
    {
      headers: {
        'content-type': 'application/json'
      }
    }
  );
  const { access_token } = response.data.data.authenticate;
  sessionStorage.setItem('access_token', access_token);
  window.location.href = process.env.REACT_APP_REDIRECT_URI as string;
}
