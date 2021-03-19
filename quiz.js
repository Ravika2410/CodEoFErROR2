class quiz
{
    constructor()
    {

    }

    getState()
{
    db.ref("gameState").on("value",function(data){
        gameState=data.val();
    },function(){});
}

async start()
{
    if(gameState==0)
    {
        contest=new contestant();

        contestantCount = await db.ref("contestantCount").once("Value");

        if(contestantCount.exists())
        {
            contestantCount = contestantCount.val();
        } 

        if(contestantCount<=2)
        {
            qui=new question();
            qui.display();
        }

    }

}

changeState(s)
{

    db.ref("/").update({"gameState":s});

}

end()
{
    hide();
}

}
