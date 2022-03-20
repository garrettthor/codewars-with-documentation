/*
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

area_or_perimeter(6, 10) --> 32
area_or_perimeter(4, 4) --> 16

    Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

*/

const areaOrPerimeter = function(l , w) {

    // if the length and width are equal, then it's a square
    if (l === w) {

        // return area of the square
        return l*w

    // otherwise, any other dimensions represent a rectangle
    } else {

        // return the perimeter of the rectangle
        return (2*l)+(2*w)
    }
}

// console.log(areaOrPerimeter(4526,4527))