export const PROJECTSYNC = () => {
    CONDITION(localStorage.getItem("Environment") === "Development", () => {

        SESSIONSTORE("ProjectSynced", new Date());

    }, () => {

        CHECKER(navigator.onLine, () => {

            fetch(BUILDLINK + projectPath)
            .then(res => res.text())
            .then(data => {
                
                    const projectPath = localStorage.getItem("projectPath");
                    const localProject = localStorage.getItem("PROJECT");

                    CONDITION(data.trim() === (localProject || "").trim(), () => {

                        SESSIONSTORE("ProjectSynced", new Date());

                    }, () => {

                        LOCALSTORE("PROJECT", data);

                        SESSIONSTORE("ProjectSynced", new Date());

                        HIDER(1000, () => {

                            RELOAD();
                            
                        });;

                    });
                })
                .catch(error => {
                    console.log("Project sync error:", error);
                });

        });
    });
};