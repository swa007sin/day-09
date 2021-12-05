var flg1 = new XMLHttpRequest();

flg1.onload = function () {
     if(flg1.status>=200 && flg1.status < 300 ){
     var t = JSON.parse(this.response);
     //task a
      var task1 = t.filter((regions)=>regions.region=="Asia").map((names)=>names.name);
      console.log(task1);
     //task b
      var task2= t.filter((pop)=>pop.population<200000).map((names)=>names.name);
      console.log(task2);
     //task c
      t.forEach(country=>console.log(`Name:${country.name} \nCapital:${country.capital} \nFlag:${country.flag}`));
     //task d
      var task4 = t.reduce((acm,total)=> acm + total.population,0);
      console.log(`Total Population :${task4}`);
     //task e
     var task5= t.filter((dollor)=> dollor.currencies[0].symbol==="$").map((names)=>names.name);
     console.log(task5);
     

    }
    else{
        console.log("Data is not available");
    }
  
};
flg1.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
flg1.send();
