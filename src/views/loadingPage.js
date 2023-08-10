/* this a loading page that waits the data to be loaded from the API */
const Load = () => {
    return (
<div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Adjust this value as needed
}}>
  <img src={require('../assets/images/DJEZZY.gif')} alt="loading..." />
</div>)};
    export default Load;