class contestant
{
    constructor()
    {
        this.p = null;
        this.score = 0;
        this.name = null;

    }

    updateCount(C)
    {
        console.log("updatingCount");
        db.ref("/").update({"playerCount":C});
    }

    updateName(A)
    {
        db.ref("Players/Player"+this.p).update({"Name":A});
    }

    updateScore(A)
    {
        db.ref("Players/Player"+this.p).update({"Score":A});
    }

    static getPlayerInfo()
    {
        db.ref("Players").on("value",(data)=>{
            playerInfo=data.val();
        });
    }
    
    
}