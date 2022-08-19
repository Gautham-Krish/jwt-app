import React, { useEffect, useState } from "react";
import axios from "axios";

const HelloWorld = () => {
  const [response, setResponse] = useState("N.A");

  const fetchData = async (accessToken) => {
    try {
      const res = await axios.get("http://localhost:8080/refreshtoken", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          isRefreshToken: true,
        },
      });
      console.log({ res });
      if (res.status === 200) {
        console.log(res.data);
        const res2 = await axios.get(`http://localhost:8080/hello-world`, {
          refreshToken: res.data.token,
        });
        if (res2) {
          console.log(res2.data);
          setResponse(JSON.stringify(res2.data));
        }
      }
    } catch (error) {
      console.log(error);
      setResponse("Some Error Occured");
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      setResponse("Please Authenticate");
    } else {
      fetchData(accessToken);
    }
  }, []);

  return (
    <div class="row">
      <div class="column">
        <div className="container">
          <div className="app-wrapper">{response}</div>
        </div>
      </div>
    </div>
  );
};

export default HelloWorld;
