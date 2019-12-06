const Generate = (tracking, questions, progressBox, nextBtn, submitBtn, endMessage, variant, setValue) => {
    const duplicate = JSON.parse(JSON.stringify(questions));

    // Check if all required fileds are completed
    let requiredFields = 0;
    let minCheckedAnswers = 2;

    for (let i =0; i < duplicate.length; i++) {
        if (duplicate[i].question.trim() === 0) requiredFields++;
       
        let answersChecked = 0;
        duplicate[i].answers.forEach(answer => {  if (answer.trim().length !== 0) answersChecked++; })

        if (duplicate[i].none.checked) {
            if (duplicate[i].none.value.trim().length !== 0) answersChecked++;
            else {requiredFields++;}
        }

        if (answersChecked < minCheckedAnswers) requiredFields++;

        if (duplicate[i].question.trim().length === 0) requiredFields++;
    }

    if (tracking.exposed !== false && tracking.exposed.trim().length === 0) requiredFields++;
    if (tracking.noneexposed !== false && tracking.noneexposed.trim().length === 0) requiredFields++;
    if (nextBtn.trim().length === 0) requiredFields++;
    if (submitBtn.trim().length === 0) requiredFields++;
    if (endMessage.trim().length === 0) requiredFields++;

    if (requiredFields !== 0) return alert('Please complete all the required fields (at least two answers per question)');

    if (tracking.exposed || tracking.noneexposed) {
        if (tracking.exposed.indexOf('http') !== 0 || tracking.noneexposed.indexOf('http') !== 0) {
            console.log(tracking.exposed.indexOf('http://'), tracking.exposed.indexOf('https://'))
            requiredFields++;
            return alert('Please check tracking pixels for spelling erros. Make sure to add just the URL, without the image tag');
        }
    }

    //Prepare for output
    duplicate.forEach((el, index) => {
        let answers = el.answers.filter(answer => answer.trim().length !== 0 ? answer : false);

        el.answers = answers.map((answer, idx) => {return { value: answer, id: `Q${index + 1}_Answer${idx + 1}` } });
        el.none = el.none.checked ? el.none = { value: el.none.value, id: `Q${index + 1}_Answer${el.answers.length + 1}` } : false;
        el.zIndex = duplicate.length - index;
        el.button = index !== (duplicate.length - 1) ? nextBtn : submitBtn;
        el.selectionType = el.multiple === true ? 'checkbox' : 'radio';
        el.progress = progressBox === true ? duplicate.length : false;
    })

    const exposedPixel = JSON.parse(JSON.stringify(duplicate));
    exposedPixel.forEach(question => question.trackPixel = tracking.exposed)

    const nonExposedPixel = JSON.parse(JSON.stringify(duplicate))
    nonExposedPixel.forEach(question => question.trackPixel = tracking.noneexposed)

    let bps = [exposedPixel, nonExposedPixel]

    bps = bps.map((bp) => {
        let value = ''

        bp.forEach(el => {
            el.answers.forEach(answer => value += `// ${answer.id} ---> ${answer.value} \n`)
            if (el.none !== false) { value += `// ${el.none.id} ---> ${el.none.value} \n\n` } else { value += '\n' }
        })

        value += 'creative.screens[0].onshow.addEventListener(function () { \n'
        value += '\tvar firstScreen = document.getElementById(creative.screens[0].name); \n'
        value += `\tfirstScreen.classList.add('${variant}'); \n \n`

        bp.forEach((el, idx) => {
            let pixel;

            if (idx === bp.length - 1) {
                pixel = el.trackPixel === false ? el.trackPixel : JSON.stringify(el.trackPixel.replace('http://', "https://"))
            } else { pixel = false; }

            value += `\tnew Survey(
            ${JSON.stringify(el.question)},    
            ${JSON.stringify(el.answers)},
            ${JSON.stringify(el.none)},
            ${JSON.stringify(el.button)},
            ${el.progress},
            ${JSON.stringify(el.selectionType)},
            ${el.randomize},
            ${pixel},
            ${el.zIndex}
        ) \n`;
        })

        value += `\tnew EndPage(${JSON.stringify(endMessage)}) \n`
        value += '})'

        return value;
    })

    setValue(bps)
}

export default Generate