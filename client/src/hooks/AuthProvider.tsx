import React, {
  useContext,
  createContext,
  useState,
  ReactNode,
  startTransition,
  // Dispatch,
  // SetStateAction,
} from "react";
import { useNavigate } from "react-router-dom";

interface UserType {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
interface AuthContextProps {
  token: string;
  user: UserType | null; // Define the type for the user data
  loginAction: (data: any) => Promise<void>;
  logOut: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [token, setToken] = useState<string>(
    localStorage.getItem("lighthouse-token") || ""
  );
  const navigate = useNavigate();

  const loginAction = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<void> => {
    try {
      // const response = await fetch("your-api-endpoint/auth/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });
      // const res = await response.json();
      // if (res.data) {
      //   setUser(res.data.user);
      //   setToken(res.token);
      //   localStorage.setItem("lighthouse-token", res.token);
      //   navigate("/dashboard");
      //   return;
      // }
      // throw new Error(res.message);
      if (email === "demo@lighthouse.com" && password === "Password123!") {
        setUser({
          id: "123",
          firstName: "Demo",
          lastName: "User",
          email: "demo@lighthouse.com",
        });
        setToken("1");
        localStorage.setItem("lighthouse-token", "1");
        startTransition(() => navigate("/dashboard"));

        return;
      }
      if (email !== "demo@lighthouse.com" || password !== "Password123!") {
        throw new Error("User doesn't exist");
      }
    } catch (error) {
      throw error;
    }
  };

  const logOut = (): void => {
    setUser(null);
    setToken("");
    localStorage.removeItem("lighthouse-token");
    navigate("/signin");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = (): AuthContextProps | undefined => {
  return useContext(AuthContext);
};
