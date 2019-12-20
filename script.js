const name = document.getElementById('name')
var address = document.getElementById('address')
const contact = document.getElementById('contact')
const id = document.getElementById('id')

function getClient(){
    axios
        .get("https://piyush-admin.herokuapp.com/client")
        .then(res => showClient(res))
        .catch(err => console.log(err))
}

function showClient({ data }) {

    document.getElementById('res').innerHTML = `
    <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Address</th>
                        <th scope="col">Edit Client</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>`;

    const tbody = document.querySelector('table tbody')
    output = '';
    i = 01;
   
    data.forEach(client => {
      const {name, mobileNo, address} = client;
        
        output += `<tr>
          <th>${"PE"+ i}</th>
          <td>${name}</td>
          <td>${mobileNo}</td>
          <td>${address}</td>
          <td>
            <button type="button" class="btn btn-primary" onclick="showEditModal('${client.name}', '${client.address}', '${client.mobileNo}','${client._id}')" id="edit">Edit</button>
          </td>
      `;
      i++
    });
    tbody.innerHTML = output;
}
  

function addClient(){
    console.log("ADD");
    
    document.getElementById('res').innerHTML = `
    <div class="container w-75">
                <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label>Client ID</label>
                <input id="cid" type="text" class="form-control"  placeholder="Client ID">
                </div>
                <div class="form-group col-md-6">
                <label >Date</label>
                <input type="date" class="form-control" placeholder="Date">
                </div>
            </div>
            <div class="form-row">
            <div class="form-group col-md-6">
                <label>Name</label>
                <input id="name" type="text" class="form-control" placeholder="Client Name">
            </div>
            <div class="form-group col-md-6">
                <label>Contact</label>
                <input id="mobile" type="text" class="form-control" placeholder="Client Number">
            </div>
            </div>
            <div class="form-row">
            <div class="form-group col-md-6">
                <label>Area</label>
                <input id="area" class="form-control" placeholder="Area Name" list="areaList">
                <datalist id="areaList">
                    <option>Global City</option>
                    <option>Y.K Nagar</option>
                    <option>HDIL Layout</option>
                </select>
            </div>

            <div class="form-group col-md-6">
                <label>Building</label>
                <input id="buildingName" class="form-control" list="buildingList" placeholder="Work Name">
                    <datalist id="buildingList"></datalist>
            </div>

            <div class="form-group col-md-6">
                <label>Wing</label>
                <input id="wing" type="text" class="form-control" placeholder="Wing Name" list="wingList">
                <datalist id="wingList"></datalist>
            </div>

            <div class="form-group col-md-6">
                <label>Room</label>
                <input id="room" type="text" class="form-control" placeholder="Room Number" list="roomNo">
            </div>

            <div class="form-group col-md-6">
                <label>Work</label>
                <input id="work" class="form-control" list="workList" placeholder="Work Name">
                <datalist id="workList">
                    <option>Electric</option>
                    <option>Plumbing</option>
                    <option>Hardware</option>
                    <option>Reparing</option>
                </datalist>
            </div>
            
            <div class="form-group col-md-6">
                <label>Goods</label>
                <input id="goods" class="form-control" list="boolen" placeholder="Yes/No">
                <datalist id="boolen">
                    <option>Yes</option>
                    <option>No</option>
                </datalist>
            </div>
            </div>
            </form>
        </div>  
        <center>
        <button  class="btn btn-danger my-3" id="post">Add Client</button>
        </center>
    </div>`;

    function postClient(){
        var cid = document.getElementById("cid").value;
        var name = document.getElementById("name").value;
        var mobile = document.getElementById("mobile").value;
        var work = document.getElementById("work").value;
        var area = document.getElementById("area").value;
        var buildingName = document.getElementById("buildingName").value;
        var wing = document.getElementById("wing").value;
        var room = document.getElementById("room").value;

        address = [
            area = document.getElementById("area").value,
            building = document.getElementById("buildingName").value,
            wing = document.getElementById("wing").value,
            room = document.getElementById("room").value
        ]
        var addRev  = address.reverse();
        var addr = addRev.toString();
        
        axios
        .post("https://piyush-admin.herokuapp.com/client",{
            name: name,
            mobileNo: mobile,
            address: addr,
            work: work
        })
        .then(res => console.log(res))
        .catch(err => console.error(err));

        console.log(cid)
        console.log(name)
        console.log(mobile)
        console.log(addr)
        console.log(work)
        console.log("ADDED")
    }

    var buildingNames = new Array (
        "Agarwal Lifestyle A",
        "Agarwal Lifestyle B",
        "Agarwal Lifestyle C",
        "Agarwal Solitaire",
        "Agarwal Paramount",
        "Bhoomi Acropolis",
        "Bhavani View",
        "Blu Pearl",
        "Cosmos Regency",
        "M-Avenue",
        "J-Avenue",
        "H-Avenue",
        "G-Avenue",
        "I-Avenue",
        "K-Avenue",
        "L-Avenue",
        "D-Avenue",
        "Poonam Avenue",
        "Poonam ParkView",
        "Pooman Heights",
        "Poonam Imperial",
        "Bachraj Landmark",
        "Bachraj Residency",
        "Bachraj Paradise",
        "Bachraj LifeSpace",
        "Sumit Greendale",
        "Sumit Greendale NX",
        "Shree Shashwat",
        "Star Heights",
        "Shanti Homes",
        "Siddhi Homes",
        "Evershine Homes",
        "Evershine Avenue A3",
        "Evershine Avenue A6",
        "Ekta Parksville Central",
        "Ekta Parksville Lincoln",
        "Ekta Parksville Sentosa",
        "Ekta Parksville Regent",
        "Ekta Brooklyn Park",
        "Vinay Unique Gardens",
        "Vinay Unique Homes",
        "Vinay Unique Heights",
        "Vinay Unique Imperia",
        "Vinay Unique Corner",
        "Joyti Harmony",
        "Mandar Avenue",
        "Mandar Shlip",
        "Mahavir heights",
        "Casa Vista",
        "New Home Paradise",
        "Mathuresh Krupa",
        "Rachna Tower",
        "Datta Krishna Height",
    )
        
    var opt = '';
    for(var i = 0; i < buildingNames.length; ++i){

        opt += '<option value="'+buildingNames[i]+'"/>';
    }
    var buldList = document.getElementById("buildingList").innerHTML = opt;
    
    var str='';
    var wing = new Array(
        "A-Wing",
        "B-Wing",
        "C-Wing",
        "D-Wing",
        "E-Wing",
        "F-Wing",
        "G-Wing",
        "H-Wing",
        "I-Wing",
        "J-Wing",
        "K-Wing",
        "L-Wing",
        "M-Wing",
        "O-Wing",
        "P-Wing",
        "Building.No.01",
        "Building.No.02",
        "Building.No.03",
        "Building.No.04",
        "Building.No.05",
        "Building.No.06",
        "Building.No.07",
        "Building.No.08",
        "Building.No.09",
        "Building.No.10",
        "Building.No.11",
        "Building.No.12",
        "Building.No.13",
        "Building.No.14",
        "Building.No.15",
        "Building.No.16",
        "Building.No.17",
        "Building.No.18",
        "Building.No.19",
        "Building.No.20",
    );
    
    for (var i=0; i < wing.length;++i){
        
        str += '<option value="'+wing[i]+'"/>'; 
    }
    var my_list = document.getElementById("wingList").innerHTML= str;

    document.getElementById('post').addEventListener('click', postClient);
        
}


const showEditModal = (ClientName, ClientAddress, ClientMobileNo, ClientID) => {
    name.value = ClientName;
    address.value = ClientAddress;
    id.value = ClientID;
    contact.value = ClientMobileNo;
    $('#editClientModal').modal('show');
}

document.querySelector('#editClientForm').addEventListener('submit', e => {
    e.preventDefault();
    axios
        .put(`https://piyush-admin.herokuapp.com/client/${id.value}`, {
            name: name.value,
            mobileNo: contact.value,
            address: address.value
        })
        .then(client =>  clientUpdated())
        .catch(err => console.log(err))
})

function clientUpdated(){
    console.log("POST");
    
}

document.getElementById("get").addEventListener('click', getClient);
document.getElementById("add").addEventListener('click', addClient);
getClient();