

const getCurrentDate = () =>{

    const currentDate = new Date();
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    
    const formattedDate = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;
    
    return formattedDate
    
    }

const calculateYearsMonthsDays = (dob) =>{

const date1 = new Date(dob);
const date2 = new Date(getCurrentDate());


const differenceInMilliseconds = date2 - date1;

const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

const years = Math.floor(differenceInDays / 365);
const months = Math.floor((differenceInDays % 365) / 30);
const days = Math.floor(differenceInDays % 30);

return {"years":years,"months":months,"days":days}

}


const dateInputHandler = () =>{
    const allInputFields = document.querySelectorAll('input')

}

const showAgeHandler = (ageObject) =>{

    const yearShow = document.querySelector('#year_show');
    const monthShow = document.querySelector('#month_show');
    const dayShow = document.querySelector('#day_show');


    yearShow.innerHTML = ageObject.years;
    monthShow.innerHTML = ageObject.months;
    dayShow.innerHTML = ageObject.days;

}

const performAction = () => {
    const day = document.querySelector('#day')
        const month = document.querySelector('#month')
        const year = document.querySelector('#year')

        const dob = `${year.value}-${month.value}-${day.value}`
        console.log(dob)

        const ageObject = calculateYearsMonthsDays(dob);
        showAgeHandler(ageObject);

}

const submitBtnHandler = () => {
    const submitBtn = document.querySelector('.submitBtn');

    submitBtn.addEventListener('click',() =>{
        performAction()
    });

    document.addEventListener('keydown', (event) =>{
        if(event.key === 'Enter'){
            performAction()
        }
    })

    

   
}



submitBtnHandler()