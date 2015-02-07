// Scripts file


function moveCalendar(month, year)
{
    var xmlHttp;
    // Create xmlHttp Object
    try
    {
        // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    }
    catch (e)
    {
        try
        {
            // Internet Explorer
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e)
        {
            try
            {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e)
            {
                alert("Your browser does not support AJAX!");
                return false;
            }
        }
    }
    // Event Handler - EventListener
    xmlHttp.onreadystatechange = function()
    {
        if (xmlHttp.readyState == 4) // 4: The Request is complete
        {
            document.getElementById('calendar').innerHTML = xmlHttp.responseText; // Response
        }
    }
    // Request
    xmlHttp.open("GET", "../modules/mod_calendar.php?month="+month+"&amp;year="+year, true);
    xmlHttp.send(null);
}
