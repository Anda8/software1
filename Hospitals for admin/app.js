function addHospital(){
    const Title = prompt('Add Hospital Title', '');
    const Description = prompt('Add Hospital Description','' );

    if (Title !== null && Description !== null) {
 const hospitalSection = document.createElement('section');
 hospitalSection.classList.add('.hospital');
 hospitalSection.innerHTML = `
            <img src="images/default.jpg" alt="${Title}" class="hospital-img">
            <div class="info">
                <div class="title">${Title}</div>
                <p>${Description}</p>
                <div class="availability">
                    <div onclick="editHospital(this)"><i class="fa-solid fa-pen-to-square"></i> Edit</div>
                    <div onclick="deleteHospital(this)"><i class="fa-solid fa-trash"></i> Delete</div>
                </div>
            </div>
        `;
        const mainContainer = document.querySelector('main');
        mainContainer.appendChild(hospitalSection);
        const totalCount = document.querySelector('header div div');
        totalCount.innerText = `Total: ${document.querySelectorAll('.hospital').length}`;
        
        alert('New hospital added successfully!');
    } else {
        alert('Hospital addition cancelled.');
    }
}
function editHospital(event) {
    const hospitalSection = event.target.closest('.hospital');
    const hospitalTitle = hospitalSection.querySelector('.title').innerText;
    const hospitalDetail = hospitalSection.querySelector('p').innerText;

    const updatedTitle = prompt('Edit Hospital Title', hospitalTitle);
    const updatedDescription = prompt('Edit Hospital Description', hospitalDetail);
    if (updatedTitle !== null && updatedDescription !== null) {
        hospitalSection.querySelector('.title').innerText = updatedTitle;
        hospitalSection.querySelector('p').innerText = updatedDescription;
        alert('Hospital details updated!');
    } else {
        alert('Edit cancelled.');
    }
    // alert('Editing: ' + hospitalTitle);
    console.log(event.target.closest('.hospital'));
    console.log(hospitalSection.querySelector('.title').innerText);

    
}
function deleteHospital(event){
    const hospitalSection = event.target.closest('.hospital');
    const hospitalTitle = hospitalSection.querySelector('.title').innerText;

    const confirmed=confirm('Are you sure you want to delete ' + hospitalTitle + '?');
    if(confirmed){
        hospitalSection.remove();
        updateTotalCount();
    }
    console.log(event.target.closest('.hospital'));
    
}
function updateTotalCount() {
    const totalCountElement = document.querySelector('header div div');
    const hospitalSections = document.querySelectorAll('.hospital');
    totalCountElement.innerText = 'Total: ' + hospitalSections.length;
}
window.onload = function () {
    const editButtons = document.querySelectorAll('.availability div:nth-child(1)');
    editButtons.forEach(button=>{
        button.addEventListener('click',editHospital)
    });
    const deleteButtons = document.querySelectorAll('.availability div:nth-child(2)');
    deleteButtons.forEach(button => {
        button.addEventListener('click', deleteHospital);
    });
    updateTotalCount();
}