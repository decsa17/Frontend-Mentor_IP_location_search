export function fetchIpData(ip) {
  const url = ip ? `/api/lookup?ip=${ip}` : '/api/lookup';
  return fetch(url)
    .then(res => res.json());
}