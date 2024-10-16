function calculateStats() {
    // Get input values
    const hp = parseInt(document.getElementById('hpPoint').value) || 0;
    const def = parseInt(document.getElementById('defPoint').value) || 0;
    const atk = parseInt(document.getElementById('atkPoint').value) || 0;
    const agi = parseInt(document.getElementById('agiPoint').value) || 0;
    
    // Calculate abilities
    let offensive = Math.floor(hp / 10) + Math.floor(def / 10) + atk + Math.floor(agi / 20);
    let defensive = Math.floor(hp / 10) + def + Math.floor(atk / 10) + Math.floor(agi / 20);
    let durability = hp * 4 + def + atk + agi;
    let speed = agi;
    
    // Item HP
    const accHpLeft = parseInt(document.getElementById('accHpLeft').value) || 0;
    const headHp = parseInt(document.getElementById('headHp').value) || 0;
    const accHpRight = parseInt(document.getElementById('accHpRight').value) || 0;
    const wpnHp = parseInt(document.getElementById('wpnHp').value) || 0;
    const amHp = parseInt(document.getElementById('amHp').value) || 0;
    const axyHp = parseInt(document.getElementById('axyHp').value) || 0;
    const handHp = parseInt(document.getElementById('handHp').value) || 0;
    const footHp = parseInt(document.getElementById('footHp').value) || 0;
    const emptyHp = parseInt(document.getElementById('emptyHp').value) || 0;

    const itemHp = accHpLeft + headHp + accHpRight + wpnHp + amHp + axyHp + handHp + footHp + emptyHp;
    
    // Item Atk
    const accAtkLeft = parseInt(document.getElementById('accAtkLeft').value) || 0;
    const headAtk = parseInt(document.getElementById('headAtk').value) || 0;
    const accAtkRight = parseInt(document.getElementById('accAtkRight').value) || 0;
    const wpnAtk = parseInt(document.getElementById('wpnAtk').value) || 0;
    const amAtk = parseInt(document.getElementById('amAtk').value) || 0;
    const axyAtk = parseInt(document.getElementById('axyAtk').value) || 0;
    const handAtk = parseInt(document.getElementById('handAtk').value) || 0;
    const footAtk = parseInt(document.getElementById('footAtk').value) || 0;
    const emptyAtk = parseInt(document.getElementById('emptyAtk').value) || 0;

    const itemAtk = accAtkLeft + headAtk + accAtkRight + wpnAtk + amAtk + axyAtk + handAtk + footAtk + emptyAtk;
    
    // Item Def
    const accDefLeft = parseInt(document.getElementById('accDefLeft').value) || 0;
    const headDef = parseInt(document.getElementById('headDef').value) || 0;
    const accDefRight = parseInt(document.getElementById('accDefRight').value) || 0;
    const wpnDef = parseInt(document.getElementById('wpnDef').value) || 0;
    const amDef = parseInt(document.getElementById('amDef').value) || 0;
    const axyDef = parseInt(document.getElementById('axyDef').value) || 0;
    const handDef = parseInt(document.getElementById('handDef').value) || 0;
    const footDef = parseInt(document.getElementById('footDef').value) || 0;
    const emptyDef = parseInt(document.getElementById('emptyDef').value) || 0;

    const itemDef = accDefLeft + headDef + accDefRight + wpnDef + amDef + axyDef + handDef + footDef + emptyDef;
    
    // Item Agi
    const accAgiLeft = parseInt(document.getElementById('accAgiLeft').value) || 0;
    const headAgi = parseInt(document.getElementById('headAgi').value) || 0;
    const accAgiRight = parseInt(document.getElementById('accAgiRight').value) || 0;
    const wpnAgi = parseInt(document.getElementById('wpnAgi').value) || 0;
    const amAgi = parseInt(document.getElementById('amAgi').value) || 0;
    const axyAgi = parseInt(document.getElementById('axyAgi').value) || 0;
    const handAgi = parseInt(document.getElementById('handAgi').value) || 0;
    const footAgi = parseInt(document.getElementById('footAgi').value) || 0;
    const emptyAgi = parseInt(document.getElementById('emptyAgi').value) || 0;

    const itemAgi = accAgiLeft + headAgi + accAgiRight + wpnAgi + amAgi + axyAgi + handAgi + footAgi + emptyAgi;

    

    // Display results
    document.getElementById('atk').innerText = offensive;
    document.getElementById('def').innerText = defensive;
    document.getElementById('hp').innerText = durability;
    document.getElementById('agi').innerText = speed;

    // Display results
    document.getElementById('finalatk').innerText = offensive + itemAtk;
    document.getElementById('finaldef').innerText = defensive + itemDef;
    document.getElementById('finalhp').innerText = durability  + itemHp;
    document.getElementById('finalagi').innerText = speed + itemAgi;

}

// 값을 안전하게 가져오기 위한 함수
function getValue(id) {
    return parseInt(document.getElementById(id).value) || 0;
}

function itemeStats() {

    // 장비에서 추가되는 내구력 가져오기
    const accHpLeft = getValue('accHpLeft');
    const headHp = getValue('headHp');
    const accHpRight = getValue('accHpRight');
    const wpnAp = getValue('wpnAp');
    const amHp = getValue('amHp');
    const axyHp = getValue('axyHp');
    const handHp = getValue('handHp');
    const footHp = getValue('footHp');
    const emptyHp = getValue('emptyHp');

    // 최종 내구력 계산 (기본 내구력 + 각 장비 내구력)
    const finalHp = baseHp + accHpLeft + headHp + accHpRight + wpnAp + amHp + axyHp + handHp + footHp + emptyHp;

    // 최종 내구력 결과를 출력
    document.getElementById('hp').textContent = finalHp;
}

