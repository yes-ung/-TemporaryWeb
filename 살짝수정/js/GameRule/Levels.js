var Levels=[
    {
         level:1,
        load:function(){
            //Load map
            Map.setCurrentMap('TrenchWars');
            //Choose side and apply race style
            var races=['Terran','Zerg'];
            var startPoint=[{x:50,y:50},{x:200,y:50}];
            // if (!Game.replayFlag) Game.team=Math.random()*2>>0;
            Game.race.choose(races[Game.team]);
            Map.offsetX=startPoint[Game.team].x;
            Map.offsetY=startPoint[Game.team].y; 
            //Load units
            new Terran.Marine({x:100,y:100});
            new Terran.Marine({x:200,y:100});
            new Terran.Marine({x:100,y:200});
            new Terran.Marine({x:200,y:200});
            new Terran.Marine({x:100,y:300});
            new Terran.Marine({x:200,y:300});
            new Terran.Marine({x:100,y:400});
            new Building.TerranBuilding.MissileTurret({x:100,y:150});
            new Building.ProtossBuilding.PhotonCannon({x:100,y:250});
            //Add enemy
            new Zerg.Zergling({x:600,y:400,team:1});
            new Zerg.Zergling({x:700,y:100,team:1});
            new Zerg.Zergling({x:800,y:100,team:1});
            new Zerg.Zergling({x:900,y:100,team:1});
            new Zerg.Zergling({x:700,y:200,team:1});
            new Zerg.Zergling({x:800,y:200,team:1});
            new Zerg.Zergling({x:900,y:200,team:1});
            new Zerg.Zergling({x:700,y:300,team:1});
            new Zerg.Zergling({x:800,y:300,team:1});
            new Zerg.Zergling({x:900,y:300,team:1});
        }
    },
     {
        level:2,
        load:function(){
            //Test multiplayer
            if (!Game.replayFlag && confirm('Want enter multiplayer mode?')){
                //Enable multiplayer
                Multiplayer.enable();//Has fog for level2
            }
            //Load map
            Map.setCurrentMap('TrenchWars');
            Map.offsetX=120;
            Map.offsetY=50;
            //Apply race style
            Game.race.choose('Zerg');
            //Load units
            new Zerg.Overlord({x:100,y:100});
            new Zerg.Guardian({x:100,y:200});
            new Zerg.Devourer({x:100,y:300});
            new Zerg.Mutalisk({x:200,y:100});
            new Zerg.Devourer({x:200,y:200});
            new Zerg.Guardian({x:200,y:300});
            new Zerg.Mutalisk({x:300,y:100});
            new Zerg.Devourer({x:300,y:200});
            new Zerg.Guardian({x:300,y:300});
            new Building.ZergBuilding.SporeColony({x:100,y:200});
            //Add enemy
            new Terran.Wraith({x:700,y:100,team:1});
            new Terran.Wraith({x:800,y:100,team:1});
            new Terran.Wraith({x:900,y:100,team:1});
            new Terran.Civilian({x:700,y:200,team:1});
            new Terran.Civilian({x:800,y:200,team:1});
            new Terran.Civilian({x:900,y:200,team:1});
            new Terran.BattleCruiser({x:700,y:300,team:1});
            new Terran.BattleCruiser({x:800,y:300,team:1});
            new Terran.BattleCruiser({x:900,y:300,team:1});
        }
    },
    {
        level:3,
        load:function(){
            //Load map
            Map.setCurrentMap('TrenchWars');
            //Apply race style
            Game.race.choose('Terran');
            //Load units
            new Terran.Marine({x:100,y:100});
            new Terran.Marine({x:200,y:100});
        }
    },
    {
        level:4,
        load:function(){
            //Load map
            Map.setCurrentMap('TrenchWars');
            //Apply race style
            Game.race.choose('Zerg');
            //Load units
            new Terran.Marine({x:100,y:100});
            new Terran.Marine({x:200,y:100});
        }
    }
    
];