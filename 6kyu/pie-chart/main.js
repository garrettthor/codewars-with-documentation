function pieChart(obj){

    console.log(obj)
    const amounts = Object.values(obj)
    const degrees = []
    const properties = Object.keys(obj)
    const newArray = []
    const totalValue = amounts.reduce((acc, c) => acc + c, 0);

    for(i=0; i<amounts.length; i++){
        let degree = +(((amounts[i]/totalValue)*360).toFixed(2))
        degrees.push(degree)
    }
    

    for(i=0; i<properties.length; i++){
        newArray.push(([properties[i], degrees[i]]))
    }

    console.log(newArray)

    const json = newArray.reduce((acc,curr)=> (acc[curr[0]]=curr[1],acc),{});
    console.log(json)

    return json
}