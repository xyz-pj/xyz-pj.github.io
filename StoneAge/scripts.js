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


    // Display results
    document.getElementById('atk').innerText = offensive;
    document.getElementById('def').innerText = defensive;
    document.getElementById('hp').innerText = durability;
    document.getElementById('agi').innerText = speed;

    //Points used
    const points_used = hp + def + atk + agi;
    document.getElementById('points_used').innerText = points_used;
    
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

    // Final Status    
    const finalatk = offensive + itemAtk;
    const finaldef = defensive + itemDef;
    const finalhp = durability  + itemHp;
    const finalagi = speed + itemAgi;


    // Display results
    document.getElementById('finalatk').innerText = finalatk
    document.getElementById('finaldef').innerText = finaldef
    document.getElementById('finalhp').innerText = finalhp
    document.getElementById('finalagi').innerText = finalagi


    // Riding
    const petAtk = parseInt(document.getElementById('petAtk').value) || 0;
    const petDef = parseInt(document.getElementById('petDef').value) || 0;
    const petAgi = parseInt(document.getElementById('petAgi').value) || 0;

    const finalRidingatk = (offensive * 0.7) + (petAtk * 0.7) + itemAtk;
    const finalRidingdef = (defensive * 0.7) + (petDef * 0.7) + itemDef;
    const finalRidingagi = (speed * 0.2) + (petAgi * 0.8) + itemAgi;


    document.getElementById('finalRidingatk').innerText = finalRidingatk;
    document.getElementById('finalRidingdef').innerText = finalRidingdef;
    document.getElementById('finalRidingagi').innerText = finalRidingagi;
    

}

function saveData() {
    // 저장 확인 메시지
    const confirmation = confirm("저장 하시겠습니까?");
    
    if (confirmation) {
        const data = {
            hpPoint: document.getElementById('hpPoint').value,
            defPoint: document.getElementById('defPoint').value,
            atkPoint: document.getElementById('atkPoint').value,
            agiPoint: document.getElementById('agiPoint').value,
            accHpLeft: document.getElementById('accHpLeft').value,
            headHp: document.getElementById('headHp').value,
            accHpRight: document.getElementById('accHpRight').value,
            wpnHp: document.getElementById('wpnHp').value,
            amHp: document.getElementById('amHp').value,
            axyHp: document.getElementById('axyHp').value,
            handHp: document.getElementById('handHp').value,
            footHp: document.getElementById('footHp').value,
            emptyHp: document.getElementById('emptyHp').value,
            accAtkLeft: document.getElementById('accAtkLeft').value,
            headAtk: document.getElementById('headAtk').value,
            accAtkRight: document.getElementById('accAtkRight').value,
            wpnAtk: document.getElementById('wpnAtk').value,
            amAtk: document.getElementById('amAtk').value,
            axyAtk: document.getElementById('axyAtk').value,
            handAtk: document.getElementById('handAtk').value,
            footAtk: document.getElementById('footAtk').value,
            emptyAtk: document.getElementById('emptyAtk').value,
            accDefLeft: document.getElementById('accDefLeft').value,
            headDef: document.getElementById('headDef').value,
            accDefRight: document.getElementById('accDefRight').value,
            wpnDef: document.getElementById('wpnDef').value,
            amDef: document.getElementById('amDef').value,
            axyDef: document.getElementById('axyDef').value,
            handDef: document.getElementById('handDef').value,
            footDef: document.getElementById('footDef').value,
            emptyDef: document.getElementById('emptyDef').value,
            accAgiLeft: document.getElementById('accAgiLeft').value,
            headAgi: document.getElementById('headAgi').value,
            accAgiRight: document.getElementById('accAgiRight').value,
            wpnAgi: document.getElementById('wpnAgi').value,
            amAgi: document.getElementById('amAgi').value,
            axyAgi: document.getElementById('axyAgi').value,
            handAgi: document.getElementById('handAgi').value,
            footAgi: document.getElementById('footAgi').value,
            emptyAgi: document.getElementById('emptyAgi').value,

            accNameLeft: document.getElementById('accNameLeft').value,
            headName: document.getElementById('headName').value,
            accNameRight: document.getElementById('accNameRight').value,
            awpnName: document.getElementById('awpnName').value,
            amName: document.getElementById('amName').value,
            axyName: document.getElementById('axyName').value,
            handName: document.getElementById('handName').value,
            footName: document.getElementById('footName').value,
            emptyName: document.getElementById('emptyName').value,
            emptyName: document.getElementById('emptyName').value


        };

        localStorage.setItem('statsData', JSON.stringify(data));
        alert("저장 완료!");
    } else {
        alert("저장을 취소했습니다.");
    }
}

function loadData() {
    const confirmation = confirm("로드 하시겠습니까?");
    
    if (confirmation) {
        const savedData = localStorage.getItem('statsData');
        if (savedData) {
            const data = JSON.parse(savedData);
            
            document.getElementById('hpPoint').value = data.hpPoint || 0;
            document.getElementById('defPoint').value = data.defPoint || 0;
            document.getElementById('atkPoint').value = data.atkPoint || 0;
            document.getElementById('agiPoint').value = data.agiPoint || 0;
            document.getElementById('accHpLeft').value = data.accHpLeft || 0;
            document.getElementById('headHp').value = data.headHp || 0;
            document.getElementById('accHpRight').value = data.accHpRight || 0;
            document.getElementById('wpnHp').value = data.wpnHp || 0;
            document.getElementById('amHp').value = data.amHp || 0;
            document.getElementById('axyHp').value = data.axyHp || 0;
            document.getElementById('handHp').value = data.handHp || 0;
            document.getElementById('footHp').value = data.footHp || 0;
            document.getElementById('emptyHp').value = data.emptyHp || 0;
            document.getElementById('accAtkLeft').value = data.accAtkLeft || 0;
            document.getElementById('headAtk').value = data.headAtk || 0;
            document.getElementById('accAtkRight').value = data.accAtkRight || 0;
            document.getElementById('wpnAtk').value = data.wpnAtk || 0;
            document.getElementById('amAtk').value = data.amAtk || 0;
            document.getElementById('axyAtk').value = data.axyAtk || 0;
            document.getElementById('handAtk').value = data.handAtk || 0;
            document.getElementById('footAtk').value = data.footAtk || 0;
            document.getElementById('emptyAtk').value = data.emptyAtk || 0;
            document.getElementById('accDefLeft').value = data.accDefLeft || 0;
            document.getElementById('headDef').value = data.headDef || 0;
            document.getElementById('accDefRight').value = data.accDefRight || 0;
            document.getElementById('wpnDef').value = data.wpnDef || 0;
            document.getElementById('amDef').value = data.amDef || 0;
            document.getElementById('axyDef').value = data.axyDef || 0;
            document.getElementById('handDef').value = data.handDef || 0;
            document.getElementById('footDef').value = data.footDef || 0;
            document.getElementById('emptyDef').value = data.emptyDef || 0;
            document.getElementById('accAgiLeft').value = data.accAgiLeft || 0;
            document.getElementById('headAgi').value = data.headAgi || 0;
            document.getElementById('accAgiRight').value = data.accAgiRight || 0;
            document.getElementById('wpnAgi').value = data.wpnAgi || 0;
            document.getElementById('amAgi').value = data.amAgi || 0;
            document.getElementById('axyAgi').value = data.axyAgi || 0;
            document.getElementById('handAgi').value = data.handAgi || 0;
            document.getElementById('footAgi').value = data.footAgi || 0;
            document.getElementById('emptyAgi').value = data.emptyAgi || 0;

            document.getElementById('accNameLeft').value = data.accNameLeft || '장신구 1';
            document.getElementById('headName').value = data.headName || '투구';
            document.getElementById('accNameRight').value = data.accNameRight || '장신구 2';
            document.getElementById('awpnName').value = data.awpnName || '무기';
            document.getElementById('amName').value = data.amName || '방어구';
            document.getElementById('axyName').value = data.axyName || '보조무기';
            document.getElementById('handName').value = data.handName || '장갑';
            document.getElementById('footName').value = data.footName || '신발';
            document.getElementById('emptyName').value = data.emptyName || '비고';

            alert("로드 완료!");
        } else {
            alert("저장 된 데이터가 없습니다.");
        }
    } else {
        alert("로드를 취소했습니다.");
    }
}