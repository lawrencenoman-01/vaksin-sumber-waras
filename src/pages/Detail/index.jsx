  import React , { useEffect, useState }from 'react';
  import { selectDetail } from './selectors';
  import { useParams , useNavigate } from 'react-router-dom';
  import { useDispatch, useSelector , connect } from 'react-redux';
  import { fetchVaksinRequest , updateVaksinStatusRequest } from './actions';
  import { createStructuredSelector } from "reselect";
  import Classes from './style.module.scss'


  const Detail = ({vaksin}) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    // Use a local state to store the current status
    // const [currentStatus, setCurrentStatus] = useState('');

    useEffect(() => {
      if (id) {
        dispatch(fetchVaksinRequest(id));
      }
    }, [id, dispatch]);

    // useEffect(() => {
    //   // Update the local state when vaksin data changes
    //   setCurrentStatus(vaksin.status);
    // }, [vaksin]);

    console.log(vaksin , '<< vaksin')
    

    // console.log(fetchVaksinRequest(id) , 'Nyoba Fetch')
    console.log(vaksin , 'abis fetch vaksin')

    // Function to navigate back to the home page
    const navigateBack = () => {
      navigate('/'); // Use navigate instead of useHistory
    };

    const handleStatusChange = () => {
      const updatedStatus = vaksin.status === 'sudah' ? 'belum' : 'sudah';

      const updatedVaksin = {
        ...vaksin,
        status: updatedStatus,
      };

      console.log(updatedVaksin, '<<< UPDATED')
      dispatch(updateVaksinStatusRequest(id, updatedVaksin)); // Dispatch the action

      dispatch(fetchVaksinRequest(updatedVaksin.id));
    };

    return (
      <div className={Classes.isiDetail}>
        <div className={Classes.kartuVaksin}>
          <h1>Vaksin Detail</h1>
          <p>ID: {vaksin?.id}</p>
          <p>Full Name: {vaksin?.fullName}</p>
          <p>Email: {vaksin?.email}</p>
          <p>Phone Number: {vaksin?.phoneNumber}</p>
          <p>Address: {vaksin?.address}</p>
          <p>Dosis 1: {vaksin?.dosis1}</p>
          <p>Dosis 2: {vaksin?.dosis2}</p>
          <p>Status: {vaksin?.status}</p>
          <div className={Classes.buttonContainer}>
        <button onClick={() => handleStatusChange()}>
          Change Status
        </button>
        <button onClick={navigateBack}>
          Back to Home
        </button>
      </div>
        </div>
      </div>
    )
  }

  const mapStateToProps = createStructuredSelector({
    vaksin: selectDetail,
  });

  // const mapDispatchToProps = (dispatch) => ({
  //   updateVaksinStatusRequest: (id, updatedStatus) =>
  //     dispatch(updateVaksinStatusRequest(id, updatedStatus)),
  // });

  export default connect(mapStateToProps)(Detail);
