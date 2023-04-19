var Cars = {
    Acura: {
        NSX: ["2016", "2020", "2021"],
    },

    "Aston Martin": {
            "GMA T50":["2020"],
            DB11: ["2018", "2019", "2020"],
            DBS: ["2019", "2021", "2023"]
    },

    Audi: {
        R8: ["2018", "2019", "2020"]
    },

    BMW: {
        M1:["1978"],
        M8: ["2020", "2021", "2022"]
    },

    Bugatti: {
        Chiron:["2019", "2021", "2022"],
        "La Voiture Noire": ["2018", "2019", "2020"],
        Centodieci: ["2022"]
    },

    Chevrolet: {
        Corvette:["2023"]
    },

    Dodge: {
        "SRT Viper GT3-R":["2017"]
    },

    Ferrari: {
        F8:["2019"],
        "SF90 Stradale": ["2019"],
        "Daytona SP3": ["2022"],
        "488": ["2022"],
        "458":["215"]
    },

    Ford: {
        GT:["2023"]
    },

    Jaguar: {
        "C-X75":["2015"]
    },

    Koenigsegg: {
        Gemera:["2024"],
        Jesko:["2021"],
        Regera:["2018", "2022"],
        Agera:["2010"]
    },

    Lamborghini:{
        Aventador:["2015", "2022"],
        Huracan:["2018", "2020"],
        Revuelto:["2024"],
        Veneno:["2014"]
    },

    Lexus:{
        LFA:["2012"]
    },

    Maserati: {
        "MC20":["2023"]
    },

    McLaren: {
        "720s":["2023"],
        "750s":["2024"],
        "765 LT":["2022"],
        P1:["2013"]
    },

    MercedesBenz: {
        "AMG GT":["2023"],
    },

    Nissan: {
        "GTR R36":["2023"]
    },

    Pagani: {
        Huayra:["2020"],
        Utopia:["2023"],
        Zonda:["2019"]

    },

    Porsche:{
        Taycan:["2023"],
        918:["2015"],
        "Carrera GT":["2006"]
    }





}


window.onload = function(){
    const selectMake = document.getElementById('make'),
        selectModel = document.getElementById('model'),
        selectYear = document.getElementById('year'),
        selects = document.querySelectorAll('select')

        selectModel.disabled = true
        selectYear.disabled = true
  

        selects.forEach(select => {
            if(select.disabled == true){
                select.style.cursor = "auto"
            }
            else{
                select.style.cursor = "pointer"
            }
        })

        for(let make in Cars){
            // console.log(make);
            selectMake.options[selectMake.options.length] = new Option(make, make)
        }


        // make change
        selectMake.onchange = (e) =>{
            selectModel.disabled = false
            selectYear.disabled = true
            // selectZip.disabled = true

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            selectModel.length = 1
            selectYear.length = 1
            // selectZip.length = 1

            for(let model in Cars[e.target.value]){
                // console.log(model);
                selectModel.options[selectModel.options.length] = new Option(model, model)
            }
        }


        selectModel.onchange = (e) => {
            selectYear.disabled = false;
          
            selects.forEach((select) => {
              if (select.disabled == true) {
                select.style.cursor = "auto";
              } else {
                select.style.cursor = "pointer";
              }
            });
          
            selectYear.length = 1;
          
            let Year = Cars[selectMake.value][e.target.value].filter(y => parseInt(y) >= 2016);
          
            for (let i = 0; i < Year.length; i++) {
              selectYear.options[selectYear.options.length] = new Option(Year[i], Year[i]);
            }
        };

}
