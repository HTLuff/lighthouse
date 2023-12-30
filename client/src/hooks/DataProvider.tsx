// EXTERNAL
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
// ASSETS
import { USELOCALDATA } from "../constants";
import jsonData from "../data.json";
// TYPES
interface Data {
  siteName: string;
  user_sessions: UserSession[];
}
interface UserSession {
  user_id: string;
  session_id: string;
  start_time: string;
  end_time: string;
  geo_data: GeoData;
  button_clicks: ButtonClicks[];
}
interface GeoData {
  country_code: string;
}
interface ButtonClicks {
  timestamp: string;
  button_id: string;
}
interface DataContextProps {
  data: Data | null;
}
interface DataProviderProps {
  children: ReactNode;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    // Fetch data here
    const fetchData = async () => {
      if (USELOCALDATA) {
        // Fetch data from local JSON file
        const localData: Data = jsonData;
        setData(localData);
      } else {
        // try {
        //   const response = await fetch("https://api.example.com/data"); // Change to API endpoint
        //   const result: Data = await response.json();
        //   setData(result);
        // } catch (error) {
        //   console.error("Error fetching data:", error);
        // }
      }
    };
    fetchData();
  }, []); // Run effect only once when the component mounts

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};
