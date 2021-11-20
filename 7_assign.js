/*Write a JavaScript program to highlight the bold words of the paragraph, on mouse over a certain link.  */
//First create a list of all bold items
var bold_Items;
onload = getBold_items();
function getBold_items()
{
  bold_Items = document.getElementsByTagName('strong');
}
function highlight()
{
   for (var i=0; i<bold_Items.length; i++)
   {                                                    
    bold_Items[i].style.color = "red";
    }
}
function return_normal()
{

  for (var i=0; i<bold_Items.length; i++)
  {
       bold_Items[i].style.color = "black";
  }

}