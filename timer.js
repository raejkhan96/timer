const args = process.argv;

const alarm = function(value) {

  if (typeof value === 'number' && value > 0) {

    setTimeout(function() { 
      // create beep sound
      process.stdout.write('\x07');
      // . to confirm beep sound
      process.stdout.write('.'); 
      console.log('\n');
    }, value*1000);
  
  }
  
}

for (let i = 2; i < (args.length); i++) {
  
  alarm(+args.slice(i, i+1));
  
}



