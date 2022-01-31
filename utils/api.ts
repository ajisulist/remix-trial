import axios from 'axios';

const BASE_PATH =
  'https://api.steinhq.com/v1/storages/61f81ce78d29ba237917ba06';

export async function get<Res>(path: string, params?: any) {
  const fullUrl = BASE_PATH + path;
  const res = await axios.get<Res>(fullUrl, { params });
  return res.data;
}

export async function post<Res, Req>(path: string, payload?: Req) {
  const fullUrl = BASE_PATH + path;
  const res = await axios.post<Res, Req>(fullUrl, payload);
  console.log(res);
  return res;
}
