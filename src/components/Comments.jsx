import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Comments ( { closeHandler, data } ) {
  const [inputComment, setInputComment] = useState( "" );
  const [comments, setcomments] = useState();

  useEffect( () => {
    console.log(data)
    const getComments = async () => {
      try {
        const config = {

          headers: {
            "Authorization": "Bearer " + JSON.parse( localStorage.getItem( "userInfo" ) ).token
          },

        };

        const response = await axios.get( `/api/files/pdf/${data.file._id}/comment`, config );
        setcomments( [...response.data.commentResults] );
      } catch ( error ) {
        toast.error( "Error loading comments" );
      }

    };

    getComments();
  }, [] );
  const changeHandler = ( e ) => {
    e.preventDefault();
    setInputComment( e.target.value );


  };
  const submitHandler = async () => {
    try {
      const config = {

        headers: {

          "Authorization": "Bearer " + JSON.parse( localStorage.getItem( "userInfo" ) ).token
        },

      };

      const response = await axios.post( `/api/files/pdf/${data.file._id}/comment`, { "commentBody": inputComment }, config );
      console.log( response );
      const getComments = async () => {
        try {
          const config = {

            headers: {

              "Authorization": "Bearer " + JSON.parse( localStorage.getItem( "userInfo" ) ).token
            },

          };

          const response = await axios.get( `/api/files/pdf/${data.file._id}/comment`, config );
          setcomments( [...response.data.commentResults] );
          console.log( [...response.data.commentResults] );
        } catch ( error ) {
          toast.error( "Error loading comments" );
        }

      };
      getComments();
      toast.success( "Comment added successfully" );
    } catch ( error ) {
      console.log( "Some error occured" + error );

    }
  };
  return (
    <div

      className="bg-white pt-5 m-2 rounded-sm border-1 border-green-100 "
    >
      <div className="flex justify-between items-center px-6 flex-col gap-2">
        <div>{data.file.fileName}</div>
        <a
          className="flex-none text-xl font-semibold dark:text-white"
          href="#"
          aria-label="Brand"
        >
          Comments
        </a>
        
      </div>
      <nav className="p-6 w-full flex flex-col flex-wrap">
        {comments && comments.map( comment => <div className="border-b border-gray-300 p-2 mb-2" key={comment.commentId} >{comment.authorName}: {comment.commentBody}</div> )}
        
        <input type="text" value={inputComment} onChange={changeHandler} className="border border-gray-300 p-2 rounded-md w-full text-sm focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300" placeholder="Add a comment..." />
        <button onClick={submitHandler} className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md">comment</button>
      </nav>

    </div>
    
  );
}
export default Comments;