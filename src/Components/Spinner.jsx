import ClipLoader from 'react-spinners/ClipLoader';

const overide = {
    display : 'block',
    margin : '100 px auto'
}

const Spinner = ( {loading}) => {
  return (
    <ClipLoader color='#4338ca' loading={loading} cssOverride={overide} size={150} />
  )
}

export default Spinner