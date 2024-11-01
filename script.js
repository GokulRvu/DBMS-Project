document.getElementById('diseaseCheckerForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Gather severity values from the form
    const severities = [
      parseInt(document.querySelector('[name="severity1"]').value),
      parseInt(document.querySelector('[name="severity2"]').value),
      parseInt(document.querySelector('[name="severity3"]').value),
      parseInt(document.querySelector('[name="severity4"]').value),
    ];
  
    // Calculate the average severity
    const avgSeverity = severities.reduce((a, b) => a + b) / severities.length;
  
    // Determine severity message
    let severityMessage = '';
    if (avgSeverity <= 1.5) {
      severityMessage = 'Your symptoms are mild.';
    } else if (avgSeverity <= 2.5) {
      severityMessage = 'Your symptoms are moderate.';
    } else {
      severityMessage = 'Your symptoms are severe. Consider seeking medical advice.';
    }
  
    // Display the result
    document.getElementById('result').textContent = severityMessage;
  });


  
  