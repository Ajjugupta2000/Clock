setInterval(() => {
     date = new Date();
    let htime = date.getHours();
     let mtime = date.getMinutes();
     let stime = date.getSeconds();
    
     let hrotation = 30*htime + mtime/2;
     let mrotation = 6*mtime;
     let srotation = 6*stime;

     let hr = document.getElementById('hour');
     let min = document.getElementById('minute');
     let sec = document.getElementById('second' );

    //  The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.
     hr.style.transform = `rotate(${hrotation}deg)`;
     min.style.transform = `rotate(${mrotation}deg)`;
     sec.style.transform = `rotate(${srotation}deg)`;

}, 1000);