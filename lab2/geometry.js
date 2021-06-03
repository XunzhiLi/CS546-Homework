function volumeOfRectangularPrism(length, width, height)
{
    if(length == null||width == null||height == null)
    {
        throw'you have not input three arguments'
    }
    else
    {
        if(length <= 0||width <= 0||height <= 0)
        {
            throw 'the argument  should be positive'
        }
        else
        {
            if(length <= width)
            {
                throw 'length should be longer than width'
            }
            else
            {
                if (isNaN(length))
                {
                    throw 'length argument is not a number! '
                }
                if (isNaN(width))
                {
                    throw 'width argument is not a number! '
                }
                if (typeof height != "number")
                {
                    throw 'height argument is not a number! '
                }
                else
                {
                    return length*width*height
                }
            }

        }

    }   
}


// -----------------------------------------------------------------------------------------


function surfaceAreaOfRectangularPrism(length, width, height)
{
    if(length == null||width == null||height == null)
    {
        throw'you have not input three arguments'
    }
    else
    {
        if(length <= 0||width <= 0||height <= 0)
        {
            throw 'the argument  should be positive'
        }
        else
        {
            if(length <= width)
            {
                throw 'length should be longer than width'
            }
            else
            {
                if (isNaN(length))
                {
                    throw 'length argument is not a number! '
                }
                if (isNaN(width))
                {
                    throw 'width argument is not a number! '
                }
                if (typeof height != "number")
                {
                    throw 'height argument is not a number! '
                }
                else
                {
                    return 2*(length*width+length*height+width*height)
                }
            }

        }

    }     
}

// -----------------------------------------------------------------------------------------
function volumeOfSphere(radius)
{
    if (radius == null)
    {
        throw 'you have not input a argument'
    }
    else if (isNaN(radius))
    {
        throw 'your input is not a number! '
    }
    else
    {
        if(radius<=0)
        {
            throw 'the raduis of a sphere should be positive'
        }
        else
        {
            return (4/3)*Math.pow(radius, 3)*Math.PI

        }
    }
    
}

// -----------------------------------------------------------------------------------------

function surfaceAreaOfSphere(radius)
{
    if (radius == null)
    {
        throw 'you have not input a argument'
    }
    else if (isNaN(radius))
    {
        throw 'your input is not a number! '
    }
    else
    {
        if(radius<=0)
        {
            throw 'the raduis of a sphere should be positive'
        }
        else
        {
            return 4*Math.pow(radius,2)*Math.PI

        }
    }
}

module.exports = {
    firstName: "Xunzhi", 
    lastName: "Li", 
    studentId: "10457500",
    volumeOfRectangularPrism,
    surfaceAreaOfRectangularPrism,
    volumeOfSphere,
    surfaceAreaOfSphere
};