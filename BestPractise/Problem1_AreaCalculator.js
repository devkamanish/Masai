

function calculateTriangleArea(base, height) {
    if (base < 0 || height < 0) {
        console.log("Invalid number, base and height must be positive numbers.");
        return;
    }
    
    let area = (base * height) / 2;
    
    
    console.log(`The area of the triangle is: ${area.toFixed(1)}`);
}


calculateTriangleArea(10, 5);   
calculateTriangleArea(0, 15);   
calculateTriangleArea(8, 0);    
calculateTriangleArea(-5, 10);  
calculateTriangleArea(7, -3);   
