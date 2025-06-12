function ToggleCalculator() {
    const $calculator = $('.calculator-calculator')
    if (!$calculator.is(':visible')) {
        $('.calculator-calculator').show()
        $('body').css('overflow', 'hidden')
        $('.app').css('filter', 'blur(1px)')
    } else {
        $('.calculator-calculator').hide()
        $('.app').css('filter', 'none')
        $('body').css('overflow', 'auto')
    }
}

$(function () {
    const display = document.querySelector('.calculator-display')
    const buttons = document.querySelectorAll('button')
    const singns = ['%', '*', '/', '-', '+', '=']
    let output = ''

    const calculate = (btnValue) => {
        if (btnValue === '=' && output !== '') {
            output = eval(output.replace('%', '/100'))
        } else if (btnValue === 'AC') {
            output = ''
        } else if (btnValue === 'DEL') {
            output = output.toString().slice(0, -1)
        } else {
            if (output === '' && singns.includes(btnValue)) return

            output += btnValue
        }
        display.value = output
    }

    buttons.forEach((button) => {
        button.addEventListener('click', e => calculate(e.target.dataset.value))
    })

})