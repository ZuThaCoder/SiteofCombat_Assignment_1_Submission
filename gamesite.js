


/*----------------------------------------- Search Functionality*/
document.addEventListener('DOMContentLoaded', function()
{
    const search = document.getElementById('txtSearch');

    console.log(search);

    if (search)
    {
        search.addEventListener('keyup', e =>
        {
            let currentValue = e.target.value.toLowerCase();
            let eventName = document.querySelectorAll('label');

            eventName.forEach(eventName=>{
                if(eventName.textContent.toLowerCase().includes(currentValue))
                {
                    eventName.parentNode.style.display = 'grid';
                }
                else
                {
                    eventName.parentNode.style.display = 'none';
                }

            })

            console.log(currentValue);
        });
    }
});



function register()
{
    const user =
{
    username: document.getElementById("txtName").value,
    gtag: document.getElementById("txtGtag").value,
    email:document.getElementById("txtEmail").value,

    
    confirmation()
    {
        if(this.username == "" || this.gtag == "" || this.email == "")
        {
            alert('Please Fill all fields')
            return;
        }

        document.getElementById("reg-output").innerHTML = `Welcome ${this.username},<br> A.K.A. ${this.gtag}.<br>Your legend Awaits`;
    }

}

user.confirmation();

return user;
}











function bcheck()
{
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenu.classList.toggle('active');
}

/*
function checkDimension() {
  // Check if the window width is exactly or under 768px
  
  if (window.innerWidth <= 768) {
    burgercheck();
  }

  else
  {
    otherFunction();
  }
}


function burgercheck()
{
    var x = document.getElementById('burger');
  
  if (x.style.display === "block") 
  {
    x.style.display = "none";
  } 
  
  else {
    x.style.display = "block";
  }

}

function otherFunction() {
  

  var x = document.getElementById("mobile-menu");
  
    x.style.display = "inline-block";

}
*/
function addNewEvent()
{
    let title = document.getElementById('eventName').value;
    let desc = document.getElementById('eventDescription').value;
    let date = document.getElementById('eventDate').value;
    let prize = document.getElementById('eventPrize').value;
    let host = document.getElementById('eventHost').value;

    let image = document.getElementById('eventImage').files[0];

    let imageURL = image ? URL.createObjectURL(image) : "";

    if (title == "" || desc == "" || date == "" || host == "")
    {
        alert('Please ensure that the event at least has a Title, Date, Host Name and Description');

        document.getElementById('eventName').style.borderColor = "red";
        document.getElementById('eventDescription').style.borderColor = "red";
        document.getElementById('eventDate').style.borderColor = "red";
        document.getElementById('eventHost').style.borderColor = "red";

        return;
    }

    if(prize == "")
    {
        prize = "N/A";
    }

    document.getElementById('eventDisplay').innerHTML += `
        <br>
    <div class="event">

            ${imageURL ? `<img src="${imageURL}">` : ""}

            <Label class="title">
                <h2>Title: ${title}</h2>
                <h3>Host: ${host}</h3>
                <hr><br>
                <p>${desc}</p>
                <br>
                <p>Prize: ${prize}</p>
                <p>Date: ${date}</p>
            </Label>

        </div>`;
}


function hide()
{
     const content = document.getElementById('eventMaker');

    content.classList.toggle('hidden');
    

console.log("Event Show ran");


}


function registration()
{

}