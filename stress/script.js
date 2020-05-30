import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '1m10s', target: 100 },
    // { duration: '10s', target: 100 },
    // { duration: '30s', target: 500 },
    // { duration: '60s', target: 1000 },
    // { duration: '30s', target: 2000 },
    // { duration: '90s', target: 100 },
    // { duration: '60s', target: 1000 },
  ]
};

export default () => {
  const random = Math.floor(Math.random() * 9999999);
  let res = http.get(`http://localhost:3001/photos/${random}`);
  check(res, { 'status was 200': r => r.status === 200 });
};