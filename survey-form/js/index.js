// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

function serialize(form) {
  if (!form || form.nodeName !== "FORM") {
    console.error("form is invaild.");
    return {};
  }
  var i, j;
  var ret = {};
  var elements = form.elements;
  for (i = elements.length - 1; i >= 0; i = i - 1) {
    if (elements[i].name === "") {
      continue;
    }
    switch (elements[i].nodeName) {
      case 'INPUT':
        switch (elements[i].type) {
          case 'text':
          case 'hidden':
          case 'password':
          case 'button':
          case 'reset':
          case 'submit':
          case 'email':
          case 'number':
            ret[elements[i].name] = elements[i].value;
            break;
          case 'radio':
            if (elements[i].checked) {
              ret[elements[i].name] = elements[i].value;
            }
            break;
          case 'checkbox':
            if (elements[i].checked) {
              var temp = ret[elements[i].name];
              if (temp) {
                temp.push(elements[i].value);
              } else {
                temp = [elements[i].value];
              }
              ret[elements[i].name] = temp;
            }
            break;}

        break;
      case 'file':
        break;
      case 'TEXTAREA':
        ret[elements[i].name] = elements[i].value;
        break;
      case 'SELECT':
        switch (elements[i].type) {
          case 'select-one':
            ret[elements[i].name] = elements[i].value;
            break;
          case 'select-multiple':
            var temp = [];
            for (j = 0; j < elements[i].options.length; j++) {
              temp.push(elements[i].options[j].value);
            }
            ret[elements[i].name] = temp;
            break;}

        break;}

  }
  return ret;
}

function handleSubmit() {
  var form = document.getElementById("survey-form");
  var values = serialize(form);
  alert(JSON.stringify(values, null, '  '));
}