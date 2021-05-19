const Warning = () => {

    return (

        <div className="warning">
            <p>
                Note that Creating & Deleting Blog won't work, as this is just a frontend project made in
                React, and it uses <a href="https://jsonplaceholder.typicode.com/">JSON Placeholder</a>'s
                fake API as its server with a database, so only listing (GET) is allowed.
            </p>
            <p>
                But if you know even a little React and using <span>npm</span>, then maybe you can clone/download
                this <a href="https://github.com/Jaivrat12/elite-blog/tree/local-version">local-version</a> repo
                & using this <a href="https://www.npmjs.com/package/json-server">JSON Server</a> you can make it
                work, and then you could Create and Delete blogs too!
            </p>
        </div>
    );
};
 
export default Warning;