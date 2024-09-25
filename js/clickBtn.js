    // Box One 
document.getElementById('BoxOneDonateNowButton').addEventListener('click', function(){
    const NavbarBalance = InnerTextFunction('NavbarBalance');
    const BoxOneBalance = InnerTextFunction('BoxOneBalance');
    const BoxOneTitle = CardTitleFunction('TitleBoxOne');
    const BoxOneInputPart = InputValueById('BoxOneInputPart');


    const MinNumber = NavbarBalance - BoxOneInputPart;
    const AddedNumber = BoxOneBalance + BoxOneInputPart;

    

    if(BoxOneInputPart <= NavbarBalance && BoxOneInputPart > 0){
        document.getElementById('NavbarBalance').innerText = MinNumber;
        document.getElementById('BoxOneBalance').innerText = AddedNumber;

        const newFile=document.createElement('div')

        const Time=new Date();
        const TimeZone=Time.toString();

        newFile.innerHTML=`
        <h1>${BoxOneInputPart} Taka is ${BoxOneTitle} </h1>
        <p>Date : ${TimeZone}</p>
        `
        newFile.classList.add('border', 'w-full', 'p-3',)
        document.getElementById('HistoryList').appendChild(newFile)
    }
    else{
        alert('Error ! Taka Nai')
    } 

    
})

// Model 1
function ModelBoxOne() {
    
    const NavbarBalance = InnerTextFunction('NavbarBalance');
    const BoxOneBalance = InnerTextFunction('BoxOneBalance');
    const BoxOneInputPart = InputValueById('BoxOneInputPart');
    const OutputAddNumber = BoxOneBalance + BoxOneInputPart;
  
    if (OutputAddNumber > BoxOneBalance && BoxOneInputPart <= NavbarBalance) {
      document.getElementById('my_modal_5').showModal();
    }
  }
// Box Two 
document.getElementById('BoxTwoDonateNowButton').addEventListener('click', function(){
    const NavbarBalance = InnerTextFunction('NavbarBalance');
    const BoxTwoBalance = InnerTextFunction('BoxTwoBalance');
    const BoxTwoTitle = CardTitleFunction('TitleBoxTwo');
    const BoxTwoInputPart = InputValueById('BoxTwoInputPart');

    const MinTwoNumber = NavbarBalance - BoxTwoInputPart;
    const AddedTwoNumber = BoxTwoBalance + BoxTwoInputPart;

    if(BoxTwoInputPart <= NavbarBalance && BoxTwoInputPart > 0){
        document.getElementById('NavbarBalance').innerText = MinTwoNumber;
        document.getElementById('BoxTwoBalance').innerText = AddedTwoNumber;

        const newFile=document.createElement('div')

        const Time=new Date();
        const TimeZone=Time.toString();

        newFile.innerHTML=`
        <h1>${BoxTwoInputPart} Taka is ${BoxTwoTitle} </h1>
        <p>Date : ${TimeZone}</p>
        `
        newFile.classList.add('border', 'w-full', 'p-3',)
        document.getElementById('HistoryList').appendChild(newFile)
    }

    else{
        alert('Error ! Taka Nai')
    } 

    
})

// Model 2
function ModelBoxTwo() {
    
    const NavbarBalance = InnerTextFunction('NavbarBalance');
    const BoxTwoBalance = InnerTextFunction('BoxTwoBalance');
    const BoxTwoInputPart = InputValueById('BoxTwoInputPart');
    const OutputAddNumber = BoxTwoBalance + BoxTwoInputPart;
  
    if (OutputAddNumber > BoxTwoBalance && BoxTwoInputPart <= NavbarBalance) {
      document.getElementById('my_modal_5').showModal();
    }
  }
// Box Three
document.getElementById('BoxThreeDonateNowButton').addEventListener('click', function(){
    const NavbarBalance = InnerTextFunction('NavbarBalance');
    const BoxThreeBalance = InnerTextFunction('BoxThreeBalance');
    const BoxThreeTitle = CardTitleFunction('TitleBoxThree');
    const BoxThreeInputPart = InputValueById('BoxThreeInputPart');

    const MinThreeNumber = NavbarBalance - BoxThreeInputPart;
    const AddedThreeNumber = BoxThreeBalance + BoxThreeInputPart;

    if(BoxThreeInputPart <= NavbarBalance && BoxThreeInputPart > 0){
        document.getElementById('NavbarBalance').innerText =MinThreeNumber;
        document.getElementById('BoxThreeBalance').innerText =AddedThreeNumber;

        const newFile=document.createElement('div')

        const Time=new Date();
        const TimeZone=Time.toString();

        newFile.innerHTML=`
        <h1>${BoxThreeInputPart} Taka is ${BoxThreeTitle} </h1>
        <p>Date : ${TimeZone}</p>
        `
        newFile.classList.add('border', 'w-full', 'p-3',)
        document.getElementById('HistoryList').appendChild(newFile)
    }

    else{
        alert('Error ! Taka Nai')
    } 

    
})

// Model 3
function ModelBoxThree() {
    
    const NavbarBalance = InnerTextFunction('NavbarBalance');
    const BoxThreeBalance = InnerTextFunction('BoxThreeBalance');
    const BoxThreeInputPart = InputValueById('BoxThreeInputPart');
    const OutputAddNumber = BoxThreeBalance + BoxThreeInputPart;
  
    if (OutputAddNumber > BoxThreeBalance && BoxThreeInputPart <= NavbarBalance) {
      document.getElementById('my_modal_5').showModal();
    }
  }

// Blog Btn 
document.getElementById('headerBlogBtn').addEventListener('click', function(){
    window.location.href='HtmlFile/Blog.html'
})




// Header  Two Button
document.getElementById('HeaderDonateBtn').addEventListener('click', function(){
    const Unhide=UnhideItem('DonatePart')

    const DonateButtonColor=document.getElementById('HeaderDonateBtn').classList.add('bg-[#b8f36a]')
    const HistoryButtonColor=document.getElementById('HeaderHistoryBtn').classList.remove('bg-[#b8f36a]')

})

document.getElementById('HeaderHistoryBtn').addEventListener('click', function(){
    const Unhide = UnhideItem('HistoryPart');

    const DonateButtonColor=document.getElementById('HeaderHistoryBtn').classList.add('bg-[#b8f36a]')
    const HistoryButtonColor=document.getElementById('HeaderDonateBtn').classList.remove('bg-[#b8f36a]')

})