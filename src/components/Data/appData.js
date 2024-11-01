import { useEffect } from 'react';
import {initializeData, getData} from './data';

function AppData() {
  useEffect(() => {
    initializeData();
    getData();
  }, []);
}

export default AppData;
