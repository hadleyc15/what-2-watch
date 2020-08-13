fetch(`/api/users/countdown`)
    .then(res => {
        return res.text();
    })
    .then(data => {
        document.getElementById("countdown").innerHTML = 'Voting ends at 7PM on Friday. Time remaining to vote:  ' + data;
    });