function onFocus(a) {
    const input = document.getElementById(a.getAttribute('name'))
    const inputLabel = document.getElementById(`${a.getAttribute('name')}-label`)
    input.focus()
    inputLabel.style.margin = '-8px 10px'
}

function onSubmit(e) {
    
    e.preventDefault();

    let verified = 0
    for (let index = 0; index < e.target.length; index++) {
        let element = document.getElementById(`${e.target[index].getAttribute('id')}-error`);
        
        if(e.target[index].getAttribute('id') !== 'select' && e.target[index].getAttribute('id') !== 'submit') {

            if(!e.target[index].value) {
                element.style.display = 'block'
            } else {
                element.style.display = 'none';
                verified++
            }
        } else {

        }
    }

    if(verified == 5) {
        const button = document.getElementById('submit')
        button.style.background = '#FFFFFFFF';
        button.style.color = '#14E298';
        button.textContent = 'Obrigado!'

        const message = document.getElementById('message')
        message.style.display = 'block'

        const sectionFooter = document.getElementById('footer');
        sectionFooter.style.maxHeight = '20px'
        sectionFooter.style.opacity = '1'

    }



   
}