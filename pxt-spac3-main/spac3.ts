/**
 * Use VARIABLE.min=number and VARIABLE.max=number
 * to specify a range on a parameter. Drag the foo
 * block and try to change the value!
 */

//% color="#FFAB19"
enum Choice {
    Z,
    X,
    Y
    }
const groupA = [pos(0, 0, 0),pos(0, 0, 0)]

enum Choice1 {
   groupA
    }
namespace spac3 {
    
    //% block="from%p3=minecraftCreatePosition|to %p4=minecraftCreatePosition|set as %groupA = text|using %y"
    //% inlineInputMode=external
    export function newgroup<T>(p3: Position, p4: Position, y: Block) :any[]{
    let groupA = [world(0, 0, 0), world(0, 0, 0)]
    const numb = Math.abs(p3.getValue(0)-p4.getValue(0))+Math.abs(p3.getValue(1)-p4.getValue(1))+Math.abs(p3.getValue(2)-p4.getValue(2))
    for (let i = 0; i < Math.abs(p3.getValue(0)-p4.getValue(0))+1; i++) {
        player.say(":)");
        if(i==0)
        {
        player.say(":)")
        groupA[i]= world(p3.getValue(0)+i,p3.getValue(1),p3.getValue(2));
        blocks.place(y, groupA[i]);
        }
        else{
            player.say(":)");
            groupA[i]=world(p3.getValue(0)+i,p3.getValue(1),p3.getValue(2));
            blocks.place(y, groupA[i])
            
        }
   }
    for (let i = 0; i < Math.abs(p3.getValue(1)-p4.getValue(1))+1; i++) {
        if(i==0){
        groupA[i]=world(p3.getValue(0),p3.getValue(1)+i,p3.getValue(2));
        blocks.place(y, groupA[i]);
        }
        else{
        groupA[i]=world(p3.getValue(0),p3.getValue(1)+i,p3.getValue(2));
        blocks.place(y, groupA[i]);
            }
   }
    for (let i = 0; i < Math.abs(p3.getValue(2)-p4.getValue(2))+1; i++) {
        if(i==0){
        groupA[i]=world(p3.getValue(0),p3.getValue(1)+i,p3.getValue(2)+i);
        blocks.place(y, groupA[i]);
        }
        else{
            groupA[i]=world(p3.getValue(0),p3.getValue(1)+i,p3.getValue(2)+i)
            blocks.place(y, groupA[i]);
             
        }
   }
    return groupA;
    }
    
    
    
   

    //% block="from%p3=minecraftCreatePosition|to %p4=minecraftCreatePosition|move x:%x|y:%y|z:%z"
    //% inlineInputMode=external
    export function move1(p3: Position, p4: Position, x: number, y: number, z: number) {
        const p5 = positions.add(pos(x, y, z), p3)
        blocks.clone(
            p3,
            p4,
            p5,
            CloneMask.Replace,
            CloneMode.Move
        );
    }
    //% block="from%p0=minecraftCreatePosition|to %p1=minecraftCreatePosition|moveto %p2=minecraftCreatePosition||"
    //% inlineInputMode=external
    export function moveto(p0: Position, p1: Position, p2: Position) {
        moveAll(p0,p1,p2);
    }
    //% block="from%p0=minecraftCreateWorldPosition to %p1=minecraftCreateWorldPosition|moveto %p2=minecraftCreateWorldPosition||"
    //% inlineInputMode=external    
    export function moveTrue(p0: Position, p1: Position, p2: Position) {
        moveAll(p0,p1,p2);
        
    }
    export function moveAll(p0: Position, p1: Position, p2: Position){
         blocks.clone(
            p0,
            p1,
            p2,
            CloneMask.Replace,
            CloneMode.Move);
    }
    export function cloneAll(p0: Position, p1: Position, p2: Position){
         blocks.clone(
            p0,
            p1,
            p2,
            CloneMask.Replace,
            CloneMode.Normal);
    }
    export function calcuNewpos(p0: Position, p1: Position ,x:Axis,y:number):Position{
        let  a = pos(0,0,0)
        if(x== 0){
            a= pos(p0.getValue(0), 
            (p0.getValue(1) - p1.getValue(1))*Math.cos(3.1415926*y/180) - (p0.getValue(2) - p1.getValue(2))*Math.sin(3.1415926*y/180) + p1.getValue(1),      
            (p0.getValue(1) - p1.getValue(1))*Math.sin(3.1415926*y/180) + (p0.getValue(2) - p1.getValue(2))*Math.cos(3.1415926*y/180) + p1.getValue(2))
            player.say(a)
            player.say(p0.getValue(0))
        }
        else if(x==1){
            a= pos(( p0.getValue(0) - p1.getValue(0))*Math.cos(3.1415926*y/180) - (p0.getValue(2) - p1.getValue(2))*Math.sin(3.1415926*y/180) + p1.getValue(0),
            p0.getValue(1),
            (p0.getValue(0) - p1.getValue(0))*Math.sin(3.1415926*y/180) + (p0.getValue(2) - p1.getValue(2))*Math.cos(3.1415926*y/180) + p1.getValue(2))
            player.say(a)
            player.say(p0.getValue(1))
        }
        else if(x==2){
            a= pos(( p0.getValue(0) - p1.getValue(0))*Math.cos(3.1415926*y/180) - (p0.getValue(1) - p1.getValue(1))*Math.sin(3.1415926*y/180) + p1.getValue(0),
            (p0.getValue(0) - p1.getValue(0))*Math.sin(3.1415926*y/180) + (p0.getValue(1) - p1.getValue(1))*Math.cos(3.1415926*y/180) + p1.getValue(1),
            p0.getValue(2))
            player.say(a)
            player.say(p0.getValue(2))
        }
        return(a)


    }
    //% block="block %p0=minecraftCreateWorldPosition on %p1=minecraftCreateWorldPosition|along %x|by %y|degrees"
    //% inlineInputMode=external
    export function rotate( p0: Position, p1: Position ,x:Axis,y:number){
        moveAll(p0,p0,calcuNewpos(p0,p1,x,y))
    }
    export function calcuRefpos(p0: Position,y:number,x:Choice):Position{
        let  a = pos(0,0,0)
        if(x== 0){
            a= pos(p0.getValue(0),p0.getValue(1),y*2-p0.getValue(2))
            player.say(a)
            player.say(p0.getValue(0))
        }
        else if(x==1){
            a= pos(y*2-p0.getValue(0),p0.getValue(1),p0.getValue(2))
            player.say(a)
            player.say(p0.getValue(0))
        }
        else if(x==2){
            a= pos(p0.getValue(0),y*2-p0.getValue(1),p0.getValue(2))
            player.say(a)
            player.say(p0.getValue(0))
        }
        return(a)


    }
    //% block="block reflect %p0=minecraftCreateWorldPosition on %x| = %y|pad"
    //% inlineInputMode=external
    export function reflectB( p0: Position,x:Choice, y:number){
        cloneAll(p0,p0,calcuRefpos(p0,y,x))
    }
}
