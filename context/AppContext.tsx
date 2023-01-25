import { ethers } from 'ethers';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { NETWORKS } from '../config/networks';

const AppContext: any = createContext({
  events: null,
  GetAllMaticEvents: null,
  GetAllFilecoinEvents: null,
});
export const useApp = () => {
  return useContext(AppContext);
};

export default function AppContextProvider({ children }: { children: any }) {
  const [error, setError] = useState(false);
  const [events, setEvents] = useState<any[]>([]);

  const GetAllEvents = useCallback(async () => {
    let fe: any[] = await GetAllFilecoinEvents();
    let me: any[] = await GetAllMaticEvents();
    let newArr: any[] = [];
    if (fe) {
      newArr = [...fe];
    }
    if (me) {
      newArr = newArr.concat(me);
    }

    return setEvents(newArr);
  }, []);

  async function GetAllMaticEvents() {
    let rpc =
      'https://polygon-mumbai.g.alchemy.com/v2/' +
      process.env.NEXT_PUBLIC_ALCHEMY_KEY;

    try {
      const provider = new ethers.providers.StaticJsonRpcProvider(rpc);
      // @ts-ignore
      let ca = NETWORKS.polygon_mumbai.ca;
      // @ts-ignore
      let abi = NETWORKS.polygon_mumbai.abi;
      const ct = new ethers.Contract(ca, abi, provider);
      let d = await ct.allEvents();

      return d;
    } catch (error) {
      console.log(error);
    }
  }
  async function GetAllFilecoinEvents() {
    let rpc = 'https://api.hyperspace.node.glif.io';
    try {
      const provider = new ethers.providers.StaticJsonRpcProvider(rpc);
      // @ts-ignore
      let ca = NETWORKS.fil_testnet.ca;
      // @ts-ignore
      let abi = NETWORKS.fil_testnet.abi;
      const ct = new ethers.Contract(ca, abi, provider);
      let d = await ct.allEvents();

      return d;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetAllEvents();
  }, [GetAllEvents]);

  return (
    <AppContext.Provider
      value={{ events, GetAllFilecoinEvents, GetAllMaticEvents, GetAllEvents }}
    >
      {children}
    </AppContext.Provider>
  );
}
