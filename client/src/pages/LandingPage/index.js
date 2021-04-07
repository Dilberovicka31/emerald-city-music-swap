import React, { useState, useEffect } from "react";
import FeaturedCards from "../../components/FeaturedCards";
import API from "../../utils/API";

const LandingPage = (props) => {
  const [records, setRecords] = useState({
    artist: "",
    album: "",
    comments: "",
    genre: "",
    condition: "",
    contact: "",
  });

  useEffect(() => {
    API.findAllRecords().then((res) => {
      setRecords(res.data);
    });
  }, []);

  const handleDelete = (record) => {
    console.log(record);
    API.deleteOneRecord(record).then((res) => {
      console.log(res.data);
      setRecords(records.filter((thisRecord) => thisRecord._id !== record));
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const id = props.match.params.id;
    console.log(id);

    API.updateOneRecord(records, id).then((res) => {
      console.log(res.data);
      props.history.push("/userPage");
    });
  };

  
  return (
    <div>
      <h1 className="text-center mt-5 mb-5"></h1>
      {console.log(records)}
      <FeaturedCards
        records={records}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};
export default LandingPage;
