function fastInverseSqrt(x) {
    const threehalfs = 1.5;

    let i = new Float32Array(new Int32Array([0x5f3759df - (new Int32Array(new Float32Array([x]).buffer)[0] >> 1)]).buffer)[0]; // evvil float point
    let y = new Float32Array([x]);
    
    let y2 = y * 0.5;
    
  
    y = new Float32Array([i])[0];

    y = y * (threehalfs - (y2 * y * y));
    
    return y;
}

module.exports = { fastInverseSqrt };
