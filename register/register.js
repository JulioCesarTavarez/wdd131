document.addEventListener('DOMContentLoaded', function () {
    let participantCount = 1;

    document.getElementById('add').addEventListener('click', function () {
        // Clone the first participant section
        const originalParticipant = document.querySelector('.participant1');
        const newParticipant = originalParticipant.cloneNode(true);

        // Increment participant count and update the new participant's content
        participantCount++;
        newParticipant.classList.replace('participant1', `participant${participantCount}`);
        newParticipant.querySelector('p').textContent = `Participant ${participantCount}`;

        // Clear the input fields in the cloned section
        newParticipant.querySelectorAll('input').forEach(input => {
            input.value = '';
        });
        newParticipant.querySelector('select').value = '';

        newParticipant.querySelectorAll('[id]').forEach(element => {
            element.id = element.id + participantCount;
        });

        // Append the new participant section to the participants fieldset
        originalParticipant.parentNode.insertBefore(newParticipant, document.getElementById('add'));
    });

    document.getElementById('submitButton').addEventListener('click', function (event) {
        event.preventDefault();
        submitForm();
    });

    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();
        totalFees();
    });
});

function submitForm() {
    // calculate total fees
    const total = totalFees();
    // do the rest of the stuff
    document.getElementById('form').classList.add('hide');

    const name = document.getElementById("adult_name").value;
    const summarySection = document.getElementById('summary');
    summarySection.innerHTML = `
        <h2>Thank you ${name} for registering</h2>
        <p>You have registered ${totalParticipants()} participants and owe $${total} in fees.</p>`;
    summarySection.classList.remove('hide');
}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];

    const total = feeElements.reduce((sum, feeElement) => {
        const feeValue = parseFloat(feeElement.value) || 0;
        return sum + feeValue;
    }, 0);

    return total;
}

function totalParticipants() {
    const participantElements = document.querySelectorAll(".participants section");
    return participantElements.length;
}
