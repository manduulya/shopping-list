//to store user's input
$("#js-shopping-list-form").submit(function(event){
    event.preventDefault();
    let newInput = ( $('#shopping-list-entry').val());
    // console.log(newInput);
    $(this).val("");
    $("ul").append(
    `<li><span class="shopping-item">${newInput}</span>
        <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
        </div>
    </li>`)
});

//delete button function
$('ul').on('click', '.shopping-item-delete', function(event){
    $(this).parent().parent().remove();
});
// event.stopPropagation();

//check and uncheck toggleClass function
$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

