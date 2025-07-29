  // 1 способ
  
  //  export const animal = {
  //   type: "Tiger",
  //   fullName: "Marti",
  //   age: 10,
  //   color: "orange striped",
  //   isPlanteater: false,
  //   avatarUrl :"https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg"
  // };



  //  export const hello = "Hello,its my first React component";


  // export const getPlanteaterStatus = (isPlanteater) => {
  //   if(isPlanteater) {
  //     return "Yes";
  //   }else {
  //     return "No";
  //   }
  // };


// 2способ
  
   const animal = {
    type: "Tiger",
    fullName: "Marti",
    age: 10,
    color: "orange striped",
    isPlanteater: false,
    avatarUrl :"https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg"
  };



    const hello = "Hello,its my first React component";


   const getPlanteaterStatus = (isPlanteater) => {
    if(isPlanteater) {
      return "Yes";
    }else {
      return "No";
    }
  };





  export {animal,hello};//export всех переменных вместе

  export default getPlanteaterStatus