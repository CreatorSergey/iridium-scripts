/**
 * Получить завтрашний день в формате (iRidi)
 * @return {iDate} - объект времени
 */
function getIridiDateTommorow()
{
    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return new iDate(
        tomorrow.getFullYear(), 
        tomorrow.getMonth() + 1, 
        tomorrow.getDate(), 
        tomorrow.getHours(), 
        tomorrow.getMinutes(), 
        tomorrow.getSeconds(), 
        tomorrow.getMilliseconds());
}

/**
 * Пример использования
 */
{
    var tommorow = getIridiDateTommorow();
    
    IR.Log("Date tommorow " + tommorow.year + "." + tommorow.month + "." + tommorow.date);
    IR.Log("Time tommorow " + tommorow.hours + ":" + tommorow.minutes + ":" + tommorow.seconds + "." + tommorow.ms);
    IR.Log("Value tommorow " + tommorow.value);
}

// doc: https://dev.iridi.com/JS_Guide#%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82_iDate
