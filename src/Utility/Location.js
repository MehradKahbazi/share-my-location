export const getCoordsFromAddress = async (address) =>{
    const urlAddress = encodeURI(address);
    console.log(address);
    const response = await fetch(`http://api.positionstack.com/v1/forward?access_key=76776860c53693cfe7cfdd15efb4880b&query=${urlAddress}`)
    if(!response){
        throw new Error('failed to fetch response');
    }
    const data = await response.json();
    if(data.error_message){
        throw new Error(data.error_message);
    }
    const coordinates = data.data[0];
    return coordinates;
}