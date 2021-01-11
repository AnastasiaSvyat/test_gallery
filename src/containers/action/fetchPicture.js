const requestPicture = () => {
    return { type: 'REQUESTED_PICTURE' }
  };
const requestPictureSuccess = (data) => {
    return { type: 'REQUESTED_PICTURE_SUCCEEDED', arr: data }
  };
const requestPictureError = () => {
    return { type: 'REQUESTED_PICTURE_ERROR' }
  };


  
function FetchPicture(){
    return (dispatch) => {
      dispatch(requestPicture());
      fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
        .then(res => res.json())
        .then(
          data => dispatch(requestPictureSuccess(data)),
          err => dispatch(requestPictureError())

        );
    }
  };

  export default FetchPicture



