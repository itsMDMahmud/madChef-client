import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ChefDetails = () => {
    const { id } = useParams();
    // console.log(id);
  const [chefDetails, setChefDetails] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5500/chefdata")
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              setChefDetails(data);
            }
          });
      }, []);

    const chefData = chefDetails.find((chef) => chef.id == id);
    // console.log(chefData);

    return (
        <div>
            <h2>chef details</h2>
        </div>
    );
};

export default ChefDetails;