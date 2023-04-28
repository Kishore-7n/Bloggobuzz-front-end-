import React, { useState, useEffect } from "react";
import "./Postpreview.css";
import { Link } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
function PostPreview() {
  const url = "http://localhost:5000/postpreview";
  const [data, setData] = useState([]);
  const [loading,setloading] = useState(false);
  const fetchInfo = async () => {
    return await fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  useEffect(() =>{
    setloading(true);
    setTimeout(()=>{
      setloading(false)
    },10000)
  },[])

  useEffect(()=>{
    window.scrollTo(0,0);
})

  return (
    <div className="bigpost">
    {loading?(<BarLoader color="#36d7b7" 
    width="300px"
        className="bar"
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />):
      (<div className="post">
          <h2>New Arrivals</h2>
              {data.map((d)=>{
              return(
                <div className="cord">
                  <img alt="blogimage" src={d.base64}></img>
                  <div className="cord-contents">
                    <h4>{d.title}</h4>
                    <h5>{d.snippet}</h5>
                    <button className="cord-btn"><Link  className="cordlink"   to="/mainpost" state = {d} >Read more</Link></button>
                  </div>
                </div>
              )}
              )}
        </div>)
}
      </div>
  )}
export default PostPreview;
