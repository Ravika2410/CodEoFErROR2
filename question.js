class question
{
    constructor()
    {
        this.property=[
            ["What is pointless?","rectangle","triangle","circle","line",3],
            ["What is pointless?2","rectangle","triangle","circle","line",3],
            ["What is pointless?3","rectangle","triangle","circle","line",3],
            ["What is pointless?4","rectangle","triangle","circle","line",3]
        ]

        this.index=0;

        this.q=createElement("h3");
        this.q.position(100,100);
        this.score=createElement("h3");
        this.score.position(350,250);

        this.a=createButton("A");
        this.a.position(200,100);
        this.b=createButton("B");
        this.b.position(200,100);
        this.c=createButton("C");
        this.c.position(200,100);
        this.d=createButton("D");
        this.d.position(200,100);

    }

    display()
    {
        this.q.html(this.property[this.index][0]);
        textSize(16);
        text(this.property[this.index][1],250,100);
        text(this.property[this.index][1],250,150);
        text(this.property[this.index][1],250,200);
        text(this.property[this.index][1],250,250);
        this.score.html(contest.score);

        var option=0;
        
        this.a.mousePressed(()=>{ 
            option=1
        });
        this.b.mousePressed(()=>{ 
            option=2
        });
        this.c.mousePressed(()=>{ 
            option=3
        });
        this.d.mousePressed(()=>{ 
            option=4
        });


        if(option==this.property[this.index][5])
        {
            contest.score+=1;
            contest.updateScore();
        }

        if(option!=0)
        {
            this.index++;
        }

    }

    hide()
    {
        this.a.hide();
        this.b.hide();
        this.c.hide();
        this.d.hide();
        this.q.hide();
        this.score.hide();

    }

    
}