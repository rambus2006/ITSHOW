document.addEventListener('DOMContentLoaded', function() {
    const imageInput = document.getElementById('imageInput');
    
    const containers = [
        { id: 'r1contain', imgId: 'r1', style: { width: '188px', height: '207px', left: '170px', top: '180px', rotate: '10deg' } },
        { id: 'r2contain', imgId: 'r2', style: { width: '188px', height: '207px', left: '285px', top: '520px', rotate: '-7deg' } },
        { id: 'r3contain', imgId: 'r3', style: { width: '188px', height: '207px', left: '300px', top: '170px', rotate: '15deg' } },
        { id: 'r4contain', imgId: 'r4', style: { width: '188px', height: '207px', left: '200px', top: '160px', rotate: '-10deg' } },
        { id: 'r5contain', imgId: 'r5', style: { width: '188px', height: '207px', left: '521px', top: '163px', rotate: '-5deg' } },
        { id: 'r6contain', imgId: 'r6', style: { width: '188px', height: '207px', left: '1030px', top: '521px', rotate: '-10deg' } },
        { id: 'r7contain', imgId: 'r7', style: { width: '188px', height: '207px', left: '1258px', top: '163px', rotate: '-10deg' } }
    ];
    
    containers.forEach(container => {
        const element = document.getElementById(container.id);
        element.addEventListener('click', function() {
            imageInput.dataset.containerId = container.id; 
            imageInput.click();
        });
    });

    imageInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        const containerId = imageInput.dataset.containerId; 

        if (file && containerId) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const imgElement = document.getElementById(containers.find(c => c.id === containerId).imgId); 
                imgElement.src = e.target.result;
                imgElement.alt = file.name;

                const style = containers.find(c => c.id === containerId).style; 
                imgElement.style.width = style.width;
                imgElement.style.height = style.height;
                imgElement.style.position = 'absolute';
                imgElement.style.left = style.left;
                imgElement.style.top = style.top;
                imgElement.style.transform = `rotate(${style.rotate})`;
            };

            reader.readAsDataURL(file);
        }
    });
});
