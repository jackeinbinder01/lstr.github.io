function updateOutput() {
    var inputText = document.getElementById("input").value;
    var separatorText = document.getElementById("separator").value;
    var quoteType = document.querySelector('input[name="quote"]:checked');

    if (inputText == "") {
        ""
    }
    else 
    { 
        var quoteChar = "";
        if (quoteType !== null) {
            quoteType = quoteType.value;
            if (quoteType == "Single Quote") {
                quoteChar = "'";
            } else if (quoteType == "Double Quote") {
                quoteChar = '"';
            }
        }
    }
    var inputLines = inputText.trim().split("\n");
    var outputLines = inputLines.map(function(line) {
        if (quoteChar) {
            line = quoteChar + line + quoteChar;
        }
        return line;
    });

    var outputText = outputLines.join(separatorText);
    document.getElementById("output").value = outputText;
}

function copyToClipboard() {
    var errorMessage = "Please enter input"
    if (document.getElementById("input").value == "") {
        alert(errorMessage)
    }
    else {
    var outputText = document.getElementById("output").value;
    navigator.clipboard.writeText(outputText);
    var successMessage = "Copied to clipboard";
    alert(successMessage)
    document.execCommand("copy");
    }
}

var input = document.getElementById("input");
input.addEventListener("input", updateOutput);

var separator = document.getElementById("separator");
separator.addEventListener("input", updateOutput);

var radioButtons = document.querySelectorAll('input[type="radio"]');
for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("click", updateOutput);
} 



function toggleTheme() { 
    // Obtains an array of all <link> 
    // elements. 
    // Select your element using indexing. 
    var theme = document.getElementsByTagName('link')[0]; 

    // Change the value of href attribute  
    // to change the css sheet. 
    if (theme.getAttribute('href') == '/static/lstr_dark_theme.css') { 
        theme.setAttribute('href', '/static/lstr_light_theme.css'); 
    } else { 
        theme.setAttribute('href', '/static/lstr_dark_theme.css'); 
    } 
} 