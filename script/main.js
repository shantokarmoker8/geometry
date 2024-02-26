function calculateTriangleArea() {
  const triangleBase = document.getElementById("triangle-base");
  const triangleHeight = document.getElementById("triangle-height");
  const triangleB = parseFloat(triangleBase.value);
  const triangleH = parseFloat(triangleHeight.value);
  const triangleArea = 0.5 * triangleB * triangleH;
  console.log(triangleArea);
}
