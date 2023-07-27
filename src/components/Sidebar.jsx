import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Sidebar ( { closeHandler, data } ) {
  const [latestData, setLatestData] = useState( data );
  const params = useParams();
  const fileId = params.id;
  const getPDF = async () => {
    try {
      const config = {
        headers: {
          Authorization: "Bearer " + JSON.parse( localStorage.getItem( "userInfo" ) ).token
        },
      };
      const response = await axios.post( `api/files/pdf/${fileId}/view`, {}, config );
      setLatestData( response.data );

    }
    catch ( error ) {
      console.log( error );
    }
  };



  const [email, setEmail] = useState( "" );
  const changeHandler = ( e ) => {
    setEmail( e.target.value );

  };
  const commentAccess = async () => {
    try {
      const config = {

        headers: {

          "Authorization": "Bearer " + JSON.parse( localStorage.getItem( "userInfo" ) ).token
        },

      };

      const response = await axios.post( `/api/files/pdf/${data.file._id}/access`, {
        "provideViewAccess": false,
        "provideCommentAccess": true,
        "emailId": email
      }, config );
      getPDF();
    } catch ( error ) {
      toast.error( error.response.data.message );
      console.log( error );
    }
  };
  const viewAccess = async () => {
    try {
      const config = {

        headers: {

          "Authorization": "Bearer " + JSON.parse( localStorage.getItem( "userInfo" ) ).token
        },

      };

      const response = await axios.post( `/api/files/pdf/${data.file._id}/access`, {
        "provideViewAccess": true,
        "provideCommentAccess": false,
        "emailId": email
      }, config );
      getPDF();
    } catch ( error ) {
      toast.error( error.response.data.message );
      console.log( error );
    }
  };
  return (
    <div
      className=" bg-white pt-5 m-2 rounded-sm border-1 border-green-100 overflow-y-hidden "
    >
      <div className="flex justify-between items-center px-6">
        <a
          className="flex-none text-xl font-semibold dark:text-white"
          href="#"
          aria-label="Brand"
        >
          Share
        </a>
        
      </div>
      <nav className="p-6 w-full flex flex-col flex-wrap">
        <input type="text" value={email} onChange={changeHandler} className="border border-gray-300 p-2 rounded-md w-full text-sm focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300" placeholder="Enter email" />
        <button onClick={commentAccess} className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md">Add Comment Access</button>
        <button onClick={viewAccess} className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md">Add View Access</button>
        <div>View Access</div>
        {latestData.file.viewAccess.map( ( item ) => item.name )}
        <div>Comment Access</div>
        {latestData.file.commentAccess.map( ( item ) => item.name )}
      </nav>
    </div>
  
  );
}
export default Sidebar;