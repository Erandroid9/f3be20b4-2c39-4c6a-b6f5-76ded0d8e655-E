export const onUSSDResponse=(response)=>{

    const historyDiv = document.getElementById('history');
    const time = new Date().toLocaleTimeString();
    historyDiv.textContent += `[${time}] ${response}\n`;
    historyDiv.scrollTop = historyDiv.scrollHeight;

};