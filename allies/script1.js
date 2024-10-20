document.getElementById('survey-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const clan = document.getElementById('name').value;
    const owner = document.getElementById('owner').value;
    const comments = document.getElementById('comments').value;
    const typeOfUser = document.getElementById('platform').value;

    // Discord ping IDs
    const drokeinroll = '1107744717103443969';  
    const sponge = '899228455445598238';
    const janis = '789782857852911616';

    // Prepare data to send to Discord webhook
const payload = {
        content:
            `**📋 Alliance Request received** ||<@${janis}>, <@${drokeinroll}>, <@${sponge}>||\n\n` +
            `**📝 Allied Clan Details:**\n` +
            `> **Clan:** \`${clan}\`\n` +
            `> **Owner username:** \`${owner}\` (${typeOfUser})\n` +
            `> **Comment:** ${comments ? `\`\`\`${comments}\`\`\`` : "`No comments provided`"}\n`
    };


    // Send data to Discord webhook using fetch
    try {
        const response = await fetch('https://discord.com/api/webhooks/1297687744830767245/nLoDzjEyygTPpdEwtdEkGJyPgkfCq8Ir5PSr4fBnWS1jg6uBJdTKJNYdNgx-95CHCqXj', {
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
            alert('Error submitting the form. Please try again or message the user.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later or message the user.');
    }
});
