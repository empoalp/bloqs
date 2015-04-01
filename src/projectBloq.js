//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
function ProjectBloq(bloqData, canvas, position, data) {
    Bloq.call(this, bloqData, canvas, position, data);
    //Down connector x position : +20 px
    utils.updateConnector(this.bloqBody.connections.down, {
        x: 20,
        y: 0
    });
    //Add bloq's left and down UI parts
    this.bloqBody.leftPart = this.bloqBody.rect(20, 60).fill(bloqData.color).radius(4);
    this.bloqBody.leftPart.size.width = 20;
    this.bloqBody.leftPart.size.height = 60;
    this.bloqBody.add(this.bloqBody.leftPart);
    this.bloqBody.downPart = this.bloqBody.rect(this.size.width, 20).fill(bloqData.color).radius(4);
    this.bloqBody.downPart.y(60 - 5);
    this.bloqBody.add(this.bloqBody.downPart);
    //Define bloqlabel and add the label on the bloq
    this.label = bloqData.label;
    this.bloqBody.text(bloqData.label.toUpperCase()).font({
        family: 'Helvetica',
        fill: '#fff',
        size: 14
    }).move(20, 5);
}
/**
 * Resize a statements input bloq
 * @param delta
 */
ProjectBloq.prototype.resizeStatementsInput = function(delta) {
    this.bloqBody.leftPart.size.height += delta.y;
    this.bloqBody.leftPart.height(this.bloqBody.leftPart.size.height);
    this.bloqBody.downPart.move(0, this.bloqBody.downPart.y() + delta.y);
};
// bloq.resize = bloq.resizeStatementsInput;
ProjectBloq.prototype.getConnectionPosition = function(connectionType, bloqToConnect) {
    // bloqToConnect.getChildrenHeight(true);
    // bloqToConnect.childrenHeight+=bloqToConnect.size.height;
    // console.log('bloqToConnect', bloqToConnect.childrenHeight);
    // bloq.resizeStatementsInput({x:0,y:bloqToConnect.childrenHeight});
    bloqToConnect.resizeParents('down');
    return {
        x: this.bloqBody.connections[connectionType].connectionPosition.x,
        y: this.bloqBody.connections[connectionType].connectionPosition.y
    };
};
ProjectBloq.prototype = Object.create(Bloq.prototype);