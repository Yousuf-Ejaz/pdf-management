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
      id="hs-overlay-basic"
      className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex justify-between items-center px-6">
        <a
          className="flex-none text-xl font-semibold dark:text-white"
          href="#"
          aria-label="Brand"
        >
          Share
        </a>
        <button
          type="button"
          className="w-8 h-8 inline-flex justify-center items-center gap-2 rounded-md border border-gray-200 text-gray-600 hover:text-gray-400 transition dark:border-gray-700"
          data-hs-overlay="#hs-overlay-basic"
          aria-controls="hs-overlay-basic"
          aria-label="Toggle navigation"
          onClick={closeHandler}
        >
          <span className="sr-only">Close Sidebar</span>
          <svg
            className="w-3 h-3"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
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