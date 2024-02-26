//----------triangle area --------------------
function calculateTriangleArea() {
  const triangleBase = document.getElementById("triangle-base");
  const triangleHeight = document.getElementById("triangle-height");
  const triangleB = parseFloat(triangleBase.value);
  const triangleH = parseFloat(triangleHeight.value);
  const triangleArea = 0.5 * triangleB * triangleH;
  document.getElementById("area").innerText = "Triangle Area : " + triangleArea;
}

//---------------rectangle base---------------

function calculateRectangleArea() {
  const rectangleBase = document.getElementById("rectangle-base");
  const rectangleHeight = document.getElementById("rectangle-height");
  const rectangleB = parseFloat(rectangleBase.value);
  const rectangleH = parseFloat(rectangleHeight.value);
  const rectangleArea = rectangleB * rectangleH;
  document.getElementById("area").innerText =
    "Rectangle Area : " + rectangleArea;
}
//------------------parallelogram area---------------
function calculateParallelogramArea() {
  const parallelogramBase = document.getElementById("parallelogram-base");
  const parallelogramHeight = document.getElementById("parallelogram-height");
  const parallelogramB = parseFloat(parallelogramBase.value);
  const parallelogramH = parseFloat(parallelogramHeight.value);
  const parallelogramArea = parallelogramB * parallelogramH;
  document.getElementById("area").innerText =
    "Parallelogram Area : " + parallelogramArea;
}

//----------rhombus area--------------
function calculateRhombusArea() {
  const rhombusD1 = document.getElementById("rhombus-d1");
  const rhombusD2 = document.getElementById("rhombus-d2");
  const d1 = parseFloat(rhombusD1.value);
  const d2 = parseFloat(rhombusD2.value);
  const rhombusArea = 0.5 * d1 * d2;
  document.getElementById("area").innerText = "Rhombus Area : " + rhombusArea;
}

//--------pentagon area --------------
function calculatePentagonArea() {
  const pentagonP = document.getElementById("pentagon-p");
  const pentagonB = document.getElementById("pentagon-b");
  const p = parseFloat(pentagonP.value);
  const b = parseFloat(pentagonB.value);
  const pentagonArea = 0.5 * p * b;
  document.getElementById("area").innerText = "Pentagon Area : " + pentagonArea;
}
