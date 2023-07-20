import axios from 'axios';
import { useEffect, useState } from "react";
import { PDFState } from "../context/store";
import { useNavigate } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";
import PDFsvg from "../components/icons/PDFsvg";
import PDFIcon from "../components/icons/PDFIcon";
import SidebarDashboard from "../components/SidebarDashboard";


function Dashboard () {
  const user = JSON.parse( localStorage.getItem( "userInfo" ) );
  const [data, setData] = useState();
  const navigate = useNavigate();


  useEffect( () => {
    const getPDFs = async () => {

      try {
        const config = {

          headers: {
            Authorization: `Bearer ${user.token}`,

          },
        };
        const response = await axios.get( "api/files/pdf/fetchAll", config );
        setData( response.data );
        console.log( response.data );


      }
      catch ( error ) {
        console.log( error );
      }
    };

    getPDFs();



  }, [] );

  const clickHandler = ( id ) => {

    navigate( `/${id}` );

  };


  return (
    <div className="bg-green-50 h-screen" >
      <NavbarDashboard />
      <div className="text-center py-10 px-6 sm:px-6 lg:px-8 bg-green-50 h-screen flex gap-4">
        <SidebarDashboard/>
        <div className="bg-white p-3 rounded-lg grow">

          <div className="grid grid-cols-5 gap-4">
            {data &&
              data.pdfFiles.map( ( item ) => (
                <div
                  key={item._id}
                  className=" font-medium text-md flex gap-2  text-green-950 border-2 rounded-md border-green-700 p-2 cursor-pointer hover:bg-green-200 transition duration-200 ease-in-out"
                  onClick={() => clickHandler( item._id )}
                >
                  {/* Truncate the name to a certain length, e.g., 20 characters */}
                  <PDFIcon />
                  <p className="text-center">{item.fileName.slice( 0, 20 )}</p>
                </div>
              ) )}
          </div>
        </div>
      </div>
    </div>

  );
}
export default Dashboard;