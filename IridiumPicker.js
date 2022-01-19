/**
 * Picker constructor
 * @param x
 * @param y
 * @param min
 * @param max
 * @param name
 * @param page
 * @param tempalte 
 */
function IridiumPicker(x, y, min, max, name, page, template)
{
    this.item = IR.GetItem(page).CreateItem(IR.ITEM_PICKER, name, {
        X: x,
        Y: y,
        Min: min,
        Max: max,
        Template: IR.GetPopup(template),
        VisibleCount: 3
    });
    this.min = min;
    this.max = max;
    this.x = x;
    this.y = y;
    this.template = template;
    
    IR.AddListener(IR.EVENT_PICKER_SCROLL, this.item, this.onScroll, this);    
    IR.SetTimeout(300, this.restore, this)
}

/**
 * Получить имя токена
 */
IridiumPicker.prototype.getTokenName = function()
{
    return "Tokens.UI." + this.item.Parent.Name + this.item.Name;
}

/**
 * Scroll event
 * @param position
 */
IridiumPicker.prototype.onScroll = function(position)
{
    IR.Log("onScroll: " + position)
    IR.SetVariable(this.getTokenName(), position);        
}

/**
 * Set position
 */
IridiumPicker.prototype.setPosition = function(value)
{
    IR.Log("value from token: " + value);
    
    if(value == undefined || value == "")
        value = 0;
    
    if(value == 0)
        value = 12;
        
     value = value - 1;
    
    IR.Log("Wii set postion to: " + value);
    this.item.Position = value;  
}

/**
 * restore prev value
 */
IridiumPicker.prototype.restore = function()
{
    var value = IR.GetVariable(this.getTokenName());
    this.setPosition(value);
}

IR.AddListener(IR.EVENT_START,0,function()
{
   var myPicker1 = new IridiumPicker(20, 30, 1, 12, "IridiumPicker 1", "Page 1", "Template Picker");
   var myPicker2 = new IridiumPicker(250, 30, 1, 12, "IridiumPicker 2", "Page 1", "Template Picker");
})