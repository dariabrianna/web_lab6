import { useEffect, useState, useCallback } from "react";
import api from "../api";

export default function useAuth() {
  const [ready, setReady] = useState(false);

  const fetchToken = useCallback(async () => {
    const { data } = await api.post("/token", {
      role: "WRITER",
      permissions: ["READ", "WRITE"],
    });
    localStorage.setItem("jwt", data.token);

    // reînnoim automat cu 5 s înainte să expire
    const ttl = parseInt(data.expiresIn) * 1000 - 5000;
    setTimeout(fetchToken, ttl);
    setReady(true);
  }, []);

  useEffect(() => {
    fetchToken();
  }, [fetchToken]);

  return ready;       // true când avem token valid
}
