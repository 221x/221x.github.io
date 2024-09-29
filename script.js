document.getElementById('survey-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const robloxUsername = document.getElementById('name').value;
    const comments = document.getElementById('comments').value;
    const hoursChecked = document.getElementById('hours-checkbox').checked;

    // Prepare data to send to Discord webhook
    const payload = {
        content: `**@drokeinroll**\n**Roblox or DC User:** ${robloxUsername}\n**Comments:** ${comments}\n**200+ Hours:** ${hoursChecked ? 'Yes' : 'No'\n_________}`
    };

    // Send data to Discord webhook using fetch
    try {
        const response = await fetch('https://discord.com/api/webhooks/1289883954362716161/NzYxvCK0I-AqxI9CZ35vVTI_zkiS8BZMtYvtESbKg_eq0AhF75PrR2CuJIm6HMGgwPCU', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            alert('Form submitted successfully!');
            document.getElementById('survey-form').reset(); // Reset the form after submission
        } else {
            alert('Error submitting the form. Please try again or message @drokeinroll on Discord.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later or message @drokeinroll on Discord.');
    }
});
