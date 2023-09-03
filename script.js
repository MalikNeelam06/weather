// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

let searchButton=document.getElementById("btn");
// burl="https://openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99"
// const APIkey="0d167f61b08283ff026355e30b1cd979";
{/* <div id="rightcontainer" class="rcont">
<h3>Welcome To The Weather App</h3>
<div id="inputbtn">
    <input type="text" placeholder="Here is your current location" />
</div>
<div id="paradiv">
    <p id="lat">Lat:1298838</p>
    <p id="long">Long:1298838</p>
</div>

<div id="map">
    <!-- <iframe src="" width="400" height="300" frameborder="0" style="border: 0"></iframe> -->
    <iframe src="https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed" width="400"
        height="300" frameborder="0" style="border:0" style="margin-left:10"></iframe>
</div>
</div>
<h3>Your Weather Location</h3>
<div id="rightbottom">
<h3>Your Weather Location</h3>
<div class="livecol">Location:New Delhi</div>
<div class="livecol">windspace:100kmph</div>
<div class="livecol">humidity:10</div>
<div class="livecol">timezone gmt</div>
<div class="livecol">pressure:10atm</div>
<div class="livecol">winddirection:northwest</div>
<div class="livecol">uv index:500</div>
<div class="livecol">feellike:30*</div>
</div> */}
let right=document.getElementById("right");
function weatherdata(result){
    result.forEach((data) => {
        let rightcontainer=document.createElement("div");
        rightcontainer.className="rcont";
        rightcontainer.innerHTML=`<h3>Welcome To The Weather App</h3>
        <div id="inputbtn">
            <input type="text" placeholder="Here is your current location" />
        </div>
        <div id="paradiv">
            <p id="lat">${data.coord.lon}</p>
            <p id="long">${data.coord.lat}</p>
        </div>
        
        <div id="map">
            <!-- <iframe src="" width="400" height="300" frameborder="0" style="border: 0"></iframe> -->
            <iframe src="https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed" width="400"
                height="300" frameborder="0" style="border:0" style="margin-left:10"></iframe>
        </div>
        </div>
        <h3>Your Weather Location</h3>
        <div id="rightbottom">
        <h3>Your Weather Location</h3>
        <div class="livecol">Location:New Delhi</div>
        <div class="livecol">windspace:100kmph</div>
        <div class="livecol">humidity:10</div>
        <div class="livecol">timezone gmt</div>
        <div class="livecol">pressure:10atm</div>
        <div class="livecol">winddirection:northwest</div>
        <div class="livecol">${data.main.temp}</div>
        <div class="livecol">${data.main.feels_like}</div>`;
        right.appendChild(rightcontainer);
    });

}
searchButton.addEventListener("click",()=>{
    const APIkey="0d167f61b08283ff026355e30b1cd979";
    let searchValue=document.getElementById("FetchData");
    let searchItem = searchValue.value;
    console.log(searchItem);
    weather(searchItem,APIkey);
    searchItem="";
})


async function weather(searchItem,APIkey){
// let city="chandigarh";
    try{
    let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchItem}&appid=${APIkey}`);
    let result= await response.json();
    console.log(result);
    weatherdata(result);
    
}
catch(e){
    console("enter an error");
}
}

