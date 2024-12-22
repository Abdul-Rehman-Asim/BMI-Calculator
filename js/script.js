function bmi() {
    let h = document.getElementById("height").value
    let w = document.getElementById("weight").value

    let btn = (w / (h / 100 * h / 100));
    document.getElementById("heading").innerHTML = "Your BMI is: "
    document.getElementById("output").innerHTML = btn.toFixed(2)

}