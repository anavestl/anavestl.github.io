$(function() {

    var from_$input = $('#input_from').pickadate(),
      from_picker = from_$input.pickadate('picker')
  
    var to_$input = $('#input_to').pickadate(),
      to_picker = to_$input.pickadate('picker')
  
  
    // Check if thereâ€™s a â€œfromâ€ or â€œtoâ€ date to start with.
    if ( from_picker.get('value') ) {
      to_picker.set('min', from_picker.get('select'))
    }
    if ( to_picker.get('value') ) {
      from_picker.set('max', to_picker.get('select'))
    }
  
    // When something is selected, update the â€œfromâ€ and â€œtoâ€ limits.
    from_picker.on('set', function(event) {
      if ( event.select ) {
        to_picker.set('min', from_picker.get('select'))    
      }
      else if ( 'clear' in event ) {
        to_picker.set('min', false)
      }
    })
    to_picker.on('set', function(event) {
      if ( event.select ) {
        from_picker.set('max', to_picker.get('select'))
      }
      else if ( 'clear' in event ) {
        from_picker.set('max', false)
      }
    })
  
  });