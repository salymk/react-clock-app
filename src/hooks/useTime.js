import { useQuery } from 'react-query';
import axios from 'axios';

const getTime = async () => {
  const { data } = await axios.get('http://worldtimeapi.org/api/ip/');
  return data;
};

export default function useTime() {
  return useQuery('time', getTime);
}
