let mainContainer = document.querySelector("#mainContainer");


let giturl = "https://api.github.com/users/alainishimwe"

fetch(giturl, {
    method: "GET",
    headers: {"Content-Type": "application/json"}
})
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // console.log(data)
        // console.log(data.public_repos)
        // console.log(data.avatar_url)

        //let profileContainer = document.createElement('div');

        let firstDiv = document.createElement('div')

        let avatarPic = document.createElement('img');
        avatarPic.src = data.avatar_url
        avatarPic.classList.add("myPic")

        //profileContainer.appendChild(avatar)
        firstDiv.appendChild(avatarPic);
        mainContainer.appendChild(firstDiv);

        let secondDiv = document.createElement('div')
        let myLocation = document.createElement('p')


        myLocation.innerText = `Location : ${data.location}\n GitHub Username: alainishimwe \n GitHub URL:`
        secondDiv.appendChild(myLocation)
        mainContainer.appendChild(secondDiv)
        let myusername = document.createElement('a');
        let usernameLink =  document.createTextNode("alainishimwe")
        myusername.appendChild(usernameLink);
        myusername.href = data.html_url
        myLocation.appendChild(myusername);
        secondDiv.appendChild(myLocation);
        mainContainer.appendChild(secondDiv);



        secondDiv.classList.add('secondDiv')

        console.log(data.repos_url)

        // for(let repos of data){
        //     console.log(repos.repos_url)
        // }
    })
    .then((previous) => {
        fetch(
            "https://api.github.com/users/alainishimwe/repos" , 
            {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((parsedResponse) => {
                console.log(parsedResponse);
                for (let repo of parsedResponse) {
                    let thirdDiv = document.createElement('div')
                    let repoLink = document.createElement('a');
                    let repoLinkText = document.createTextNode(repo.name)
                    repoLink.appendChild(repoLinkText)
                    repoLink.href = repo.html_url;
                    thirdDiv.appendChild(repoLink);
                    mainContainer.appendChild(thirdDiv);

                    thirdDiv.classList.add("thirdDiv")



                    // repoDiv.innerText = repo.name;
                    // console.log(repo.html_url)
                    // thirdDiv.appendChild(repoDiv);
                    // mainContainer.appendChild(thirdDiv)
                    // thirdDiv.classList.add('thirdDiv')
                }
            })
    })