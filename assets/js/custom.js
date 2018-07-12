$(document).ready(function() {
	$('.sideMenu').click(function(){
		$('.m-side-bar').addClass('active');
		$('.site-overlay').addClass('active');
		$('body').addClass('blocked');
	});

	$('.market-manager-img.mobile-btn').click(function(){
		$('.right-sidebar').addClass('active');
		$('.site-overlay').addClass('active');
		// $('body').addClass('blocked');
	});
	$('.back-btn').click(function(){
		$('.right-sidebar').removeClass('active');
		$('.site-overlay').removeClass('active');
		// $('body').addClass('blocked');
	});

	$(document).mouseup(function(e) {
	  var Click_todo;
	  Click_todo = jQuery('.m-side-bar');
	  if (!Click_todo.is(e.target) && Click_todo.has(e.target).length === 0) {
	    jQuery('.m-side-bar,.site-overlay').removeClass('active');
	    jQuery('body').removeClass('blocked');
	  }
	});
});
	/*var registered = $('#listings-table').DataTable({
		"ordering": false
	});
	var location = $('#location-table').DataTable({
		"columnDefs": [{
                "targets": 'no-sort',
                "orderable": false
            }
        ]
	});

    registered.columns().iterator('column', function(ctx, idx) {
        $(registered.column(idx).header()).append('<span class="sort-icon"/>');
    });
    location.columns().iterator('column', function(ctx, idx) {
        $(location.column(idx).header()).append('<span class="sort-icon"/>');
    });


	var regions = $('#region-table').DataTable({
		"columnDefs": [{
                "targets": 'no-sort',
                "orderable": false
            }
        ]
	});

    regions.columns().iterator('column', function(ctx, idx) {
        $(regions.column(idx).header()).append('<span class="sort-icon"/>');
    });

    setTimeout(function(){
    	regions.columns.adjust().draw();
    }, 1000);

    registered.draw();

    $('#propNameSearch').on('keyup', function() {
		registered.columns(0).search(this.value).draw();
	});


	var internal = $('#internal-table').DataTable({
		"columnDefs": [{
                "targets": 'no-sort',
                "orderable": false
            }
        ]
	});

    internal.columns().iterator('column', function(ctx, idx) {
        $(internal.column(idx).header()).append('<span class="sort-icon"/>');
    });



	if($('.multi-dd').length){
		$('.multi-dd').multiselect({
	        buttonContainer: '<span></span>',
	        buttonClass: '',
	        maxHeight: 200,
	        templates: {
	            button: '<span class="multiselect dropdown-toggle" data-toggle="dropdown"><i class="fa fa-filter"></i></span>'
	        },
	    });
	}

	if($('.prop-theme').length){
		$('.prop-theme').multiselect({
			includeSelectAllOption: true,
	        maxHeight: 250,
	        numberDisplayed: 2
	    });
	}

	if($('.location-select').length){
		$('.country-select').multiselect({
			includeSelectAllOption: true,
	        maxHeight: 250,
	        numberDisplayed: 4,
	        nonSelectedText: 'Select a Country'
	    });
		$('.city-select').multiselect({
			includeSelectAllOption: true,
	        maxHeight: 250,
	        numberDisplayed: 4,
	        nonSelectedText: 'Select a City'
	    });
		$('.state-select').multiselect({
			includeSelectAllOption: true,
	        maxHeight: 250,
	        numberDisplayed: 4,
	        nonSelectedText: 'Select a State'
	    });
		$('.location-select').multiselect({
			includeSelectAllOption: true,
	        maxHeight: 250,
	        numberDisplayed: 4,
	        nonSelectedText: 'Select a Location'
	    });
	}



	var inactive = $('#inactive-table').DataTable({
		"ordering": false
		// "scrollX": true
	});

    inactive.columns().iterator('column', function(ctx, idx) {
        $(inactive.column(idx).header()).append('<span class="sort-icon"/>');
    });


    setTimeout(function(){
    	inactive.columns.adjust().draw();
    }, 1000);

	$('#catNameSearch').on('keyup', function() {
		inactive.columns(0).search(this.value).draw();
	});



    var tax = $('#tax-table').DataTable();

    tax.columns().iterator('column', function(ctx, idx) {
        $(tax.column(idx).header()).append('<span class="sort-icon"/>');
    });

    $('.listing-table,.region-table').closest('.row').addClass('main-table');

	$('.internal-table').closest('.row').addClass('overflow-table');



	if ($(window).width() < 769){
		$('#statsCollapse').removeClass('in');
	}
	if ($(window).width() < 769){
		$('.form-toggle:not(.m-side-bar .form-toggle)').click(function(){
			event.preventDefault();
			$('.fly-out').addClass('active');
		});
		$('.back-icon').click(function(){
			$('.fly-out').removeClass('active');
		});
	}
	else{
		$('.open-sidebar').click(function(){
			event.preventDefault();
			console.log('test');
			$('.animate-row').addClass('body-slide');
		});
		$('.article-back').click(function(){
			event.preventDefault();
			$('.animate-row').removeClass('body-slide');
		});

		$(document).mouseup(function(e) {
		  var Click_todo;
		  Click_todo = $('.page-sidebar');
		  if (!Click_todo.is(e.target) && Click_todo.has(e.target).length === 0) {
		    $('.animate-row').removeClass('body-slide');
		  }
		});

		$('.user-col-table [data-toggle="popover"]').on('shown.bs.popover', function () {
			 $('.open-sidebar').click(function(){
				event.preventDefault();
				console.log('test');
				$('.animate-row').addClass('body-slide');
			});
		})
	}

	$('body').on('click', '.make-edits-btn', function(){
		$('.default-status').addClass('disabled');
		$('.edit-action-box').addClass('hidden');
		$('.editing-status').removeClass('hidden');
		$('.panel-group, .actions-wrapper').removeClass('disabled');
	});

	$('.notification [data-toggle="popover"]').popover({
		html : true,
	    content: function() {
	       return $('.popoverContent').html();
	    }
	})

	if($('.overview-text').length){
		$('.overview-text').readmore({
		  speed: 75,
		  collapsedHeight: 40,
		  lessLink: '<a href="#">Less</a>'
		});
	}


	$('body').on("change", "input[type=radio][name=categoryType]", function() {
	    if (this.value == 'parent_cat') {
	        $('.select-parent-cat, .select-branch-cat').addClass('hidden')
	        $('.parent_cat_icon').removeClass('hidden')
	    } else if (this.value == 'branch_cat') {
	        $('.select-parent-cat').removeClass('hidden')
	        $('.select-branch-cat, .parent_cat_icon').addClass('hidden')
	    } else if (this.value == 'node_cat') {
	        $('.select-parent-cat, .select-branch-cat').removeClass('hidden')
	        $('.parent_cat_icon').addClass('hidden')
	    }
	});


	$('.user-col-table [data-toggle="popover"]').popover({
		html : true,
	    content: function() {
	       return $(this).siblings('.content-pop').html();
	    }
	})

	$('body').on("click", ".limited", function(event) {
		event.preventDefault();
		$(this).parent('.limited-tag').addClass('hidden');
		$(this).closest('.flex-list').find('.flex-tag-row').removeClass('hidden');
	});

	$('body').on("click", ".restricted", function(event) {
		event.preventDefault();
		$(this).parent('.limited-tag').addClass('hidden');
		$(this).closest('.flex-list').find('.simple-tag').removeClass('hidden');
	});

	$('body').on("change", "input[type=checkbox][name=bankdeets]", function() {
	    if ($(this).is(':checked')) {
	        $('.contract-accept').attr('disabled', false)
	    } else  {
	       $('.contract-accept').attr('disabled', true)
	    }
	});


	$('.contact-info').on('click', '.add-another', function(e) {
	  var contact_group, contact_group_clone, input;
	  e.preventDefault();
	  contact_group = $(this).closest('.business-contact').find('.contact-group');
	  contact_group_clone = contact_group.clone();
	  contact_group_clone.removeClass('contact-group hidden');
	  input = contact_group_clone.find('.fnb-input');
	  contact_group_clone.insertBefore(contact_group);

	});


	$('body').on('click', '.removeRow', function() {
	  return $(this).closest('.contact-container').remove();
	});

	$(document).on('change', '.business-contact .toggle__check', function() {
	  if ($(this).is(':checked')) {
	    $(this).closest('.toggle').siblings('.toggle-state').text('Visible on the property');
	  } else {
	    $(this).closest('.toggle').siblings('.toggle-state').text('Not visible on the property');
	  }
	});

	$(document).on('change', '.toggle-work .toggle__check', function() {
	  if ($(this).is(':checked')) {
	    $(this).closest('.toggle').siblings('.toggle-state').text('Active');
	    $(this).closest('.toggle').siblings('.toggle-state').addClass('active-state');
	  } else {
	    $(this).closest('.toggle').siblings('.toggle-state').text('Inactive');
	    $(this).closest('.toggle').siblings('.toggle-state').removeClass('active-state');
	  }
	});

	$(document).on('change', '.toggle-smoking .toggle__check', function() {
	  if ($(this).is(':checked')) {
	    $(this).closest('.toggle').siblings('.toggle-state').text('Yes');
	    $(this).closest('.toggle').siblings('.toggle-state').addClass('active-state');
	  } else {
	    $(this).closest('.toggle').siblings('.toggle-state').text('No');
	    $(this).closest('.toggle').siblings('.toggle-state').removeClass('active-state');
	  }
	});

	$(document).on('click', '.desc-btn', function() {
		$(this).addClass('hidden');
		$('.desc-warning').removeClass('hidden');
	});
	$(document).on('click', '.desc-warning button', function() {
		$('.desc-btn').removeClass('hidden');
		$('.desc-warning').addClass('hidden');
	});

	$(document).on('click', '.add-policy-btn', function() {
		// $(this).addClass('hidden');
		$('.add-policy-wrap').removeClass('hidden');
	});
	$(document).on('click', '.cancel-wrap', function() {
		// $(this).addClass('hidden');
		$('.add-policy-wrap').addClass('hidden');
	});

	$('.from-date,.to-date').daterangepicker({
		singleDatePicker: true
	});

	$(".incr-btn").on("click", function (e) {
	    var $button = $(this);
	    var oldValue = $button.parent().find('.quantity').val();
	    $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
	    if ($button.data('action') == "increase") {
	        var newVal = parseFloat(oldValue) + 1;
	    } else {
	        // Don't allow decrementing below 1
	        if (oldValue > 1) {
	            var newVal = parseFloat(oldValue) - 1;
	        } else {
	            newVal = 1;
	            $button.addClass('inactive');
	        }
	    }
	    $button.parent().find('.quantity').val(newVal);
	    e.preventDefault();
	});

	$('body').on("change", "input[type=radio][name=policy_type]", function() {
	    if (this.value == '14') {
	        $('.set-policy').addClass('hidden')
	        $('.create-own-policy').removeClass('hidden')
	    } else {
	        $('.set-policy').removeClass('hidden')
	        $('.create-own-policy').addClass('hidden')
	    }
	});

	$('body').on("change", "input[type=radio][name=policy]", function() {
	    if (this.value == 'rateplan') {
	        $('.rateplan-wrap').removeClass('hidden')
	    } else {
	        $('.rateplan-wrap').addClass('hidden')
	    }
	});


	  var SideComments = require('side-comments');
	  window.sideComments = new SideComments('#commentable-area', currentUser, existingComments);
	  window.sideComments.on('commentPosted', function( comment ) {
	    comment.id = parseInt(Math.random() * (100000 - 1) + 1);
	    sideComments.insertComment(comment);
	  });
	  window.sideComments.on('commentDeleted', function( comment ) {
	    sideComments.removeComment(comment.sectionId, comment.id);
	  });

	$('.tooltipster').tooltipster({
		theme: 'tooltipster-borderless',
		contentCloning: true,
		side: 'bottom',
		interactive: true
	});

	$('.tooltipster-price').tooltipster({
		theme: 'tooltipster-shadow',
		contentCloning: true,
		side: 'bottom',
		interactive: true
	});

});

$(document).ready(function () {
    popoverOptions = {
        content: function () {
            // Get the content from the hidden sibling.
            return $(this).siblings('.my-popover-content').html();
            return $('.my-popover-content').html();
        },
        trigger: 'click',
        animation: false,
        html: true,
        placement: 'bottom'
    };
    $('.action-panel').popover(popoverOptions);

    $('body').on("change", "input[type=radio][name=offerType]", function() {
            $('.offer_types').addClass('hidden')
        if (this.value == '11') {
            $('.basic_offer').removeClass('hidden')
        } else if (this.value == '13') {
            $('.early_bird').removeClass('hidden')
        } else if (this.value == '16') {
            $('.group_booking').removeClass('hidden')
        } else if (this.value == '14') {
            $('.long_stay').removeClass('hidden')
        } else if (this.value == '12') {
            $('.last_minute').removeClass('hidden')
        } else if (this.value == '17') {
            $('.weekday_weekend').removeClass('hidden')
        } else if (this.value == '15') {
            $('.free_nights').removeClass('hidden')
        }
    });
});

$("#error-manual").hide();
$(".btn").click(function () {
	var id = $(this).attr("id");
  if(id == "auto"){
  $(this).attr("autofocus",true).siblings().attr("autofocus",false);
  	$("#error-manual").hide();
  	$("#error-auto").show();
  }else{
  $(this).attr("autofocus",true).siblings().attr("autofocus",false);
  	$("#error-auto").hide();
  	$("#error-manual").show();
  }
});

$('.active').change(function() {
   $(".rates-table").removeClass("hidden");


});
$('.inactive').change(function() {
	 $(".rates-table").addClass("hidden");
});

$('.page-sidebar').on('click', '.add-blackout', function(e) {
  var contact_group, contact_group_clone, input;
  e.preventDefault();
  blackout_group = $(this).closest('.plan-section').find('.blackoutRowClone');
  blackout_group_clone = blackout_group.clone();
  blackout_group_clone.removeClass('blackoutRowClone hidden');
  // input = blackout_group_clone.find('.fnb-input');
  blackout_group_clone.insertBefore(blackout_group);

});


// Close popover on modal shown

$('#block-room').on('shown.bs.modal', function () {
  $('.popover').popover('hide');
})


$('#payment-modal').on('hidden.bs.modal', function () {
  $('#pay-tab').addClass('active');
  $('#make-pay').removeClass('active');
  $('.pay-modal-title').html('Please Select the bookings you want to mark "<b class="bat-color">Paid</b>"');
  $('.pay-save').text('Next');
})

$('.pay-save').click(function(){
	$(this).text('Save');
	$('.pay-modal-title').text('Add the payment details');
});


$('body').on("change", ".sd-block input[type=checkbox]", function() {
    if ($(this).is(':checked')) {
        $(this).closest('.sd-inventory').find('.sd-inventory_count').text('00');
        $(this).closest('.single-day').addClass('block')
    } else  {
        // $(this).closest('.sd-inventory').find('.sd-inventory_count').text('00');
        // $(this).closest('.single-day').removeClass('block')
        $('#addInventoryModal').modal('show');
        console.log('unchecked');
    }
});

// show more-data
$(document).ready(function() {

    var showChar = 120;
    var ellipsestext = "...";
    var moretext = "view more";
    var lesstext = "view less";


    $('.description_data').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var hidetxt = content.substr(showChar, content.length - showChar);
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span style="display:none">' + hidetxt + '</span>&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });
 //To change text
     $(".morelink").click(function(){
        if($(this).hasClass("any")) {
            $(this).removeClass("any");
            $(this).html(moretext);
        } else {
            $(this).addClass("any");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});

//mark all as read
$(document).ready(function()
{
	$('.readall').click(function(){
		$('.myread').css('background-color', '#eee');
	});

});



//forgot password
$('#fp').click(function(){
	$('.loginbox3').addClass('active');
});

$('.back-login2').click(function(){
	$('.loginbox3').removeClass('active');
});


//edit rank
$(document).ready(function(){

    $('.editrank').click(function(){
    	$(this).addClass('hidden');
    	$(this).closest('tr').find('.oldrank1').addClass('hidden');
    	$(this).closest('tr').find('.suggest1').addClass('hidden');
    	$(this).closest('tr').find('.editrankfields').removeClass('hidden');
    	$(this).closest('tr').find('.oldrank').removeClass('hidden');
    	$(this).closest('tr').find('.updaterank').removeClass('hidden');
    });
});

$(document).ready(function(){
    $('.updaterank').click(function(){
    	$(this).addClass('hidden');
    	$(this).closest('tr').find('.updaterank').addClass('hidden');
    	$(this).closest('tr').find('.oldrank').addClass('hidden');
    	$(this).closest('tr').find('.suggest1').addClass('hidden');
    	$(this).closest('tr').find('.editrank').removeClass('hidden');
    	$(this).closest('tr').find('.oldrank1').removeClass('hidden');
     });
});
$(document).ready(function(){
    $('.applyrank').click(function(){
    	$(this).closest('tr').find('.oldrank').addClass('hidden');
    	$(this).closest('tr').find('.oldrank1').addClass('hidden');
    	$(this).closest('tr').find('.updaterank').addClass('hidden');
    	$(this).closest('tr').find('.editrank').removeClass('hidden');
    	$(this).closest('tr').find('.suggest1').removeClass('hidden');
    });
});


$(document).ready(function(){
$('#whatsnew2').modal({backdrop: 'static' });
});

// $(document).ready(function(){
//     $('#blockcheck').click(function(){
//         if($(this).is(":checked")){
//             $('.modalx').removeAttr("disabled");
//        	  // $('#whatsnew2').removeAttr('backdrop','static');
//          //  $("#whatsnew2").attr({backdrop: true});
//         }
//         else if($(this).is(":not(:checked)")){
//            // $('#whatsnew2').modal({backdrop: false});
//            console.log("uncheck");
//             $('.modalx').attr("disabled",true);
//         }
//     });
// });
$(document).ready(function(){
	 $('#btnread2').click(function(){
	 	$(this).addClass('hidden');
	 	$('#readhide2').removeClass('hidden');
	 	if ($('#btnread1').hasClass('hidden') && $('#btnread2').hasClass('hidden'))
	 		{
	 		 	$('#whatsnew2').modal('hide');
	 		}
	 });

	 $('#btnread1').click(function(){
	 	$(this).addClass('hidden');
	 	$('#readhide1').removeClass('hidden');
	 	if ($('#btnread1').hasClass('hidden') && $('#btnread2').hasClass('hidden'))
	 		{
	 			$('#whatsnew2').modal('hide');
	 		}
	 	 });

	 });

*/
