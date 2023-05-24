document.getElementById('output').style.visibility = 'hidden';
document.getElementById('dayInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let day = e.target.value;
    document.getElementById('timeOutput').innerHTML = day * 24;
    document.getElementById('minutOutput').innerHTML = day * 24 * 60;
    document.getElementById('secundOutput').innerHTML = day * 24 * 60 * 60;
});  